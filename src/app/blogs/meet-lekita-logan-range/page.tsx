"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetLetika() {
    return (
        <section className="bg-[#fffaf4] text-[#1a1a1a]">
            {/* ---------------- HERO BANNER ---------------- */}
            <section className="relative h-[65vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
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
                    className="relative z-10 text-center text-white font-serif text-4xl md:text-4xl max-w-4xl px-6"
                >
                    Meet Lekita Logan-Range

                    <p className="relative z-10 text-center text-white font-serif text-4xl md:text-2xl max-w-4xl px-6 mt-2"
                    > Inspiration · Luxury Wedding Planner </p>
                </motion.h1>

            </section>

            {/* ---------------- BLOG CONTENT ---------------- */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-2xl font-serif text-[#8f8c88] mb-6">
                        Spotlight on Luxury Wedding Planner Lekita Range
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#8f8c88] mb-6">
                        A Visionary in Luxury Wedding Planning & Design
                    </h2>

                    <p className="text-base leading-relaxed ">
                        In the world of luxury wedding planning, few names command as much
                        respect and admiration as <strong>Lekita Range</strong>. As the CEO
                        of <strong>Live N Lavish Events</strong> and founder of the
                        <strong> Lavish Branding Academy</strong>, Lekita has spent over a
                        decade transforming wedding dreams into breathtaking realities.
                    </p>
                    <p className="text-base leading-relaxed mt-2">
                        At Live N Lavish Events, she specializes in crafting high-end weddings that exude elegance and sophistication. Whether it's an intimate beachfront ceremony in Miami or a grand ballroom affair in Palm Beach, every event is a masterpiece of luxury, personalization, and flawless execution. Her services include custom event design, floral arrangements, luxury décor rentals, and specialized lighting—each element carefully curated to create an unforgettable experience.


                    </p>
                </div>

                {/* ---------------- IMAGE ROW (2 IMAGES) ---------------- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-1.jpg"
                            alt="Luxury Wedding Design Miami"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-2.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-3.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-4.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-5.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-6.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-7.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-8.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-9.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-10.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-11.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-12.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-14.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-13.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-15.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-16.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-17.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-18.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-19.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-20.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-21.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-22.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-23.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-24.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-25.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-26.jpg"
                            alt="Elegant Ballroom Wedding Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Story Section */}
                <div className="max-w-4xl mx-auto mb-20">

                    <h2 className="text-3xl md:text-4xl font-serif text-[#8f8c88] mb-6">
                        Empowering Entrepreneurs Through Lavish Branding Academy
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Beyond event planning, Lekita is dedicated to empowering fellow entrepreneurs. Through the Lavish Branding Academy, she educates wedding planners, event designers, and luxury service providers on how to scale their businesses to six-figure success. Covering everything from high-end wedding branding strategies to premium client acquisition, her academy is a powerhouse for industry professionals looking to elevate their careers.


                    </p>


                </div>

                {/* ---------------- IMAGE ROW (3 IMAGES) ---------------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-27.jpg"
                            alt="Beachfront Luxury Wedding"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-28.jpg"
                            alt="Luxury Wedding Floral Design"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-29.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-30.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-31.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-32.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-33.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-34.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                            src="/blogs/blog-35.jpg"
                            alt="High-End Wedding Reception Decor"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Academy Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-6">
                        A Commitment to Excellence and Community
                    </h3>

                    <p className="text-lg leading-relaxed mb-6">
                        Lekita's influence extends beyond her businesses. She is a sought-after speaker, educator, and mentor in the luxury wedding industry, always sharing her knowledge and expertise with those striving to create elite wedding experiences. You can follow her journey and insights on Instagram and Facebook, where she continuously inspires both engaged couples and wedding professionals alike.


                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#8f8c88] mb-6">
                        Our Experience Working with Lekita
                    </h3>
                    <p className="text-lg leading-relaxed italic">
                        As luxury wedding photographers in South Florida, we’ve had the pleasure of working with Lekita Range on numerous high-end weddings, and every event has been nothing short of spectacular. Her attention to detail, creativity, and commitment to excellence align seamlessly with our mission to capture the most stunning, heartfelt moments for our couples. Whether it’s an opulent Miami wedding or a lavish Palm Beach soirée, every event we’ve collaborated on has been a true work of art.

                    </p>
                </div>
                {/* Academy Section */}





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
                     <p className="text-white/80 mb-8">
✨ Secure Your Luxury Wedding Experience Today! ✨

                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="https://livenlavishevents.com/" target="blank"
                            className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
                        >
Contact Live N Lavish Events:  Visit Website                        </a>

                        <a
                            href="/contact"
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
