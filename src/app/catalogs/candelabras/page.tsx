"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CatalogInquiryForm from "@/app/components/CatalogInquiryForm";

const catalogs = [
    { name: "Crystal Candle Holder", img: "/catalogs/candelabras-1.jpg" },
    { name: "Crystal Gold Metal Horizontal Candelabar", img: "/catalogs/candelabras-2.jpg" },
    { name: "Gold 5 Arm Candelabra", img: "/catalogs/candelabras-3.jpg" },
    { name: "Gold Crystal Beaded Candelabra", img: "/catalogs/candelabras-4.jpg" },
    { name: "Gold Metal Candelabra", img: "/catalogs/candelabras-5.jpg" },

    { name: "Metal Candelabra", img: "/catalogs/candelabras-6.jpg" },

    { name: "PREMIUM Crystal Glass Candle Holder", img: "/catalogs/candelabras-7.jpg" },

   







];

export default function candelabrasCatalogs() {
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
                    Candelabras Catalogs
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
                                <div className="h-[340px] w-full overflow-hidden">
                                    <Image
                                        src={cat.img}
                                        alt={cat.name}
                                        width={800}
                                        height={600}
                                        className="object-contain w-full h-full"
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
