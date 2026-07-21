"use client";

import React from "react";

export default function ProductEcosystemGrid() {
  const products = [
    { title: "ZoikoTime", desc: "AI productivity tracking" },
    { title: "ZoikoSuite", desc: "Accounting, HR, compliance" },
    { title: "ZoikoNex", desc: "Telecom-grade OSS/BSS" },
    { title: "ElderTech", desc: "Companion AI for elderly" },
    { title: "CyberShield", desc: "SME security suite" },
    { title: "ZoikoComply", desc: "Global RegTech platform" },
    { title: "BookingOrbit", desc: "AI-powered bookings" },
  ];

  return (
    <section className="w-full bg-white text-white px-6 md:px-12 lg:px-16 py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpEcosystem {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-eco {
              animation: popUpEcosystem 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto animate-pop-up-eco">
        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="hover:bg-white text-[#0f1124] rounded-2xl p-6 min-h-[160px] flex flex-col justify-end transition-all duration-300 shadow-md group cursor-pointer"
            >
              <h3 className="text-[17px] font-bold text-[#0f1124] mb-1 group-hover:text-[#207885] transition-colors">
                {item.title}
              </h3>
              <p className="text-[12.5px] text-[#6b719c] font-medium leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
