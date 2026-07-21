"use client";

import React, { useState } from "react";

export default function ServicesByIndustry() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Telecoms",
      image: "/home/card 1.png",
      details: [
        "OSS/BSS (ZoikoNex)",
        "eSIM solutions",
        "Smart billing",
        "Fraud detection",
        "Partner API integrations",
      ],
    },
    {
      id: 2,
      title: "Financial Services",
      image: "/home/card 2.png",
      details: [
        "Embedded finance APIs",
        "AI risk dashboards",
        "Real-time compliance (KYC/AML)",
        "Digital onboarding",
        "Cloud-secure workloads",
      ],
    },
    {
      id: 3,
      title: "SMBs",
      image: "/home/card 3.png",
      details: [
        "Web design and optimisation",
        "CRM and cloud setup",
        "Branding and logo design",
        "Marketing automation",
        "Cybersecurity & backups",
      ],
    },
    {
      id: 4,
      title: "Government & NGOs",
      image: "/home/card 4.png",
      details: [
        "Citizen portals",
        "Accessible design",
        "Data dashboards",
        "E-signature platforms",
        "Sustainability monitoring",
      ],
    },
    {
      id: 5,
      title: "Education & Media",
      image: "/home/card 5.png",
      details: [
        "E-learning platforms",
        "Streaming tech",
        "AR/VR for training",
        "Multilingual content systems",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 flex flex-col items-center justify-center overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpIndustry {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-industry {
              animation: popUpIndustry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-pop-up-industry">
        <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-[#0f1124] mb-12">
          Services by Industry
        </h2>

        {/* Carousel Viewport Container */}
        <div className="w-full relative overflow-hidden mb-6">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3 + 1.6)}%)`,
            }}
          >
            {services.map((item) => (
              <div
                key={item.id}
                className="w-[calc(100%-1.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 h-[460px] relative rounded-xl overflow-hidden group cursor-pointer shadow-md bg-white border border-[#ebedf5]"
              >
                {/* Default State Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Default Bottom Teal Overlay Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#59939b]/90 backdrop-blur-xs p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-[20px] font-bold text-left">
                    {item.title}
                  </h3>
                </div>

                {/* On-Hover Full Card Teal Detailed View Overlay */}
                <div className="absolute inset-0 bg-[#3f7c85]/95 p-6 flex flex-col justify-end text-left text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  {/* Subtle Background Ghost Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
                  />

                  <div className="relative z-10">
                    <h3 className="text-[22px] font-extrabold mb-4 border-b border-white/20 pb-2">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 mb-2">
                      {item.details.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-[13px] font-medium leading-tight flex items-start gap-2 text-white/90"
                        >
                          <span className="text-white font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots and Slide Indicator */}
        <div className="w-full max-w-7xl flex items-center justify-between px-2">
          {/* Dot Controllers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: services.length - 2 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-3 h-3 bg-[#3f7c85]"
                    : "w-2 h-2 bg-[#93bec4] hover:bg-[#59939b]"
                }`}
              />
            ))}
          </div>

          {/* Current Index Counter Indicator */}
          <span className="text-[14px] font-bold text-[#3f7c85]">
            {currentIndex + 1} / {services.length}
          </span>
        </div>
      </div>
    </section>
  );
}
