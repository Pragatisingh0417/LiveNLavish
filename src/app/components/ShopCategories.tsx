"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Table Linens", slug: "catalogs/table-linens", img: "/images/shop-2.jpeg" },
  { name: "Candelabras", slug: "catalogs/candelabras", img: "/images/shop-3.jpeg" },
  { name: "Vases", slug: "catalogs/vases", img: "/images/shop-4.jpeg" },
  { name: "Custom Backdrops", slug: "catalogs/custom-backdrops", img: "/images/shop-5.jpeg" },
  { name: "Venue Drapery", slug: "catalogs/venue-drapery", img: "/images/shop-7.png" },
  { name: "Ceiling Drapery", slug: "catalogs/ceiling-drapery", img: "/images/shop-7.png" },
  { name: "Chair Rentals", slug: "catalogs/chair-rentals", img: "/images/shop-2.jpeg" },
  { name: "Flower Arrangements", slug: "catalogs/flower-arrangements", img: "/images/shop-1.jpeg" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any
 },
  },
};

export default function ShopCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fefaf6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Title */}
       {/* Title */}
<motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-4xl sm:text-5xl font-bold text-[#121212] text-center mb-10"
>
  Shop All Categories

<hr className="w-46 h-1 bg-[#7b7b7b] mx-auto border-0 rounded-full mt-3" />
</motion.h2>


        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {categories.map((cat, i) => (
            <motion.div key={i} variants={cardVariants}>
              <Link href={cat.slug}>
                <div className="group cursor-pointer">

                  {/* Image Card */}
                  <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-lg bg-white 
                    transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03]">
                    
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Gold Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Name */}
                  <h3 className="text-center text-lg font-medium mt-4 
                    group-hover:text-[#7b7b7b] transition-all duration-300 tracking-wide">
                    {cat.name}
                  </h3>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
