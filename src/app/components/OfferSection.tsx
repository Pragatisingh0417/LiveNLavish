"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Flower2, Lamp, Layers, Sun } from "lucide-react";

export default function OfferSection() {
  const items = [
    { title: "Custom Event Designs", icon: Flower2 },
    { title: "Decor Rentals", icon: Layers },
    { title: "Pipe & Draping", icon: Sun },
    { title: "Elopements / Intimate Events", icon: Heart },
    { title: "Lighting", icon: Lamp },
    { title: "High Quality Service + Support", icon: Sparkles },
  ];

  return (
    <section className="py-24 bg-[#fffaf4] relative overflow-hidden">

      {/* Floating Gold Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#d7b47f] rounded-full opacity-30"
            initial={{ x: Math.random() * 800, y: Math.random() * 400 }}
            animate={{
              y: ["0%", "-120%"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-serif tracking-wide 
          text-[#b8846b] mb-14"
        >
          What Can We Offer You
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/90 to-white/40 
                backdrop-blur-xl shadow-xl border border-[#e5d8c9]/70
                hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                {/* Gold Glow Circle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 
                transition-all duration-700 bg-gradient-to-br from-[#fff5dd] to-transparent rounded-3xl" />

                <div className="relative flex flex-col items-center">

                  {/* Icon */}
                  <div className="mb-5 p-4 rounded-full bg-gradient-to-br from-[#f5e5c3] to-[#d7b47f] shadow-lg">
                    <Icon className="w-10 h-10 text-white drop-shadow" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-[#5a3f31] tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
