"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TestimonialSlider from "../components/testimonials";

export default function ServicesPage() {
  const services = [
    {
      title: "Full-Service Wedding Planning & Decor",
      desc: "Complete in-house planning, décor, and management for unforgettable events. From 2 to 500+ guests.",
      img: "/images/service-6.jpeg",
    },
    {
      title: "Wedding Elopements & Intimate Micro Weddings",
      desc: "Beautifully curated intimate celebrations designed with elegance and warmth.",
      img: "/images/lavish-6.png",
    },
    {
      title: "Oceanfront Weddings",
      desc: "Stunning beach ceremonies with luxury décor and seamless execution.",
      img: "/images/service-4.jpeg",
    },
    {
      title: "Luxury Weddings",
      desc: "High-end luxury weddings crafted with sophistication and precision.",
      img: "/images/service-5.jpeg",
    },
    {
      title: "Luxury Design & Decor",
      desc: "Bespoke design elements, premium setups, and detailed artistic décor.",
      img: "/images/service-7.png",
    },
    {
      title: "Custom Floral Arrangement",
      desc: "Fresh, handcrafted floral art tailored to your wedding theme.",
      img: "/images/service-8.jpeg",
    },
  ];

  const points = [
    "10+ Years Experience in Luxury Events",
    "Full In-House Decor, Planning & Design",
    "Premium Floral & Custom Installations",
    "Dedicated Event Managers",
    "High-End Production Quality",
    "Tailored Client Experience",
  ];

  const gallery = [
    "/images/services/gallery1.jpg",
    "/images/services/gallery2.jpg",
    "/images/services/gallery3.jpg",
    "/images/services/gallery4.jpg",
    "/images/services/gallery5.jpg",
  ];

  return (
    <section className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">

        <Image
          src="/images/lavish-7.png"
          alt="Luxury Services"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Floating Decorative Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-16 text-6xl opacity-30"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-20 text-6xl opacity-30"
        >
          ✦
        </motion.div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide text-white drop-shadow-xl"
          >
            Our Luxury Services
          </motion.h1>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center text-[#211e59] mb-12"
        >
          Our Services
        </motion.h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
          We offer <strong>full-service wedding planning & in-house decor solutions</strong>.
          Our team creates unforgettable experiences — from intimate 2-guest ceremonies  
          to luxury 500+ guest celebrations.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition"
            >
              <div className="h-56 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#211e59] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#eae3f9] relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#eae3f9] via-transparent to-[#f7f6fa] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif text-center text-[#b8846b] mb-12"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {points.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg text-lg text-[#6b4b3a]"
              >
                ✦ {text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </section>
  );
}
