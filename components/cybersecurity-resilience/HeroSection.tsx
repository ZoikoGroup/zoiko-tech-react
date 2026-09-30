"use client";

import React from "react";
import Image from "next/image";
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
      id="hero"
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(142deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px] pt-10 pb-12 sm:py-14 lg:py-[63px]">
        {/* Top Two-Column Content: Text & Seamless Hero Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left Column: Heading, Lead & Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[560px] shrink-0"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center px-[12px] py-[3px] rounded-full border border-[#7FD0D9] mb-4 sm:mb-5">
              <span className="text-[#7FD0D9] text-[12px] sm:text-[12.8px] font-semibold leading-[20.5px]">
                Cybersecurity &amp; Resilience
              </span>
            </div>

            {/* H1 Heading with Poppins font and exact wrapping */}
            <h1 className="font-poppins text-[30px] sm:text-[42px] lg:text-[54.4px] font-bold leading-[1.15] tracking-[-1.09px] text-white mb-4 sm:mb-6 max-w-[524px]">
              Protect critical systems and keep operations resilient when conditions change.
            </h1>

            {/* Lead Description */}
            <p className="text-[15px] sm:text-[16px] lg:text-[17.6px] leading-[25px] sm:leading-[28.16px] text-[#DCECEE] mb-6 sm:mb-8 font-normal max-w-[540px]">
              Zoiko Tech brings secure engineering, identity, least privilege,
              threat prevention, security operations and resilience into a governed
              security architecture designed around accountable control, evidence
              and business continuity.
            </p>

            {/* Action Row: Stackable on mobile, horizontal row on desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mb-5 w-full">
              <a
                href="#contact-sales"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] bg-white border-2 border-white text-black font-semibold text-[15px] sm:text-[16px] hover:bg-[#DCECEE] hover:border-[#DCECEE] transition-colors whitespace-nowrap text-center shadow-sm"
              >
                Discuss your security posture
              </a>
              <a
                href="#architecture"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] border-2 border-[#7FD0D9] bg-transparent text-white font-semibold text-[15px] sm:text-[16px] hover:bg-[#7FD0D9]/15 transition-colors whitespace-nowrap text-center"
              >
                Explore Security Technology
              </a>
              <a
                href="#evidence-disclosure"
                className="inline-flex items-center justify-center sm:justify-start text-[#7FD0D9] font-semibold text-[15px] sm:text-[16px] underline hover:text-white transition-colors whitespace-nowrap py-2"
              >
                Open Trust Center →
              </a>
            </div>

            {/* Subtext Points below actions */}
            <p className="text-[12.5px] sm:text-[12.8px] text-[#DCECEE] leading-[20.48px] font-normal max-w-[520px]">
              Evidence-aware controls. Explicit ownership. Least privilege. Resilience designed into operations.
            </p>
          </motion.div>

          {/* Right Column: Seamless 3D Graphic (Responsive scaling) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:w-[673px] max-w-[420px] sm:max-w-[520px] lg:max-w-[673px] shrink-0 flex items-center justify-center mr-0 lg:-mr-12"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/cybersecurity-resilience/hero-cybersecurity.png"
                alt="Cybersecurity and Resilience server cluster, shield, and operations illustration"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 673px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
