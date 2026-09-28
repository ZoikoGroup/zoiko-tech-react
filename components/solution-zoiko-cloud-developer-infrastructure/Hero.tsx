"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-4 md:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(161.11deg, rgb(18, 70, 63) 0%, rgb(0, 23, 24) 100%)",
      }}
    >
      <div className="w-full max-w-[1240px] px-0 md:px-[24px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 py-16 md:h-[607px] md:pt-[36px] md:pb-[84px]">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex-1 flex flex-col items-start gap-[10px] min-w-0 w-full"
          >
            <p className="font-segoe font-bold text-[13px] leading-[20.8px] tracking-[1.3px] text-[#8bf2c8] uppercase">
              Cloud &amp; Developer Infrastructure
            </p>

            <h1 className="font-segoe font-bold text-[36px] md:text-[52px] leading-[42px] md:leading-[58.24px] text-white pt-2">
              Build on foundations designed to scale with the systems around
              them.
            </h1>

            <p className="font-segoe font-normal text-[16px] leading-[25.6px] text-[#87c7aa] max-w-[533.76px] pt-1">
              Zoiko Tech brings APIs, SDKs, identity, integrations, developer
              services, observability, operational controls, and shared
              infrastructure patterns into a coherent foundation for
              organizations building, connecting, and operating digital
              systems.
            </p>

            <div className="flex flex-wrap items-center gap-[14px] pt-[14px] w-full">
              <a
                href="#developer-platform"
                className="font-segoe font-bold text-[15px] leading-[normal] text-[#0f3c37] bg-white border border-white rounded-[8px] px-[22px] pt-[7.2px] pb-[8.8px] min-h-[44px] flex items-center justify-center text-center hover:bg-[#f0f0f0] transition-colors duration-200"
              >
                Explore Developer Platform
              </a>
              <a
                href="#contact-sales"
                className="font-segoe font-normal text-[16px] leading-[25.6px] text-white border border-white rounded-[8px] px-[22px] pt-[7.2px] pb-[8.8px] min-h-[44px] flex items-center justify-center text-center hover:bg-white/10 transition-colors duration-200"
              >
                Contact Sales
              </a>
              <a
                href="#documentation"
                className="font-segoe font-bold text-[14px] leading-[22.4px] text-white hover:text-[#8bf2c8] transition-colors duration-200"
              >
                Read Documentation →
              </a>
            </div>

            <p className="font-segoe font-normal text-[13px] leading-[20.8px] text-[#8bf2c8] pt-[5px] w-full">
              Build, integrate and operate with explicit boundaries,
              observable state, and enterprise governance.
            </p>
          </motion.div>

          {/* Right diagram image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex-1 w-full max-w-[621.5px] aspect-[1402/1122] relative"
          >
            <img
              src="/solution-zoiko-cloud-developer-infrastructure/hero-diagram.png"
              alt="Governance, risk, and compliance workflow diagram: source, review workflow, evidence, control, obligation, applicability, and qualified human review nodes connected around a central hub"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
