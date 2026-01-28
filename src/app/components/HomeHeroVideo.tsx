"use client";

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  /* ▶️ Play / Pause */
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  /* 🔇 Mute / Unmute */
  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  /* 👀 Auto-pause when out of view */
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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          {/* VIDEO */}
          <video
            ref={videoRef}
            className="w-full 
                       h-[220px] 
                       sm:h-[300px] 
                       md:h-[420px] 
                       lg:h-[520px] 
                       object-cover"
            src="https://livenlavishevents.com/wp-content/uploads/2021/03/Edited_20210301_090007.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* CONTROLS */}
          <div className="absolute bottom-4 right-4 flex gap-3">

            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="bg-black/60 text-white p-3 rounded-full 
                         backdrop-blur hover:bg-black/80 transition"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/* Mute / Unmute */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="bg-black/60 text-white p-3 rounded-full 
                         backdrop-blur hover:bg-black/80 transition"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
