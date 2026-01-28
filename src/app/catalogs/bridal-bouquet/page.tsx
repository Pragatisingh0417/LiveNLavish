"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CatalogInquiryForm from "@/app/components/CatalogInquiryForm";

const catalogs = [
    { name: "Bouquet 1", img: "/catalogs/bridal-bouquet-1.jpg" },
    { name: "Bouquet 2", img: "/catalogs/bridal-bouquet-2.jpg" },
    { name: "Bouquet 3", img: "/catalogs/bridal-bouquet-3.jpg" },
    { name: "Bouquet 4", img: "/catalogs/bridal-bouquet-4.jpg" },
    { name: "Bouquet 5", img: "/catalogs/bridal-bouquet-5.jpg" },

    { name: "Bouquet 6", img: "/catalogs/bridal-bouquet-6.jpg" },

    { name: "Bouquet 7", img: "/catalogs/bridal-bouquet-7.jpg" },

    { name: "Bouquet 8", img: "/catalogs/bridal-bouquet-8.jpg" },

    { name: "Bouquet 9", img: "/catalogs/bridal-bouquet-9.jpg" },

    { name: "Bouquet 10", img: "/catalogs/bridal-bouquet-10.jpg" },

    { name: "Bouquet 11", img: "/catalogs/bridal-bouquet-11.jpg" },

    { name: "Bouquet 12", img: "/catalogs/bridal-bouquet-12.jpg" },

    { name: "Bouquet 13", img: "/catalogs/bridal-bouquet-13.jpg" },

    { name: "Bouquet 14", img: "/catalogs/bridal-bouquet-14.jpg" },
    { name: "Bouquet 15", img: "/catalogs/bridal-bouquet-15.jpg" },
    { name: "Bouquet 16", img: "/catalogs/bridal-bouquet-16.jpg" },

    { name: "Bouquet 17", img: "/catalogs/bridal-bouquet-17.jpg" },

    { name: "Bouquet 18", img: "/catalogs/bridal-bouquet-18.jpg" },

    { name: "Bouquet 19", img: "/catalogs/bridal-bouquet-19.jpg" },
        { name: "Bouquet 20", img: "/catalogs/bridal-bouquet-20.jpg" },




];

export default function BridalCatalogs() {
    return (
        <section className="py-10 bg-[#fffdf7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* PAGE TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-serif text-center text-black mb-12 py-10"
                >
                    Bridal Catalogs
                </motion.h1>

                {/* CATALOG GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {catalogs.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                            <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">

                                {/* Image */}
                                <div className="h-56 w-full overflow-hidden">
                                    <Image
                                        src={cat.img}
                                        alt={cat.name}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Title */}
                                <div className="p-5 text-center">
                                    <h2 className="text-base font-semibold text-[#6b4b3a]">
                                        {cat.name}
                                    </h2>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
                <CatalogInquiryForm />
            </div>
        </section>
    );
}
