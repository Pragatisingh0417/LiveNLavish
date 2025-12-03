"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const catalogs = [
  {
    name: "Bridal Bouquet",
    img: "/images/Bridal Bouquet.jpg",
  },
  {
    name: "Vases",
    img: "/images/shop-4.jpeg",
  },
  {
    name: "Candelabras",
    img: "/images/shop-3.jpeg",
  },
  
  {
    name: "Table Linens",
    img: "/images/shop-2.jpeg",
  },
  {
    name: "Flower Arrangements",
    img: "/images/shop-1.jpeg",
  },
  {
    name: "Ceiling Drapery",
    img: "/images/shop-7.png",
  },
  {
    name: "Venue Drapery",
    img: "/images/Venue Drapery.png",
  },
  {
    name: "Custom Backdrops",
    img: "/images/shop-5.jpeg",
  },
  {
    name: "Chair Rentals",
    img: "/images/shop-2.jpeg",
  },
];

export default function Catalogs() {
  return (
    <section className="py-20 bg-[#fffdf7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif text-center text-[#b8846b] mb-12 py-10"
        >
          Catalogs
        </motion.h1>

        {/* CATALOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {catalogs.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/catalogs/${cat.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  
                  {/* Image */}
                  <div className="h-56 w-full overflow-hidden">
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-5 text-center">
                    <h2 className="text-xl font-semibold text-[#6b4b3a]">
                      {cat.name}
                    </h2>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
