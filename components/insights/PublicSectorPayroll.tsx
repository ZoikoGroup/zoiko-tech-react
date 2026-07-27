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

export default function PublicSectorPayroll() {
  return (
    <section className="w-full bg-[#F0F0F0] py-20 px-6 md:px-12 lg:px-16 min-h-[600px] flex items-center justify-center overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Overlapping Images Layout */}
          <motion.div
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 relative w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[520px] pb-[20%] sm:pb-[16%] lg:pb-[18%]">
              {/* Main Top/Background Image */}
              <div className="w-[88%] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                <img
                  src="/insights/meeting.png"
                  alt="Public sector team meeting"
                  className="w-full h-auto object-cover aspect-[4/3] block"
                />
              </div>

              {/* Overlapping Bottom/Foreground Image */}
              <div className="absolute bottom-0 left-[-40] w-[58%] rounded-[16px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)] z-10">
                <img
                  src="/insights/person.png"
                  alt="Digital analytics and compliance overlay"
                  className="w-full h-auto object-cover aspect-[4/3] block"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col items-start lg:pl-4"
          >
            <h2 className="text-[#1D2939] font-inter font-bold text-[32px] leading-[40px] md:leading-[48px] tracking-[-0.02em] mb-6">
              Public Sector Payroll, Reinvented:
              <br />
              Compliance Without Complexity
            </h2>

            <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] mb-6">
              With ZoikoSuite™ and ZoikoAssure™, ZoikoTech helped government
              agencies in multi-jurisdictional regions digitize payroll and
              compliance — eliminating manual processes and embedding
              transparency at every step.
            </p>

            <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px] md:leading-[26px]">
              <strong className="text-[#1D2939] font-bold">Impact:</strong>{" "}
              Fully automated payroll cycles, real-time tax logic across
              ministries, and embedded reporting for audits, disbursements, and
              public accountability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
