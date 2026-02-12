"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import VirtualCTASection from "../components/VirtualCTASection";

export default function VirtualHybridPage() {
  return (
    <section className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/slider-7.jpg"
          alt="Virtual & Hybrid Events"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
              Virtual & Hybrid Events
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Luxury Online Experiences Designed With Intention, Creativity & Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-lg text-gray-700 leading-relaxed">

          <p>
            Whether you’re planning a virtual wedding moment, a global corporate summit,
            or a hybrid milestone celebration, Live N Lavish Events delivers elevated
            digital experiences that feel seamless, engaging, and beautifully curated.
          </p>

          <p className="italic text-[#ad8130] border-l-4 border-[#ad8130] pl-6">
            Virtual events should never feel distant — they should feel intimate,
            intentional, and unforgettable.
          </p>

          <p>
            We combine expert planning, high-touch support, customized branding,
            and thoughtful design to create online experiences that connect deeply
            and impress your audience from anywhere in the world.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-24 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center text-[#101011] mb-16">
            ✨ WHAT WE OFFER
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            {[
              "End-to-end event planning",
              "Tech + production management",
              "Digital run-of-show creation",
              "Livestream coordination",
              "Speaker & vendor management",
              "Branded graphics & creative direction",
              "Audience engagement strategy",
              "Hybrid event setup",
              "Host support + script development",
              "Timeline + rehearsal management",
              "Optional mailed VIP guest boxes and luxury gifting",
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-[#ad8130]/20">
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIRTUAL WEDDINGS ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <h2 className="text-4xl font-serif text-[#101011]">
            🤍 VIRTUAL WEDDING EXPERIENCES
          </h2>
<p className="text-lg text-gray-700 font-bold">  For the couple who wants to share their love story with guests near and far.
 </p>
          <p className="text-lg text-gray-700">
          Even when guests can’t attend in person, they can still experience the joy, emotion, and connection of your wedding day. We specialize in creating elegant, beautifully coordinated virtual wedding experiences your guests will remember.

          </p>
<p className="text-lg text-gray-700 font-bold"> Wedding Virtual Services Include:
 </p>
          <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            {[
              "Livestream setup & coordination",
              "Virtual ceremony hosting",
              "Digital guest experience design",
              "Custom branded screens, frames & slide graphics",
              "Vendor coordination for hybrid weddings",
              "Audio + visual support",
              "Virtual toast & message coordination",
              "Family video integrations",
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f6f2] p-8 rounded-3xl">
                ✔ {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="font-semibold text-[#ad8130] mb-4">Perfect for:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Destination weddings</li>
              <li>Intimate ceremonies</li>
              <li>Multi-day celebrations</li>
              <li>Elopements with livestream</li>
              <li>Couples with global families</li>
            </ul>
          </div>

          <p className="italic text-xl text-[#101011] mt-8">
            Your love deserves to be witnessed — from anywhere.
          </p>
        </div>
      </section>

      {/* ================= CORPORATE SECTION ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <h2 className="text-4xl font-serif text-[#ad8130]">
            💼 VIRTUAL & HYBRID CORPORATE EVENTS
          </h2>

          <p className="text-lg text-white/80">
            High-impact, beautifully executed digital experiences for brands,
            nonprofits & organizations.
          </p>
<p>
We elevate virtual and hybrid corporate events with professional strategy, creative storytelling, and technical precision. From intimate trainings to large-scale multi-city events, we ensure your message is delivered with clarity, engagement, and excellence.


</p>
<p className="text-lg text-gray-700 font-bold">

    Corporate Virtual Services Include:

</p>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            {[
              "Virtual conferences & summits",
              "Corporate trainings",
              "Fundraiser livestreams",
              "Board meetings & webinars",
              "Product launches",
              "Hybrid awards ceremonies",
              "Brand activations",
              "Leadership retreats",
              "Community events & nonprofit initiatives",
            ].map((item, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl border border-[#ad8130]/30">
                ✔ {item}
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-4 text-white/80">
            <p>We manage every detail:</p>
            <p>Run-of-show development</p>
            <p>Speaker preparation</p>
            <p>Sponsor integrations</p>
            <p>Branded presentation decks</p>
            <p>Registration + platform setup</p>
            <p>Technical producer support</p>
            <p>Rehearsals + backstage management</p>
            <p>VIP attendee experience (optional luxury boxes mailed)</p>
            <p>Custom overlays, animations, & lower thirds</p>
          </div>

          <p className="text-xl italic mt-10">
            Your virtual event will feel polished, professional,
            and beautifully branded from start to finish.
          </p>
        </div>
      </section>

      {/* ================= WHY TRUST ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center text-[#101011] mb-16">
            WHY CLIENTS TRUST LIVE N LAVISH EVENTS FOR VIRTUAL EXPERIENCES
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            {[
              "15+ years of luxury event planning & creative direction",
              "Seamless communication and expert technical organization",
              "Strong creative vision + curated guest experience design",
              "Professional virtual production support",
              "Hybrid event expertise for online + in-person audiences",
              "A warm, faith-filled team that genuinely cares about your event",
              "A luxury-level execution (even online)",
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f6f2] p-8 rounded-3xl">
                ✔ {item}
              </div>
            ))}
          </div>

          <p className="text-center text-xl italic mt-16 text-black">
            Your event deserves more than a standard livestream —
            it deserves a curated experience.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-[#f8f6f2]">
        <h2 className="text-3xl md:text-4xl font-serif text-[#101011] mb-8">
          READY TO CREATE YOUR VIRTUAL OR HYBRID EVENT?
        </h2>

        <p className="text-lg text-gray-700 mb-10">
          Let’s design an experience your audience will remember.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/contact"
            className="bg-[#ad8130] text-white px-10 py-4 rounded-full shadow-lg"
          >
            Book a Virtual Consultation
          </a>

          <a
            href="/contact"
            className="border border-[#ad8130] text-[#ad8130] px-10 py-4 rounded-full"
          >
            Inquire About Your Virtual Event
          </a>
        </div>
      </section>
    </section>
  );
}
