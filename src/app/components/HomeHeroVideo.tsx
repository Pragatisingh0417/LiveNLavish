"use client";

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(!videoRef.current.paused);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRef.current?.pause();
          setIsPlaying(false);
        } else {
          videoRef.current?.play();
          setIsPlaying(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">
  <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">
              Luxury Events Crafted with Purpose
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Live & Lavish Events, we design unforgettable experiences that
              celebrate culture, elegance, and storytelling. Every detail is
              curated to reflect your vision — elevated, intentional, and bold.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Premium event design & execution</li>
              <li>• Cultural celebrations & luxury branding</li>
              <li>• Immersive experiences that leave impact</li>
            </ul>

            <button className="mt-8 px-8 py-3 rounded-full bg-[#ad8130] text-white font-semibold hover:opacity-90 transition">
              Explore Our Work
            </button>
          </div>
          {/* ================= VIDEO ================= */}
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
            <video
              ref={videoRef}
              className="w-full h-[260px] md:h-[420px] object-cover"
              src="https://livenlavishevents.com/wp-content/uploads/2021/03/Edited_20210301_090007.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* CONTROLS */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <button
                onClick={togglePlay}
                className="bg-black/60 text-white p-3 rounded-full backdrop-blur"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button
                onClick={toggleMute}
                className="bg-black/60 text-white p-3 rounded-full backdrop-blur"
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
        

        </div>
      </div>
    </section>
  );
}
