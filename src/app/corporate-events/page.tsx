"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CorporateEventsPage() {
  const productions = [
    "Corporate Galas & Award Ceremonies",
    "Brand Activations & Launch Events",
    "Holiday Parties & Client Experiences",
    "Nonprofit & Fundraising Events",
    "Conferences & Leadership Retreats",
  ];

  const whyChooseUs = [
    "Strategic planning + logistical excellence",
    "Luxury design & experiential storytelling",
    "Seamless communication",
    "Onsite production management",
    "Vendor & venue coordination",
    "Elevated guest experiences",
  ];

  return (
    <section className="bg-white">

      {/* ===================================== */}
      {/* HERO SECTION */}
      {/* ===================================== */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">

        <Image
          src="/images/image-3.jpeg"   
          alt="Corporate Event Planning"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
              Corporate Event Planning
            </h1>

            <p className="uppercase tracking-[3px] text-sm text-[#ad8130]">
              Event Production • Design & Décor
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================== */}
      {/* OVERVIEW SECTION */}
      {/* ===================================== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-serif text-[#101011] mb-8">
            Overview
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            We partner with brands, companies, and organizations to design and
            produce elevated events that inspire connection, strengthen culture,
            and leave a lasting impression.
          </p>

        </div>
      </section>

      {/* ===================================== */}
      {/* WHAT WE PRODUCE */}
      {/* ===================================== */}
      <section className="py-24 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center text-[#101011] mb-16">
            What We Produce
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {productions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  p-10
                  rounded-3xl
                  shadow-lg
                  border border-[#ad8130]/20
                  hover:shadow-2xl
                  transition-all duration-500
                "
              >
                <h3 className="text-xl font-serif text-[#101011]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* WHY BRANDS CHOOSE US */}
      {/* ===================================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#ad8130]/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <h2 className="text-4xl font-serif text-center text-[#ad8130] mb-16">
            Why Brands Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white/10
                  backdrop-blur-md
                  border border-[#ad8130]/30
                  p-8
                  rounded-3xl
                  text-lg
                  hover:-translate-y-1
                  transition-all duration-500
                "
              >
                ✔ {point}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* CTA SECTION */}
      {/* ===================================== */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-serif text-[#101011] mb-8">
            Let’s bring your vision to life with excellence.
          </h2>

          <a
            href="/contact"
            className="inline-block bg-[#ad8130] text-white px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Inquire About Corporate Events
          </a>

        </div>
      </section>

    </section>
  );
}
