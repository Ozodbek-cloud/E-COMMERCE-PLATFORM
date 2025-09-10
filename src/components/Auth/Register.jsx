import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../public/style.css';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: ''
    });

    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Registration data:", formData);

            await axios.post('https://e-commerce-backend-p8cw.onrender.com/auth/register', formData);

            setSuccessOpen(true);
            setTimeout(() => {
                setSuccessOpen(false);
                navigate("/log");
            }, 2000);

        } catch (err) {
            console.error("Error:", err);
            setErrorMessage(err.response?.data?.message || "Something went wrong");
            setErrorOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSuccessOpen(false);
        setErrorOpen(false);
    };

    return (
        <div className="register-container">
            <div className="background-animation">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
            </div>

            <div className="register-form-container">
                <div className="form-header">
                    <h2>Create Account</h2>
                    <p>Join our community today</p>
                </div>

                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select role</option>
                            <option value="Customer">Customer</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="register-btn">
                        Create Account
                    </button>
                </form>

                <div className="form-footer">
                    <p>Already have an account? <Link to="/log">Sign In</Link></p>
                </div>
            </div>

            {successOpen && (
                <div className="snackbar success">
                    <span>Successfully registered! Redirecting...</span>
                </div>
            )}

            {errorOpen && (
                <div className="snackbar error">
                    <span>{errorMessage}</span>
                    <button onClick={handleClose}>×</button>
                </div>
            )}
        </div>
    );
};

export default Register;
