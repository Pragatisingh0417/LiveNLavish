"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="bg-[#fffaf4] text-[#1a1a1a]">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/blog-image.jpg"
          alt="Luxury Wedding Planning by Lekita Range"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white font-serif text-4xl md:text-6xl max-w-4xl px-6"
        >
          Spotlight on Luxury Wedding Planner Lekita Range
        </motion.h1>
      </section>

      {/* ---------------- BLOG CONTENT ---------------- */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8f8c88] mb-6">
            A Visionary in Luxury Wedding Planning & Design
          </h2>

          <p className="text-lg leading-relaxed">
            In the world of luxury wedding planning, few names command as much
            respect and admiration as <strong>Lekita Range</strong>. As the CEO
            of <strong>Live N Lavish Events</strong> and founder of the
            <strong> Lavish Branding Academy</strong>, Lekita has spent over a
            decade transforming wedding dreams into breathtaking realities.
          </p>
        </div>

        {/* ---------------- IMAGE ROW (2 IMAGES) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/service-2.jpeg"
              alt="Luxury Wedding Design Miami"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/service-6.jpeg"
              alt="Elegant Ballroom Wedding Decor"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg leading-relaxed mb-6">
            At <strong>Live N Lavish Events</strong>, Lekita specializes in
            crafting high-end weddings that exude elegance, sophistication, and
            intentional design. From intimate beachfront ceremonies in Miami to
            grand ballroom affairs in Palm Beach, every celebration is treated
            as a masterpiece.
          </p>

          <p className="text-lg leading-relaxed">
            Her signature approach blends custom event design, luxurious floral
            installations, premium décor rentals, and specialized lighting—
            all curated to create unforgettable, magazine-worthy moments.
          </p>
        </div>

        {/* ---------------- IMAGE ROW (3 IMAGES) ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/service-1.jpeg"
              alt="Beachfront Luxury Wedding"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/service-8.jpeg"
              alt="Luxury Wedding Floral Design"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/service-3.jpeg"
              alt="High-End Wedding Reception Decor"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Academy Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-6">
            Empowering Entrepreneurs Through Lavish Branding Academy
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Beyond weddings, Lekita is deeply committed to empowering fellow
            entrepreneurs. Through the <strong>Lavish Branding Academy</strong>,
            she mentors wedding planners, event designers, and luxury service
            providers on scaling their businesses to six-figure success.
          </p>

          <p className="text-lg leading-relaxed italic">
            From premium client acquisition to high-end wedding branding
            strategies, her academy serves as a launchpad for creative
            professionals ready to elevate their brand and income.
          </p>
        </div>
         {/* Academy Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-6">
Plan Your Dream Luxury Wedding in South Florida
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Beyond weddings, Lekita is deeply committed to empowering fellow
            entrepreneurs. Through the <strong>Lavish Branding Academy</strong>,
            she mentors wedding planners, event designers, and luxury service
            providers on scaling their businesses to six-figure success.
          </p>

          <p className="text-lg leading-relaxed italic">
            From premium client acquisition to high-end wedding branding
            strategies, her academy serves as a launchpad for creative
            professionals ready to elevate their brand and income.
          </p>
        </div>

        {/* ---------------- COMMITMENT TO EXCELLENCE ---------------- */}
<div className="max-w-4xl mx-auto text-center py-20">
  <h3 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-6">
    A Commitment to Excellence & Community
  </h3>

  <p className="text-lg leading-relaxed mb-6">
    Lekita’s influence extends far beyond her businesses. She is a sought-after
    speaker, educator, and mentor within the luxury wedding industry—continuously
    sharing her expertise with creatives who aspire to deliver elite wedding
    experiences.
  </p>

  <p className="text-lg leading-relaxed">
    You can follow her journey and insights on Instagram and Facebook, where she
    inspires both engaged couples and wedding professionals with refined design,
    business education, and behind-the-scenes luxury moments.
  </p>
</div>

{/* ---------------- IMAGE ROW (2 IMAGES) ---------------- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-6xl mx-auto px-6">
  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
    <Image
      src="/images/image-4.jpeg"
      alt="Luxury Wedding Industry Speaker"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
    <Image
      src="/images/image-3.jpeg"
      alt="High-End Wedding Design Details"
      fill
      className="object-cover"
    />
  </div>
</div>

{/* ---------------- EXPERIENCE SECTION ---------------- */}
<div className="max-w-4xl mx-auto py-20 px-6">
  <h3 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-6 text-center">
    Our Experience Working with Lekita
  </h3>

  <p className="text-lg leading-relaxed mb-6">
    As luxury wedding photographers in South Florida, we’ve had the pleasure of
    collaborating with Lekita Range on numerous high-end weddings—and every event
    has been nothing short of spectacular.
  </p>

  <p className="text-lg leading-relaxed">
    Her meticulous attention to detail, refined creativity, and unwavering
    commitment to excellence align seamlessly with our mission to capture the
    most stunning, heartfelt moments. From opulent Miami weddings to lavish Palm
    Beach soirées, every celebration we’ve worked on together has been a true
    work of art.
  </p>
</div>

{/* ---------------- IMAGE ROW (3 IMAGES) ---------------- */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto px-6">
  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
    <Image
      src="/images/image-2.jpeg"
      alt="Opulent Miami Wedding"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
    <Image
      src="/images/image-1.jpeg"
      alt="Palm Beach Luxury Wedding"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
    <Image
      src="/images/DancingOnTheClouds1.png"
      alt="Luxury Wedding Reception Photography"
      fill
      className="object-cover"
    />
  </div>
</div>

{/* ---------------- FINAL CTA ---------------- */}
<div className="bg-[#111] text-white py-24 px-6 text-center">
  <h3 className="text-3xl md:text-4xl font-serif mb-6">
    Plan Your Dream Luxury Wedding in South Florida
  </h3>

  <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8 text-white/90">
    If you’re an engaged couple seeking an elite wedding planner to design a
    sophisticated, one-of-a-kind celebration, Lekita Range and Live N Lavish
    Events are the perfect choice. Paired with our luxury wedding photography
    expertise, your wedding will be captured in breathtaking detail—creating
    timeless memories that last a lifetime.
  </p>

  <p className="text-white/80 mb-8">
    📍 Serving Miami, Palm Beach, Fort Lauderdale, and all of South Florida
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-6">
    <a
      href="#"
      className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
    >
      Visit Live N Lavish Events Website
    </a>

    <a
      href="#"
      className="px-8 py-4 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
    >
      Inquire for Luxury Wedding Photography
    </a>
  </div>

  <p className="mt-10 italic text-white/80">
    Don’t settle for ordinary—let’s create something truly extraordinary.
  </p>
</div>

      </div>
    </section>
  );
}
