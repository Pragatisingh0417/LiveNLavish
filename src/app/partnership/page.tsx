"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ElitePartnershipSection from "../components/ElitePartnershipSection";
import PartnerBenefitsAccordion from "../components/PartnerBenefitsAccordion";
import SubscribeSection from "../components/SubscribeSection";

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
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Connect with elite sales talent and elevate your brand through
            meaningful partnerships.
          </p>
          <Link href="#main" className="mt-10 w-fit px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] font-semibold hover:bg-[#d4af37] hover:text-black transition">
            Become a Sponsor
              </Link>

               
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
            By sponsoring the <strong> Annual LNL in Sales Summit</strong>,
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
<PartnerBenefitsAccordion />

<p className="font-bold  mt-4"> Ready to connect with top talent and elevate your brand?  </p>
          <p className="text-gray-700 mb-8 leading-relaxed mt-2">
            The SIS Summit — the largest sales conference in the world for women
            of color — offers unparalleled opportunities to connect with elite
            professionals who bring unique perspectives, innovative solutions,
            and the drive to excel in today’s competitive market.
          </p>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg"
        >
         

          <p className="text-gray-600 mb-6">
            Ready to connect with top talent and elevate your brand?
            Share your goals and our team will reach out.
          </p>

         <form id="main" className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
            <button className="w-full md:w-auto px-10 py-4 rounded-full bg-[#d4af37] text-white font-semibold hover:opacity-90 transition">
              Submit Partnership Request
            </button>
          </div>

        </form>
        </motion.div>
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

      <ElitePartnershipSection />
      <SubscribeSection />
    </main>
  );
}
