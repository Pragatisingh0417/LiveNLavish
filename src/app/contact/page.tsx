"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-[#fffaf4]">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Banner Image */}
        <Image
          src="/images/home20-slider_2.jpeg"  // Change to your hero image
          alt="Plan Your Event With Us"
          fill
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating sparkle */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-16 left-16 text-5xl text-white/40"
        >
          ✦
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white font-serif text-4xl md:text-6xl max-w-3xl drop-shadow-lg px-6"
        >
          Plan Your Event With Us
        </motion.h1>
      </section>

      {/* ---------------- INTRO TEXT ---------------- */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-4">
          “Do You Need A Wedding Planner, Event Planner Or Event Designer?”
        </h2>

        <p className="text-[#020202] text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Provide us with your event needs below.
        </p>

        <p className="text-[#000000] text-lg font-light">
          Do You Want A Picture Perfect Wedding Day?
        </p>

        <p className="mt-4 text-[#101010] text-lg">
          Are You Ready For A Wedding That Will Exceed Expectations?
        </p>

        <p className="mt-4 text-[#000000] text-lg font-medium italic">
          “We Will Make Your Vision a Reality”
        </p>

        <p className="mt-4 text-[#000000] text-lg font-medium">
          The first step to receiving your <strong>FREE Wedding & Special Event Consultation</strong> is filling out the short form below.
        </p>
      </div>

      {/* ---------------- CONTACT DETAILS ---------------- */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-white/80 backdrop-blur-xl shadow-xl border border-[#efd8bd] rounded-3xl p-8 text-center">
          <h3 className="text-xl font-semibold text-[#000000] mb-2">Contact Information</h3>

          <p className="text-[#000000] text-lg">Phone: (561) 574-1246</p>

          <p className="text-[#000000] mt-4">
            <strong>Business Hours:</strong><br />
            8am – 7pm Mon–Fri<br />
            9am – 2pm Sat<br />
            Closed Sunday
          </p>

          <p className="text-[#000000] mt-4">
            We service events in Palm Beach County, Central Florida, Miami, Fort Lauderdale & surrounding areas.
          </p>

          <p className="text-[#000000] mt-4 italic">
            We also travel to exclusive destinations & states upon request.
          </p>
        </div>
      </div>

      {/* ---------------- CONTACT FORM ---------------- */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <h3 className="text-center text-3xl font-serif text-[#000000] mb-10">
          Receive Your Free Wedding & Special Event Consultation
        </h3>

        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#000000] backdrop-blur-xl">
          <form className="grid md:grid-cols-2 gap-6">
            {/* Input */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] 
              focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] 
              focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] 
              focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />

            <input
              type="text"
              placeholder="Event Date"
              className="w-full p-4 rounded-xl border border-[#000000] bg-white text-[#6b4b3a] 
              focus:outline-none focus:ring-2 focus:ring-[#b8846b]"
            />

            <input
              type="text"
              placeholder="Event Location"
              className="w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] 
              focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />

            <select
              className="w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] 
              focus:outline-none focus:ring-2 focus:ring-[#000000]"
            >
              <option>Event Type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Baby Shower</option>
              <option>Other</option>
            </select>

            {/* Textarea */}
            <textarea
              placeholder="Tell us about your event..."
              className="md:col-span-2 w-full p-4 rounded-xl border border-[#000000] bg-white text-[#000000] 
              focus:outline-none focus:ring-2 focus:ring-[#000000] h-32"
            />

            {/* Button */}
            <button
              className="md:col-span-2 bg-[#000000] hover:bg-[#000000] text-white text-lg py-4 rounded-xl transition"
            >
              Submit Consultation Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
