"use client";

export default function SubscribeSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[42px] md:text-[52px] leading-tight font-serif ">
            Subscribe for <br />
            the exclusive <br />
            updates!
          </h2>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-8">

          {/* INPUT ROW */}
          <div className="grid md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-black/40 py-3 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email"
              className="border-b border-black/40 py-3 outline-none focus:border-black"
            />

            <select
              className="border-b border-black/40 py-3 outline-none focus:border-black bg-transparent"
            >
              <option value="">Country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>India</option>
              <option>United Kingdom</option>
            </select>
          </div>

          {/* CONSENT */}
          <label className="flex items-start gap-3 text-sm text-gray-700 max-w-xl">
            <input type="checkbox" className="mt-1 accent-[#d4af37]" />
            <span>
              We won't pass your details on to anyone else. By clicking the sign
              up button you agree to our{" "}
             
                Terms of Use
              
              and
              
                Privacy Policy
             
            </span>
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="inline-block px-12 py-4 rounded-full bg-[#d4af37] text-white font-semibold text-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
