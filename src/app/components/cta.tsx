"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-40 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home20-slider_1.jpeg"
        alt=""
        fill
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content LEFT CORNER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        <div className="w-full  text-left">
          <h2 className="text-3xl sm:text-5xl font-light mb-6 leading-snug">
            A Love to Last a Lifetime
            <br className="hidden sm:block" />
            By Contacting Us Directly
          </h2>

          <p className="text-[#dddddd] mb-8 text-sm sm:text-base">
            Schedule a private viewing and experience the grandeur up close.
          </p>

          <Link href="/contact">
            <button className="bg-[#937dcf] text-gray-200 px-8 py-3 rounded-full font-medium hover:bg-[#a08fd0] transition-all duration-300">
              Book An Appoinment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
