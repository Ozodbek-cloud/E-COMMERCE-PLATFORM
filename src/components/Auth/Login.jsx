import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import '../../../public/style.css';

function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleClose = () => {
        setErrorOpen(false);
        setSuccessOpen(false);
    };

    const submit = async (e) => {
        e.preventDefault()
        try {
            let data = await axios.post('https://e-commerce-backend-p8cw.onrender.com/auth/login', {
                email: email,
                password: pass
            })
            setSuccessOpen(true);
            navigate("/main")
            localStorage.setItem("token", data.data.token.accessToken)
            
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setErrorMessage(error.response?.data?.message || "Something went wrong");
            setErrorOpen(true);
        }
    }

    return (
        <div className="login-container">
            <div className="background-animation">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
            </div>

            <div className="login-form-container">
                <div className="form-header">
                    <h2>Welcome Back</h2>
                    <p>Sign in to your account</p>
                </div>

                <form className="login-form" onSubmit={submit}>
                    <div className="input-group">
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email address"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Sign In
                    </button>

                    <div className="form-footer">
                        <p>Don't have an account? <Link to="/reg">Sign Up</Link></p>
                    </div>
                </form>
            </div>

            <Snackbar
                open={errorOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>

            <Snackbar
                open={successOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Login successful!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Login;