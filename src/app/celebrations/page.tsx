"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialSlider from "../components/testimonials";

export default function CelebrationsPage() {
  return (
    <section className="py-20  bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl  sm:text-5xl font-bold text-[#1f1f20] text-center mb-10 "
        >
          Celebrations That Tell Your Story
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side – Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#8A632D]">
              Types of Celebrations
            </h3>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Corporate</li>
              <li>PR Events</li>
              <li>Intimate Events</li>
              <li>Galas</li>
              <li>Bar/Bat Mitzvahs</li>
              <li>Quinceañeras</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              With over <strong>10 years of experience</strong> in the planning
              and entertainment industry, we know how to deliver results with
              precision. No detail is left untouched. We ensure that all
              logistics, décor, and management elements are executed with
              high-quality and professionalism.
            </p>

            <p className="text-gray-700 leading-relaxed font-semibold italic">
              The only limit is your imagination.
            </p>
          </motion.div>

          {/* Right Side – Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/30">
              <Image
                src="/images/DancingOnTheClouds1.png"
                alt="Celebrations Events"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <TestimonialSlider />
    </section>
  );
}
