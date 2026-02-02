"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function GallerySlider() {
  const testimonials = [
    { img: "/images/slider-1.jpg",   },
    { img: "/images/slider-2.jpg",   },
    { img: "/images/slider-3.jpg",  },
    { img: "/images/slider-4.jpg",  },
    { img: "/images/slider-5.jpg",  },
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden ">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-10">
        <h2 className="text-4xl  sm:text-5xl font-bold text-[#000000] text-center mb-10">
          OUR GALLERY
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
              <div className="bg-white shadow-xl rounded-2xl p-10 border border-[#f5e1d8]">
                <img
                  src={t.img}
                  alt="couple"
                  className="w-full h-80 object-cover rounded-xl mb-4"
                />
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
