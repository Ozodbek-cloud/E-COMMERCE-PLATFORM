import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <div className="bg-[#0D263B]  text-white mt-15">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4">
        <div>
          <h1 className="font-bold mb-4 text-lg">Contact Us</h1>
          <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          <p className="mt-2">123 456 7890</p>
          <p className="mt-2">support@houzing.com</p>

          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="#"><Facebook className="w-5 h-5 hover:text-blue-500 transition" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-sky-400 transition" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-pink-400 transition" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-blue-400 transition" /></a>
          </div>
        </div>

        <div>
          <h1 className="font-bold mb-4 text-lg">Discover</h1>
          <ul className="space-y-2">
            <li>Chicago</li>
            <li>Los Angeles</li>
            <li>Miami</li>
            <li>New York</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-4 text-lg">Lists by Category</h1>
          <ul className="space-y-2">
            <li>Apartments</li>
            <li>Condos</li>
            <li>Houses</li>
            <li>Offices</li>
            <li>Retail</li>
            <li>Villas</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-4 text-lg">Company</h1>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Support Center</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-600 py-4 px-4 flex flex-col md:flex-row items-center justify-between container mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8" />
        </div>
        <p className="text-sm mt-2 md:mt-0 text-center md:text-left">
          Copyright © 2021 CreativeLayers. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
