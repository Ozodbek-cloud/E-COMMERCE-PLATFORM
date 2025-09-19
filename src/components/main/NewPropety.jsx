import { Link, useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import logo from "../img/logo.png"
import vector from "../img/Vector.png"
import Footer from './Footer'
import axios from 'axios'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

function LocationPicker({ setLatitude, setLongitude }) {
  useMapEvents({
    click(e) {
      setLatitude(e.latlng.lat.toFixed(6))
      setLongitude(e.latlng.lng.toFixed(6))
    }
  })
  return null
}

export default function NewProperty() {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  let userData = JSON.parse(localStorage.getItem("user"));
  let { id } = userData
  function exit() {
    localStorage.removeItem("token")
    navigate("/reg")
  }

  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [listingType, setListingType] = useState("RENT")
  const [address, setAddress] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState("")
  const [buildYear, setBuildYear] = useState("")
  const [description, setDescription] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [beds, setBeds] = useState("")
  const [baths, setBaths] = useState("")
  const [parking, setParking] = useState("")
  const [rooms, setRooms] = useState("")
  const [featuredImages, setFeaturedImages] = useState([])
  const [galleryImages, setGalleryImages] = useState([])
  const [documents, setDocuments] = useState([])
  const featuredInputRef = useRef(null)
  const galleryInputRef = useRef(null)
  const docInputRef = useRef(null)

  const handleFeaturedUpload = (e) => {
    const files = Array.from(e.target.files)
    setFeaturedImages((prev) => [...prev, ...files])
  }
  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files)
    setGalleryImages((prev) => [...prev, ...files])
  }
  const handleDocsUpload = (e) => {
    const files = Array.from(e.target.files)
    setDocuments((prev) => [...prev, ...files])
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("title", title)
    formData.append("message", message)
    formData.append("listing_type", listingType)
    formData.append("address", address)
    formData.append("price", price)
    formData.append("discount", discount)
    formData.append("build_year", buildYear)
    formData.append("description", description)
    formData.append("latitude", latitude)
    formData.append("longitude", longitude)
    formData.append("user_id", id)
    formData.append("category_id", categoryId)
    formData.append("country", "Uzbekistan")
    formData.append("isActive", true)
    const features = { beds, baths, parking, rooms }
    formData.append("features", JSON.stringify(features))
    if (featuredImages.length > 0) {
      formData.append("house_img", featuredImages[0])
    }
    galleryImages.forEach((file) => {
      formData.append("img", file)
    })
    documents.forEach((file) => {
      formData.append("documents", file)
    })
    try {
      const res = await axios.post("https://e-commerce-backend-p8cw.onrender.com/accommodation/create", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      console.log("✅ Success:", res.data)
      alert("Property created successfully!")
      navigate("/my_properties")
    } catch (err) {
      console.error("❌ Error:", err)
      alert("Error creating property")
    }
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
                      <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer"><Link to="/my_properties">My Properties</Link></li>
                      <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer"><Link to="/favourites">Favourites</Link></li>
                      <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer"><Link to="/my_profile">My Profile</Link></li>
                      <li className="px-5 py-3 hover:bg-gradient-to-r from-blue-50 to-blue-100 hover:text-blue-600 transition-colors cursor-pointer"><Link to="/new_property">Add New Properties</Link></li>
                      <button onClick={exit} className="px-5 py-3 text-left hover:bg-gradient-to-r from-red-50 to-red-100 hover:text-red-600 transition-colors cursor-pointer">Chiqish</button>
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
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Property Title" className="w-full border p-3 rounded" />
                <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" className="w-full border p-3 rounded" />
                <select value={listingType} onChange={e => setListingType(e.target.value)} className="w-full border p-3 rounded">
                  <option value="RENT">RENT</option>
                  <option value="SALE">SALE</option>
                  <option value="EXCHANGE">EXCHANGE</option>
                </select>
                <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" className="w-full border p-3 rounded" />
                <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="w-full border p-3 rounded" />
                <input value={discount} onChange={e => setDiscount(e.target.value)} placeholder="Discount" className="w-full border p-3 rounded" />
                <input value={buildYear} onChange={e => setBuildYear(e.target.value)} placeholder="Build Year" className="w-full border p-3 rounded" />
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full border p-3 rounded" />
                <input value={beds} onChange={e => setBeds(e.target.value)} placeholder="Beds" className="w-full border p-3 rounded" />
                <input value={baths} onChange={e => setBaths(e.target.value)} placeholder="Baths" className="w-full border p-3 rounded" />
                <input value={parking} onChange={e => setParking(e.target.value)} placeholder="Parking" className="w-full border p-3 rounded" />
                <input value={rooms} onChange={e => setRooms(e.target.value)} placeholder="Rooms" className="w-full border p-3 rounded" />
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Select Location on Map</h2>
                  <MapContainer center={[41.2995, 69.2401]} zoom={12} style={{ height: "400px", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {latitude && longitude && <Marker position={[latitude, longitude]} />}
                    <LocationPicker setLatitude={setLatitude} setLongitude={setLongitude} />
                  </MapContainer>
                  <div className="grid grid-cols-2 gap-4">
                    <input value={latitude} readOnly placeholder="Latitude" className="w-full border p-3 rounded" />
                    <input value={longitude} readOnly placeholder="Longitude" className="w-full border p-3 rounded" />
                  </div>
                </div>
                <input value={categoryId} onChange={e => setCategoryId(e.target.value)} placeholder="Category ID" className="w-full border p-3 rounded" />
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Media & Attachments</h2>
              <div className="space-y-6">
                <div>
                  <label className="font-semibold">Featured Images</label>
                  <div className="flex gap-4 flex-wrap">
                    {featuredImages.map((file, i) => (
                      <img key={i} src={URL.createObjectURL(file)} alt="preview" className="w-32 h-32 object-cover rounded" />
                    ))}
                  </div>
                  <input type="file" multiple accept="image/*" ref={featuredInputRef} className="hidden" onChange={handleFeaturedUpload} />
                  <button onClick={() => featuredInputRef.current.click()} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
                </div>
                <div>
                  <label className="font-semibold">Gallery</label>
                  <div className="flex gap-4 flex-wrap">
                    {galleryImages.map((file, i) => (
                      <img key={i} src={URL.createObjectURL(file)} alt="gallery" className="w-24 h-24 object-cover rounded" />
                    ))}
                  </div>
                  <input type="file" multiple accept="image/*" ref={galleryInputRef} className="hidden" onChange={handleGalleryUpload} />
                  <button onClick={() => galleryInputRef.current.click()} className="mt-2 px-4 py-2 bg-green-600 text-white rounded">Upload</button>
                </div>
                <div>
                  <label className="font-semibold">Documents</label>
                  <div>
                    {documents.map((file, i) => (
                      <p key={i} className="text-gray-600">{file.name}</p>
                    ))}
                  </div>
                  <input type="file" multiple ref={docInputRef} className="hidden" onChange={handleDocsUpload} />
                  <button onClick={() => docInputRef.current.click()} className="mt-2 px-4 py-2 bg-orange-600 text-white rounded">Upload</button>
                </div>
              </div>
              <div className="text-center mt-8">
                <button onClick={handleSubmit} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800">Submit Property Listing</button>
              </div>
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </div>
  )
}
