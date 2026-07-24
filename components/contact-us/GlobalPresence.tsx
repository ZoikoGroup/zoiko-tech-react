"use client";

import React from "react";

export default function GlobalPresence() {
  const locations = [
    { image: "/contact-us/C1.png" },
    { image: "/contact-us/C2.png" },
    { image: "/contact-us/C3.png" },
    { image: "/contact-us/C4.png" },
  ];

  return (
    <section className="w-full bg-[#0a233c] text-white px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight text-white mb-2">
            Locations-Global Presence
          </h2>
          <p className="text-slate-300 text-[14px] md:text-[15px] font-light leading-snug">
            Explore our service offerings and subsidiaries
            <br className="hidden sm:block" />
            in specific geography
          </p>
        </div>

        {/* 4-Image Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-700/50 rounded-lg overflow-hidden shadow-2xl">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="relative h-[280px] sm:h-[340px] md:h-[400px] w-full overflow-hidden group border-b sm:border-b-0 sm:border-r border-slate-700/50 last:border-none"
            >
              {/* Country Image */}
              <img
                src={loc.image}
                alt="image"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
