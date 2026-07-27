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

const zoikoEcosystemData = [
  "ZoikoNex",
  "ZoikoPay",
  "ZoikoSuite",
  "ZoikoAI",
  "ZoikoShield",
];

const thirdPartyIntegrationsData = [
  "AWS",
  "Azure",
  "GCP",
  "Twilio",
  "Stripe",
  "PayPal",
  "Salesforce",
  "SAP",
  "Oracle",
];

export default function SeamlessIntegrations() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-4"
        >
          <div className="flex flex-row items-center justify-center p-[6px_16px] bg-[#EEF8F7] border border-[#D5EDED] rounded-[100px]">
            <span className="text-[#107F6D] font-inter font-semibold text-[13px] leading-[18px]">
              Ecosystem
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-[16px]"
        >
          <h2 className="text-[#1D2939] font-inter font-bold text-[40px] md:text-[48px] leading-[50px] md:leading-[60px] tracking-[-0.96px]">
            Seamless Integrations
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#667085] font-inter font-normal text-[16px] leading-[24px] text-center mb-[56px] max-w-[600px]"
        >
          Connect with the tools and platforms you already use.
        </motion.p>

        {/* First Section: Zoiko Ecosystem */}
        <div className="w-full mb-[48px]">
          <motion.h3
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-[#1D2939] font-inter font-bold text-[22px] leading-[30px] mb-[24px] text-left"
          >
            Zoiko Ecosystem
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[16px] w-full">
            {zoikoEcosystemData.map((item, index) => (
              <motion.div
                key={item}
                custom={0.18 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="flex items-center justify-center p-[28px_16px] bg-white rounded-[12px] border border-[#E9E9E9]"
              >
                <span className="text-[#344054] font-inter font-semibold text-[15px] leading-[20px] text-center">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Section: Third-Party Integrations */}
        <div className="w-full">
          <motion.h3
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-[#1D2939] font-inter font-bold text-[22px] leading-[30px] mb-[24px] text-left"
          >
            Third-Party Integrations
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-[16px] w-full">
            {thirdPartyIntegrationsData.map((item, index) => (
              <motion.div
                key={item}
                custom={0.28 + index * 0.04}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="flex items-center justify-center p-[28px_16px] bg-white rounded-[12px] border border-[#E9E9E9]"
              >
                <span className="text-[#344054] font-inter font-semibold text-[15px] leading-[20px] text-center">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
