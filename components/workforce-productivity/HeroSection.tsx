"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(148deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:px-12 lg:px-[130px] lg:pt-[95px] lg:pb-[114px]">
        {/* Top Two-Column Content: Text & Hero Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Column: Heading, Lead & Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start max-w-[636px]"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center px-[10px] py-[2px] rounded-full border border-[#7FD0D9] mb-4 sm:mb-5">
              <span className="text-[#7FD0D9] text-[12.8px] font-semibold leading-[20.5px]">
                Workforce &amp; Productivity
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-[28px] sm:text-[40px] lg:text-[54.4px] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-5 sm:mb-6">
              Give teams clearer operational context without turning work into
              surveillance.
            </h1>

            {/* Lead Description */}
            <p className="text-[15px] sm:text-[16px] lg:text-[17.6px] leading-[25px] sm:leading-[28px] text-[#DCECEE] mb-6 sm:mb-8 font-normal">
              Zoiko Tech brings time, workforce context, collaboration and
              operational accountability into connected workflows — helping
              organizations coordinate work, resolve exceptions, align policy and
              preserve evidence with privacy-respecting administration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 pt-2 w-full sm:w-auto">
              <a
                href="#contact-sales"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] bg-white text-black font-semibold text-[15px] sm:text-[16px] hover:bg-[#DCECEE] transition-colors duration-200 text-center"
              >
                Discuss your workforce operations
              </a>
              <a
                href="#platform-evidence"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] border-2 border-[#7FD0D9] text-white font-semibold text-[15px] sm:text-[16px] hover:bg-[#7FD0D9]/10 transition-colors duration-200 text-center"
              >
                Explore Workforce Platforms
              </a>
              <a
                href="#time-assurance"
                className="inline-flex items-center justify-center sm:justify-start text-[#7FD0D9] font-semibold text-[15px] sm:text-[16px] underline hover:text-white transition-colors duration-200 py-2 text-center"
              >
                Explore ZoikoTime →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Graphic Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.25}
            className="w-full max-w-[500px] lg:max-w-[544px] shrink-0 flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[544px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/workforce-productivity/hero-workforce-operations.png"
                alt="Workforce Operations Workflow diagram"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Flow Architecture Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.35}
          className="mt-14 pt-8 border-t border-white/10"
        >
          <p className="sr-only">
            Teams, workstreams, time and communication signals flow into a
            governed workforce-context layer, then to approved downstream systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Step 1: Teams & workstreams */}
            <div className="p-[17px] min-h-[120px] rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/45 flex flex-col justify-between backdrop-blur-sm">
              <h3 className="text-white text-[14.1px] font-bold leading-[22.5px] mb-2">
                Teams &amp; workstreams
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Schedules
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Time signals
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Communication events
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  HR reference
                </span>
              </div>
            </div>

            {/* Step 2: Governed workforce-context layer */}
            <div className="p-[17px] min-h-[120px] rounded-[14px] bg-[#247780]/55 border border-[#7FD0D9]/45 flex flex-col justify-between backdrop-blur-sm shadow-lg">
              <h3 className="text-white text-[14.1px] font-bold leading-[22.5px] mb-2">
                Governed workforce-context layer
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Identity &amp; role
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Policy &amp; privacy
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Purpose limits
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Evidence
                </span>
              </div>
            </div>

            {/* Step 3: Approved outcomes */}
            <div className="p-[17px] min-h-[120px] rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/45 flex flex-col justify-between backdrop-blur-sm">
              <h3 className="text-white text-[14.1px] font-bold leading-[22.5px] mb-2">
                Approved outcomes
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Exceptions
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  Approvals
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-black/40 text-white text-[12.5px] font-normal leading-[20px]">
                  HR / payroll handoff
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
