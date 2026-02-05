"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingPartnershipButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-[60]"
    >
      <Link
        href="/partnership" target="blank"
        className="
          flex items-center gap-2
          px-6 py-3 rounded-full
          bg-[#000000] text-white
          font-semibold tracking-wide text-sm
          shadow-xl hover:shadow-2xl
          hover:scale-105 transition-all duration-300
        "
      >
        🤝 Partnership
      </Link>
    </motion.div>
  );
}
