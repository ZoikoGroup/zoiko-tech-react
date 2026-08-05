"use client";

import React from "react";

export default function WhyZoiko() {
  const pillars = [
    {
      num: "01",
      title: "Next-Gen by Design",
      desc: "Built from the ground up",
      img: "/home/v1.png",
      icon: (
        <svg
          className="w-10 h-10 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Human-First Tech",
      desc: "Inclusive and ethical",
      img: "/home/v2.png",
      icon: (
        <svg
          className="w-10 h-10 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Global by Nature",
      desc: "Scalable across regions",
      img: "/home/v3.png",
      icon: (
        <svg
          className="w-10 h-10 text-[#207885]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpWhy {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-why {
              animation: popUpWhy 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-pop-up-why">
        <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-[#0f1124] mb-14">
          Why Choose ZoikoTech?
        </h2>

        {/* Unified Card Container */}
        <div className="w-full bg-white border border-[#ebedf5] rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 relative divide-y md:divide-y-0 md:divide-x divide-[#CBCBCB]">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start relative ${
                idx !== 0 ? "pt-8 md:pt-0 md:pl-8" : ""
              }`}
            >
              {/* Background Watermark Number */}
              <span className="text-[64px] font-black text-[#F3F3F3] absolute -top-10 select-none pointer-events-none z-0">
                {item.num}
              </span>

              <img src={item.img}alt={item.title} className="mt-8 m-4 md:m-4 z-10"/>

              {/* Pillar Title & Description */}
              <h3 className="text-[17px] font-bold text-[#0f1124] mb-1.5 relative z-10">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#6b719c] font-medium leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
