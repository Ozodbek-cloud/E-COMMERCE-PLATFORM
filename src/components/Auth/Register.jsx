import React, { useState } from 'react'
import vector from "../img/Vector.png"
import logo from "../img/logo.png"
import Footer from '../main/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [formData, setFormData] = useState({
        login: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('https://e-commerce-backend-eb94.onrender.com/auth/register', {
            data: formData
        })
    };

    return (
        <div>
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-white'>Home</li>
                                <li className='font-bold text-white'>Properties</li>
                                <li className='font-bold text-white'>Contacts</li>
                            </ul>
                            <img src={vector} alt="" />
                        </nav>
                    </div>
                </section>
                <section className="flex justify-center items-center mt-10">
                    <div className="bg-white shadow-lg rounded-lg p-10 px-15 max-w-[500px] w-full ">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Registration</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">User role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                           
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Register
                            </button>
                        </form>
                        <div className="text-center mt-4">
                            <Link to="/log" className="text-blue-600 hover:underline">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>
                </section>
            </header>
            <Footer />
        </div>
    )
}

export default Register
