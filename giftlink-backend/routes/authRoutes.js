/*jshint esversion: 8 */
//Step 1 - Task 2: Import necessary packages
const express = require('express');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../models/db');
const router = express.Router();
const dotenv = require('dotenv');
const pino = require('pino');  // Import Pino logger

//Step 1 - Task 3: Create a Pino logger instance
const logger = pino();

dotenv.config();

//Step 1 - Task 4: Create JWT secret
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    try {
        // Task 1: Connect to `giftsdb` in MongoDB through `connectToDatabase` in `db.js`
        const db = await connectToDatabase();

        // Task 2: Access MongoDB collection
        const collection = db.collection("users");

        //Task 3: Check for existing email
        const existingEmail = await collection.findOne({ email: req.body.email });
        if (existingEmail) {
            return res.status(409).json({ error: "User already exists." });
        }

        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);
        const email = req.body.email;

        //Task 4: Save user details in database
        const newUser = await collection.insertOne({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            createdAt: new Date(),
        });

        //Task 5: Create JWT authentication with user._id as payload
        const payload = {
            user: {
                id: newUser.insertedId,
            },
        };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        logger.info('User registered successfully');
        res.status(200).json({ authtoken, email });
    } catch (e) {
        return res.status(500).send('Internal server error');
    }
});

router.post('/login', async (req, res) => {
    try {
        // Task 1: Connect to `giftsdb` in MongoDB through `connectToDatabase` in `db.js`.
        const db = await connectToDatabase();

        // Task 2: Access MongoDB `users` collection
        const collection = db.collection("users");

        // Task 3: Check for user credentials in database
        const theUser = await collection.findOne({ email: req.body.email });

        // Task 4: Task 4: Check if the password matches the encrypyted password and send appropriate message on mismatch
        if (theUser) {
            const result = await bcryptjs.compare(req.body.password, theUser.password)
            if (!result) {
                logger.error('Passwords do not match');
                return res.status(401).json({ "error": "Invalid credentials" });
            }
            const userName = theUser.firstName;
            const userEmail = theUser.email;
            const payload = {
                user: {
                    id: theUser._id.toString(),
                },
            };
            const authtoken = jwt.sign(payload, JWT_SECRET);
            logger.info('User logged in successfully');
            return res.status(200).json({ authtoken, userName, userEmail });
        }
        else {
            logger.error('User not found');
            return res.status(401).json({ "error": "Invalid credentials" });
        }
      
    } catch (e) {
        return res.status(500).send('Internal server error');

    }
});


router.put('/update', async (req, res) => {
    // Task 2: Validate the input using `validationResult` and return approiate message if there is an error.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('Validation errors in update request', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Task 3: Check if `email` is present in the header and throw an appropriate error message if not present.
        const email = req.headers.email;
        if (!email) {
            logger.error('Email not found in the request headers');
            return res.status(400).json({ error: "Email not found in the request headers" });
        }
        // Task 4: Connect to MongoDB
        const db = await connectToDatabase();
        const collection = db.collection("users");
        // Task 5: find user credentials in database

        const existingUser = await collection.findOne({ email });
        if (!existingUser) {
            logger.error('User not found');
            return res.status(404).json({ error: "User not found" });
        }

        existingUser.updatedAt = new Date();

        existingUser.firstName = req.body.name;
        if (req.body.password) {
            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash(req.body.password, salt);
            existingUser.password = hash;
        }


        // Task 6: update user credentials in database
        const updatedUser = await collection.findOneAndUpdate(
            { email },
            { $set: existingUser },
            { returnDocument: 'after' }
        );
        // Task 7: create JWT authentication using secret key from .env file
        const payload = {
            user: {
                id: updatedUser._id.toString(),
            },
        };

        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });

    } catch (e) {
        return res.status(500).send('Internal server error');

    }
});

module.exports = router;