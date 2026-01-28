"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#efeeef] via-[#fffdfb] to-[#9691a6] py-16 sm:py-20 md:py-10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-full relative group "
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src="/images/lavish-5.png"
              alt="Elegant wedding couple"
              width={600}
              height={800}
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#B98B4E]/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
        >
          <span className="uppercase tracking-[4px] sm:tracking-[6px] text-[#ad8130] text-xs sm:text-sm font-semibold mb-3 inline-block">
            Welcome to Live N Lavish Events, LLC
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#191919] mb-6 leading-tight">
            About LNL EVENTS
          </h2>

          <p className="text-[#5c5c5c] leading-relaxed mb-5 text-[0.95rem] sm:text-[1.05rem]">
            <strong className="text-[#777578]">Live N Lavish Events, LLC</strong> is a full service Wedding & Event Management company that provides Wedding Planning, Event Planning, Custom Event & Wedding designs, Florals, Pipe & Draping, Decor Rentals, Live Entertainment, Lighting Services and more to Palm Beach County, Dade County, Miami and surrounding areas. Our team prides themselves in putting every client first and providing a stress-free planning experience.
          </p>

          <p className="text-[#5c5c5c] leading-relaxed mb-8 sm:mb-10 text-[0.95rem] sm:text-[1.05rem]">
            We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.
          </p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/about"
              className="inline-block bg-[#ad8130] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#a191cd] transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

{/* new */}

<div className="max-w-[1300px] mx-auto px-4 py-10 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

  {/* left CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
        >
          <span className="uppercase tracking-[4px] sm:tracking-[6px] text-[#ad8130] text-xs sm:text-sm font-semibold mb-3 inline-block">
OUR SERVICES          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#191919] mb-6 leading-tight">
             LNL SERVICES
          </h2>

          <p className="text-[#5c5c5c] leading-relaxed mb-5 text-[0.95rem] sm:text-[1.05rem]">
            <strong className="text-[#7b7b7b]"> In Live N Lavish Events, LLC </strong>
 We offer full-service wedding planning & in-house decor solutions. Our team creates unforgettable experiences — from intimate 2-guest ceremonies to luxury 500+ guest celebrations.          </p>

          <p className="text-[#5c5c5c] leading-relaxed mb-8 sm:mb-10 text-[0.95rem] sm:text-[1.05rem]">
            We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.
          </p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/services"
              className="inline-block bg-[#ad8130] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#a191cd] transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* right IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-full relative group"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src="/images/service-6.jpeg"
              alt="Elegant wedding couple"
              width={600}
              height={800}
              className="w-full h-[500px] object-cover "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#B98B4E]/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
        </motion.div>

        
      </div>

    </section>
  );
}
