"use client";

import Image from "next/image";
import Link from "next/link";

const showcaseItems = [
  {
    title: "Meet Our Owner",
    img: "/images/lady-image.jpeg",
    link: "/about",
  },
  {
    title: "Wedding Planning Tips",
    img: "/images/wedding-decore-1.png",
  },
  {
    title: "Event Decor & Planning Tips",
    img: "/images/service-7.png",
  },
  {
    title: "Local Venues",
    img: "/images/wedding-decore.png",
  },
];

export default function HomeShowcaseGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 overflow-hidden ">
          {showcaseItems.map((item, index) => {
            const CardContent = (
              <div className="relative group h-[260px] md:h-[380px] overflow-hidden">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-serif opacity-0 group-hover:opacity-100 transition duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>
            );

            /* Only FIRST item has link */
            return item.link ? (
              <Link key={index} href={item.link} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
