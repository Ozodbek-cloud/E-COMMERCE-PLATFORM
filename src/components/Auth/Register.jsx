import React from 'react'
import vector from "../img/Vector.png"
import logo from "../img/logo.png"
import Footer from '../main/Footer'
import { Link } from 'react-router-dom'

function Register() {
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
                <section className="flex justify-center items-center mt-10  ">
                    <div className="bg-white shadow-lg rounded-lg p-10 px-15 max-w-[500px] w-full ">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Registration</h2>
                        <form className="space-y-4 ">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Login"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <select
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
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                           
                            <Link to="/log">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Register
                            </button>
                            </Link>
                        </form>
                    </div>
                </section>
            </header>
            <Footer />
        </div>
    )
}

export default Register