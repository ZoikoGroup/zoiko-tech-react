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

export default function GlobalRegTechTransformation() {
  return (
    <>
      <section className="w-full bg-[#F9F4FF99] py-20 px-6 md:px-12 lg:px-16 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col w-full">
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
                {/* Main Background Image */}
                <div className="w-[88%] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                  <img
                    src="/insights/ppl.png"
                    alt="Noxx & Co executive team collaboration"
                    className="w-full h-auto object-cover aspect-[4/3] block"
                  />
                </div>

                {/* Overlapping Foreground Image */}
                <div className="absolute bottom-0 left-[-40] w-[58%] rounded-[16px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)] z-10">
                  <img
                    src="/insights/girl.png"
                    alt="RegTech digital interface overlay"
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
                Global RegTech Transformation:
                <br />
                Noxx & Co
              </h2>

              <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] mb-6">
                Using ZoikoAssure™ and ZoikoAxis™, ZoikoTech digitized and
                unified the regulatory architecture of Noxx & Co, a global firm
                delivering tax, legal, and corporate compliance services across
                multiple continents.
              </p>

              <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[24px] md:leading-[26px]">
                <strong className="text-[#1D2939] font-bold">Impact:</strong>{" "}
                Automated KYC/AML, multi-country client onboarding, dynamic
                engagement letter generation, and export-ready audit packs for
                regulators and stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Digital Partnership Closing Statement Section */}
      <motion.section
        custom={0.05}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="w-full bg-white py-12 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl text-center mx-auto">
          <p className="text-[#667085] font-inter font-normal text-[15px] md:text-[16px] leading-[26px] tracking-wide">
            Each of these stories represents more than a deployment — it's a
            long-term digital partnership. ZoikoTech continues to work
            side-by-side with clients to expand capabilities, launch new
            innovations, and stay ahead of global regulation and user
            expectation.
          </p>
        </div>
      </motion.section>
    </>
  );
}
