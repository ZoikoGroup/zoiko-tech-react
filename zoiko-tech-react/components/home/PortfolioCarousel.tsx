"use client";

import React, { useState } from "react";

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "Passionate about Design Interior",
      bgGradient: "from-[#a8d3d5] via-[#c2e2e3] to-[#8ebfc2]",
      image: "/home/card 6.png",
      alt: "Interior design e-commerce web platform UI",
    },
    {
      id: 2,
      title: "Mobile SuperApp & Logistics",
      bgGradient: "from-[#32d583] via-[#10b981] to-[#059669]",
      image: "/home/card 7.png",
      alt: "Mobile app interface with live map tracking and delivery UI",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="w-full bg-[#F5F5F5] text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpPortfolio {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-portfolio {
              animation: popUpPortfolio 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-pop-up-portfolio">
        {/* Left Column: Headline, Narrative & Navigation Controls */}
        <div className="lg:col-span-4 flex flex-col items-start text-left pr-0 lg:pr-6">
          <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-[#282828] mb-6">
            Portfolio
          </h2>

          <p className="text-[#282828] text-[13.5px] md:text-[14.5px] leading-relaxed font-normal mb-10 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Amet ac commodo convallis
            risus dui diam at pulvinar. Euismod eget aliquet netus integer
            ultrices vitae faucibus. Dignissim mauris neque amet sed. Enim nulla
            eu elementum ut etiam quam malesuada. Dui lorem sed nisl adipiscing
            sodales dolor odio nulla quis.
          </p>

          {/* Circle Arrow Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous portfolio item"
              className="w-12 h-12 rounded-full bg-[#207885] hover:bg-[#185e68] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-5 h-5"
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
              aria-label="Next portfolio item"
              className="w-12 h-12 rounded-full bg-[#207885] hover:bg-[#185e68] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-5 h-5"
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

        {/* Right Column: Sliding Cards Viewport */}
        <div className="lg:col-span-8 overflow-hidden relative w-full">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 52}%)`,
            }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="w-[85%] sm:w-[380px] md:w-[440px] shrink-0 h-[380px] md:h-[420px] rounded-[32px] p-4 md:p-6 relative overflow-hidden flex flex-col justify-center items-center group cursor-pointer"
              >
                {/* Background Colorful Card Backdrop */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} transition-transform duration-500 group-hover:scale-105`}
                />

                {/* UI Mockup Showcase Image Layer */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-white/90 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
