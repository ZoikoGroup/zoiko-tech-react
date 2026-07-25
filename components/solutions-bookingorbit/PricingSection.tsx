"use client";

import { motion } from "framer-motion";

const pricingCards = [
  {
    title: "eSIM Revenue Model",
    features: [
      "Retail margin on plans",
      "Global unlimited packs",
      "Regional bundles",
    ],
  },
  {
    title: "Travel Commerce",
    features: [
      "Flight commissions",
      "Hotel commissions",
      "Mobility service fees",
    ],
  },
  {
    title: "AI & Intelligence",
    features: [
      "Pro trip planning features",
      "Real-time alerts",
      "Priority support",
    ],
  },
  {
    title: "Partner & B2B",
    features: [
      "White-labelling solutions",
      "API integrations",
      "Custom implementations",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center gap-[10px] w-full max-w-6xl px-[20px] py-[120px]">
        {/* Badge - motion.div for animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-row items-center justify-center p-[6px_14px] gap-[10px] bg-[#EEF8F7] border border-[#D5EDED] rounded-[100px]"
        >
          <span className="text-[#327F7A] font-inter font-semibold text-[13px] leading-[18px]">
            Pricing
          </span>
        </motion.div>

        {/* Heading - motion.h1 for animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#1D2939] font-inter font-bold text-[48px] leading-[60px] tracking-[-0.96px] mt-[10px] mb-[60px] text-center"
        >
          Simple, Transparent Pricing
        </motion.h1>

        {/* Grid - motion.div for animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[32px] w-full"
        >
          {pricingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex flex-col flex-grow items-start p-[40px] gap-[24px] bg-white border border-[#E9E9E9] rounded-[16px] shadow-[0_4px_12px_#0000001A]"
            >
              <div className="flex flex-col items-start gap-[16px]">
                <h3 className="text-[#1D2939] font-inter font-bold text-[18px] leading-[26px]">
                  {card.title}
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-[16px]">
                {card.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex flex-row items-start p-[0px] gap-[8px]"
                  >
                    <div className="flex items-center justify-center w-[16px] h-[24px]">
                      {/* Dot */}
                      <div className="w-[4px] h-[4px] rounded-full bg-[#20B2AA]"></div>
                    </div>
                    <span className="text-[#8E8E8E] font-inter font-medium text-[16px] leading-[24px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
