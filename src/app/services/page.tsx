"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TestimonialSlider from "../components/testimonials";
import FAQ from "../components/FAQ";

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
{/* ========================================= */}
{/* Luxury Wedding Planning Section */}
{/* ========================================= */}

<section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-serif text-[#101011] mb-6">
        Luxury Wedding Planning
      </h2>

      <p className="text-[#ad8130] tracking-[2px] uppercase text-sm font-medium mb-4">
        Wedding Planning • Event Management • Floral Design & Décor
      </p>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Creating unforgettable weddings with calm, confidence, and elevated style.
      </p>
    </div>

    {/* Overview */}
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h3 className="text-2xl font-serif text-[#101011] mb-6">Overview</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        Your wedding should be a joyful, beautifully coordinated experience — not a stressful one.
        At <span className="font-semibold text-[#ad8130]">Live N Lavish Events</span>, we guide you
        through every step with clarity, expertise, and a signature design approach rooted in
        intentionality and excellence.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-6">
        We specialize in elegant, modern-classic, romantic, and editorial-style weddings
        for couples seeking a luxury experience from start to finish.
      </p>
    </div>

    {/* Wedding Experiences */}
    <div className="space-y-20">

      {/* Full Service Planning */}
      <div>
        <h3 className="text-3xl font-serif text-[#101011] mb-6">
          Full-Service Wedding Planning
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          For the couple who wants a seamless, curated, and stress-free planning journey.
          We manage every detail from venue selection to vendor management, design direction,
          guest logistics, timelines, and full event execution.
        </p>

        <p className="text-[#ad8130] font-medium mb-4">
          Perfect for couples seeking a luxury concierge-style planning experience.
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Venue selection & walkthroughs</li>
          <li>✔ Vendor management</li>
          <li>✔ Budget oversight</li>
          <li>✔ Complete planning system</li>
          <li>✔ Custom design direction</li>
          <li>✔ Timeline creation</li>
          <li>✔ Rehearsal management</li>
          <li>✔ Full event-day execution</li>
          <li>✔ 2–3 professional coordinators onsite</li>
        </ul>
      </div>

      {/* Planning + Design */}
      <div>
        <h3 className="text-3xl font-serif text-[#101011] mb-6">
          Full-Service Planning + Event Design
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          Everything included in Full Planning PLUS immersive design + production:
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Custom floral design</li>
          <li>✔ 3D layouts & floorplans</li>
          <li>✔ Tablescape development</li>
          <li>✔ Custom installations</li>
          <li>✔ Luxury décor sourcing</li>
          <li>✔ Design presentation meeting</li>
          <li>✔ Onsite design direction</li>
        </ul>
      </div>

      {/* Month Of Coordination */}
      <div>
        <h3 className="text-3xl font-serif text-[#101011] mb-6">
          Month-Of Coordination (4–6 Weeks Out)
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          Designed for couples who planned everything, but need a professional team
          to finalize details and execute the day seamlessly.
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Vendor confirmation</li>
          <li>✔ Timeline creation</li>
          <li>✔ Rehearsal coordination</li>
          <li>✔ Bridal assistant + coordinator team</li>
          <li>✔ Full event-day execution</li>
        </ul>
      </div>

      {/* Day Of Coordination */}
      <div>
        <h3 className="text-3xl font-serif text-[#101011] mb-6">
          Day-Of Coordination
        </h3>

        <p className="text-lg text-gray-700">
          Timeline & vendor management beginning 2 weeks prior
          with a 3-person team on the wedding day.
        </p>
      </div>
    </div>

    {/* Final CTA */}
    <div className="text-center mt-24">
      <p className="text-2xl font-serif text-[#101011] mb-8">
        Let’s create a wedding that feels timeless, personal, and beautifully you.
      </p>

      <a
        href="/contact"
        className="inline-block bg-[#ad8130] text-white px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
      >
        Start Your Planning Experience
      </a>
    </div>

  </div>
</section>

      {/* SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
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
     {/* WHY CHOOSE US */}
<section className="relative py-24 bg-black overflow-hidden">

  {/* subtle gold glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#ad8130]/10 via-transparent to-transparent" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif text-center text-[#ad8130] mb-16 tracking-wide"
    >
      Why Choose Us
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10">

      {points.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="
            relative p-8
            bg-white/80 backdrop-blur-xl
            border border-[#ad8130]/20
            rounded-3xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            text-lg text-[#6b4b3a]
            hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            transition-all duration-500
          "
        >
          <span className="absolute top-4 right-6 text-[#ad8130]/30 text-5xl font-serif">
            ✦
          </span>

          <p className="relative z-10 leading-relaxed">
            {text}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>


      <TestimonialSlider />
      <FAQ />
    </section>
  );
}
