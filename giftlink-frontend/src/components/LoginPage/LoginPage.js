import React, { useState, useEffect } from 'react';
import { urlConfig } from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

import './LoginPage.css';

function LoginPage() {

    //insert code here to create useState hook variables for email, password

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setIsLoggedIn } = useAppContext();

    useEffect(() => {
        if (sessionStorage.getItem('auth-token')) {
            navigate('/app')
        }
    }, [navigate])


    // insert code here to create handleLogin function and include console.log
    const handleLogin = async (e) => {
        setLoading(true);
        try {
            const response = await fetch(`${urlConfig.backendUrl}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // Nota: O header 'Authorization' (ex: Bearer token) não é enviado durante o login inicial.
                    // Ele é obtido *após* um login bem-sucedido e usado em requisições subsequentes para acessar rotas protegidas.
                },
                body: JSON.stringify({ email, password })
            })

            const json = await response.json();

            if (json.authtoken) {
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', json.userName);
                sessionStorage.setItem('email', json.userEmail);
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
                    <div className="login-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Login</h2>

                        {/* insert code here to create input elements for the variables email and  password */}
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
                            <div className="text-danger">{showerr}</div>
                        </div>

                        {/* insert code here to create a button that performs the `handleLogin` function on click */}
                        <button disabled={loading} className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Logging In...
                                </>
                            ) : (
                                'Login'
                            )}

                        </button>
                        <p className="mt-4 text-center">
                            New here?  <Link className="text-primary" to="/app/register">Register Here</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;