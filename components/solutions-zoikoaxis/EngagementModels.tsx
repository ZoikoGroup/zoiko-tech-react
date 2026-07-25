"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

const pricingPlans = [
  {
    title: "Fixed-Scope Projects",
    description: "Predictable delivery with defined outputs and timelines.",
    isPopular: false,
    features: [
      "Clear deliverables",
      "Fixed budget",
      "Milestone-based payments",
    ],
    buttonText: "Get Started",
  },
  {
    title: "Dedicated Engineering Teams",
    description: "Monthly retainer with cross-functional squads.",
    isPopular: true,
    popularBadgeText: "Popular",
    features: [
      "Dedicated team",
      "Flexible scope",
      "Monthly billing",
      "Priority support",
    ],
    buttonText: "Get Started",
  },
  {
    title: "Enterprise Co-Development",
    description: "Strategic partnership for complex, multi-year initiatives.",
    isPopular: false,
    features: [
      "Shared roadmap",
      "Co-innovation",
      "Custom SLAs",
      "Executive alignment",
    ],
    buttonText: "Contact Sales",
  },
];

export default function EngagementModels() {
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
              Pricing
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
            Engagement Models
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#667085] font-inter font-normal text-[16px] leading-[24px] text-center mb-[60px] max-w-[600px]"
        >
          Choose the model that fits your needs.
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`relative flex flex-col justify-between p-[40px_32px] bg-white rounded-[20px] shadow-[0_4px_12px_#0000001A] ${
                plan.isPopular
                  ? "border-2 border-[#107F6D]"
                  : "border border-[#E9E9E9]"
              }`}
            >
              {/* Card Header & Content */}
              <div className="flex flex-col items-center text-center">
                {/* Popular Badge Placeholder / Container */}
                <div className="h-[28px] mb-[12px] flex items-center justify-center">
                  {plan.isPopular && (
                    <span className="bg-[#107F6D] text-white font-inter font-medium text-[12px] leading-[16px] px-[12px] py-[4px] rounded-[100px]">
                      {plan.popularBadgeText}
                    </span>
                  )}
                </div>

                {/* Plan Title */}
                <h3 className="text-[#1D2939] font-inter font-bold text-[24px] leading-[32px] mb-[12px] max-w-[240px]">
                  {plan.title}
                </h3>

                {/* Plan Description */}
                <p className="text-[#667085] font-inter font-normal text-[14px] leading-[20px] mb-[32px] min-h-[40px]">
                  {plan.description}
                </p>

                {/* Feature List */}
                <ul className="flex flex-col items-start gap-[16px] w-full mb-[40px]">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex flex-row items-center gap-[10px]"
                    >
                      <Check className="w-[16px] h-[16px] text-[#107F6D] shrink-0 stroke-[2.5]" />
                      <span className="text-[#344054] font-inter font-medium text-[14px] leading-[20px] text-left">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  className="w-auto px-[28px] py-[12px] bg-[#107F6D] text-white font-inter font-semibold text-[15px] leading-[22px] rounded-[10px] hover:bg-[#0d6859] transition-all duration-200 cursor-pointer shadow-sm"
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
