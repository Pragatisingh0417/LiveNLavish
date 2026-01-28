"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesBlock() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-12">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <span className="uppercase tracking-[5px] text-[#ad8130] text-xs font-semibold">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mt-4 mb-6">
            LNL Services
          </h2>

          <p className="text-gray-300 leading-relaxed mb-5">
            <strong className="text-[#ad8130]">Live N Lavish Events</strong>  offer full-service wedding planning & in-house decor solutions. Our team creates unforgettable experiences — from intimate 2-guest ceremonies to luxury 500+ guest celebrations.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.

          </p>

          <Link
            href="/services"
            className="inline-block bg-[#ad8130] text-black px-8 py-3 rounded-full font-medium hover:bg-[#c8953f] transition"
          >
            View Services
          </Link>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/service-6.jpeg"
              alt="LNL Services"
              width={600}
              height={800}
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
