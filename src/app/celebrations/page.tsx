"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialSlider from "../components/testimonials";
import GallerySlider from "../components/GallerySlider";
import VideoGallerySection from "../components/VideoGallerySection";

export default function CelebrationsPage() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/image-3.jpeg" // 👈 change if needed
          alt="Celebration Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-[#bfa34a] bg-amber-500/20 rounded-full">
              Celebrations
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Moments That Deserve <br className="hidden sm:block" />
              <span className="text-[#bfa34a]">To Be Remembered</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg">
              Thoughtfully designed celebrations crafted with elegance,
              creativity, and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative py-20 bg-gradient-to-b from-[#fffaf5] via-white to-[#fffaf5] overflow-hidden">

        {/* Decorative Blur */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 mb-20">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-[#0c0c0c] bg-[#bfa34a] rounded-full">
              Celebrations
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1f1f20] leading-tight">
              Celebrations That Tell <br className="hidden sm:block" />
              <span className="text-[#bfa34a]">Your Story</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60"
            >
              <h3 className="text-2xl font-semibold text-[#010101] mb-6">
                Types of Celebrations
              </h3>

              <ul className="grid grid-cols-2 gap-y-3 text-gray-700 mb-6">
                <li>• Corporate</li>
                <li>• PR Events</li>
                <li>• Intimate Events</li>
                <li>• Galas</li>
                <li>• Bar/Bat Mitzvahs</li>
                <li>• Quinceañeras</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-5">
                With over <strong>10 years of experience</strong> in the planning
                and entertainment industry, we know how to deliver results with
                precision. No detail is left untouched.
              </p>

              <p className="text-gray-800 font-semibold italic">
                The only limit is your imagination.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/DancingOnTheClouds1.png"
                  alt="Celebrations Events"
                  width={700}
                  height={700}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <GallerySlider />
        <VideoGallerySection />
        <TestimonialSlider />
      </section>
    </>
  );
}
