"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion animation variants with typed custom easing
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

export default function CaseStudiesAndSuccessStories() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col w-full">

        {/* First Case Study Item */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Overlapping Images */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 relative w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[520px] pb-[20%] sm:pb-[15%] lg:pb-[18%]">
              {/* Main Background Image */}
              <div className="w-[85%] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                <img
                  src="/insights/tower.png"
                  alt="Telecom Infrastructure Worker"
                  className="w-full h-auto object-cover aspect-[4/3] block"
                />
              </div>

              {/* Overlapping Foreground Image */}
              <div className="absolute bottom-0 left-[-40] w-[55%] rounded-[16px] overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.15)] z-10">
                <img
                  src="/insights/talk.png"
                  alt="Team Discussing Analytics"
                  className="w-full h-auto object-cover aspect-[4/3] block"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h3 className="text-[#1D2939] font-inter font-bold text-[30px] md:text-[38px] leading-[38px] md:leading-[46px] tracking-[-0.02em] mb-5">
              Cross-Border Telecom
              <br />
              Enablement: MVNOs at Scale
            </h3>

            <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px] mb-6">
              Using ZoikoAxis™ and ZoikoNex™, ZoikoTech deployed a fully
              integrated digital ecosystem to support the rapid growth of four
              differentiated MVNO brands — Zoiko Mobile, GoLite Mobile, Raíces
              Mobile, and Sable Mobile — across the United States and beyond.
            </p>

            <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px]">
              <strong className="text-[#1D2939] font-bold">Impact:</strong>{" "}
              Real-time billing accuracy, seamless network provisioning, eSIM
              integration, and audit-grade revenue compliance across multiple
              user segments and cultural niches.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
