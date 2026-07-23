"use client";

import React from "react";

export default function VisionAndTeam() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-20 md:gap-28">
        {/* Row 1: Vision (Text Left, Image Right) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Narrative */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[14px] font-normal text-[#8e95ad]">
                Our Vision
              </span>
              <div className="w-8 h-[1px] bg-[#cbd5e1]" />
            </div>

            <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-[#0f1124] mb-5 leading-[1.2]">
              ZoikoTech is the embodiment of his global vision:
            </h2>

            <p className="text-[#555b6e] text-[14px] md:text-[14.5px] leading-relaxed font-normal">
              To empower businesses, elevate lives, and unlock new possibilities
              through ethically engineered, AI-powered platforms. From scalable
              SaaS applications and telecom systems to eldercare AI,
              cybersecurity, and purpose-driven mobile ventures, ZoikoTech
              solutions serve a singular goal: to make complexity manageable,
              connectivity meaningful, and intelligence actionable.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/about-us/first.png"
                alt="Our Vision - AI representation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Visionary Team (Image Left, Text Right) */}
        <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
          {/* Right Narrative */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[1px] bg-[#cbd5e1] hidden lg:block" />
              <span className="text-[14px] font-normal text-[#8e95ad]">
                The Visionary
              </span>
              <div className="w-8 h-[1px] bg-[#cbd5e1] lg:hidden" />
            </div>

            <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-[#0f1124] mb-5 leading-[1.2]">
              We work with the great team.
            </h2>

            <p className="text-[#555b6e] text-[14px] md:text-[14.5px] leading-relaxed font-normal">
              <strong className="text-[#0f1124] font-bold">
                Lennox McLeod
              </strong>{" "}
              leads a world-class team of engineers, designers, legal
              technologists, enterprise architects, and compliance specialists -
              united by a mission to drive change through elegant, secure, and
              human-centric technologies. Together, they are redefining how
              organizations across the globe operate, adapt, and grow.
            </p>
          </div>

          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/about-us/team.png"
                alt="The Visionary - Great Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
