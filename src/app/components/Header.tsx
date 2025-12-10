"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Split menu into left and right groups
  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Celebrations", href: "/celebrations" },
    { name: "Services", href: "/services" },
  ];

  const rightLinks = [
    { name: "My Brand", href: "/lavishBranding" },
    { name: "Catalogs", href: "/catalogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-5 relative">

        {/* ---------- LEFT DESKTOP MENU ---------- */}
        <div className="hidden lg:flex items-center space-x-6">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm transition ${
                pathname === link.href
                  ? "bg-[#937dcf] text-white font-semibold text-[18px]"
                  : "hover:bg-[#937dcf] text-black font-semibold hover:text-white text-[18px]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ---------- CENTER LOGO (DESKTOP) ---------- */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/live n livsed logo-2.png"
              alt="livenlavishevents"
              width={140}
              height={50}
              className="h-auto w-[100px]"
              priority
            />
          </Link>
        </div>

        {/* ---------- MOBILE LOGO ---------- */}
        <div className="lg:hidden">
          <Link href="/">
            <Image
              src="/images/live n livsed logo-2.png"
              alt="livenlavishevents"
              width={120}
              height={40}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* ---------- RIGHT DESKTOP MENU ---------- */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm transition ${
                pathname === link.href
                  ? "bg-[#937dcf] text-white font-semibold text-[18px]"
                  : "hover:bg-[#937dcf] text-black hover:text-white font-semibold text-[18px]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* BOOK NOW BUTTON */}
          <Link
            href="/contact"
            className="bg-[#937dcf] text-white px-4 py-2 rounded-full font-semibold transition hover:bg-[#9886c8]"
          >
            Book Now
          </Link>
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="lg:hidden text-3xl p-2 bg-black text-white rounded-md ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ---------- MOBILE MENU ---------- */}
      <div
        className={`lg:hidden bg-[#F4EFEA] text-black transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-3">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md transition ${
                pathname === link.href
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE BOOK NOW BUTTON */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white px-4 py-2 rounded-full text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
