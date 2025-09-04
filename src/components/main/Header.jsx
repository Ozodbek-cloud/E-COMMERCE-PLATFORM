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
export default function Header() {
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
                <section className='border h-[800px] flex justify-center mt-13'>
                    <div className='bg-[#000000A6] h-[571px] w-[1900px] flex flex-col items-center gap-8'>
                        <div className='mt-8 text-center flex flex-col gap-4'>
                            <h1 className='text-5xl font-bold text-[#0D263B]'>Recommended</h1>
                            <p className='text-[#696969]'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                        </div>
                        <div className='container  grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='h-[500px]  rounded-[3px] bg-[white] shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)]'>
                                <div className='flex bg-cover h-[250px]' >
                                    <img src={image} alt="" />
                                </div>
                                <div className='flex  p-5 flex-col justify-start items-start'>
                                    <h1 className='font-bold'>New Apartment Nice Wiew</h1>
                                    <p>Quincy St, Brooklyn, NY, USA</p>
                                </div>
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
                            </div>
                            <div className='h-[500px]  rounded-[3px]  bg-[white] shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)]' >
                                <div className='flex bg-cover h-[250px]' >
                                    <img src={images} alt="" />

                                </div>
                            </div>
                            <div className='h-[500px]  rounded-[3px]  bg-[white] shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)]'>
                                <div className='flex bg-cover h-[250px]' >
                                    <img src={imagess} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}
