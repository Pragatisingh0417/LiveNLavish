"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/DancingOnTheClouds1.png"
        alt="Luxury Event Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[800px] px-6 text-white"
      >
        <span className="uppercase tracking-[5px] text-[#e7c27a] text-xs font-semibold">
          Ready to Begin?
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-light leading-snug">
          Let’s create your Lavish Experience.
        </h2>

        <Link
          href="/contact"
          className="inline-block mt-10 bg-[#ad8130] text-white px-10 py-4 rounded-full font-medium hover:bg-[#c8953f] transition duration-300 shadow-lg"
        >
          Schedule Your Consultation
        </Link>
      </motion.div>
    </section>
  );
}
