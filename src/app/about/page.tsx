"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "../components/cta";
import Link from "next/link";


export default function AboutPage() {
    return (
        <section className="bg-[#fffaf3] overflow-hidden relative">

            {/* Soft Background Overlay */}
            <div className="absolute inset-0 bg-white opacity-60" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20">

                {/* Top Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide 
                    text-center mb-16 text-black mt-24"
                >
                    About Us
                </motion.h1>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-white/40 h-600px]">
                            <Image
                                src="/images/lady-2.jpg"
                                alt="About Live n Lavish Events"
                                width={600}
                                height={600}
                                quality={60}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/30 shadow-[0_0_50px_rgba(215,180,127,0.25)] pointer-events-none"></div>
                    </motion.div>

                    {/* Right Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-serif text-[#101011]">
                            Crafting Unforgettable Celebrations
                        </h2>

                        <p className="text-[#201f1f] text-lg leading-relaxed">
                            <span className="font-semibold text-[#ad8130]">Live N Lavish Events , LLC —</span>,
                            is a full service Wedding & Event Management company that provides Wedding Planning,
                            Event Planning, Custom Event & Wedding designs, Florals, Pipe & Draping, Decor Rentals,
                            Live Entertainment, Lighting Services and more to Palm Beach County, Florida, Dade County,
                            FL, Miami, Florida and surrounding areas. Our team prides themselves in putting every client
                            first and; providing you with a stress-free planning experience. We produce stunning,
                            all-inclusive weddings & special events that captivates diverse audiences.
                        </p>

                        <p className="text-[#1a1a19] text-lg leading-relaxed">
                            With years of expertise in designing, planning, and executing luxury weddings and
                            events, we take pride in our attention to detail, personalized approach, and ability
                            to turn even the simplest ideas into breathtaking moments.
                        </p>

                        <p className="text-[#1b1a1a] text-lg leading-relaxed">
                            Whether it’s an intimate gathering or a grand celebration, our team brings creativity,
                            precision, and heart into every event.
                        </p>

                        <div className="mt-6">
                            <p className="text-xl font-serif text-[#656168]">— Live N Lavish Events Team</p>
                        </div>
                         <Link
              href="/catalogs"
              className="inline-block bg-[#ad8130] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#a494d0] transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
                    </motion.div>
                </div>

                {/* Mission Section */}
                <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Mission Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-serif text-[#0f0e0e]">Our Mission</h2>

                        <p className="text-[#222222] text-lg leading-relaxed">
                            Our mission is to design experiences that capture emotions, tell stories, and reflect
                            the unique personality of every client. We strive to deliver excellence through
                            creativity, planning, and heartfelt execution.
                        </p>

                        <p className="text-[#2e2e2e] text-lg leading-relaxed">
                            From concept to completion, we ensure a seamless process, turning your dreams
                            into a reality that feels luxurious, effortless, and unforgettable.
                        </p>
                        <Link
              href="/contact"
              className="inline-block bg-[#ad8130] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#9e8cd1] transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
                    </motion.div>

                    {/* Mission Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-5"
                    >
                        {["1", "2", "3", "4"].map((num) => (
                            <div
                                key={num}
                                className="rounded-2xl overflow-hidden shadow-lg border border-white/40"
                            >
                                <Image
                                    src={`/images/image-${num}.jpeg`}
                                    alt={`Mission ${num}`}
                                    width={300}
                                    height={300}
                                    className="object-cover h-full w-full"
                                />


                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

            <CTA />
        </section>
    );
}
