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
    <section className="relative flex flex-col items-center justify-center text-center bg-[#96928b] py-20 sm:py-28 lg:py-10 overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#f7f6f3] opacity-70 pointer-events-none" />

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

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl tracking-normal sm:text-4xl sm:tracking-widest md:text-5xl lg:text-6xl 
        font-serif mb-5 px-4 bg-gradient-to-r from-[#0a0a0a] via-[#1b1b1a] to-[#0a0a0a] 
        text-transparent bg-clip-text drop-shadow"
      >
        LIVE · N · LAVISH · EVENTS
      </motion.h1>

      {/* Slider Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-full flex items-end justify-center gap-6 md:gap-12 px-4"
      >

        {/* Left preview */}
        <motion.div
          key={getPrevIndex()}
          className="hidden md:block w-40 lg:w-70 rounded-xl overflow-hidden shadow-lg opacity-80 scale-95"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image  
            src={slides[getPrevIndex()]}
            alt="Previous"
            width={200}
            height={160}
            className="object-cover w-full h-full "
          />
        </motion.div>

        {/* Center Main Slider */}
        <div className="relative backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-2xl p-3 md:p-4 
            w-[80%] md:w-[480px] lg:w-[620px]">

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="rounded-2xl"
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[210px] sm:h-[290px] md:h-[380px] lg:h-[440px]">
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover rounded-3xl "
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
                className="w-2 h-2 bg-gradient-to-br from-[#96928b] to-[#d0c9bb] rounded-full shadow"
              ></span>
            ))}
          </motion.div>
        </div>

        {/* Right preview */}
        <motion.div
          key={getNextIndex()}
          className="hidden md:block w-40 lg:w-70 rounded-xl overflow-hidden shadow-lg opacity-80 scale-95"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image
            src={slides[getNextIndex()]}
            alt="Next"
            width={200}
            height={160}
            className="object-cover w-full h-full "
          />
        </motion.div>

      </motion.div>
      
    </section>
  );
}
