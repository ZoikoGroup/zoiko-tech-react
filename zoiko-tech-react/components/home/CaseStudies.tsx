"use client";

import React, { useState } from "react";

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet sed vitae amet amet. Neque platea enim convallis fermentum euismod sed urna.",
      imageMain: "/home/case 1.png",
      imageOverlap: "/home/case 2.png",
      reverse: false,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet sed vitae amet amet. Neque platea enim convallis fermentum euismod sed urna.",
      imageMain: "#",
      imageOverlap: null, // Single placeholder style card for the second row
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
    <section className="w-full bg-[#F7F7F7] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
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

      <div className="w-full max-w-7xl mx-auto flex flex-col animate-pop-up-cases">
        {/* Section Header with Navigation Controls */}
        <div className="w-full flex items-center justify-between border-b border-[#e1e6eb] pb-6 mb-16">
          <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-[#0f1124]">
            Case Studies
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous case study"
              className="w-11 h-11 rounded-full border border-[#ebedf5] bg-white hover:bg-[#f0f2f7] text-[#0f1124] flex items-center justify-center shadow-xs transition-all duration-200 active:scale-95"
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
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next case study"
              className="w-11 h-11 rounded-full bg-[#207885] hover:bg-[#185e68] text-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95"
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
                  strokeWidth={2.5}
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
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Grouping Column */}
              <div
                className={`lg:col-span-6 relative flex items-center justify-center ${
                  item.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {item.imageOverlap ? (
                  /* Dual Overlapping Image Composition */
                  <div className="relative w-full max-w-[500px] h-[300px] md:h-[340px]">
                    {/* Primary Background Image */}
                    <div className="w-[72%] h-[80%] rounded-2xl overflow-hidden shadow-md absolute top-0 left-0 bg-white">
                      <img
                        src={item.imageMain}
                        alt="Primary case study dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Secondary Foreground Overlapping Image */}
                    <div className="w-[60%] h-[75%] rounded-2xl overflow-hidden shadow-xl absolute bottom-0 right-0">
                      <img
                        src={item.imageOverlap}
                        alt="Secondary case study team collaboration"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  /* Single Image / Placeholder Block */
                  <div className="w-full max-w-[500px] h-[280px] md:h-[320px] bg-[#c8cbd3] rounded-2xl shadow-inner flex items-center justify-center">
                    
                  </div>
                )}
              </div>

              {/* Text Narrative Column */}
              <div
                className={`lg:col-span-6 flex flex-col items-start text-left ${
                  item.reverse
                    ? "lg:order-1 lg:text-right lg:items-end"
                    : "lg:order-2"
                }`}
              >
                <h3 className="text-2xl md:text-[34px] font-extrabold tracking-tight text-[#0f1124] leading-tight mb-4 max-w-lg">
                  {item.title}
                </h3>

                <p className="text-[#6b719c] text-[14px] md:text-[15px] leading-relaxed font-normal mb-6 max-w-lg">
                  {item.description}
                </p>

                <button className="text-[#ff6b4a] hover:text-[#e55a39] font-bold text-[14px] transition-colors flex items-center gap-1">
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
