"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F4EFEA] text-[#3A1E01] pt-16 pb-6 border-t border-[#e6dccf]">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <Image
            src="/images/golden diamond 2tr.png"
            alt="Zinnia Gardens"
            width={150}
            height={80}
            className="mb-3"
          />
          <p className="text-sm leading-relaxed text-[#5a4732]">
            Crafting unforgettable weddings and events with elegance,
            creativity, and a touch of magic.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-[#B98B4E] text-white rounded-full hover:bg-[#8A632D] transition"
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
            <li><Link href="/" className="hover:text-[#B98B4E]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#B98B4E]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#B98B4E]">Services</Link></li>
            <li><Link href="/celebrations" className="hover:text-[#B98B4E]">Celebrations</Link></li>
            <li><Link href="/gallery" className="hover:text-[#B98B4E]">Gallery</Link></li>
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
              <span className="font-medium">Email:</span> Hello@livenlavishevents.com
            </li>
            <li>
              <span className="font-medium">Location:</span> Live N Lavish Events
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-[#6d5a45] mt-10 pt-4 border-t border-[#e6dccf]">
        © {new Date().getFullYear()} **livenlavishevents** — All Rights Reserved.
      </div>
    </footer>
  );
}
