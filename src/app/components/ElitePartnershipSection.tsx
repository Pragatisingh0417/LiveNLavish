"use client";

import { motion } from "framer-motion";

export default function ElitePartnershipSection() {
  return (
    <section className="bg-amber-50">

      {/* ================= SPLIT PROMO SECTION ================= */}
      <div className="grid md:grid-cols-2 border-b border-[#d4af37]/30  bg-[#0b0b0b] text-white">

        {/* LEFT */}
        <div className="px-8 md:px-16 py-20 flex items-center">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Partner with <br />
            <span className="text-[#d4af37]">LINE N LAVISH</span>
            <br />
            at LNL Summit
          </h2>
        </div>

        {/* RIGHT */}
        <div className="px-8 md:px-16 py-20 border-l border-[#d4af37]/30 flex flex-col justify-between">
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Connect with top-performing women in sales and sales-adjacent roles.
            Sponsoring the SIS Summit positions your brand at the center of
            innovation, leadership, and future-forward sales growth.
          </p>

          <button className="mt-10 w-fit px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] font-semibold hover:bg-[#d4af37] hover:text-black transition">
            Become a Sponsor
          </button>
        </div>
      </div>

      {/* ================= FORM SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 ">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-serif mb-4">
            Connect with Elite Sales Talent and Drive Future Sales Growth
          </h3>
          <p className="text-gray-400 max-w-3xl">
            Ready to connect with top talent and elevate your brand?
            Fill out the form to submit your interest and share your goals with us,
            and someone from our team will be in touch.
          </p>
        </motion.div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BASIC INFO */}
          <input className="lux-input border border-black p-1" placeholder="First Name *" />
          <input className="lux-input border border-black p-1" placeholder="Last Name *" />
          <input className="lux-input border border-black p-1" placeholder="Email *" />
          <input className="lux-input border border-black p-1" placeholder="Company Name *" />
          <input className="lux-input border border-black p-1" placeholder="Job Title *" />
          <input className="lux-input border border-black p-1" placeholder="Work Phone Number *" />

          {/* GOALS */}
          <div className="md:col-span-2">
            <p className="mb-3 text-[#d4af37] font-semibold">
              What goals are you trying to achieve? (Select all that apply)
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-sm ">
              {[
                "Attracting more diverse talent to our job openings",
                "Fulfilling CSR commitments",
                "Building brand visibility among sales leaders",
                "Showcasing our product or services",
                "Building brand visibility to women of color",
                "Generating leads for our organization",
              ].map((item) => (
                <label key={item} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 accent-[#d4af37]" />
                  <span className="text-gray-900">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* BUDGET */}
          <div className="md:col-span-2 mt-6">
            <p className="mb-3 text-[#d4af37] font-semibold">
              What is your budget range for sponsorship?
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                "Open budget",
                "$5,000 - $10,000",
                "$10,000 - $25,000",
                "$25,000 - $75,000",
                "$150,000+",
                "Unsure – need to understand ROI",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <input type="radio" name="budget" className="accent-[#d4af37]" />
                  <span className="text-gray-900">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* CONSENT */}
          <div className="md:col-span-2 mt-6 text-sm text-gray-400 space-y-2">
            <label className="flex gap-3">
              <input type="checkbox" className="accent-[#d4af37]" />
              I agree to receive communications from LNL  In Sales.
            </label>

            <p>
              By clicking submit, you consent to allow LNL In Sales to store
              and process the personal information submitted above to provide
              the content requested.
            </p>
          </div>

          {/* SUBMIT */}
          <div className="md:col-span-2 mt-8">
            <button className="w-full md:w-auto px-10 py-4 rounded-full bg-[#d4af37] text-black font-semibold hover:opacity-90 transition">
              Submit Partnership Request
            </button>
          </div>

        </form>
      </div>

      {/* ================= INPUT STYLE ================= */}
      <style jsx>{`
        .lux-input {
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.4);
          padding: 14px 16px;
          border-radius: 10px;
          color: white;
          outline: none;
        }
        .lux-input::placeholder {
          color: #9ca3af;
        }
        .lux-input:focus {
          border-color: #d4af37;
        }
      `}</style>
    </section>
  );
}
