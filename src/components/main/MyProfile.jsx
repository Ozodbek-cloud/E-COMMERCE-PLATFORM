import React, { useState } from 'react'
import logo from "../img/logo.png"
import vector from "../img/Vector.png"
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useUserStore } from '../Store/UserStore'

export default function MyProfile() {
    const [active, setActive] = useState(false)
    const [tab, setTab] = useState('info')
    const user = useUserStore((state) => state.user);

    const exit = () => {
        console.log('Chiqish bosildi')
    }

    return (
        <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='hidden md:flex gap-5'>
                                <li className='font-bold text-[#0061DF] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Properties</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/contact">Contact</Link></li>
                            </ul>
                            <div className='relative'>
                                <button onClick={() => setActive(!active)}><img src={vector} alt="" /></button>
                                {active && (
                                    <div className="absolute mt-3 right-0 w-56 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 z-50">
                                        <ul className="flex flex-col text-gray-700 font-medium">
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                                <Link to="/my_properties">My Properties</Link>
                                            </li>
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                                <Link to="/favourites">Favourites</Link>
                                            </li>
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                                <Link to="/my_profile">My Profile</Link>
                                            </li>
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                                <Link to="/new_property">Add New Properties</Link>
                                            </li>
                                            <button
                                                onClick={exit}
                                                className="px-5 py-3 text-left hover:bg-gradient-to-r from-red-50 to-red-100 hover:text-red-600 transition-colors cursor-pointer"
                                            >
                                                Chiqish
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                </section>
            </header>

            <main className="flex-1 container mx-auto py-12">
                <div className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center text-[#0D263B]">My Profile</h2>

                    <div className="flex justify-center gap-4 mb-6">
                        <button
                            className={`px-6 py-2 rounded-full font-semibold ${tab === 'info' ? 'bg-[#0061DF] text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setTab('info')}
                        >
                            My Info
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full font-semibold ${tab === 'update' ? 'bg-[#0061DF] text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setTab('update')}
                        >
                            Update Profile
                        </button>
                    </div>

                    <div>
                        {tab === 'info' && (
                            <div className="flex flex-col items-center space-y-4 text-gray-700">
                                <img src={user.avatar || "https://i.pravatar.cc/150?img=1"} alt="Avatar" className="w-28 h-28 rounded-full object-cover mb-4" />
                                <p><span className="font-semibold">First Name:</span> {user.firstName}</p>
                                <p><span className="font-semibold">Last Name:</span> {user.lastName}</p>
                                <p><span className="font-semibold">Email:</span> {user.email}</p>
                                <p><span className="font-semibold">Role:</span> {user.role}</p>
                            </div>
                        )}

                        {tab === 'update' && (
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">First Name</label>
                                    <input type="text" placeholder="First Name" defaultValue={user.firstName} className="w-full border border-gray-300 rounded-lg p-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                                    <input type="text" placeholder="Last Name" defaultValue={user.lastName} className="w-full border border-gray-300 rounded-lg p-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                                    <input type="email" placeholder="Email" defaultValue={user.email} className="w-full border border-gray-300 rounded-lg p-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Role</label>
                                    <input type="text" placeholder="Role" defaultValue={user.role} className="w-full border border-gray-300 rounded-lg p-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Avatar URL</label>
                                    <input type="text" placeholder="Avatar URL" defaultValue={user.avatar} className="w-full border border-gray-300 rounded-lg p-2" />
                                </div>
                                <button type="submit" className="bg-[#0061DF] text-white px-6 py-2 rounded-full font-semibold mt-2">Update</button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
