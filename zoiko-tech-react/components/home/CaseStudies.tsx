"use client";

import React, { useState } from "react";

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      title: "Telecoms | MVNO Go-Live in Just 60 Days",
      description:
        "A growing Mobile Virtual Network Operator (MVNO) needed to accelerate time-to-market in a highly competitive space. With ZoikoNex, our flagship OSS/ BSS platform, the",
      imageMain: "/home/case 1.png",
      imageOverlap: "/home/case 2.png",
      reverse: false,
    },
    {
      id: 2,
      title: "NGOs | Multilingual Citizen Platform in 6 Weeks",
      description:
        "An international NGO serving diverse populations needed to create an accessible, multilingual digital platform. We delivered a fully responsive,",
      imageMain: "/home/case 3.png",
      imageOverlap: "/home/case 4.png",
      reverse: true,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#FFFFFF] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpCaseStudies {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-cases {
              animation: popUpCaseStudies 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-pop-up-cases">
        {/* Section Header with Navigation Controls */}
        <div className="w-full flex items-start justify-between border-b border-[#e1e6eb] pb-8 mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-[#0f1124] mb-3 leading-tight">
              Real Results. Real Impact. Powered by ZoikoTech.
            </h2>
            <p className="text-[#6b719c] text-[13.5px] md:text-[14.5px] leading-relaxed font-normal">
              At ZoikoTech, we believe the best proof of performance is client
              success. Our platforms and solutions are trusted by businesses,
              nonprofits, and public institutions to solve real-world
              problems—fast, securely, and at scale. Here are a few highlights
              that showcase how our technology delivers measurable impact across
              industries:
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 pt-2">
            <button
              onClick={handlePrev}
              aria-label="Previous case study"
              className="w-10 h-10 rounded-full border border-[#ebedf5] bg-white hover:bg-[#f0f2f7] text-[#0f1124] flex items-center justify-center shadow-xs transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next case study"
              className="w-10 h-10 rounded-full bg-[#207885] hover:bg-[#185e68] text-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Case Studies List Container */}
        <div className="flex flex-col gap-20 md:gap-28 w-full">
          {cases.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Overlapping Image Composition Column */}
              <div className="w-full lg:w-1/2 relative flex items-center justify-center">
                <div className="relative w-full max-w-[480px] h-[280px] md:h-[320px]">
                  {/* Primary Background Image */}
                  <div className="w-[68%] h-[82%] rounded-xl overflow-hidden shadow-md absolute top-0 left-0 bg-gray-100">
                    <img
                      src={item.imageMain}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Secondary Foreground Overlapping Image */}
                  <div className="w-[58%] h-[72%] rounded-xl overflow-hidden shadow-lg absolute bottom-0 right-0 bg-white">
                    <img
                      src={item.imageOverlap}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text Narrative Column */}
              <div
                className={`w-full lg:w-1/2 flex flex-col items-start ${
                  item.reverse
                    ? "lg:items-end lg:text-right"
                    : "lg:items-start lg:text-left"
                }`}
              >
                <h3 className="text-2xl md:text-[32px] font-extrabold tracking-tight text-[#0f1124] leading-tight mb-4 max-w-lg">
                  {item.title}
                </h3>

                <p className="text-[#6b719c] text-[14px] md:text-[15px] leading-relaxed font-normal mb-5 max-w-lg">
                  {item.description}
                </p>

                <button className="text-[#ff6b4a] hover:text-[#e55a39] font-bold text-[14px] transition-colors">
                  Read More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
