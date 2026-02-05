"use client";

import { useState } from "react";

const benefits = [
  {
    title: "Access to Top Talent",
    content:
      "Engage with highly skilled, diverse women who are eager to advance their careers and make an impact in your organization.",
  },
  {
    title: "Elite Network Expansion",
    content:
      "Build meaningful relationships with senior sales leaders, founders, and decision-makers across industries.",
  },
  {
    title: "Brand Visibility",
    content:
      "Position your brand in front of a global audience of high-performing sales professionals.",
  },
  {
    title: "Thought Leadership",
    content:
      "Showcase your expertise and establish authority through speaking, content, and sponsorship opportunities.",
  },
  {
    title: "Direct Engagement",
    content:
      "Create authentic connections with attendees through experiential and interactive activations.",
  },
  {
    title: "Reach Beyond the Conference Floor",
    content:
      "Extend your brand’s reach before, during, and after the event through digital and on-site exposure.",
  },
];

export default function PartnerBenefitsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {benefits.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className="border border-black rounded-md bg-white"
          >
            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="font-semibold text-black">
                {item.title}
              </span>
              <span className="text-black text-xl font-bold">
                {isOpen ? "–" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-40 px-5 pb-4 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
