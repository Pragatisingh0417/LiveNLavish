"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutBlock() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lavish-5.png"
              alt="About Live N Lavish Events"
              width={600}
              height={800}
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <span className="uppercase tracking-[5px] text-[#ad8130] text-xs font-semibold">
            Welcome to Live N Lavish Events, LLC

          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mt-4 mb-6">
            About LNL Events
          </h2>

          <p className="text-gray-800 leading-relaxed mb-5">
            <strong className="text-[#ad8130]">Live N Lavish Events, LLC</strong> is a full service Wedding & Event Management company that provides Wedding Planning, Event Planning, Custom Event & Wedding designs, Florals, Pipe & Draping, Decor Rentals, Live Entertainment, Lighting Services and more to Palm Beach County, Dade County, Miami and surrounding areas. Our team prides themselves in putting every client first and providing a stress-free planning experience.
          </p>

          <p className="text-gray-800 leading-relaxed mb-8">
          We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.


          </p>

          <Link
            href="/about"
            className="inline-block bg-[#ad8130] text-black px-8 py-3 rounded-full font-medium hover:bg-[#c8953f] transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
