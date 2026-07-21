"use client";

import React from "react";

// Individual Brand Data
const ventures = [
  {
    id: "zoiko-mobile",
    title: "Zoiko Mobile",
    description:
      "A purpose-driven wireless network inspired by a love for animals and music – offering ethically designed mobile plans, global connectivity, and culturally rich experiences that build meaningful communities.",
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center h-12">
        <div className="flex items-center gap-1">
          <span className="text-[#e60067] font-black tracking-tight text-xl italic font-sans">
            ZOIKO
          </span>
          <span className="text-[10px] text-[#e60067] font-bold align-super">
            TM
          </span>
        </div>
        <span className="text-[#e60067] text-[10px] font-bold tracking-[0.2em] -mt-1 uppercase">
          MOBILE
        </span>
      </div>
    ),
  },
  {
    id: "golite-mobile",
    title: "GoLite Mobile",
    description:
      "A conservation-focused MVNO on the AT&T network, donating a portion of all profits to marine life protection and oceanic advocacy.",
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center h-12">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full border-2 border-[#9333ea] border-t-[#84cc16] border-r-[#f97316] flex items-center justify-center font-black text-[10px] text-[#9333ea]">
            GO
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[#84cc16] font-extrabold text-xs tracking-wider leading-none">
              LITE
            </span>
            <span className="text-[#9333ea] font-bold text-[9px] tracking-widest leading-none mt-0.5">
              MOBILE
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "zoiko-mobile-uk",
    title: "Zoiko Mobile UK",
    description:
      "A British wireless services provider delivering ethically aligned mobile services and connectivity with culture at its core.",
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center h-12">
        <div className="flex items-center gap-1">
          <span className="text-[#e60067] font-black tracking-tight text-xl italic font-sans">
            ZOIKO
          </span>
          <span className="text-[10px] text-[#e60067] font-bold align-super">
            TM
          </span>
        </div>
        <div className="flex items-center gap-1 -mt-1">
          <span className="text-[#e60067] text-[10px] font-bold tracking-[0.15em] uppercase">
            MOBILE
          </span>
          <span className="text-[#0f1124] font-extrabold text-[10px] tracking-normal">
            UK
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "driverx-mobile",
    title: "DriverX Mobile",
    description:
      "A mobile service built for everyday motorists and professional drivers, offering practical plans, GPS integrations, and discounts tied to road services and auto needs.",
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center h-12">
        <div className="flex items-center gap-1.5">
          <svg
            className="w-5 h-5 text-[#15803d]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 13h1v7c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-7h8v7c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-7h1c.55 0 1-.45 1-1v-2c0-1.66-1.34-3-3-3H6c-1.66 0-3 1.34-3 3v2c0 .55.45 1 1 1z" />
          </svg>
          <span className="text-[#15803d] font-black text-lg tracking-tight">
            RIVER<span className="text-[#eab308]">X</span>
          </span>
        </div>
        <span className="text-[#15803d] text-[9px] font-bold tracking-[0.2em] -mt-1 uppercase">
          MOBILE
        </span>
      </div>
    ),
  },
  {
    id: "sable-mobile",
    title: "Sable Mobile",
    description:
      "Sable Mobile delivers purpose-driven wireless service, empowering the African American community through culture, connection, and progress.",
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center h-12">
        <div className="flex items-center gap-1">
          <span className="text-[#1e293b] font-black text-xl tracking-tighter uppercase font-serif">
            S<span className="text-[#d97706]">A</span>BLE
          </span>
          <span className="text-[9px] text-[#1e293b] font-bold align-super">
            TM
          </span>
        </div>
        <span className="text-[#d97706] text-[9px] font-bold tracking-[0.25em] -mt-1 uppercase">
          MOBILE
        </span>
      </div>
    ),
  },
  {
    id: "raices-mobile",
    title: "Raices Mobile",
    description:
      "Raices Mobile is a culturally vibrant wireless network connecting Latino families and youth across the U.S. With tailored plans and seamless cross-border connectivity.",
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center h-12">
        <div className="flex items-center gap-0.5">
          <span className="text-[#16a34a] font-bold text-xl font-serif italic tracking-wide">
            Raices
          </span>
          <span className="text-[9px] text-[#16a34a] font-bold align-super">
            TM
          </span>
        </div>
        <span className="text-[#16a34a] text-[9px] font-bold tracking-[0.2em] -mt-1 uppercase">
          MOBILE
        </span>
      </div>
    ),
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
                className="flex flex-col items-center text-center px-3 py-6 lg:py-2 first:pt-0 lg:first:pt-2 last:pb-0 lg:last:pb-2"
              >
                {/* Brand Logo Header */}
                <div className="mb-4 flex items-center justify-center">
                  {venture.renderLogo()}
                </div>

                {/* Venture Title */}
                <h3 className="text-[15px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {venture.title}
                </h3>

                {/* Venture Description */}
                <p className="text-[12.5px] text-[#64748b] leading-[1.5] font-normal">
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
