import { Edit2, Trash2 } from "lucide-react";
import Footer from "./Footer";
import logo from "../img/logo.png"
import vector from "../img/Vector.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MyProperties() {
    const [active, setActive] = useState(false)
    const [properties, setPro] = useState([])
    useEffect(() => {
        axios.get('http://localhost:6447/accommodation/get_all').then(data => setPro(data.data.data))
    })
    function exit() {
        localStorage.removeItem("token")
        navigate("/reg")
    }
    return (
        <div className="">
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-[white] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/contact">Contact</Link></li>
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
            <section className="container mt-10">
                <h2 className="text-2xl font-semibold mb-6">My properties</h2>

                <div className="bg-white rounded-xl shadow p-4">
                    <div className="grid grid-cols-12 font-semibold text-gray-700 border-b pb-3 mb-4">
                        <div className="col-span-5">Listing Title</div>
                        <div className="col-span-2">Date Published</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-1">View</div>
                        <div className="col-span-2">Action</div>
                    </div>

                    {properties.map((p) => (
                        <div
                            key={p.id}
                            className="grid grid-cols-12 items-center border-b py-4  last:border-none"
                        >
                            <div className="col-span-5 flex gap-3">
                                <div className="relative w-20 h-20  rounded-md flex items-center justify-center text-xs text-white" style={{ backgroundImage: `url(http://localhost:6447/uploads/house_images/${p.house_img})` }}>
                                    <span className="absolute top-1 left-1 bg-blue-600 text-white text-[10px] px-1 rounded">
                                        FEATURED
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-semibold">{p.title}</h3>
                                    <p className="text-gray-500 text-sm">{p.address}</p>
                                    <p className="text-gray-400 text-sm line-through">{p.price}</p>
                                    <p className="text-lg font-bold">{p.discount}</p>
                                </div>
                                <span className="self-start ml-auto text-xs bg-gray-800 text-white px-2 py-1 rounded mt-9 mr-10">
                                    FOR SALE
                                </span>
                            </div>

                            <div className="col-span-2 text-gray-600">{p.build_year}</div>
                            <div className="col-span-2 text-gray-600">{p.status}</div>
                            <div className="col-span-1 text-gray-600">{p.views}</div>

                            <div className="col-span-2 flex gap-3">
                                <button className="p-2 rounded-full hover:bg-gray-100">
                                    <Edit2 size={16} />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 text-red-500">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
