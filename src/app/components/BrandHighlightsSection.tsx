"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandHighlightsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ================= VIDEO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-black"
          >
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MPuhzALOrYI"
                title="Brand Highlights Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] rounded-3xl p-10 shadow-xl"
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-amber-700 bg-amber-100 rounded-full">
              Highlights
            </span>

            <ul className="space-y-4 text-gray-800 leading-relaxed mb-8">
              <li>– 10,000 physical and digital copies are distributed per quarter</li>
              <li>– Average Viewer: 25–65 years young</li>
              <li>– Average Viewer Household Income: $69,037–$82,844</li>
              <li>
                – We can generate quality leads specifically for your business brand
                online via automated technology solutions.
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-4 px-8 py-3 text-[14px] tracking-wider font-semibold
                         border border-[#bfa34a] text-[#bfa34a]
                         hover:bg-[#bfa34a] hover:text-white transition"
            >
              ENHANCE MY BRAND
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
