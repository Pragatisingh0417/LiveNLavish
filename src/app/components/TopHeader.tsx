"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="hidden md:block w-full bg-black text-white text-sm">
      <div className="max-w-[1400px] mx-auto px-6 h-[44px] flex items-center justify-between">

        {/* LEFT – EMAIL */}
        <div className="flex items-center gap-2">
          <span className="opacity-80">📧</span>
          <a
            href="mailto:info@livenlavishevents.com"
            className="hover:text-[#bfa34a] transition"
          >
            hello@livenlavishevents.com
          </a>
        </div>

        {/* RIGHT – SOCIALS + CTA */}
        <div className="flex items-center gap-4">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/LavishEventPlanning/"
              target="_blank"
              className="hover:text-[#bfa34a] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/live_n_lavish"
              target="_blank"
              className="hover:text-[#bfa34a] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/livenlavish"
              target="_blank"
              className="hover:text-[#bfa34a] transition"
            >
              <FaTwitter />
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/partnership"
            className="ml-4 px-7 py-2 text-[14px] tracking-wider
               border border-[#bfa34a] text-[#bfa34a]
               hover:bg-[#bfa34a] hover:text-black
               transition-all duration-300 rounded-full"
          >
            PARTNER WITH US
          </Link>
        </div>
      </div>
    </div>
  );
}
