"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#bcb4d2] via-[#fffdfb] to-[#a196bf] text-[#0e0e0e] pt-16 pb-6 border-t border-[#e6dccf]">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div className="">
          <Image
            src="/images/live n livsed logo-2.png"
            alt="liveNlavish"
            width={100}
            height={30}
            className="mb-3"
          />
          <p className="text-sm leading-relaxed text-[#0b0b0b] ">
           Live N Lavish Events, LLC is a full service Wedding & Event Management company that provides Wedding Planning, Event Planning, Custom Event & Wedding designs, Florals, Pipe & Draping, Decor Rentals, Live Entertainment, Lighting Services and more to Palm Beach County, Dade County, Miami and surrounding areas. Our team prides themselves in putting every client first and providing a stress-free planning experience.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-[#262528] text-white rounded-full hover:bg-[#5a585b] transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#2a292b]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#2a292b]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#2a292b]">Services</Link></li>
            <li><Link href="/celebrations" className="hover:text-[#2a292b]">Celebrations</Link></li>
            <li><Link href="/lavishBranding" className="hover:text-[#2a292b]">My Brand</Link></li>
                        <li><Link href="/contact" className="hover:text-[#2a292b]">Contact Us</Link></li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Wedding Planning</li>
            <li>Event Management</li>
            <li>Decor & Styling</li>
            <li>Venue Setup</li>
            <li>Entertainment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Phone:</span> 561-574-1246
            </li>
            <li>
              <span className="font-medium">Email:</span> hello@livenlavishevents.com
            </li>
            <li>
              <span className="font-medium">Location:</span> Live N Lavish Events
            </li>
          </ul>

          <div className="flex gap-2 mt-2">  
            <Image
            src="/images/shop-2.jpeg"
            alt="celebration"
            width={600}
            height={800}
            className="w-[100px] h-[100px] object-cover rounded-xl "
          />
            <Image
              src="/images/lavish-6.png"
              alt="celebration"
              width={600}
              height={800}
              className="w-[100px] h-[100px] object-cover rounded-xl "
            /> 
            <Image
              src="/images/lavish-7.png"
              alt="celebration"
              width={600}
              height={800}
              className="w-[100px] h-[100px] object-cover rounded-xl"
            />

            
            
            </div>
 <div className="flex gap-2 mt-2">  <Image
            src="/images/lavish-8.png"
            alt="celebration"
            width={600}
            height={800}
            className="w-[100px] h-[100px] object-cover rounded-xl "
          />
            <Image
              src="/images/shop-1.jpeg"
              alt="celebration"
              width={600}
              height={800}
              className="w-[100px] h-[100px] object-cover rounded-xl "
            /> 
            <Image
              src="/images/shop-4.jpeg"
              alt="celebration"
              width={600}
              height={800}
              className="w-[100px] h-[100px] object-cover rounded-xl"
            />

            
            
            </div>

        </div>

      </div>


      {/* Bottom Section */}
      <div className="text-center text-sm text-[#6d5a45] mt-10 pt-4 border-t border-[#a8a29b]">
        © {new Date().getFullYear()} **livenlavishevents** — All Rights Reserved.
      </div>
    </footer>
  );
}
