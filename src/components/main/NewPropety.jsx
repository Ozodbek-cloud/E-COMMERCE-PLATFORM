import { Link } from 'react-router-dom'
import React from 'react'
import logo from "../img/logo.png"
import vector from "../img/Vector.png"
import Footer from './Footer'

export default function NewProperty() {
    return (
        <div>
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-[#0061DF]'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF]'><Link to="/prop">Properties</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF]'>Contacts</li>
                            </ul>
                            <img src={vector} alt="" />
                        </nav>
                    </div>
                </section>

                <section>
                    <div className="p-6 max-w-5xl mx-auto space-y-6">
                        <h1 className="text-2xl font-bold">Add new property</h1>

                        <div className="p-4  rounded-2xl shadow-sm space-y-3">
                            <h2 className="font-semibold">Contact information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Property title*" className="border p-2 rounded" />
                                <input type="text" placeholder="Type" className="border p-2 rounded" />
                            </div>
                            <textarea placeholder="Property Description*" className="border p-2 w-full rounded"></textarea>
                        </div>

                        <div className="p-4  rounded-2xl shadow-sm space-y-3">
                            <h2 className="font-semibold">Additional</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    "Property ID", "Parent property", "Status", "Label", "Material",
                                    "Rooms", "Beds", "Baths", "Garages", "Year build",
                                    "Home area (sqft)", "Lot dimensions", "Lot area (sqft)"
                                ].map((placeholder, i) => (
                                    <input key={i} type="text" placeholder={placeholder} className={`border p-2 rounded ${placeholder === 'Lot area (sqft)' ? 'col-span-3' : ''}`} />
                                ))}
                            </div>
                        </div>

                        <div className="p-4  rounded-2xl shadow-sm space-y-3">
                            <h2 className="font-semibold">Price</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {["Price ($)", "Price Prefix", "Price Suffix", "Price Custom"].map((placeholder, i) => (
                                    <input key={i} type="text" placeholder={placeholder} className="border p-2 rounded" />
                                ))}
                            </div>
                        </div>

                        <div className="p-4  rounded-2xl shadow-sm space-y-3">
                            <h2 className="font-semibold">Location</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Regions" className="border p-2 rounded" />
                                <input type="text" placeholder="Friendly address" className="border p-2 rounded" />
                            </div>
                            <div className=" rounded h-60 flex items-center justify-center text-gray-500">
                                Map location (Google Maps here)
                            </div>
                        </div>

                        <div className="p-4  rounded-2xl shadow-sm space-y-4">
                            <h2 className="font-semibold">Media</h2>
                            <div className="space-y-2">
                                <label>Featured image</label>
                                <div className="flex gap-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-24 h-24 bg-gray-300 rounded" />
                                    ))}
                                </div>
                                <button className="border border-blue-500 px-4 py-1 rounded text-blue-500">Upload</button>
                            </div>

                            <div className="space-y-2">
                                <label>Gallery</label>
                                <button className="border border-blue-500 px-4 py-1 rounded text-blue-500">Upload</button>
                            </div>

                            <div className="space-y-2">
                                <label>Attachment</label>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">📎 test_property.pdf</span>
                                    <button className="border border-blue-500 px-4 py-1 rounded text-blue-500">Upload</button>
                                </div>
                            </div>

                            <input type="text" placeholder="Video link" className="border p-2 rounded w-full" />
                            <input type="text" placeholder="Virtual tour" className="border p-2 rounded w-full" />
                        </div>

                        <div className="p-4  rounded-2xl shadow-sm space-y-3">
                            <h2 className="font-semibold">Amenities</h2>
                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    "Air conditioning", "Barbeque", "Dryer", "Gym",
                                    "Laundry", "Lawn", "Microwave", "Outdoor Shower",
                                    "Refrigerator", "Stunning views", "Dining Room", "Fireplace",
                                    "Pets Allowed", "Unit Washer/Dryer", "Onsite Parking", "Waterfront",
                                    "Parking", "Doorman", "Central Heating", "Cleaning Service"
                                ].map((label, i) => (
                                    <label key={i} className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="p-4  rounded-2xl shadow-sm space-y-3">
                            <h2 className="font-semibold">Select Energy Class</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Energy class" className="border p-2 rounded" />
                                <input type="text" placeholder="Energy Index in kWh/m2a" className="border p-2 rounded" />
                            </div>
                        </div>

                        <div className="text-right">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
                                Submit
                            </button>
                        </div>
                    </div>
                </section>
            </header>

            <Footer />
        </div>
    )
}
