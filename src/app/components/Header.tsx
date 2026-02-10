"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const rightLinks = [
    { name: "Catalogs", href: "/catalogs" },
    { name: "Blogs", href: "/blogs/meet-lekita-logan-range" },

    { name: "Contact Us", href: "/contact" },
  ];
  const enhanceDropdown = [
    { name: "Lavish Branding Workshop", href: "/lavish-branding-workshop" },
    { name: "City Entertainment Guide", href: "/city-entertainment-guide" },
  ];

  const celebrationDropdown = [
    { name: "Corporate Events & Special Events  ", href: "/celebrations" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `relative text-[15px] tracking-wide transition-all duration-200
  ${pathname === href
      ? "text-[#bfa34a]"
      : scrolled
        ? "text-black hover:text-[#bfa34a]"
        : "text-white hover:text-[#bfa34a]"
    }
  after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-[#bfa34a]
  after:w-0 hover:after:w-full after:transition-all after:duration-300`;



  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-[44px] left-0 w-full z-50 backdrop-blur-md transition-all duration-300
    ${scrolled ? "bg-white shadow-sm" : "bg-black"}
  `}
      >
        <nav className="max-w-[1400px] mx-auto px-10 h-[100px] flex items-center">

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center w-full">

            {/* LEFT MENU */}
            {/* LEFT MENU */}
<div className="flex justify-end gap-7 pr-8">

  {/* All links EXCEPT Celebrations */}
  {leftLinks
    .filter((link) => link.name !== "Celebrations")
    .map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={linkClass(link.href)}
      >
        {link.name}
      </Link>
    ))}

  {/* CELEBRATIONS DROPDOWN */}
  <div className="relative group">
    <span className={`${linkClass("/celebrations")} cursor-pointer`}>
      Celebrations
    </span>

    <div
      className="absolute left-0 top-full mt-4 w-64 bg-white shadow-2xl
      opacity-0 invisible translate-y-2
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      transition-all duration-300 ease-out z-50"
    >
      {celebrationDropdown.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-6 py-4 text-[14px] text-black
          hover:bg-[#f6f5f3] hover:text-[#bfa34a] transition"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

</div>


            {/* LOGO — NOW TRULY CENTERED */}
            <div className="flex justify-center">
              <Image
                src={scrolled ? "/main-logo2.png" : "/live n lavish logo white .png"}
                alt="Live N Lavish Events"
                width={155}
                height={100}
                priority
                className="h-[130px] w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* RIGHT MENU + CTA */}
            <div className="flex justify-start items-center gap-7 pl-8 whitespace-nowrap">

              {/* MY BRANDS DROPDOWN */}
              <div className="relative group">
                <span className={`${linkClass("/lavishBranding")} cursor-pointer`}>
                  My Brands
                </span>

                <div
                  className="absolute left-0 top-full mt-4 w-64 bg-white shadow-2xl
                 opacity-0 invisible translate-y-2
                 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                 transition-all duration-300 ease-out z-50"
                >
                  {enhanceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-4 text-[14px] text-black
                     hover:bg-[#f6f5f3] hover:text-[#bfa34a] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* OTHER RIGHT LINKS */}
              {rightLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.name}
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="ml-4 px-7 py-2 text-[14px] tracking-wider
               border border-[#bfa34a] text-[#bfa34a]
               hover:bg-[#bfa34a] hover:text-black
               transition-all duration-300 rounded-full"
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
              className={`text-2xl p-2 rounded-sm transition-colors
    ${scrolled
                  ? "border-black/40 text-black"
                  : "border-white/40 text-white"}
  `}
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


            <div className="flex gap-2">

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-block border border-[#bfa34a] text-[#bfa34a]
                         px-6 py-2 text-center tracking-wider"
              >
                BOOK NOW
              </Link>


              {/* <Link
                href="/partnership"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-block border border-[#bfa34a] text-[#bfa34a]
                         px-6 py-2 text-center tracking-wider"
              >
                Partnership
              </Link> */}


            </div>

          </div>
        </div>
      </header>

      {/* PAGE OFFSET */}
      <div className="h-[72px]" />
    </>
  );
}
