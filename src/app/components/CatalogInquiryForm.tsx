"use client";

import { motion } from "framer-motion";

export default function CatalogInquiryForm() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif text-center mb-10 text-black"
        >
Request For Quote
        </motion.h2>

        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Name</label>
            <input
              type="text"
              className="w-full border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6b4b3a]"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Email</label>
            <input
              type="email"
              className="w-full border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6b4b3a]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6b4b3a]"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6b4b3a]"
              placeholder="Write your message..."
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#bfa34a] text-white px-8 py-3 rounded-full hover:bg-[#bfa34a] transition"
            >
              Send Inquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
