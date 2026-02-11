"use client";

import { motion } from "framer-motion";

export default function SignatureStatement() {
  return (
    <section className="relative py-20 bg-[#faf8f4] overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-[#ad8130] text-xs font-semibold"
        >
          LIVE N LAVISH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-snug"
        >
          We don’t just plan events, <br className="hidden sm:block" />
          we create experiences that feel like you.
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-[2px] bg-[#ad8130] mx-auto mt-8"
        />
      </div>
    </section>
  );
}
