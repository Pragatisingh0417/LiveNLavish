"use client";

import Image from "next/image";
import FixedFlowers from "./FixedFlowers";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export default function Banner() {
  const slides = [
    "/images/DancingOnTheClouds1.png",
    "/images/home20-slider_1.jpeg",
    "/images/home20-slider_2.jpeg",
    "/images/lavish-13.png",
        "/images/lavish-6.png",

            "/images/lavish-7.png",

                "/images/lavish-8.png",


  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const getPrevIndex = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNextIndex = () => (activeIndex + 1) % slides.length;

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-[#fffff2] py-20 sm:py-28 lg:py-36 overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f5] via-transparent to-[#f7f6f3] opacity-70 pointer-events-none" />

      {/* Floating Petals */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-5xl opacity-20"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 text-5xl opacity-20"
      >
        🌸
      </motion.div>

      <FixedFlowers />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest mb-5 px-4 
          bg-gradient-to-r from-[#d7b47f] via-[#f2d8a7] to-[#d7b47f] text-transparent bg-clip-text drop-shadow"
      >
        LIVE · N · LAVISH · EVENTS
      </motion.h1>

      {/* Subheading */}
      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg md:text-xl italic text-[#b8846b] max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed px-6"
      >
        A secret outdoor venue that transforms from a stunning day to a magical evening setting.
      </motion.p> */}

      {/* Slider Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-full flex items-end justify-center gap-6 md:gap-12 px-4"
      >

        {/* Left mini preview */}
        <motion.div
          key={getPrevIndex()}
          className="hidden md:block w-32 lg:w-48 rounded-xl overflow-hidden shadow-lg opacity-80 scale-95"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image
            src={slides[getPrevIndex()]}
            alt="Previous"
            width={200}
            height={160}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Center Main Swiper - Smaller now */}
        <div className="relative backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-2xl p-3 md:p-4 
            w-[80%] md:w-[480px] lg:w-[620px]">

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="rounded-3xl"
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[210px] sm:h-[290px] md:h-[380px] lg:h-[440px]">
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover rounded-3xl"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gold Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-gradient-to-br from-[#d7b47f] to-[#f2d8a7] rounded-full shadow"
              ></span>
            ))}
          </motion.div>
        </div>

        {/* Right mini preview */}
        <motion.div
          key={getNextIndex()}
          className="hidden md:block w-32 lg:w-48 rounded-xl overflow-hidden shadow-lg opacity-80 scale-95"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image
            src={slides[getNextIndex()]}
            alt="Next"
            width={200}
            height={160}
            className="object-cover w-full h-full"
          />
        </motion.div>

      </motion.div>
      
    </section>
  );
}
