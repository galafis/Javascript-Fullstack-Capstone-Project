import React, { useState } from 'react';
import { urlConfig } from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

import './RegisterPage.css';

function RegisterPage() {

    //insert code here to create useState hook variables for firstName, lastName, email, password
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    const { setIsLoggedIn } = useAppContext();

    // insert code here to create handleRegister function and include console.log

    const handleRegister = async (e) => {
        setLoading(true);
        try {
            const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password })
            })

            const json = await response.json();

            if (json.authtoken) {
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', firstName);
                sessionStorage.setItem('email', json.email);
                setIsLoggedIn(true);
                navigate('/app');
            }
            else if (json.error) {
                setShowerr(json.error);
            }


        } catch (e) {
            console.log("Error fetching details: " + e.message);
        }
        finally {
            setLoading(false);
        }
    }



    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>

                        {/* insert code here to create input elements for all the variables - firstName, lastName, email, password */}

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">FirstName</label>
                            <input
                                id="firstName"
                                type="text"
                                className="form-control"
                                placeholder="Enter your firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        {/* last name */}
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">LastName</label>
                            <input
                                id="lastName"
                                type="text"
                                className="form-control"
                                placeholder="Enter your lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        {/* email  */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div className="text-danger">{showerr}</div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>


                        {/* insert code here to create a button that performs the `handleRegister` function on click */}
                        <button disabled={loading} className="btn btn-primary w-100 mb-3" onClick={handleRegister}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Registering your details...
                                </>
                            ) : (
                                'Register'
                            )}

                        </button>
                        <p className="mt-4 text-center">
                            Already a member? <Link className="text-primary" to="/app/login">Login</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )//end of return
}

export default RegisterPage;