"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      className="relative w-full overflow-hidden text-white bg-[#001315]"
    >
      {/* Background Graphic with Opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/customer-and-local-commerce/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-35"
        />
        {/* Figma Linear Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(262deg, rgba(6, 85, 72, 0.8) 78%, rgba(0, 38, 42, 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:py-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Column: Heading, Description & Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[620px] shrink-0"
          >
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[34px] sm:text-[44px] lg:text-[50px] font-extrabold leading-[1.23] tracking-[-0.0224em] text-white mb-6">
              Connect customer communication, local presence and digital experiences without creating another channel silo.
            </h1>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px] text-[#E2E8F0] mb-8 font-normal max-w-[580px]">
              Zoiko Tech brings customer communications, governed marketing intelligence, local presence, commerce journeys and life-orchestration experiences into a shared technology architecture built around identity, data, integrations, consent and operational handoffs.
            </p>

            <div>
              <a
                href="#intent-router"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#247780] hover:bg-[#1F7A6C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] leading-5 transition-colors shadow-sm"
              >
                <span>Explore customer pathways</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Figure with Box Shadow & Journey Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1 max-w-[560px] lg:max-w-none"
          >
            <div
              className="w-full p-6 sm:p-[25px] rounded-[20px] border border-[#34D4CA]/45"
              style={{
                backgroundColor: "rgba(0, 25, 30, 0.78)",
                boxShadow: "0px 0px 24px 0px rgba(52, 212, 202, 0.25)",
              }}
            >
              <div className="mb-3.5">
                <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase">
                  ONE CUSTOMER JOURNEY, END TO END
                </span>
              </div>

              <div className="relative w-full h-[300px] sm:h-[363px] rounded-[10px] overflow-hidden border border-[#34D4CA]/35">
                <Image
                  src="/customer-and-local-commerce/hero-journey-illustration.png"
                  alt="Customer Journey Architecture Illustration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-[#001315]/20 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
