"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Celebrations", href: "/celebrations" },
    { name: "Services", href: "/services" },
  ];

  const rightLinks = [
    { name: " Enhance My Brands", href: "/lavishBranding" },
    { name: "Catalogs", href: "/catalogs" },
    { name: "Blogs", href: "/blogs/meet-lekita-logan-range" },

    { name: "Contact Us", href: "/contact" },
  ];
  const enhanceDropdown = [
    { name: "Lavish Branding Workshop", href: "/lavish-branding-workshop" },
    { name: "City Entertainment Guide", href: "/city-entertainment-guide" },
  ];

  const linkClass = (href: string) =>
    `relative text-[15px] tracking-wide transition ${pathname === href
      ? "text-[#bfa34a] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-full after:bg-[#bfa34a]"
      : "text-black hover:text-[#bfa34a]"
    }`;

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f3f2f0]/95 backdrop-blur-md border-b border-black/10">
        <nav className="max-w-[1400px] mx-auto px-10 h-[72px] flex items-center">

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto] items-center w-full">

            {/* LEFT MENU */}
            <div className="flex justify-end gap-7 pr-8">
              {leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* LOGO */}
            <div className="flex justify-center">
              <Link href="/">
                <Image
                  src="/main-logo2.png"
                  alt="Live N Lavish Events"
                  width={155}
                  height={42}
                  priority
                />
              </Link>
            </div>

            {/* RIGHT MENU */}
            <div className="flex justify-start gap-7 pl-8 whitespace-nowrap items-center">

              {/* Enhance My Brands Dropdown */}
              <div className="relative group">
                <span className={`${linkClass("/lavishBranding")} cursor-pointer`}>
                  Enhance My Brands
                </span>

                <div className="absolute left-0 top-full mt-3 w-56 bg-white border border-black/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {enhanceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-[14px] text-black hover:bg-[#f3f2f0] hover:text-[#bfa34a]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Rest Right Links */}
              {rightLinks
                .filter((l) => l.name !== " Enhance My Brands")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={linkClass(link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
            </div>


            {/* CTA */}
            <div className="pl-6">
              <Link
                href="/contact"
                className="px-7 py-2 text-[14px] tracking-wider border border-[#bfa34a] text-[#bfa34a]
                           hover:bg-[#bfa34a] hover:text-white transition whitespace-nowrap"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <Link href="/">
              <Image
                src="/main-logo2.png"
                alt="Live N Lavish Events"
                width={130}
                height={36}
                priority
              />
            </Link>

            <button
              className="text-2xl p-2 border border-black/30 rounded-sm"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden bg-[#f3f2f0] border-t border-black/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col px-8 py-6 space-y-5">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[15px] tracking-wide ${pathname === link.href
                    ? "text-[#bfa34a]"
                    : "text-black hover:text-[#bfa34a]"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-block border border-[#bfa34a] text-[#bfa34a]
                         px-6 py-2 text-center tracking-wider"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE OFFSET */}
      <div className="h-[72px]" />
    </>
  );
}
