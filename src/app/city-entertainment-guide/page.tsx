"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GallerySlider from "../components/GallerySlider";
import BrandHighlightsSection from "../components/BrandHighlightsSection";

export default function Cityentertainment() {
  const highlights = [
    "Identify + Attract + Serve Your Ideal Client",
    "Present, Sell & Convert With Confidence",
    "Effective Digital Marketing Strategies",
    "Perfect Targeting Techniques",
    "Kickstart Your Brand • Know Your Value • Get Paid",
    "Strengthen Mindset & Build Authority",
    "Generate Higher Quality Leads",
    "Get Polished For Luxury Clients",
    "Earn Up To 10x More Revenue — Even On A Budget",
  ];

  return (
    <>
    
    
    {/* ================= BANNER ================= */}
          <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
            {/* Background Image */}
            <Image
              src="/images/image-4.jpeg" 
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
                
    
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  City Entertainment Guide 
                </h1>
    
                <p className="mt-6 text-gray-200 text-lg">
                  Thoughtfully designed celebrations crafted with elegance,
                  creativity, and precision.
                </p>
              </motion.div>
            </div>
          </section>


    <section className="bg-gradient-to-b from-[#fbfafd] via-[#faf6ff] to-[#fffdfb] text-black">
      {/* HERO / FORM */}
     

    

      {/* CITY GUIDE */}
      <section className="py-20 bg-gradient-to-b from-[#fffdf7] to-[#fbfbfb]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif text-center text-[#0b0b0b] mb-6"
          >
            City Entertainment Guide
          </motion.h1>

          <p className="text-center text-[#111827] text-lg mb-10 max-w-3xl mx-auto">
            Enhance your business brand awareness, generate quality leads and connect with attendees
            of intimate, online and large-scale events across South Florida.
            <br />
            <br />
            Concerts • Festivals • Comedy Shows • Fashion Shows • Sporting Events • Event Centers & More.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-14 text-black">
            <div className="rounded-2xl bg-white/80 p-6 text-center border border-white/30 shadow-sm">
              <div className="text-2xl font-semibold">10,000+</div>
              <div className="text-sm mt-2">Physical & Digital Copies Distributed / Quarter</div>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 text-center border border-white/30 shadow-sm">
              <div className="text-2xl font-semibold">25–65</div>
              <div className="text-sm mt-2">Avg Viewer Age</div>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 text-center border border-white/30 shadow-sm">
              <div className="text-2xl font-semibold">$69k–$82k</div>
              <div className="text-sm mt-2">Avg Household Income</div>
            </div>
          </div>

          <p className="text-center text-[#111827] text-lg mb-12">
            We generate high-quality leads for your business through automated technology solutions
            tailored specifically to your brand.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#ad8130] text-white px-8 py-4 rounded-xl text-lg hover:bg-[#bea142] transition">
              Request Quote
            </button>

            <button className="border border-[#ad8130] text-[#000000] px-8 py-4 rounded-xl text-lg hover:bg-[#ad8130] hover:text-white transition">
              Schedule Strategy Session
            </button>
          </div>
        </div>
      </section>
      <GallerySlider />
      <BrandHighlightsSection />
    </section>
    </>
  );
}
