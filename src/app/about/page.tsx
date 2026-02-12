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
                {/* <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide 
                    text-center mb-16 text-black mt-24"
                >
                    About Us
                </motion.h1> */}

                {/* Two Column Layout */}
                {/* ========================================= */}
{/* Meet Lekita Range Section */}
{/* ========================================= */}

<section className="py-10 bg-[#f8f6f2]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif text-[#101011] mb-4">
        Meet Lekita Range
      </h2>
      <p className="uppercase tracking-[3px] text-sm text-[#ad8130] font-medium">
        Founder, CEO & Creative Director
      </p>
    </div>

    {/* Two Column Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="rounded-3xl overflow-hidden shadow-xl border border-white/40">
          <Image
            src="/images/lady-2.jpg"   
            alt="Lekita Range - Founder of Live N Lavish Events"
            width={600}
            height={750}
            quality={90}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute inset-0 rounded-3xl ring-1 ring-[#ad8130]/30 shadow-[0_0_50px_rgba(215,180,127,0.25)] pointer-events-none"></div>
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-[#1a1a19] text-lg leading-relaxed"
      >
        <h3 className="text-2xl font-serif text-[#101011]">
          Founder, CEO & Creative Director of Live N Lavish Events
        </h3>

        <p>
          I’m <span className="font-semibold text-[#ad8130]">Lekita Range</span>, a wife, mother,
           woman of Faith, and the creative heart behind Live N Lavish Events, where luxury celebration meets intentional design.
           
           
            For over 15 years, I’ve had the honor of planning and producing elevated weddings, destination experiences, 
            corporate events, and luxury floral installations throughout South Florida and beyond.
        </p>

        <p className="italic text-[#656168] border-l-4 border-[#ad8130] pl-4">
          I built Live N Lavish Events with one mission:
          to create unforgettable experiences that feel beautifully designed, seamlessly executed, and deeply personal.
        </p>

        <p>
          With an MBA, a Bachelor’s degree in Communications & Hospitality, and global accreditation as a Wedding & Event Designer, I bring a rare combination of creativity, strategy, and operational excellence to every celebration. I’ve produced over 200 events, including high-end weddings, celebrity-inspired experiences, galas, brand activations, and luxury social events all known for their emotional impact and refined elegance.
        </p>

        <p>
          But beyond the accolades, design skills, and awards, what matters most to me is people — your story, your vision, and your peace of mind.
        </p>

        <p>
          I believe luxury is more than beautiful décor — it’s the feeling of being fully supported every step of the way.
        </p>

        <p>
My team and I pride ourselves on creating calm, well-organized, elevated experiences where you never feel overwhelmed or alone in the process. From thoughtful planning and curated design to seamless event-day execution, I ensure that every couple, brand, and family feels seen, heard, and cared for.
        </p>

        <p>
          At Live N Lavish Events, we turn visions into immersive experiences — events that leave lasting memories, stunning photos, and a feeling your guests will talk about long after the celebration ends.
        </p>

        <p className="font-serif text-xl text-[#656168] mt-6">
          — Lekita Range <br />
          Founder, CEO & Creative Director <br />
          Live N Lavish Events
        </p>
      </motion.div>
    </div>
  </div>
</section>

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
                            className="inline-block bg-[#ad8130] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#ad8130] transition-all duration-300 text-sm sm:text-base"
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
