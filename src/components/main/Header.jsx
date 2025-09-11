import React from 'react'
import logo from "../img/logo.png"
import home from "../img/Vector (1).png"
import idk from "../img/price 1.png"
import search from "../img/001-loupe.png"
import price from "../img/price 1.png"
import Set from "../img/price 1.png"
import unsplash from "../img/unsplash_2gDwlIim3Uw.png"
import vector from "../img/Vector.png"
import rule from "../img/ruler.png"
import car from "../img/car.png"
import bed from "../img/bed.png"
import bath from "../img/bath.png"
import image from "../img/images.png"
import images from "../img/images (1).png"
import imagess from "../img/images (2).png"
import rule2 from "../img/ruler2.png"
import car2 from "../img/car2.png"
import bed2 from "../img/bed2.png"
import bath2 from "../img/bath2.png"
import resize from "../img/expand.png"
import love from "../img/heart.png"
import discord from "../img/discord.png"
import home2 from "../img/Vector (2).png"
import calculator from "../img/calculator.png"
import maps from "../img/maps.png"
import build from "../img/unsplash_5q1KnUjtjaM.png"
import build3 from "../img/unsplash_b_79nOqf95I.png"
import build2 from "../img/unsplash_ZtC4_rPCRXA.png"
import home3 from "../img/home 1.png"
import apartment from "../img/apartment.png"
import home5 from "../img/Vector (3).png"
import office from "../img/business-and-trade.png"
import home_infinite from "../img/photo_2025-09-04_23-02-37.jpg"
import hacker from "../img/Ellipse 11.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from './Footer'
import { TestimonialCarousel } from './Comment'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const apartments = [
        {
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            image: image,
            beds: "4 Beds",
            baths: "5 Bath",
            garage: "1 Garage",
            area: "1200 Sq Ft",
            oldPrice: "$2,800/mo",
            newPrice: "$7,500/mo"
        },
        {
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            image: images,
            beds: "4 Beds",
            baths: "5 Bath",
            garage: "1 Garage",
            area: "1200 Sq Ft",
            oldPrice: "$2,800/mo",
            newPrice: "$7,500/mo"
        },
        {
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            image: imagess,
            beds: "4 Beds",
            baths: "5 Bath",
            garage: "1 Garage",
            area: "1200 Sq Ft",
            oldPrice: "$2,800/mo",
            newPrice: "$7,500/mo"
        },
        {
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            image: images,
            beds: "4 Beds",
            baths: "5 Bath",
            garage: "1 Garage",
            area: "1200 Sq Ft",
            oldPrice: "$2,800/mo",
            newPrice: "$7,500/mo"
        },

        {
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            image: imagess,
            beds: "4 Beds",
            baths: "5 Bath",
            garage: "1 Garage",
            area: "1200 Sq Ft",
            oldPrice: "$2,800/mo",
            newPrice: "$7,500/mo"
        }
    ]
    const category = [
        {
            name: "Home",
            img: home3,
            bg: build
        },
        {
            name: "Apartment",
            img: apartment,
            bg: build2
        },
        {
            name: "Office",
            img: office,
            bg: build3
        },
        {
            name: "Home",
            img: home5,
            bg: build
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "1px",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "15px" } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } }
        ]
    };

    const navigate = useNavigate()
    function submit(e) {
        e.preventDefault()
        let token = localStorage.getItem("token")
        if (!token) {
            navigate('/reg');
            return;
        } else {
            navigate("/main")
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
                                <li className='font-bold text-[#0061DF] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/contact">Contact</Link></li>
                            </ul>

                            <button onClick={submit} className='p-3 border px-10 border-gray-500 font-bold text-gray-500 rounded-[3px] hover:bg-[#0061DF] hover:text-white hover:border-[#0061DF] transition-colors duration-300'>Login</button>
                        </nav>
                    </div>
                </section>
                <section>
                    <div className='container py-3 flex gap-5 flex-wrap md:justify-between'>
                        <div className='flex items-center py-2 gap-4 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] transition-shadow duration-300'>
                            <img src={home} alt="Home" className='ml-3' />
                            <input
                                type="text"
                                placeholder='Enter an address, neighborhood, city, or ZIP code'
                                className='w-[500px] py-2 focus:outline-none focus:border-none'
                            />
                        </div>
                        <div className='flex items-center gap-5'>
                            <button className='p-3 px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'>
                                <img src={idk} alt="Status" />
                                Status
                            </button>
                            <button className='p-3 px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'>
                                <img src={price} alt="Price" />
                                Price
                            </button>
                            <button className='p-3 px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px] hover:shadow-[0px_0px_10px_5px_rgba(0,_97,_223,_0.3)] hover:bg-[#0061DF] hover:text-white transition-all duration-300'>
                                <img src={Set} alt="Advanced" />
                                Advanced
                            </button>
                            <button className='p-3 px-10 flex items-center gap-3 bg-[#0061DF] text-white rounded-[3px] hover:bg-[#004aad] transition-colors duration-300'>
                                <img src={search} alt="Search" />
                                Search
                            </button>
                        </div>
                    </div>
                </section>
                <section
                    className="big-container bg-cover bg-center h-[700px] flex  justify-center"
                    style={{ backgroundImage: `url(${unsplash})` }}
                >
                    <div className='mt-50 text-center flex flex-col gap-5 items-center'>
                        <h1 className="text-5xl text-white">Skyper Pool Partment</h1>
                        <p className='text-[#fff]'>112 Glenwood Ave Hyde Park, Boston, MA</p>

                        <div className='flex items-center gap-10'>
                            <div className='flex flex-col items-center hover:scale-110 transition-transform duration-300'>
                                <img src={bed} alt="" />
                                <p className=' text-[white]'>4 Beds</p>
                            </div>
                            <div className='flex flex-col items-center hover:scale-110 transition-transform duration-300'>
                                <img src={bath} alt="" />
                                <p className=' text-[white]'>5 Bath</p>
                            </div>
                            <div className='flex flex-col items-center hover:scale-110 transition-transform duration-300'>
                                <img src={car} alt="" />
                                <p className=' text-[white]'>1 Garage</p>
                            </div>
                            <div className='flex flex-col items-center hover:scale-110 transition-transform duration-300'>
                                <img src={rule} alt="" />
                                <p className=' text-[white]'>1200 Sq Ft</p>
                            </div>
                        </div>
                        <p className='text-2xl font-bold text-[#fff]'>$5,250/mo</p>
                        <button className='p-3 px-10 flex mt-5 items-center gap-3  rounded-[3px] border border-[#fff] text-[#fff] hover:bg-[#0061DF] hover:border-[#0061DF] hover:text-white transition-colors duration-300'>Learn More</button>
                    </div>
                </section>
                <section className='flex justify-center mt-10 px-2 md:px-6'>
                    <div className='bg-black/65 w-full max-w-[1920px] flex flex-col items-center gap-8 py-10'>
                        <div className='text-center flex flex-col gap-4 px-2 md:px-0'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D263B]'>Recommended</h1>
                            <p className='text-gray-400 text-base sm:text-xl md:text-2xl'>
                                Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                            </p>
                        </div>
                        <div className='w-full container'>
                            <Slider {...settings}>
                                {apartments.map((el, i) => (
                                    <div key={i} className="px-1 sm:px-2 md:px-4">
                                        <div className='bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 relative flex flex-col w-full'>
                                            <div className='h-48 sm:h-56 md:h-60 overflow-hidden rounded-t-lg'>
                                                <img src={el.image} alt="" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
                                            </div>
                                            <div className='absolute top-2 left-2 flex gap-2'>
                                                <span className='text-xs sm:text-sm bg-blue-600 text-white px-2 py-1 rounded font-semibold'>FEATURED</span>
                                                <span className='text-xs sm:text-sm bg-gray-700 text-white px-2 py-1 rounded font-semibold'>FOR SALE</span>
                                            </div>
                                            <div className='absolute top-40 sm:top-44 md:top-48 right-2 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-300'>
                                                <img src={hacker} alt="" className='w-10 sm:w-12' />
                                            </div>
                                            <div className='flex flex-col p-4 gap-1'>
                                                <h2 className='font-bold text-base sm:text-lg md:text-xl hover:text-[#0061DF] cursor-pointer'>{el.title}</h2>
                                                <p className='text-gray-500 text-sm sm:text-base md:text-base hover:text-gray-700 cursor-pointer'>{el.address}</p>
                                            </div>
                                            <div className='flex flex-wrap justify-between px-4 gap-2 sm:gap-4 mt-2'>
                                                {[{ img: bed2, text: el.beds }, { img: bath2, text: el.baths }, { img: car2, text: el.garage }, { img: rule2, text: el.area }].map((f, index) => (
                                                    <div key={index} className='flex items-center gap-1 sm:gap-2 hover:scale-105 transition-transform duration-300'>
                                                        <img src={f.img} alt="" className='w-4 sm:w-5 md:w-6' />
                                                        <span className='text-gray-400 text-xs sm:text-sm md:text-base'>{f.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <hr className='mt-3 border-gray-200' />
                                            <div className='flex flex-wrap justify-between items-center px-4 py-3'>
                                                <div className='flex flex-col'>
                                                    <span className='text-gray-400 text-sm sm:text-base line-through'>{el.oldPrice}</span>
                                                    <span className='font-bold text-base sm:text-lg md:text-xl hover:text-[#0061DF]'>{el.newPrice}</span>
                                                </div>
                                                <div className='flex gap-2 sm:gap-3'>
                                                    <img src={resize} alt="" className='w-5 sm:w-6 md:w-7 hover:scale-125 transition-transform duration-300 cursor-pointer' />
                                                    <img src={love} alt="" className='w-5 sm:w-6 md:w-7 hover:scale-125 transition-transform duration-300 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='big-container bg-[#F5F7FC] mt-5   flex justify-center p-4  text-center'>
                        <div className='conatiner '>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-4xl '>Why Choose Us?</h1>
                                <h2 className='text-2xl text-gray-400'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-[1300px] mt-10 mx-auto'>
                                <div className='h-80 flex flex-col items-center gap-5 hover:bg-white hover:shadow-lg hover:rounded-lg p-5 transition-all duration-300'>
                                    <div className='hover:scale-110 transition-transform duration-300'>
                                        <img src={discord} alt="" />
                                    </div>
                                    <div className='flex  flex-col items-center gap-2'>
                                        <h1 className='font-bold text-[18px]'>Trusted By Thousands</h1>
                                        <p>With over 1 million+ homes</p>
                                        <p>for sale available on the </p>
                                        <p>website, Trulia can match</p>
                                        <p>you with a house you will</p>
                                        <p>to call home.</p>
                                    </div>
                                </div>
                                <div className='h-80 flex flex-col items-center gap-5 hover:bg-white hover:shadow-lg hover:rounded-lg p-5 transition-all duration-300'>
                                    <div className='hover:scale-110 transition-transform duration-300'>
                                        <img src={home2} alt="" />
                                    </div>
                                    <div className='flex  flex-col items-center gap-2'>
                                        <h1 className='font-bold text-[18px]' >Trusted By Thousands</h1>
                                        <p>With over 1 million+ homes</p>
                                        <p>for sale available on the </p>
                                        <p>website, Trulia can match</p>
                                        <p>you with a house you will</p>
                                        <p>to call home.</p>
                                    </div>
                                </div>
                                <div className='h-80 flex flex-col items-center gap-5 hover:bg-white hover:shadow-lg hover:rounded-lg p-5 transition-all duration-300'>
                                    <div className='hover:scale-110 transition-transform duration-300'>
                                        <img src={calculator} alt="" />
                                    </div>
                                    <div className='flex  flex-col items-center gap-2'>
                                        <h1 className='font-bold text-[18px]'>Trusted By Thousands</h1>
                                        <p>With over 1 million+ homes</p>
                                        <p>for sale available on the </p>
                                        <p>website, Trulia can match</p>
                                        <p>you with a house you will</p>
                                        <p>to call home.</p>
                                    </div>
                                </div>
                                <div className='h-80 flex flex-col items-center gap-5 hover:bg-white hover:shadow-lg hover:rounded-lg p-5 transition-all duration-300'>
                                    <div className='hover:scale-110 transition-transform duration-300'>
                                        <img src={maps} alt="" />
                                    </div>
                                    <div className='flex  flex-col items-center gap-2'>
                                        <h1 className='font-bold text-[18px]'>Trusted By Thousands</h1>
                                        <p>With over 1 million+ homes</p>
                                        <p>for sale available on the </p>
                                        <p>website, Trulia can match</p>
                                        <p>you with a house you will</p>
                                        <p>to call home.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className=' container px-2 sm:px-4 md:px-6 mt-20'>
                    <div className='text-center flex flex-col gap-3'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Categories</h1>
                        <p className='text-base sm:text-lg md:text-2xl text-gray-600'>
                            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-8'>
                        {category.map((el, index) => (
                            <div
                                key={index}
                                className='h-60 sm:h-72 md:h-80 flex flex-col items-center justify-center gap-3 bg-cover bg-center rounded-lg overflow-hidden relative group cursor-pointer transition-transform duration-300 hover:scale-105'
                                style={{ backgroundImage: `url(${el.bg})` }}
                            >
                                <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300'></div>
                                <img
                                    src={el.img}
                                    alt={el.name}
                                    className='z-10 w-16 sm:w-20 md:w-24 group-hover:scale-110 transition-transform duration-300'
                                />
                                <h2 className='z-10 text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-[#0061DF] transition-colors duration-300'>
                                    {el.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    className="big-container relative bg-cover bg-center h-[680px] mt-10 flex  justify-center"
                    style={{ backgroundImage: `url(${home_infinite})` }}
                >
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className='mt-50 text-center  flex flex-col z-30 gap-5 items-center'>
                        <h1 className="text-5xl text-white">Vermont Farmhouse With Antique Jail Is<br />the Week's Most Popular Home</h1>
                        <button className='!p-4 !px-8 flex !mt-8 items-center gap-3  rounded-[3px] !bg-blue-500  !text-2xl !text-[#fff] hover:!bg-blue-700 transition-colors duration-300'>Learn More</button>
                    </div>
                </section>

                <section>
                    <div className='mt-10'>
                        <div className='text-center flex flex-col gap-5 py-5'>
                            <h1 className='text-4xl'>Recent Properties for Rent</h1>
                            <p className='text-2xl text-gray'>
                                Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                            </p>
                        </div>

                        <div className='container'>
                            <Slider {...settings}>
                                {apartments.map((el, i) => (
                                    <div key={i} className="px-4">
                                        <div className='h-[500px] rounded-[3px] relative bg-white shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] w-full hover:shadow-[0px_0px_15px_7px_rgba(0,_97,_223,_0.3)] hover:-translate-y-2 transition-all duration-300'>

                                            <div className='h-[250px] overflow-hidden rounded-t-[3px]'>
                                                <img src={el.image} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                            </div>

                                            <div className='absolute top-3 flex gap-50 px-5 ml-2'>
                                                <button className='text-[12px] rounded-[3px] bg-blue-600 text-white font-bold tracking-wide p-2 hover:bg-blue-800 transition-colors duration-300'>FEATURED</button>
                                                <button className='text-[12px] rounded-[3px] bg-gray-700 text-white font-bold tracking-wide p-2 hover:bg-gray-900 transition-colors duration-300'>FOR SALE</button>
                                            </div>

                                            <div className='absolute right-7 top-56 p-1 bg-white rounded-full hover:scale-110 transition-transform duration-300'>
                                                <img src={hacker} alt="" className='w-13' />
                                            </div>

                                            <div className='flex p-5 flex-col justify-start items-start'>
                                                <h1 className='font-bold hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'>{el.title}</h1>
                                                <p className='hover:text-gray-600 transition-colors duration-300 cursor-pointer'>{el.address}</p>
                                            </div>

                                            <div className='flex items-center gap-5 px-5'>
                                                <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                                                    <img src={bed2} alt="" />
                                                    <p className='text-gray-400'>{el.beds}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                                                    <img src={bath2} alt="" />
                                                    <p className='text-gray-400'>{el.baths}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                                                    <img src={car2} alt="" />
                                                    <p className='text-gray-400'>{el.garage}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
                                                    <img src={rule2} alt="" />
                                                    <p className='text-gray-400'>{el.area}</p>
                                                </div>
                                            </div>

                                            <hr className='w-full text-gray-300 mt-5' />

                                            <div className='flex items-center justify-between mt-2 px-5'>
                                                <div className='flex flex-col'>
                                                    <p className='text-gray-500'><del>{el.oldPrice}</del></p>
                                                    <p className='font-bold text-[20px] hover:text-[#0061DF] transition-colors duration-300'>{el.newPrice}</p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <img src={resize} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300 cursor-pointer" />
                                                    <img src={love} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300 cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
                <section>
                    <TestimonialCarousel />
                </section>
            </header>
            <Footer />
        </div>
    )
}