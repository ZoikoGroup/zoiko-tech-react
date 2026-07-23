"use client";

import React from "react";

export default function AboutZoikoTech() {
  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpAbout {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-about {
              animation: popUpAbout 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      {/* Main Container using Flexbox */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 animate-pop-up-about">
        {/* Left Content Column */}
        <div className="w-full  flex flex-col items-start">
          <span className="text-[#207885] text-[13px] font-bold tracking-tight mb-2">
            About Zoiko Tech
          </span>

          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-[#0f1124] mb-6 leading-[1.18]">
            Intelligence. Infrastructure. Impact.
          </h2>

          <p className="text-[#7d8296] text-[14px] md:text-[15px] leading-relaxed font-normal mb-8 max-w-xl">
            ZoikoTech is a California-based global technology company building
            the intelligent infrastructure of the future. At the heart of its
            creation is the vision of Lennox McLeod - a tech-savvy, serial
            entrepreneur whose deep expertise spans finance, technology, law,
            and international strategy. With over three decades of global
            business leadership, McLeod has consistently anticipated trends,
            built transformative enterprises, and merged commercial....
          </p>

          <button className="bg-[#207885] hover:bg-[#185e68] text-white font-semibold text-[13px] px-7 py-3.5 rounded-lg transition-all shadow-sm active:scale-95">
            Know More...
          </button>
        </div>

        {/* Right Wireframe Illustration Layout Column */}
        <div className="w-full lg:w-7/12 relative flex items-center justify-center lg:justify-end">
          {/* Main Desktop Window Wireframe */}
          <div className="w-full max-w-[580px] bg-white border-2 border-[#207885] rounded-3xl p-4 md:p-6 shadow-sm relative min-h-[380px] md:min-h-[440px] flex flex-col">
            {/* Window Header Dots & Title */}
            <div className="flex items-center justify-between pb-4 border-b border-[#e1e6eb] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#207885]" />
                <span className="w-3 h-3 rounded-full bg-[#93bec4]" />
                <span className="w-3 h-3 rounded-full bg-[#c0dbde]" />
              </div>
              <div className="flex items-center gap-1.5 text-[#207885] text-[11px] font-medium">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Feel Free to use services from us</span>
              </div>
            </div>

            {/* Desktop Wireframe Content Blocks */}
            <div className="space-y-4 max-w-[70%]">
              <div className="h-10 bg-[#dbe8ea] rounded-sm w-full" />
              <div className="h-10 bg-[#dbe8ea] rounded-sm w-3/4" />
              <div className="h-8 border-2 border-[#dbe8ea] rounded-sm w-4/5 my-2" />
              <div className="h-6 bg-[#dbe8ea] rounded-full w-1/2" />
              <div className="space-y-2 pt-2">
                <div className="h-3 bg-[#dbe8ea] rounded-sm w-2/3" />
                <div className="h-3 bg-[#dbe8ea] rounded-sm w-1/2" />
                <div className="h-3 bg-[#dbe8ea] rounded-sm w-1/3" />
                <div className="h-3 bg-[#dbe8ea] rounded-sm w-3/4" />
              </div>
            </div>
          </div>

          {/* Overlapping Mobile Device Wireframe */}
          <div className="absolute -bottom-6 right-2 md:right-8 w-[190px] md:w-[220px] bg-white border-2 border-[#207885] rounded-[36px] p-4 shadow-xl z-10 flex flex-col items-center">
            {/* Mobile Notch */}
            <div className="w-20 h-4 border-b-2 border-x-2 border-[#207885] rounded-b-xl mb-6" />

            {/* Mobile Branding Placeholder */}
            <div className="w-20 h-20 bg-[#dbe8ea] rounded-full flex items-center justify-center p-3 mb-6 shadow-inner">
              <img
                src="/home/logo.png"
                alt="Zoikotech badge mark"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mobile Content Blocks */}
            <div className="w-full space-y-3 flex flex-col items-center mb-10">
              <div className="h-6 bg-[#dbe8ea] rounded-full w-3/4" />
              <div className="h-2.5 bg-[#dbe8ea] rounded-sm w-2/3" />
              <div className="h-2.5 bg-[#dbe8ea] rounded-sm w-3/5" />
              <div className="h-2.5 bg-[#dbe8ea] rounded-sm w-1/3" />
            </div>

            {/* Mobile Home Bar Indicator */}
            <div className="w-24 h-1 bg-[#207885] rounded-full mt-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
