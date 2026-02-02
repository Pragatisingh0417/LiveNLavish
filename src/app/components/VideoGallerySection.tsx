"use client";

export default function VideoGallerySection() {
  const videos = [
    "ha2WLk4Rjgc",
    "gYCKai_fnuY",
    "Gy5zHCix7aw",
    "7fNh0vQzt3U",
  ];

  return (
    <section className="py-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

         <h2 className="text-4xl  sm:text-5xl font-bold text-[#000000] text-center mb-10">
          Our Celebration Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
            >
              <div className="relative pb-[56.25%]"> {/* 16:9 */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
