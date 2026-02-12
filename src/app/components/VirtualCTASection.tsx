"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VirtualCTASection() {
  return (
    <section className="py-24 bg-[#f8f6f2]">

      <div className="max-w-6xl mx-auto px-6">

        {/* WHY CLIENTS TRUST SECTION */}
        <div className="mb-24">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-center text-[#101011] mb-16"
          >
            WHY CLIENTS TRUST LIVE N LAVISH EVENTS FOR VIRTUAL EXPERIENCES
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            {[
              "15+ years of luxury event planning & creative direction",
              "Seamless communication and expert technical organization",
              "Strong creative vision + curated guest experience design",
              "Professional virtual production support",
              "Hybrid event expertise for online + in-person audiences",
              "A warm, faith-filled team that genuinely cares about your event",
              "A luxury-level execution (even online)",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md border border-[#ad8130]/20"
              >
                ✔ {item}
              </div>
            ))}
          </div>

          <p className="text-center text-xl italic mt-16 text-black">
            Your event deserves more than a standard livestream — <br />
            it deserves a curated experience.
          </p>

        </div>

        {/* FINAL CTA SECTION */}
        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-serif text-[#101011] mb-8">
            READY TO CREATE YOUR VIRTUAL OR HYBRID EVENT?
          </h2>

          <p className="text-lg text-gray-700 mb-10">
            Let’s design an experience your audience will remember.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#ad8130] text-white px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition"
            >
              Book a Virtual Consultation
            </Link>

            <Link
              href="/contact"
              className="border border-[#ad8130] text-[#ad8130] px-10 py-4 rounded-full hover:bg-[#ad8130] hover:text-white transition"
            >
              Inquire About Your Virtual Event
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
