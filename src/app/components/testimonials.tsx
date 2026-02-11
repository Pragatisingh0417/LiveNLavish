"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedWork() {
  const portfolio = [
    { img: "/images/DancingOnTheClouds1.png" },
    { img: "/images/lavish-6.png" },
    { img: "/images/lavish-7.png" },
    { img: "/images/lavish-11.png" },
    { img: "/images/lavish-9.png" },
    { img: "/images/lavish-5.png" },
    { img: "/images/lavish-8.png" },
    { img: "/images/lavish-10.png" },
    { img: "/images/lavish-12.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black">
            Featured Work
          </h2>

          <p className="mt-4 text-[#ad8130] tracking-[4px] uppercase text-sm">
            Elevated • Intentional • Unforgettable
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={item.img}
                alt="Luxury Event Portfolio"
                width={600}
                height={500}
                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Soft Luxury Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-[#ad8130] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c8953f] transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
