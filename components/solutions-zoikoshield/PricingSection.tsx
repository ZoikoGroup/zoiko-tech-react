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
    tier: "ZoikoShield Basic",
    description: "Essential security for small teams.",
    features: [
      "Identity protection",
      "Endpoint security",
      "DNS filtering",
      "Security alerts",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    tier: "ZoikoShield Business",
    description: "Comprehensive security for growing businesses.",
    badge: "Most Popular",
    features: [
      "Zero Trust framework",
      "Advanced endpoint protection",
      "Fraud Shield Lite",
      "Compliance tools",
      "Priority support",
    ],
    buttonText: "Get Started",
    highlight: true,
  },
  {
    tier: "ZoikoShield Enterprise",
    description: "Complete protection for established organizations.",
    features: [
      "Full Fraud Shield Engine™",
      "SIEM Integration",
      "Dedicated security manager",
      "Custom security policies",
      "24/7 hotline support",
    ],
    buttonText: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="mb-4"
        >
          <span className="bg-[#E8F3F2] text-[#006059] px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide">
            Pricing
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-[42px] font-bold tracking-tighter text-[#1A202C] leading-[1.1]">
            Security Plans for Every Business
          </h2>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch relative">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.tier}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-3xl p-10 shadow-[0_4px_12px_#0000001A] flex flex-col items-center text-center relative ${
                plan.highlight
                  ? "border-2 border-[#16A085]"
                  : "border border-[#E2E8F0]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#16A085] text-white px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card Title */}
              <h3 className="text-2xl font-bold text-[#1A202C] mb-3 leading-snug">
                {plan.tier}
              </h3>

              {/* Card Description */}
              <p className="text-[15px] text-[#4A5568] mb-10 min-h-[44px]">
                {plan.description}
              </p>

              {/* Bullet List with Icon and Gradient Background */}
              <ul className="space-y-4 w-full text-left mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D]">
                      <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    </div>
                    <span className="text-[15px] text-[#2D3748] font-medium leading-relaxed pt-0.5">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="bg-[#16A085] text-white px-7 py-3 rounded-xl font-semibold text-[15px] transition-colors hover:bg-[#138c74] active:bg-[#117964]">
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
