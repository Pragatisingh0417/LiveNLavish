"use client";

import Image from "next/image";
import Link from "next/link";

export default function WeddingCollection() {
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-gradient-to-b from-[#fffaf5] via-[#fffdfb] to-[#bba783]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* LEFT TEXT (col-1) */}
        <div className="flex flex-col justify-start">
          <p className="text-sm tracking-wide text-[#ad8130] mb-4">
            Your Forever Begins Here
          </p>

          <h2 className="text-4xl mb-4 font-semibold leading-tight text-black">
            Elegant Wedding <br />
            Gowns, Timeless <br />
            Accessories.
          </h2>
          <div className="col-span-1 h-[300px]">
            <Image
              src="/images/lavish-6.png"
              alt="celebration"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
        </div>

        {/* MIDDLE GRID (col-2 & col-3) */}
        <div className="col-span-2 grid grid-cols-2 gap-6">

          {/* Tall Image Left */}
          <div className="col-span-1 h-[300px]">
            <Image
              src="/images/lavish-7.png"
              alt="wedding"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>

          {/* Tall Image Right */}
          <div className="col-span-1 h-[300px]">
            <Image
              src="/images/lavish-9.png"
              alt="celebration"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
           <div className="col-span-1 h-[300px]">
            <Image
              src="/images/lavish-9.png"
              alt="celebration"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>

          {/* Wide Bottom Image */}
          <div className="col-span-1 h-[300px]">
            <Image
              src="/images/lavish-10.png"
              alt="bride couple"
              width={1200}
              height={600}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>

        </div>

        {/* RIGHT CARD (col-4) */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-5xl mb-6 font-semibold text-black leading-none">
              Ready to be our Lavish Client?
            </h3>
            <p className="text-gray-600 mt-1 mb-6">
Complete form to receive a customized quote from us            </p>

            <Link
              href="/contact"
              className="bg-[#ad8130] text-white px-7 py-3 rounded-full text-sm font-medium"
            >
              Request A Call Back
            </Link>
          </div>

          {/* Bottom Right Image */}
          <div className="mt-10 h-[300px]">
            <Image
              src="/images/lavish-6.png"
              alt="couple elegant"
              width={500}
              height={600}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
