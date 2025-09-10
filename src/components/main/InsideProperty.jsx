import React, { useState } from "react";
import Footer from "./Footer";
import logo from "../img/logo.png"
import vector from "../img/Vector.png"
import { Link } from "react-router-dom";

export default function InsidePropertyPage() {
  const [active, setActive] = useState(false)
  function exit() {
    localStorage.removeItem("token")
    navigate("/reg")
  }
  return (
    <div className="font-sans text-gray-800">
      <section className='big-container bg-[#0D263B]'>
        <div className='container'>
          <nav className='flex justify-between items-center py-5'>
            <img src={logo} alt="Logo" />
            <ul className='flex gap-5'>
              <li className='font-bold text-[#0061DF] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
              <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
              <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/contact">Contact</Link></li>
            </ul>
            <div>
              <img onClick={() => setActive(!active)} src={vector} alt="" />
              {active && (
                <div className="absolute mt-3 right-60 w-56 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
                  <ul className="flex flex-col text-gray-700 font-medium">
                    <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                      My Properties
                    </li>
                    <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                      Favourites
                    </li>
                    <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                      My Profile
                    </li>
                    <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                      Add New Properties
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
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          <img src="/main.jpg" alt="" className="col-span-2 w-full h-96 object-cover rounded" />
          <div className="grid grid-cols-2 gap-2">
            <img src="/img1.jpg" alt="" className="w-full h-48 object-cover rounded" />
            <img src="/img2.jpg" alt="" className="w-full h-48 object-cover rounded" />
            <img src="/img3.jpg" alt="" className="w-full h-48 object-cover rounded" />
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded">+15</div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold">Luxury Family Loft by Victoria Park</h1>
            <p className="text-gray-600">Quincy St, Brooklyn, NY, USA</p>
            <div className="flex gap-6 mt-3 text-sm text-gray-700">
              <span>4 Beds</span>
              <span>5 Baths</span>
              <span>1 Garage</span>
              <span>1200 Sq Ft</span>
              <span>Year Built: 1800</span>
            </div>
          </div>
          <div className="text-right">
            <p className="line-through text-gray-400">$8,000/mo</p>
            <p className="text-2xl font-bold text-blue-600">$7,500/mo</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Description</h2>
          <p className="text-sm text-gray-700">
            Occupying over 8,000 square feet, perched over 1,000 feet in the air with panoramic views of New York City. The 32nd Floor has been completely reimagined by one of the most sought-after design houses in London.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Documents</h2>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 underline">test_property.pdf</a>
            <a href="#" className="text-blue-600 underline">test_property.pdf</a>
            <a href="#" className="text-blue-600 underline">test_property.pdf</a>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Location</h2>
          <div className="grid grid-cols-2 text-sm text-gray-700 gap-2">
            <span><b>Address:</b> 329 Queensberry Street</span>
            <span><b>City:</b> Jersey City</span>
            <span><b>Area:</b> Greenville</span>
            <span><b>State/County:</b> Washington</span>
            <span><b>Zip:</b> 365448</span>
            <span><b>Country:</b> United States</span>
          </div>
          <div className="mt-4 w-full h-64 bg-gray-200">Map Here</div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-lg mb-2">Property Details</h2>
            <div className="grid grid-cols-2 text-sm text-gray-700 gap-2">
              <span><b>Property ID:</b> HZ27</span>
              <span><b>Bedrooms:</b> 8</span>
              <span><b>Bathrooms:</b> 6</span>
              <span><b>Garage:</b> 4</span>
              <span><b>Garage size:</b> 200 SqFt</span>
              <span><b>Price:</b> $130,000</span>
              <span><b>Size:</b> 1560 Sq Ft</span>
              <span><b>Year Built:</b> 2021-01-09</span>
              <span><b>Type:</b> Apartment</span>
              <span><b>Status:</b> For Sale</span>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">Features</h2>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <span>Air Conditioning</span>
              <span>Lawn</span>
              <span>Refrigerator</span>
              <span>Washer</span>
              <span>Barbeque</span>
              <span>Laundry</span>
              <span>Sauna</span>
              <span>WiFi</span>
              <span>Dryer</span>
              <span>Microwave</span>
              <span>Swimming Pool</span>
              <span>Window Coverings</span>
              <span>Gym</span>
              <span>Outdoor Shower</span>
              <span>TV Cable</span>
              <span>Dining room</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-2">Schedule A Tour</h2>
          <div className="flex gap-4 mb-4">
            <input type="date" className="border p-2 rounded w-1/2" />
            <input type="time" className="border p-2 rounded w-1/2" defaultValue="10:00" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Name" className="border p-2 rounded" />
            <input type="text" placeholder="Phone" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
          </div>
          <textarea placeholder="Enter Your Message" className="border p-2 rounded w-full mb-4"></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Submit a tour request</button>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-2">4.67 (14 reviews)</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Jane Cooper</p>
              <p className="text-xs text-gray-500">April 6, 2021 at 3:21 AM</p>
              <p className="text-sm mt-2">Every single thing we tried with John was delicious! Found some awesome places...</p>
            </div>
            <div>
              <p className="font-semibold">Jane Cooper</p>
              <p className="text-xs text-gray-500">April 6, 2021 at 3:21 AM</p>
              <p className="text-sm mt-2">Every single thing we tried with John was delicious! Found some awesome places...</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-2">Write a Review</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Name" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
          </div>
          <textarea placeholder="Enter Your Message" className="border p-2 rounded w-full mb-4"></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Send your review</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
