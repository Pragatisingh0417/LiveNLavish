"use client";

import { motion } from "framer-motion";
import ElitePartnershipSection from "../components/ElitePartnershipSection";

export default function PartnershipPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO BANNER ================= */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/shop-7.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Partnership Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Connect with elite sales talent and elevate your brand through
            meaningful partnerships.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Connect with Elite Sales Talent and Drive Future Sales Growth
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            By sponsoring the <strong>9th Annual Sistas in Sales Summit</strong>,
            your company gains direct access to an engaged, world-class talent
            pool of diverse women in sales and sales-adjacent roles.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            The SIS Summit — the largest sales conference in the world for women
            of color — offers unparalleled opportunities to connect with elite
            professionals who bring unique perspectives, innovative solutions,
            and the drive to excel in today’s competitive market.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Partner Benefits</h3>

          <ul className="space-y-3 text-gray-700">
            <li>• Access to Top Talent</li>
            <li>• Elite Network Expansion</li>
            <li>• Brand Visibility</li>
            <li>• Thought Leadership</li>
            <li>• Direct Engagement</li>
            <li>• Reach Beyond the Conference Floor</li>
          </ul>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Partner With Us
          </h3>

          <p className="text-gray-600 mb-6">
            Ready to connect with top talent and elevate your brand?
            Share your goals and our team will reach out.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              rows={4}
              placeholder="Tell us about your partnership goals"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Submit Partnership Request
            </button>
          </form>
        </motion.div>

      </section>

      <ElitePartnershipSection />
    </main>
  );
}
