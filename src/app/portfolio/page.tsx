"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const portfolioImages = [
    "/images/DancingOnTheClouds1.png",
    "/images/lavish-6.png",
    "/images/lavish-7.png",
    "/images/lavish-11.png",
    "/images/lavish-9.png",
    "/images/lavish-5.png",
    "/images/lavish-8.png",
    "/images/lavish-10.png",
    "/images/lavish-12.png",
  ];

  return (
    <main className="bg-white">

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/lavish-11.png"
          alt="Live N Lavish Events Portfolio Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light">
            Our Portfolio
          </h1>

          <p className="mt-4 tracking-[5px] uppercase text-sm text-[#e7c27a]">
            Elevated • Intentional • Unforgettable
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto text-center px-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Every celebration we design is thoughtfully curated and flawlessly
            executed. From luxury weddings to corporate productions and
            statement floral installations, our portfolio reflects refined
            design, seamless coordination, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="pb-20">
        <div className="max-w-[1300px] mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >
                <Image
                  src={img}
                  alt="Luxury Event Work"
                  width={600}
                  height={500}
                  className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-[#ad8130] text-white px-10 py-3 rounded-full font-medium hover:bg-[#c8953f] transition"
            >
              Let’s Plan Your Event
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
