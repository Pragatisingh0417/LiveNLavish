"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Banner() {
  const slides = [
    {
      image: "/images/DancingOnTheClouds1.png",
      title: "Luxury Wedding Experiences",
      subtitle: "Where elegance meets unforgettable moments",
      cta: "Explore Our Events",
    },
    {
      image: "/images/image-2.jpeg",
      title: "Designed With Perfection",
      subtitle: "Every detail crafted with love & luxury",
      cta: "View Our Work",
    },
    {
      image: "/images/image-4.jpeg",
      title: "Celebrate In Style",
      subtitle: "Bespoke celebrations that feel timeless",
      cta: "Plan Your Event",
    },
  ];

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[520px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">

              {/* Background Image (Zoom Effect) */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/65" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div
                  className="
                    w-full max-w-7xl mx-auto px-5 sm:px-10
                    text-center md:text-left
                  "
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="
                      font-serif text-[#cfb45e]
                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                      leading-tight mb-4 sm:mb-6
                    "
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="
                      text-white/90
                      text-base sm:text-lg md:text-xl
                      max-w-xl mx-auto md:mx-0
                      mb-6 sm:mb-8
                    "
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="
                      inline-block
                      border-2 border-[#cfb45e]
                      text-[#cfb45e]
                      px-7 sm:px-8 py-3 sm:py-4
                      uppercase tracking-widest text-xs sm:text-sm
                      hover:bg-[#cfb45e] hover:text-black
                      transition-all duration-300
                    "
                  >
                    {slide.cta}
                  </motion.a>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
