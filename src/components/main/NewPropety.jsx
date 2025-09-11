import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Upload, MapPin, Camera, Paperclip, Video, Eye } from 'lucide-react'
import logo from "../img/logo.png"
import vector from "../img/Vector.png"
import Footer from './Footer'

export default function NewProperty() {
    const [active, setActive] = useState(false)
    function exit() {
        localStorage.removeItem("token")
        navigate("/reg")
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-8'>
                                <li className='font-bold text-[#0061DF] transition-colors duration-200'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-200'><Link to="/prop">Properties</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-200 cursor-pointer'><Link to="/contact">Contact</Link></li>
                            </ul>
                            <div>
                                <button onClick={() => setActive(!active)}><img src={vector} alt="" /></button>
                                {active && (
                                    <div className="absolute mt-3 right-60 w-56 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
                                        <ul className="flex flex-col text-gray-700 font-medium">
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                               <Link to="/my_properties">My Properties</Link>
                                            </li>
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                                <Link to="/favourites">Favourites</Link>

                                            </li>
                                            <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                                My Profile
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

                <section className="py-12">
                    <div className="max-w-6xl mx-auto px-6 space-y-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Add New Property</h1>
                            <p className="text-gray-600 text-lg">Fill out the details below to list your property</p>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                            </div>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Property Title*</label>
                                        <input type="text" placeholder="Enter property title" className="w-full border-2 border-gray-200 focus:border-blue-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Property Type</label>
                                        <input type="text" placeholder="e.g., Apartment, House, Villa" className="w-full border-2 border-gray-200 focus:border-blue-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Property Description*</label>
                                    <textarea placeholder="Describe your property in detail..." rows={4} className="w-full border-2 border-gray-200 focus:border-blue-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Additional Details</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    "Property ID", "Parent property", "Status", "Label", "Material",
                                    "Rooms", "Beds", "Baths", "Garages", "Year built",
                                    "Home area (sqft)", "Lot dimensions"
                                ].map((placeholder, i) => (
                                    <div key={i} className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">{placeholder}</label>
                                        <input type="text" placeholder={`Enter ${placeholder.toLowerCase()}`} className="w-full border-2 border-gray-200 focus:border-green-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-100" />
                                    </div>
                                ))}
                                <div className="space-y-2 md:col-span-2 lg:col-span-3">
                                    <label className="text-sm font-semibold text-gray-700">Lot area (sqft)</label>
                                    <input type="text" placeholder="Enter lot area in square feet" className="w-full border-2 border-gray-200 focus:border-green-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-100" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Pricing Information</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {["Price ($)", "Price Prefix", "Price Suffix", "Price Custom"].map((placeholder, i) => (
                                    <div key={i} className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">{placeholder}</label>
                                        <input type="text" placeholder={`Enter ${placeholder.toLowerCase()}`} className="w-full border-2 border-gray-200 focus:border-purple-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-100" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Location Details</h2>
                            </div>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Regions</label>
                                        <input type="text" placeholder="Select region" className="w-full border-2 border-gray-200 focus:border-red-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-100" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Friendly Address</label>
                                        <input type="text" placeholder="Enter complete address" className="w-full border-2 border-gray-200 focus:border-red-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-100" />
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
                                    <div className="text-center">
                                        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <p className="text-gray-500 text-lg">Map location will be displayed here</p>
                                        <p className="text-gray-400 text-sm">Google Maps integration</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                                    <Camera className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Media & Attachments</h2>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-lg font-semibold text-gray-700">Featured Images</label>
                                    <div className="flex gap-4 flex-wrap">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors duration-200">
                                                <Camera className="w-8 h-8 text-gray-400" />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                                        <Upload className="w-5 h-5" />
                                        Upload Images
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-lg font-semibold text-gray-700">Gallery</label>
                                    <button className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-50 transition-all duration-200">
                                        <Upload className="w-5 h-5" />
                                        Upload Gallery
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-lg font-semibold text-gray-700">Attachments</label>
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                        <Paperclip className="w-5 h-5 text-gray-500" />
                                        <span className="text-gray-600 flex-1">test_property.pdf</span>
                                        <button className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-all duration-200">
                                            <Upload className="w-4 h-4" />
                                            Replace
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <Video className="w-4 h-4" />
                                            Video Link
                                        </label>
                                        <input type="text" placeholder="YouTube, Vimeo or direct video URL" className="w-full border-2 border-gray-200 focus:border-orange-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-100" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <Eye className="w-4 h-4" />
                                            Virtual Tour
                                        </label>
                                        <input type="text" placeholder="360° tour or virtual walkthrough URL" className="w-full border-2 border-gray-200 focus:border-orange-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">★</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Amenities & Features</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {[
                                    "Air conditioning", "Barbeque", "Dryer", "Gym",
                                    "Laundry", "Lawn", "Microwave", "Outdoor Shower",
                                    "Refrigerator", "Stunning views", "Dining Room", "Fireplace",
                                    "Pets Allowed", "Unit Washer/Dryer", "Onsite Parking", "Waterfront",
                                    "Parking", "Doorman", "Central Heating", "Cleaning Service"
                                ].map((label, i) => (
                                    <label key={i} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-teal-50 transition-all duration-200 cursor-pointer group">
                                        <input type="checkbox" className="w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2" />
                                        <span className="text-gray-700 group-hover:text-teal-700 transition-colors duration-200">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">⚡</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Energy Efficiency</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Energy Class</label>
                                    <input type="text" placeholder="A+, A, B, C, etc." className="w-full border-2 border-gray-200 focus:border-yellow-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Energy Index (kWh/m²a)</label>
                                    <input type="text" placeholder="Enter energy consumption index" className="w-full border-2 border-gray-200 focus:border-yellow-500 p-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold">
                                Submit Property Listing
                            </button>
                        </div>
                    </div>
                </section>
            </header>
            <Footer />
        </div>
    )
}
