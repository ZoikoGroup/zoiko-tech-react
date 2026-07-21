"use client";

import React from "react";

export default function ZoikotechBrandBanner() {
  return (
    <section className="w-full bg-[#D9E8E9] text-[#0f1f2e] px-6 py-12 md:px-12 lg:px-16 md:py-18 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle geometric background pattern overlay */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpContent {
              0% { opacity: 0; transform: scale(0.92) translateY(15px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up {
              animation: popUpContent 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 animate-pop-up">
        {/* Brand Graphic / Logo Viewport Container */}
        <div className="w-48 md:w-90 aspect-[2.2] mb-6 flex items-center justify-center">
          <img
            src="/home/logo.png"
            alt="Zoikotech corporate brand emblem and lockup"
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        {/* Primary Impact Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-[40px] font-black tracking-tight text-[#0f1f2e] max-w-3xl leading-tight mb-4">
          Built for What’s Next. Powered by Intelligence, Inclusion & Impact
        </h1>

        {/* Descriptive Subtitle */}
        <p className="text-[#000000] text-[13.5px] md:text-[20px] font-medium leading-relaxed max-w-xl">
          Transforming industries with next-generation technology tailored for
          SMBs, telecoms, finance, and public service.
        </p>
      </div>
    </section>
  );
}
