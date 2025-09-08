import React from 'react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import logo from "../img/logo.png"

import vector from "../img/Vector.png"

import Footer from './Footer'
export default function NewPropety() {
    return (
        <div>
            <header>
                <section className='big-container bg-[#0D263B]'>
                    <div className='container'>
                        <nav className='flex justify-between items-center py-5'>
                            <img src={logo} alt="Logo" />
                            <ul className='flex gap-5'>
                                <li className='font-bold text-[#0061DF] hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/main">Home</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'><Link to="/prop">Proporties</Link></li>
                                <li className='font-bold text-white hover:text-[#0061DF] transition-colors duration-300 cursor-pointer'>Contacts</li>
                            </ul>
                            <img src={vector} alt="" />
                        </nav>
                    </div>
                </section>
            </header>
            <Footer/>
        </div>
    )
}
