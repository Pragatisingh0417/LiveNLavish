"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Catalogs() {
  return (
    <section className="relative 
 py-16 sm:py-20 md:py-10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-full relative group"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src="/images/shop-2.jpeg"
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

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
        >


          <span className="uppercase tracking-[5px] text-[#ad8130] text-xs font-semibold">
            Our Collection
          </span>

          <h2 className="text-4xl lg:text-5xl font-light text-[#ad8130] mb-6">
            LNL Event Catalogs
          </h2>



          <p className="text-white leading-relaxed mb-5 text-[0.95rem] sm:text-[1.05rem]">
            <strong className="text-[#7b7b7b]">Live N Lavish Events, LLC</strong> is a full service Wedding & Event Management company that provides Wedding Planning, Event Planning, Custom Event & Wedding designs, Florals, Pipe & Draping, Decor Rentals, Live Entertainment, Lighting Services and more to Palm Beach County, Dade County, Miami and surrounding areas. Our team prides themselves in putting every client first and providing a stress-free planning experience.
          </p>

          <p className="text-white leading-relaxed mb-8 sm:mb-10 text-[0.95rem] sm:text-[1.05rem]">
            We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.
          </p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/catalogs"
              className="inline-block bg-[#cfb45e] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#ad8130] transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* new */}
      {/* Divider */}
      <div className="max-w-6xl mx-auto my-16 h-px bg-white/20" />

      <div className="max-w-[1300px] mx-auto px-4 py-10 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* left CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
        >
          <span className="uppercase tracking-[5px] text-white text-xs font-semibold">
            LNL Brand Enhancement
          </span>

          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Enhance Your Brand
          </h2>


          <p className="text-white leading-relaxed mb-5 text-[0.95rem] sm:text-[1.05rem]">
            <strong className="text-[#ad8130]"> In Live N Lavish Events, LLC </strong>
            I help wedding planners, event designers and female entrepreneurs generate more quality leads and earn up to 10x their current revenue through my TAQ system and automatic technology!

            I’m a woman who dreams big, takes action and helps others do the same.

            From my experience:           </p>

          <p className="text-white leading-relaxed mb-8 sm:mb-10 text-[0.95rem] sm:text-[1.05rem]">
            We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.
          </p>

          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/lavishBranding"
              className="inline-block bg-[#cfb45e] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#ad8130] transition-all duration-300 text-sm sm:text-base"
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
              src="/images/image-2.jpeg"
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
