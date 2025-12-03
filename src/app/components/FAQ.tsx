"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "When should I hire a wedding planner?",
      answer:
        "The earlier, the better! Most couples hire a planner 12–18 months before the wedding to secure top vendors, design the event, and streamline logistics.",
    },
    {
      question: "Can I hire you if I've already hired some of my vendors?",
      answer:
        "Of course! We’re happy to pick up where you left off and coordinate with your existing vendors to ensure no detail is overlooked. We also offer preferred vendor recommendations tailored to your style and budget.",
    },
    {
      question: "What level of support is right for me?",
      answer:
        "It depends on the size, style, and complexity of your event. We offer full-service, partial planning, and event-day coordination options.",
    },
    {
      question: "What is the payment structure for your packages?",
      answer:
        "Most clients pay a retainer up front and the remaining balance in scheduled installments. Flexible payment options are available depending on the service level.",
    },
    {
      question: "What happens if I need more support after booking a package?",
      answer:
        "You can upgrade or add additional services anytime. We’re here to adjust and support your evolving needs.",
    },
   
    
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/home20-slider_1.jpeg"
        alt=""
        fill
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 text-white">

        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl"
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium">
                  {item.question}
                </span>

                <ChevronDown
                  className={`w-6 h-6 transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-5 pb-5"
                  >
                    <p className="leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
