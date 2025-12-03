"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "../components/cta";

export default function AboutPage() {
    return (
        <section className="bg-[#fffaf3]  overflow-hidden relative">

            {/* Soft Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fff4e6] via-transparent to-[#fffaf3] opacity-60" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10">

                {/* Top Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide 
          text-center mb-12 bg-gradient-to-r from-[#d7b47f] via-[#f2d8a7] to-[#d7b47f] text-transparent bg-clip-text mt-40"
                >
                    About Us
                </motion.h1>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-white/50 h-[350px]">
                            <Image
                                src="/images/lady-2.jpg"
                                alt="About Live n Lavish Events"
                                width={600}
                                height={600}
                                quality={50}
                                className="object-cover w-full h-[700px]"
                            />
                        </div>



                        {/* Decorative Glow */}
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/30 shadow-[0_0_60px_rgba(215,180,127,0.3)]"></div>
                    </motion.div>

                    {/* Right Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-serif text-[#b8846b]">
                            Crafting Unforgettable Celebrations
                        </h2>

                        <p className="text-[#6b4b3a] text-lg leading-relaxed">
                            <span className="font-semibold text-[#b8846b]">Live N Lavish Events , LLC —</span>,
                            is a full service Wedding & Event Management company that provides Wedding Planning, Event Planning, Custom Event & Wedding designs, Florals, Pipe & Draping, Decor Rentals, Live Entertainment, Lighting Services and more to Palm Beach County, Florida, Dade County, FL, Miami, Florida and surrounding areas. Our team prides themselves in putting every client first and; providing you with a stress-free planning experience. We produce stunning, all-inclusive weddings & special events that captivates diverse audiences.
                        </p>

                        <p className="text-[#6b4b3a] text-lg leading-relaxed">
                            With years of expertise in designing, planning, and executing luxury weddings and
                            events, we take pride in our attention to detail, personalized approach, and ability
                            to turn even the simplest ideas into breathtaking moments.
                        </p>

                        <p className="text-[#6b4b3a] text-lg leading-relaxed">
                            Whether it’s an intimate gathering or a grand celebration, our team brings creativity,
                            precision, and heart into every event.
                        </p>

                        {/* Signature */}
                        <div className="mt-6">
                            <p className="text-xl font-serif text-[#b8846b]">— Live N Lavish Events Team</p>
                        </div>
                    </motion.div>
                </div>

                {/* Our Mission Section */}
                <div className="mt-20 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Mission Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-serif text-[#b8846b]">Our Mission</h2>

                        <p className="text-[#6b4b3a] text-lg leading-relaxed">
                            Our mission is to design experiences that capture emotions, tell stories, and reflect
                            the unique personality of every client. We strive to deliver excellence through
                            creativity, planning, and heartfelt execution.
                        </p>

                        <p className="text-[#6b4b3a] text-lg leading-relaxed">
                            From concept to completion, we ensure a seamless process, turning your dreams
                            into a reality that feels luxurious, effortless, and unforgettable.
                        </p>
                    </motion.div>

                    {/* Mission Image */}
                    {/* Mission Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {/* Image 1 */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/50">
                            <Image
                                src="/images/image-1.jpeg"
                                alt="Mission 1"
                                width={300}
                                height={300}
                                className="object-cover h-full w-full"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/50">
                            <Image
                                src="/images/image-2.jpeg"
                                alt="Mission 2"
                                width={300}
                                height={300}
                                className="object-cover h-full w-full"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/50">
                            <Image
                                src="/images/image-3.jpeg"
                                alt="Mission 3"
                                width={300}
                                height={300}
                                className="object-cover h-full w-full"
                            />
                        </div>

                        {/* Image 4 */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/50">
                            <Image
                                src="/images/image-4.jpeg"
                                alt="Mission 4"
                                width={300}
                                height={300}
                                className="object-cover h-full w-full"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
            <CTA />
        </section>
    );
}
