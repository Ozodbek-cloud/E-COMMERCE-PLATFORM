import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import logo from "../img/logo.png";
import vector from "../img/Vector.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

export default function InsidePropertyPage() {
  const { id } = useParams();
  const [houses, setHouses] = useState([])
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:6447/accommodation/get_all")
      .then(res => setHouses(res.data.data))
      .catch(err => console.error(err));
  }, []);
  console.log(houses)
  const house = houses.find(h => String(h.id) === String(id));
  console.log(house)
  if (!house) return <p>Loading property...</p>;

  function exit() {
    localStorage.removeItem("token");
    navigate("/reg");
  }

  return (
    <div className="font-sans text-gray-800">
      <section className="big-container bg-[#0D263B] shadow-md">
        <div className="container">
          <nav className="flex justify-between items-center py-5">
            <img src={logo} alt="Logo" className="w-32" />
            <ul className="flex gap-8">
              <li className="font-bold text-[#0061DF] hover:text-blue-500 transition">
                <Link to="/main">Home</Link>
              </li>
              <li className="font-bold text-white hover:text-blue-400 transition">
                <Link to="/prop">Properties</Link>
              </li>
              <li className="font-bold text-white hover:text-blue-400 transition">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="relative">
              <button
                onClick={() => setActive(!active)}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <img src={vector} alt="" className="w-6 h-6" />
              </button>
              {active && (
                <div className="absolute top-12 right-0 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">
                  <ul className="flex flex-col text-gray-700 font-medium">
                    <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                      <Link to="/my_properties">My Properties</Link>
                    </li>
                    <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                      <Link to="/favourites">Favourites</Link>
                    </li>
                    <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                      My Profile
                    </li>
                    <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                      <Link to="/new_property">Add New Properties</Link>
                    </li>
                    <button
                      onClick={exit}
                      className="px-5 py-3 text-left hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Logout
                    </button>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Images */}
        <div className="grid grid-cols-3 gap-4">
          <img
            src={`http://localhost:6447/uploads/${house.img[0]}`}
            alt=""
            className="col-span-2 w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="grid grid-cols-2 gap-2">
            <img src={`http://localhost:6447/uploads/${house.img[0]}`} alt="" className="w-full h-48 object-cover rounded-lg shadow" />
            <img src={`http://localhost:6447/uploads/${house.img[0]}`} alt="" className="w-full h-48 object-cover rounded-lg shadow" />
            <img src={`http://localhost:6447/uploads/${house.img[0]}`} alt="" className="w-full h-48 object-cover rounded-lg shadow" />
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg shadow font-semibold text-gray-600 text-lg">
              +15
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {house.title ?? "---"}
            </h1>
            <p className="text-gray-500 mt-1">{house.address}</p>
            <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-700">
              <span><b>Bedrooms:</b> {house.features?.beds ? 0 : "-"}</span>
              <span><b>Bathrooms:</b> {house.features?.baths ? 0: "-"}</span>
              <span><b>Garage:</b> {house.features?.parking ? 0: "-"}</span>
              <span><b>Size:</b> {house.features?.size ? 0 :"-"}</span>
              <span>🏗 Year Built: {house.build_year}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="line-through text-gray-400">{house.price}</p>
            <p className="text-3xl font-extrabold text-blue-600">{house.discount}</p>
          </div>
        </div>

        {/* Description */}
        <section className="mt-8">
          <h2 className="font-semibold text-xl mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {house.message}
          </p>
        </section>

        {/* Documents */}
        <section className="mt-8">
          <h2 className="font-semibold text-xl mb-3">Documents</h2>
          <div className="flex flex-wrap gap-4">
            {["test_property.pdf", "contract.pdf", "blueprint.pdf"].map((doc, i) => (
              <a
                key={i}
                href="#"
                className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg shadow hover:bg-blue-100 transition"
              >
                {doc}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold text-xl mb-3">Location</h2>
          <div className="grid grid-cols-2 text-sm text-gray-700 gap-2">
            <span><b>Address:</b> {house.address}</span>
            <span><b>Country:</b> {house.country}</span>
          </div>
          <div className="mt-4 w-full h-64 rounded-xl overflow-hidden shadow-inner">
            <MapContainer center={[house.latitude, house.longitude]} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[house.latitude, house.longitude]}>
                <Popup>📍 Toshkent sh., Chilonzor</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* Property Details & Features */}
        <div className="mt-10 grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-semibold text-xl mb-3">Property Details</h2>
            <div className="grid grid-cols-2 text-sm text-gray-700 gap-3 bg-gray-50 p-4 rounded-xl shadow">
              <span><b>Bedrooms:</b>{house.features.beds ?? "-"}</span>
              <span><b>Bathrooms:</b>{house.features.baths ?? "-"} </span>
              <span><b>Garage:</b> {house.features.parking ?? "-"}</span>
              <span><b>Price:</b> {house.price}</span>
              <span><b>Size:</b> {house.features.size ?? "-"}</span>
              <span><b>Year Built:</b> {house.build_year}</span>
              <span><b>Status:</b> {house.listing_type}</span>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-3">Features</h2>
            <div className="grid grid-cols-3 gap-3 text-sm bg-gray-50 p-4 rounded-xl shadow">
              {[
                "Air Conditioning", "Lawn", "Refrigerator", "Washer",
                "Barbeque", "Laundry", "Sauna", "WiFi",
                "Dryer", "Microwave", "Swimming Pool", "Window Coverings",
                "Gym", "Outdoor Shower", "TV Cable", "Dining room"
              ].map((f, i) => (
                <span key={i} className="bg-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-50 transition">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule a Tour */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold text-xl mb-4">Schedule A Tour</h2>
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
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit a tour request
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h2 className="font-semibold text-xl mb-3">4.67 (14 reviews)</h2>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <p className="font-semibold">Jane Cooper</p>
                <p className="text-xs text-gray-500">April 6, 2021 at 3:21 AM</p>
                <p className="text-sm mt-2">
                  Every single thing we tried with John was delicious! Found some awesome places...
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold text-xl mb-3">Write a Review</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Name" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
          </div>
          <textarea placeholder="Enter Your Message" className="border p-2 rounded w-full mb-4"></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Send your review
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
