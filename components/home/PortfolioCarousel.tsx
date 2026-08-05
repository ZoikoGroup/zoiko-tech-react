"use client";

import React from "react";

export default function PortfolioCarousel() {
  const portfolioItems = [
    {
      id: 1,
      title: "Travel Platform App UI",
      image: "/home/card 6.png",
      alt: "Person operating travel application on tablet device",
    },
    {
      id: 2,
      title: "Wireframe & Prototyping",
      image: "/home/card 7.png",
      alt: "UX UI wireframe sketch and design prototyping",
    }
  ];

  return (
    <section className="w-full bg-white text-[#282828] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
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

      {/* Main Flex Layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 animate-pop-up-portfolio">
        {/* Left Column: Headline, Narrative & Action Button */}
        <div className="w-full lg:w-4/12 flex flex-col items-start text-left shrink-0">
          <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-[#282828] mb-4 leading-tight">
            ZoikoTech Portfolio
          </h2>

          <p className="text-[#686868] md:text-[20px] leading-relaxed font-normal mb-8 max-w-md">
            ZoikoTech is the cutting-edge technology division of Zoiko Group. We
            develop world-class, AI-powered platforms that serve individuals,
            businesses, and governments across borders. Our solutions span time
            optimization, financial intelligence, cybersecurity, compliance,
            social connectivity, companionship, and motorist commerce: all
            designed to solve real-world problems through intelligent
            innovation.
          </p>

          <button className="bg-[#207885] hover:bg-[#185e68] text-white font-semibold text-[13.5px] px-7 py-3 rounded-xl transition-all shadow-sm active:scale-95">
            Know More...
          </button>
        </div>

        {/* Right Column: Rounded Image Cards Viewport */}
        <div className="w-full lg:w-8/12 overflow-hidden relative">
          <div className="flex gap-5 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="w-[82%] sm:w-[320px] md:w-[380px] shrink-0 h-[280px] md:h-[340px] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative group cursor-pointer snap-start bg-white"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-[24px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
