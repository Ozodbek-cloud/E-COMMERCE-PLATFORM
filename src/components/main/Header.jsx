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




    return (
        <div>
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-white'>Home</li>
                                <li className='font-bold text-white'>Properties</li>
                                <li className='font-bold text-white'>Contacts</li>
                            </ul>
                            <img src={vector} alt="" />
                        </nav>
                    </div>
                </section>
                <section>
                    <div className='container py-3 flex justify-between'>
                        <div className='flex items-center py-2 gap-4 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px]'>
                            <img src={home} alt="Home" className='ml-3' />
                            <input
                                type="text"
                                placeholder='Enter an address, neighborhood, city, or ZIP code'
                                className='w-[500px] py-2 focus:outline-none focus:border-none'
                            />
                        </div>
                        <div className='flex items-center gap-5'>
                            <button className='p-3 px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px]'>
                                <img src={idk} alt="Status" />
                                Status
                            </button>
                            <button className='p-3 px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px]'>
                                <img src={price} alt="Price" />
                                Price
                            </button>
                            <button className='p-3 px-10 flex items-center gap-3 shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-[3px]'>
                                <img src={Set} alt="Advanced" />
                                Advanced
                            </button>
                            <button className='p-3 px-10 flex items-center gap-3 bg-[#0061DF] text-white rounded-[3px]'>
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
                            <div className='flex flex-col items-center'>
                                <img src={bed} alt="" />
                                <p className=' text-[white]'>4 Beds</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={bath} alt="" />
                                <p className=' text-[white]'>5 Bath</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={car} alt="" />
                                <p className=' text-[white]'>1 Garage</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={rule} alt="" />
                                <p className=' text-[white]'>1200 Sq Ft</p>
                            </div>
                        </div>
                        <p className='text-2xl font-bold text-[#fff]'>$5,250/mo</p>
                        <button className='p-3 px-10 flex mt-5 items-center gap-3  rounded-[3px] border border-[#fff] text-[#fff]'>Learn More</button>
                    </div>
                </section>
                <section className=' h-[800px] flex justify-center mt-10'>
                    <div className='bg-[#000000A6] h-[650px] w-[1900px] flex flex-col items-center gap-8'>
                        <div className='mt-30 text-center flex flex-col gap-4'>
                            <h1 className='text-5xl font-bold text-[#0D263B]'>Recommended</h1>
                            <p className='text-[#696969] text-2xl'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                        </div>
                        <div className='container'>
                            <Slider {...settings}>
                                {apartments.map((el, i) => (
                                    <div key={i} className="px-4">
                                        <div className='h-[500px] rounded-[3px] relative bg-white shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] w-full'>

                                            <div className='h-[250px] overflow-hidden rounded-t-[3px]'>
                                                <img src={el.image} alt="" className="w-full h-full object-cover" />
                                            </div>

                                            <div className='absolute top-3 flex gap-50 px-5 ml-2'>
                                                <button className='text-[12px] rounded-[3px] bg-blue-600 text-white font-bold tracking-wide p-2'>FEATURED</button>
                                                <button className='text-[12px] rounded-[3px] bg-gray-700 text-white font-bold tracking-wide p-2'>FOR SALE</button>
                                            </div>

                                            <div className='absolute right-7 top-56 p-1 bg-white rounded-full'>
                                                <img src={hacker} alt="" className='w-13' />
                                            </div>

                                            <div className='flex p-5 flex-col justify-start items-start'>
                                                <h1 className='font-bold'>{el.title}</h1>
                                                <p>{el.address}</p>
                                            </div>

                                            <div className='flex items-center gap-5 px-5'>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={bed2} alt="" />
                                                    <p className='text-gray-400'>{el.beds}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={bath2} alt="" />
                                                    <p className='text-gray-400'>{el.baths}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={car2} alt="" />
                                                    <p className='text-gray-400'>{el.garage}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={rule2} alt="" />
                                                    <p className='text-gray-400'>{el.area}</p>
                                                </div>
                                            </div>

                                            <hr className='w-full text-gray-300 mt-5' />

                                            <div className='flex items-center justify-between mt-2 px-5'>
                                                <div className='flex flex-col'>
                                                    <p className='text-gray-500'><del>{el.oldPrice}</del></p>
                                                    <p className='font-bold text-[20px]'>{el.newPrice}</p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <img src={resize} alt="" className="w-7 h-7" />
                                                    <img src={love} alt="" className="w-7 h-7" />
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
                                <div className='h-80 flex flex-col items-center gap-5'>
                                    <div>
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
                                <div className='h-80 flex flex-col items-center gap-5'>
                                    <div>
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
                                <div className='h-80 flex flex-col items-center gap-5'>
                                    <div>
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
                                <div className='h-80 flex flex-col items-center gap-5'>
                                    <div>
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
                <section>
                    <div className='container text-center flex flex-col gap-3 mt-20'>
                        <h1 className='text-4xl'>Categories</h1>
                        <p className='text-2xl'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-[1300px] mt-10 mx-auto'>
                            {
                                category.map(el => (
                                    <div className='h-80 flex flex-col items-center justify-center gap-5 bg-cover bg-center' style={{ backgroundImage: `url(${el.bg})` }}>
                                        <img src={el.img} alt="" />
                                        <h1 className='text-2xl text-[#fff]'>{el.name}</h1>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
                <section
                    className="big-container relative bg-cover bg-center h-[680px] mt-10 flex  justify-center"
                    style={{ backgroundImage: `url(${home_infinite})` }}
                >
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className='mt-50 text-center  flex flex-col z-30 gap-5 items-center'>
                        <h1 className="text-5xl text-white">Vermont Farmhouse With Antique Jail Is<br />the Week's Most Popular Home</h1>
                        <button className='!p-4 !px-8 flex !mt-8 items-center gap-3  rounded-[3px] !bg-blue-500  !text-2xl !text-[#fff]'>Learn More</button>
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
                                        <div className='h-[500px] rounded-[3px] relative bg-white shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] w-full'>

                                            <div className='h-[250px] overflow-hidden rounded-t-[3px]'>
                                                <img src={el.image} alt="" className="w-full h-full object-cover" />
                                            </div>

                                            <div className='absolute top-3 flex gap-50 px-5 ml-2'>
                                                <button className='text-[12px] rounded-[3px] bg-blue-600 text-white font-bold tracking-wide p-2'>FEATURED</button>
                                                <button className='text-[12px] rounded-[3px] bg-gray-700 text-white font-bold tracking-wide p-2'>FOR SALE</button>
                                            </div>

                                            <div className='absolute right-7 top-56 p-1 bg-white rounded-full'>
                                                <img src={hacker} alt="" className='w-13' />
                                            </div>

                                            <div className='flex p-5 flex-col justify-start items-start'>
                                                <h1 className='font-bold'>{el.title}</h1>
                                                <p>{el.address}</p>
                                            </div>

                                            <div className='flex items-center gap-5 px-5'>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={bed2} alt="" />
                                                    <p className='text-gray-400'>{el.beds}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={bath2} alt="" />
                                                    <p className='text-gray-400'>{el.baths}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={car2} alt="" />
                                                    <p className='text-gray-400'>{el.garage}</p>
                                                </div>
                                                <div className='flex flex-col items-center gap-2'>
                                                    <img src={rule2} alt="" />
                                                    <p className='text-gray-400'>{el.area}</p>
                                                </div>
                                            </div>

                                            <hr className='w-full text-gray-300 mt-5' />

                                            <div className='flex items-center justify-between mt-2 px-5'>
                                                <div className='flex flex-col'>
                                                    <p className='text-gray-500'><del>{el.oldPrice}</del></p>
                                                    <p className='font-bold text-[20px]'>{el.newPrice}</p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <img src={resize} alt="" className="w-7 h-7" />
                                                    <img src={love} alt="" className="w-7 h-7" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>


                    </div>
                </section>

            </header>
        </div>
    )
}
