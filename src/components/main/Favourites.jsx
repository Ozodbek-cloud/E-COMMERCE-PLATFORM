import React, { useEffect, useState } from 'react'
import logo from "../img/logo.png"
import home from "../img/Vector (1).png"
import idk from "../img/price 1.png"
import search from "../img/001-loupe.png"
import price from "../img/price 1.png"
import Set from "../img/price 1.png"
import vector from "../img/Vector.png"
import rule2 from "../img/ruler2.png"
import car2 from "../img/car2.png"
import bed2 from "../img/bed2.png"
import bath2 from "../img/bath2.png"
import resize from "../img/expand.png"
import love from "../img/heart.png"
import love_active from "../img/love.png"
import hacker from "../img/Ellipse 11.png"
import { useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'

export default function Favourites() {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const [favourites, setFavourites] = useState([])
  const [loves, setLoves] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/reg');
      return;
    }
  }, [navigate]);

  function exit() {
    localStorage.removeItem("token")
    navigate("/reg")
  }

  useEffect(() => {
    axios.get('https://e-commerce-backend-p8cw.onrender.com/likes/getAll')
      .then(res => {
        setFavourites(res.data.data)
        setLoves(res.data.data.map(() => true))
      })
      .catch(err => console.error(err))
  }, [])

  async function toggleLove(index, fav) {
    const newLoves = [...loves]
    newLoves[index] = !newLoves[index]
    setLoves(newLoves)

    try {
      if (!newLoves[index]) {
        await axios.delete(`https://e-commerce-backend-p8cw.onrender.com/likes/${fav.id}/delete`)
        setFavourites(prev => prev.filter(f => f.id !== fav.id))
      }
    } catch (err) {
      console.error("Like error:", err.response?.data || err.message)
    }
  }

  return (
    <div>
      <header>
        <section className='big-container bg-[#0D263B]'>
          <div className='container'>
            <nav className='flex justify-between items-center py-5'>
              <img src={logo} alt="Logo" />
              <ul className='flex gap-5'>
                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
                <li className='font-bold text-[white] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/contact">Contact</Link></li>
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
        <section>
          <div className='container py-3 flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:justify-between'>
            <div className='flex w-full md:w-auto items-center py-2 gap-4 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] transition-shadow duration-300'>
              <img src={home} alt="Home" className='ml-3' />
              <input type="text" placeholder='Enter an address, neighborhood, city, or ZIP code' className='w-full md:w-[500px] py-2 focus:outline-none focus:border-none' />
            </div>
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-5 w-full md:w-auto'>
              <button className='p-3 px-5 md:px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'><img src={idk} alt="Status" /> Status </button>
              <button className='p-3 px-5 md:px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'><img src={price} alt="Price" /> Price </button>
              <button className='p-3 px-5 md:px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'><img src={Set} alt="Advanced" /> Advanced </button>
              <button className='p-3 px-5 md:px-10 flex items-center gap-3 bg-[#0061DF] text-white rounded-[3px] hover:bg-[#004aad] transition-colors duration-300'><img src={search} alt="Search" /> Search </button>
            </div>
          </div>
        </section>
        <section className='mt-15'>
          <div className='text-center flex flex-col gap-5'>
            <h1 className='font-bold text-5xl'>Favourites</h1>
            <h3 className='text-2xl text-gray-600'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit. </h3>
          </div>
          <div className="container mx-auto px-4 py-10">
            <div>
              <p className='mb-5 ml-5 text-gray-500 font-bold font-serif text-2xl'>{favourites.length} results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favourites.map((el, i) => (
                <div key={i} className="px-4">
                  <div className='h-[500px] rounded-[3px] relative bg-white shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] w-full hover:shadow-[0px_0px_15px_7px_rgba(0,_97,_223,_0.3)] hover:-translate-y-2 transition-all duration-300'>
                    <div className='h-[250px] overflow-hidden rounded-t-[3px]'>
                      <img src={`https://e-commerce-backend-p8cw.onrender.com/uploads/house_images/${el.accommodation.house_img}`} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className='absolute top-3 flex gap-5 ml-2'>
                      <button className='text-[12px] rounded-[3px] bg-blue-600 text-white font-bold tracking-wide p-2 hover:bg-blue-800 transition-colors duration-300'>FEATURED</button>
                      <button className='text-[12px] rounded-[3px] bg-gray-700 text-white font-bold tracking-wide p-2 hover:bg-gray-900 transition-colors duration-300'>{el.accommodation.listing_type}</button>
                    </div>
                    <div className='absolute right-7 top-56 p-1 bg-white rounded-full hover:scale-110 transition-transform duration-300'>
                      <img src={hacker} alt="" className='w-13' />
                    </div>
                    <div className='flex p-5 py-10 flex-col justify-start items-start'>
                      <h1 className='font-bold hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'>{el.accommodation.title}</h1>
                      <p className='hover:text-gray-600 transition-colors duration-300 cursor-pointer'>{el.accommodation.address}</p>
                    </div>
                    <div className='flex items-center gap-5 px-5'>
                      <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                        <img src={bed2} alt="" />
                        <p className='text-gray-400'>{el.accommodation.beds}</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                        <img src={bath2} alt="" />
                        <p className='text-gray-400'>{el.accommodation.baths}</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                        <img src={car2} alt="" />
                        <p className='text-gray-400'>{el.accommodation.garage}</p>
                      </div>
                      <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                        <img src={rule2} alt="" />
                        <p className='text-gray-400'>{el.accommodation.area}</p>
                      </div>
                    </div>
                    <hr className='w-full text-gray-300 mt-5' />
                    <div className='flex items-center justify-between mt-2 px-5'>
                      <div className='flex flex-col'>
                        <p className='text-gray-500'><del>{el.accommodation.price}</del></p>
                        <p className='font-bold text-[20px] hover:text-[#0061DF] transition-colors duration-300'>{el.accommodation.discount}</p>
                      </div>
                      <div className="flex gap-5">
                        <img src={resize} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300 cursor-pointer" />
                        <img onClick={() => toggleLove(i, el)} src={loves[i] ? love_active : love} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300 cursor-pointer" />
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
