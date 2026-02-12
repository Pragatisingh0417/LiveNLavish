"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloralDesignPage() {
  const offerings = [
    "Luxury wedding florals",
    "Editorial centerpieces",
    "Ceremony installations",
    "Luxury arches & backdrops",
    "Ceiling treatments & drapery",
    "Custom sweetheart tables",
    "Corporate floral experiences",
    "Full tablescape design",
  ];

  const whyStandOut = [
    "No cookie-cutter designs",
    "Every arrangement is customized",
    "Premium blooms only",
    "Full-service setup + design direction",
    "Aesthetic cohesion from ceremony to reception",
  ];

  return (
    <section className="bg-white">

      {/* ===================================== */}
      {/* HERO SECTION */}
      {/* ===================================== */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">

        <Image
          src="/images/image-4.jpeg"   
          alt="Luxury Floral Design"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
              Luxury Floral Design & Décor
            </h1>

            <p className="text-lg text-white/90 font-light">
              Where artistry meets intentional design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================== */}
      {/* OVERVIEW SECTION */}
      {/* ===================================== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-serif text-[#101011] mb-8">
            Overview
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our floral studio specializes in elevated, romantic, whimsical,
            modern-classic, and editorial arrangements designed to transform
            any space.
          </p>

        </div>
      </section>

      {/* ===================================== */}
      {/* WHAT WE OFFER */}
      {/* ===================================== */}
      <section className="py-24 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center text-[#101011] mb-16">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  border border-[#ad8130]/20
                  text-lg text-black
                  hover:shadow-2xl
                  transition-all duration-500
                "
              >
                ✔ {item}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* WHY OUR FLORAL WORK STANDS OUT */}
      {/* ===================================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#ad8130]/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <h2 className="text-4xl font-serif text-center text-[#ad8130] mb-16">
            Why Our Floral Work Stands Out
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyStandOut.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white/10
                  backdrop-blur-md
                  border border-[#ad8130]/30
                  p-8
                  rounded-3xl
                  text-lg
                  hover:-translate-y-1
                  transition-all duration-500
                "
              >
                {point}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </section>
  );
}
