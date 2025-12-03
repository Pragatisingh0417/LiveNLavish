"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSlider() {
  const testimonials = [
    { img: "/images/DancingOnTheClouds1.png", text: "They made our wedding magical and unforgettable!", name: "Aarav & Meera" },
    { img: "/images/lavish-6.png", text: "Amazing décor, smooth planning, loved everything!", name: "Rahul & Avni" },
    { img: "/images/lavish-7.png", text: "Professional, creative, and stress-free experience.", name: "Karan & Riya" },
    { img: "/images/lavish-11.png", text: "Amazing event and stunning décor!", name: "Simran & Arjun" },
    { img: "/images/lavish-9.png", text: "They understood our vision perfectly!", name: "Aisha & Kabir" },
  ];

  return (
    <section className="py-10 bg-[#fffff2] relative overflow-hidden">
      
      {/* Floating Decorative Shape (now visible) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 pointer-events-none z-0"
      >
        <Image
          src="/images/a_make_the_colour_of_l.png"
          alt="Decor"
          width={350}
          height={350}
          className="w-[180px] sm:w-[250px] lg:w-[350px] opacity-70"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-10">
        <h2 className="text-4xl  sm:text-5xl font-bold text-[#211e59] text-center mb-10">
          What Our Couples Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-[#f5e1d8]">
                <img
                  src={t.img}
                  alt="couple"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-700 italic mb-3">“{t.text}”</p>
                <h4 className="font-semibold text-[#b44e4e]">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
