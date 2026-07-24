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

const topCards = [
  {
    title: "Pet Industry Advertising",
    description:
      "Sponsored posts for pet food, toys, accessories, and services with strict ethical guidelines and quality verification requirements.",
  },
  {
    title: "Local Veterinary Promotion",
    description:
      "Location-based advertising for veterinary clinics, pet hospitals, grooming services, and training facilities with verified credentials.",
  },
  {
    title: "NGO & Charity Promotion",
    description:
      "Free and premium promotional tools for animal welfare organizations, conservation groups, and rescue operations.",
  },
  {
    title: "Brand Collaboration Platform",
    description:
      "Ethical brand partnerships with content creators, influencers, and professionals focusing on authentic animal welfare advocacy.",
  },
];

export default function AdvertisingMonetizationEcosystem() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Advertising & Monetization Ecosystem
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Ethical advertising framework supporting pet and animal industry
          businesses
        </motion.p>

        {/* Top 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">
          {topCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-4">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 Wider Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Revenue Channels Card */}
          <motion.div
            custom={0.52}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[180px]"
          >
            <div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                Revenue Channels
              </h3>
              <div className="text-[14px] leading-relaxed text-[#555555]">
                <span className="font-bold text-[#222222]">Creator Tips:</span>{" "}
                Direct fan support{" "}
                <span className="text-[#CCCCCC] mx-1">|</span>{" "}
                <span className="font-bold text-[#222222]">NGO Donations:</span>{" "}
                Integrated fundraising{" "}
                <span className="text-[#CCCCCC] mx-1">|</span>{" "}
                <span className="font-bold text-[#222222]">Ethical Ads:</span>{" "}
                Verified promotions{" "}
                <span className="text-[#CCCCCC] mx-1">|</span>{" "}
                <span className="font-bold text-[#222222]">Subscriptions:</span>{" "}
                Premium features
              </div>
            </div>
          </motion.div>

          {/* Governance & Verification Card */}
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[180px]"
          >
            <div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                Governance & Verification
              </h3>
              <p className="text-[#555555] text-[14px] leading-relaxed">
                All transactions handled via Zoiko Pay with smart contracts from
                ZWS ensuring transparency and ethical business practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
