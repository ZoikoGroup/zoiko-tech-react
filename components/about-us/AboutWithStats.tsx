"use client";

import React from "react";

export default function AboutWithStats() {
  const stats = [
    {
      number: "100+",
      label: "Skilled and motivated staff",
      icon: (
        <svg
          className="w-5 h-5 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: "80+",
      label: "Successful projects",
      icon: (
        <svg
          className="w-5 h-5 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      number: "10+",
      label: "Global Venture",
      icon: (
        <svg
          className="w-5 h-5 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      number: "58+",
      label: "Clients worldwide",
      icon: (
        <svg
          className="w-5 h-5 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0L10 4m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1m2 1l2-1m-2 1v-2.5M18 18l2-1m-2 1l-2-1m2 1v-2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Story Text */}
        <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
          <span className="text-[#207885] text-[13px] font-bold tracking-tight mb-2">
            About ZoikoTech
          </span>

          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-[#207885] mb-6 leading-[1.18]">
            Intelligence. Infrastructure. Impact.
          </h2>

          <p className="text-[#6b719c] text-[14px] md:text-[15px] leading-relaxed font-normal max-w-2xl">
            ZoikoTech Inc. is a California-based global technology company
            building the intelligent infrastructure of the future. At the heart
            of its creation is the vision of Lennox McLeod – a tech-savvy,
            serial entrepreneur whose deep expertise spans finance, technology,
            law, and international strategy. With over three decades of global
            business leadership, McLeod has consistently anticipated trends,
            built transformative enterprises, and merged commercial insight with
            technological foresight.
          </p>
        </div>

        {/* Right Column: 4 Stat Cards */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-white rounded-2xl p-4 md:p-5 shadow-xs border border-[#eef2f6] flex items-center justify-between transition-shadow duration-300 hover:shadow-md"
            >
              <div>
                <h3 className="text-2xl md:text-[28px] font-extrabold text-[#207885] leading-none mb-1">
                  {item.number}
                </h3>
                <p className="text-[12.5px] text-[#7d8296] font-medium">
                  {item.label}
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-[#f0f7f8] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
