"use client";

import React from "react";

// Individual Brand Data with absolute image paths
const ventures = [
  {
    id: "zoiko-mobile",
    title: "Zoiko Mobile",
    description:
      "A purpose-driven wireless network inspired by a love for animals and music – offering ethically designed mobile plans, global connectivity, and culturally rich experiences that build meaningful communities.",
    logoSrc: "/about-us/zoiko-mobile.png",
  },
  {
    id: "golite-mobile",
    title: "GoLite Mobile",
    description:
      "A conservation-focused MVNO on the AT&T network, donating a portion of all profits to marine life protection and oceanic advocacy.",
    logoSrc: "/about-us/golitemobile.png",
  },
  {
    id: "zoiko-mobile-uk",
    title: "Zoiko Mobile UK",
    description:
      "A British wireless services provider delivering ethically aligned mobile services and connectivity with culture at its core.",
    logoSrc: "/about-us/zoiko-mobile.png",
  },
  {
    id: "driverx-mobile",
    title: "DriverX Mobile",
    description:
      "A mobile service built for everyday motorists and professional drivers, offering practical plans, GPS integrations, and discounts tied to road services and auto needs.",
    logoSrc: "/leadership-and-governance/driverxtra.png", //need to change to driver mobile
  },
  {
    id: "sable-mobile",
    title: "Sable Mobile",
    description:
      "Sable Mobile delivers purpose-driven wireless service, empowering the African American community through culture, connection, and progress.",
    logoSrc: "/about-us/sable-mobile.png",
  },
  {
    id: "raices-mobile",
    title: "Raices Mobile",
    description:
      "Raices Mobile is a culturally vibrant wireless network connecting Latino families and youth across the U.S. With tailored plans and seamless cross-border connectivity.",
    logoSrc: "/about-us/raices-mobile.png",
  },
];

export default function MobileVenturesSection() {
  return (
    <section className="w-full bg-[#f4f7f6] text-[#0f1124] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Heading */}
        <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#207885] text-center leading-[1.3] max-w-4xl mb-12 tracking-tight">
          Our innovations also power next-generation mobile{" "}
          <br className="hidden md:inline" />
          ventures under the Zoiko Group umbrella, including:
        </h2>

        {/* Card Container holding the 6 Columns */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-[#e2e8f0]/60 p-6 md:p-8 lg:p-10 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {ventures.map((venture) => (
              <div
                key={venture.id}
                className="flex flex-col items-start text-start px-3 py-6 lg:py-2 first:pt-0 lg:first:pt-2 last:pb-0 lg:last:pb-2"
              >
                {/* Brand Logo Image Header */}
                <div className="mb-4 flex items-center justify-start h-14 w-full">
                  <img
                    src={venture.logoSrc}
                    alt={venture.title}
                    className="max-h-full max-w-[120px] object-contain"
                  />
                </div>

                {/* Venture Title */}
                <h3 className="text-[15px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {venture.title}
                </h3>

                {/* Venture Description */}
                <p className="text-sm text-[#64748b] leading-[1.5] font-normal">
                  {venture.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Subtext */}
        <p className="text-center text-[13px] md:text-[14px] text-[#64748b] max-w-5xl leading-relaxed font-normal px-4">
          These ventures are powered by ZoikoTech&apos;s robust telecom
          infrastructure, intelligent billing automation, and AI-enhanced
          customer management systems - ensuring operational excellence and
          customer delight at every interaction.
        </p>
      </div>
    </section>
  );
}
