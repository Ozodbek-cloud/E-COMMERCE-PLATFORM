import React, { useEffect, useState } from 'react'
import logo from "../img/logo.png"
import home from "../img/Vector (1).png"
import idk from "../img/price 1.png"
import search from "../img/001-loupe.png"
import price from "../img/price 1.png"
import Set from "../img/price 1.png"
import vector from "../img/Vector.png"
import love_active from "../img/love.png"
import rule2 from "../img/ruler2.png"
import car2 from "../img/car2.png"
import bed2 from "../img/bed2.png"
import bath2 from "../img/bath2.png"
import resize from "../img/expand.png"
import lovess from "../img/heart.png"
import hacker from "../img/Ellipse 11.png"
import { useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
export default function Proporties() {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const [forLike, setforLike] = useState("")
    const [houses, setHouses] = useState([])
    const [likesId, setLikeId] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('token');
        try {
            if (!token) {
                navigate('/reg');
                return;
            }

        } catch (error) {
            localStorage.removeItem('token');
            navigate('/reg');
        }
    }, [navigate]);
    function exit() {
        localStorage.removeItem("token")
        navigate("/reg")
    }
    useEffect(() => {
        axios.get('http://localhost:6447/accommodation/get_all').then(data => setHouses(data.data.data))
    })

    const [loves, setLoves] = useState(Array(houses.length).fill(true))
    let id = localStorage.getItem("id")
    const handleLoveClick = async (i, houseId) => {
        const newLoves = [...loves];
        newLoves[i] = !newLoves[i];
        setLoves(newLoves);
        setforLike(houseId);

        try {
            if (newLoves[i]) {
                let res = await axios.post("http://localhost:6447/likes/create", {
                    like: true,
                    userId: id,
                    accommodationId: houseId,
                });
                setIsFavourite(res.data.data.like)
                setLikeId(res.data.data.id);
            } else {
                await axios.delete(`http://localhost:6447/likes/${likesId}/delete`);
            }
        } catch (err) {
            console.error("Like error:", err.response?.data || err.message);
        }

    };


    return (
        <div>
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-[#0061DF] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
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
                <section>
                    <div className='container py-3 flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:justify-between'>
                        <div className='flex w-full md:w-auto items-center py-2 gap-4 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] transition-shadow duration-300'>
                            <img src={home} alt="Home" className='ml-3' />
                            <input
                                type="text"
                                placeholder='Enter an address, neighborhood, city, or ZIP code'
                                className='w-full md:w-[500px] py-2 focus:outline-none focus:border-none'
                            />
                        </div>

                        <div className='flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-5 w-full md:w-auto'>
                            <button className='p-3 px-5 md:px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'>
                                <img src={idk} alt="Status" />
                                Status
                            </button>
                            <button className='p-3 px-5 md:px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'>
                                <img src={price} alt="Price" />
                                Price
                            </button>
                            <button className='p-3 px-5 md:px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'>
                                <img src={Set} alt="Advanced" />
                                Advanced
                            </button>
                            <button className='p-3 px-5 md:px-10 flex items-center gap-3 bg-[#0061DF] text-white rounded-[3px] hover:bg-[#004aad] transition-colors duration-300'>
                                <img src={search} alt="Search" />
                                Search
                            </button>
                        </div>
                    </div>
                </section>
                <section className='mt-15'>
                    <div className='text-center flex flex-col gap-5'>
                        <h1 className='font-bold text-5xl'>Properties</h1>
                        <h3 className='text-2xl text-gray-600'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.    </h3>
                    </div>

                    <div className="container mx-auto px-4 py-10">
                        <div>
                            <p className='mb-5 ml-5 text-gray-500 font-bold font-serif text-2xl'>{houses.length}  results</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {houses.map((el, i) => (
                                <div key={i} className="px-2 sm:px-2 md:px-4">
                                    <div className='bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 relative flex flex-col w-full'>
                                        <div className='h-48 sm:h-56 md:h-60 overflow-hidden rounded-t-lg'>
                                            <img src={`http://localhost:6447/uploads/house_images/${el.house_img}`} alt="" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
                                        </div>
                                        <div className='absolute top-2 left-2 flex gap-2'>
                                            <span className='text-xs sm:text-sm bg-blue-600 text-white px-2 py-1 rounded font-semibold'>FEATURED</span>
                                            <span className='text-xs sm:text-sm bg-gray-700 text-white px-2 py-1 rounded font-semibold'>{el.listing_type}</span>
                                        </div>
                                        <div className='absolute top-35 sm:top-44 md:top-53 right-2 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-300'>
                                            <img src={hacker} alt="" className='w-10 sm:w-12' />
                                        </div>
                                        <div className='flex flex-col p-4 py-8 gap-1'>
                                            <h2 className='font-bold text-base sm:text-lg md:text-xl hover:text-[#0061DF] cursor-pointer'>{el.title}</h2>
                                            <p className='text-gray-500 text-sm sm:text-base md:text-base hover:text-gray-700 cursor-pointer'>{el.address}</p>
                                        </div>
                                        <div className='flex flex-wrap justify-between px-4 gap-2 sm:gap-4 mt-2'>
                                            {[{ img: bed2, text: el.features?.beds ?? "-", label: "Beds" }, { img: bath2, text: el.features?.baths ?? "-", label: "Baths" }, { img: car2, text: el.features?.parking ?? "-", label: "Parking" }, { img: rule2, text: el.features?.size ?? "-", label: "size" }].map((f, index) => (
                                                <div key={index} className='flex items-center flex-col gap-1 sm:gap-2 hover:scale-105 transition-transform duration-300'>
                                                    <img src={f.img} alt="" className='w-4 sm:w-5 md:w-6' />
                                                    <span className='text-gray-400 text-xs sm:text-sm md:text-base'>
                                                        {f.label}: {f.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <hr className='mt-3 border-gray-200' />
                                        <div className='flex flex-wrap justify-between items-center px-4 py-3'>
                                            <div className='flex flex-col'>
                                                <span className='text-gray-400 text-sm sm:text-base line-through'>{el.price}</span>
                                                <span className='font-bold text-base sm:text-lg md:text-xl hover:text-[#0061DF]'>{el.discount}</span>
                                            </div>
                                            <div className='flex gap-2 sm:gap-3'>
                                                <img src={resize} alt="" className='w-5 sm:w-6 md:w-7 hover:scale-125 transition-transform duration-300 cursor-pointer' onClick={() => navigate(`/property/${el.id}`)} />
                                                <img onClick={() => handleLoveClick(i, el.id)} src={loves[i] ? love_active : lovess} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </header>
            <Footer />
        </div>
    )
}
