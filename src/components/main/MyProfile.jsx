import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from "../img/logo.png";
import vector from "../img/Vector.png";

export default function MyProfile() {
    const [active, setActive] = useState(false);
    const [tab, setTab] = useState('info');
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', role: '', avatar: '' });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setFormData({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                role: userData.role || '',
                avatar: userData.avatar || ''
            });
        }
    }, []);

    const handleExit = () => {
        console.log('Chiqish bosildi');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, avatar: URL.createObjectURL(e.target.files[0]) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { ...user, ...formData };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert('Profile updated successfully!');
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <p className="text-lg mb-4">Please login to view your profile</p>
                    <Link to="/log" className="bg-[#0061DF] text-white px-6 py-2 rounded-full font-semibold">Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
            <header className="sticky top-0 z-50 shadow-md">
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <Link to="/main">
                                <img src={logo} alt="Logo" className="h-8" />
                            </Link>
                            <ul className='hidden md:flex gap-8'>
                                <li><Link to="/main" className='font-semibold text-white hover:text-[#0061DF] transition-colors duration-300'>Home</Link></li>
                                <li><Link to="/prop" className='font-semibold text-white hover:text-[#0061DF] transition-colors duration-300'>Properties</Link></li>
                                <li><Link to="/contact" className='font-semibold text-white hover:text-[#0061DF] transition-colors duration-300'>Contact</Link></li>
                            </ul>
                            <div className='relative'>
                                <button onClick={() => setActive(!active)} className="p-2 rounded-full hover:bg-[#1e3856] transition-colors">
                                    <img src={vector} alt="Menu" className="h-6 w-6" />
                                </button>
                                {active && (
                                    <div className="absolute mt-3 right-0 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 z-50">
                                        <ul className="flex flex-col text-gray-700 font-medium">
                                            <li><Link to="/my_properties" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setActive(false)}>My Properties</Link></li>
                                            <li><Link to="/favourites" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setActive(false)}>Favourites</Link></li>
                                            <li><Link to="/my_profile" className="block px-5 py-3 bg-blue-50 text-blue-600" onClick={() => setActive(false)}>My Profile</Link></li>
                                            <li><Link to="/new_property" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setActive(false)}>Add New Properties</Link></li>
                                            <li><button onClick={handleExit} className="w-full text-left px-5 py-3 hover:bg-red-50 hover:text-red-600 transition-colors">Logout</button></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                </section>
            </header>

            <main className="flex-1 container mx-auto py-8 px-4">
                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#0D263B]">My Profile</h2>
                    <div className="flex justify-center gap-4 mb-8">
                        <button className={`px-6 py-2 rounded-full font-semibold transition-colors ${tab === 'info' ? 'bg-[#0061DF] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setTab('info')}>My Info</button>
                        <button className={`px-6 py-2 rounded-full font-semibold transition-colors ${tab === 'update' ? 'bg-[#0061DF] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setTab('update')}>Update Profile</button>
                    </div>

                    <div className="pt-4">
                        {tab === 'info' && (
                            <div className="flex flex-col items-center space-y-5 text-gray-700">
                                <img src={`http://localhost:6447/uploads/avatar/${user.avatar}` || "default-avatar.png"} alt="Avatar" className="w-32 h-32 rounded-full object-cover border-4 border-[#0061DF] shadow-md" />
                                <div className="w-full max-w-md space-y-4 bg-gray-50 p-6 rounded-2xl">
                                    <div className="flex justify-between items-center border-b pb-2"><span className="font-semibold text-gray-600">First Name:</span><span className="text-gray-800">{user.firstName}</span></div>
                                    <div className="flex justify-between items-center border-b pb-2"><span className="font-semibold text-gray-600">Last Name:</span><span className="text-gray-800">{user.lastName}</span></div>
                                    <div className="flex justify-between items-center border-b pb-2"><span className="font-semibold text-gray-600">Email:</span><span className="text-gray-800">{user.email}</span></div>
                                    <div className="flex justify-between items-center border-b pb-2"><span className="font-semibold text-gray-600">Role:</span><span className="text-gray-800 capitalize">{user.role}</span></div>
                                </div>
                            </div>
                        )}
                        {tab === 'update' && (
                            <form className="space-y-5 max-w-md mx-auto" onSubmit={handleSubmit}>
                                <div className="flex justify-center">
                                    <img src={`http://localhost:6447/uploads/avatar/${user.avatar}` || "default-avatar.png"} alt="Avatar" className="w-32 h-32 rounded-full object-cover border-4 border-[#0061DF] shadow-md mb-4" />
                                </div>
                                <div><label className="block text-gray-700 font-medium mb-2">First Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0061DF] focus:border-transparent transition-all" /></div>
                                <div><label className="block text-gray-700 font-medium mb-2">Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0061DF] focus:border-transparent transition-all" /></div>
                                <div><label className="block text-gray-700 font-medium mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0061DF] focus:border-transparent transition-all" /></div>
                                <div><label className="block text-gray-700 font-medium mb-2">Role</label><input type="text" name="role" value={formData.role} onChange={handleInputChange} className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0061DF] focus:border-transparent transition-all" /></div>
                                <div><label className="block text-gray-700 font-medium mb-2">Avatar</label><input type="file" onChange={handleFileChange} /></div>
                                <button type="submit" className="w-full bg-[#0061DF] text-white px-6 py-3 rounded-xl font-semibold mt-4 hover:bg-blue-700 transition-colors shadow-md">Update Profile</button>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
