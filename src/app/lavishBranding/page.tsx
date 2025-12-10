"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LavishBrandingWorkshop() {
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
    <section className="bg-gradient-to-b from-[#fbfafd] via-[#faf6ff] to-[#fffdfb] text-black">
      {/* HERO / FORM */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif text-center text-[#0b0b0b] mb-6"
          >
            Enhance My Brand
          </motion.h1>

          <p className="text-center text-lg max-w-3xl mx-auto text-[#111827] mb-10">
            Are You Ready To Kickstart Your Business and Take Your Brand To The Next Level Today?
          </p>

          {/* FORM CARD */}
          <div className="bg-white/70 p-8 rounded-3xl shadow-lg border border-white/30 mb-20 backdrop-blur-lg">
            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
              />

              {/* Note: kept both email inputs as in original content */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
              />

              <textarea
                placeholder="Tell us about your goals…"
                className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a] md:col-span-2 h-32"
              ></textarea>

              <button className="md:col-span-2 bg-[#000000] hover:bg-[#111111] text-white py-3 rounded-xl text-lg transition">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* ABOUT / BRANDING STORY */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-white/30"
            >
              <Image
                src="/images/lady-2.jpg"
                width={600}
                height={600}
                alt="Lekita Logan-Range"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif text-[#000000]">Hey Lavish Fam!</h2>

              <p className="text-[#111827] leading-relaxed">
                I’m <b>Lekita Logan-Range</b>, an expert wedding planner, event designer & brand specialist
                with over 10 years of experience.
              </p>

              <p className="text-[#111827] leading-relaxed">
                I help wedding planners, event designers and female entrepreneurs generate more quality
                leads and earn up to <strong>10x their current revenue</strong> through my TAQ system and
                automated marketing technology!
              </p>

              <p className="italic text-[#111827] text-lg">“You only make money when you take action!”</p>

              <p className="text-[#111827]">
                Together, we will create a customized marketing campaign guaranteed to bring high-quality
                leads directly to your brand.
              </p>

              <h3 className="text-xl font-serif text-[#000000]">Take Action Queen 👑</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORKSHOP HERO */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif text-center text-[#0b0b0b] mb-6 mt-10"
        >
          Lavish Branding Workshop
        </motion.h1>

        <p className="text-center text-[#111827] mb-10 text-lg max-w-3xl mx-auto">
          (All workshops are virtual — join from anywhere in the world)
          <br />
          <span className="font-semibold">
            We Offer Group Workshops, Digital Marketing Solutions & 1-on-1 Brand Coaching
          </span>
        </p>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {highlights.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="p-6 bg-white/75 text-black border border-white/30 rounded-2xl shadow-sm flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1 text-[#937dcf] text-xl">✦</div>
              <div className="text-sm leading-relaxed">{text}</div>
            </motion.div>
          ))}
        </div>

        {/* WORKSHOP FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-serif text-[#000000] mb-6 text-center">Register For Workshop</h2>

          <form className="grid md:grid-cols-2 gap-6 ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
            />

            <input
              type="text"
              placeholder="Business Name"
              className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a]"
            />

            <textarea
              placeholder="What would you like help with?"
              className="w-full p-4 rounded-xl border border-[#e6dfd9] bg-white text-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-[#d6c3f0] placeholder:text-[#a08c7a] md:col-span-2 h-32"
            ></textarea>

            <button className="md:col-span-2 bg-[#000000] hover:bg-[#111111] text-white py-3 rounded-xl text-lg transition">
              Submit Registration
            </button>
          </form>
        </div>
      </div>

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
            <button className="bg-[#937dcf] text-white px-8 py-4 rounded-xl text-lg hover:bg-[#a290d4] transition">
              Request Quote
            </button>

            <button className="border border-[#937dcf] text-[#000000] px-8 py-4 rounded-xl text-lg hover:bg-[#937dcf] hover:text-white transition">
              Schedule Strategy Session
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
