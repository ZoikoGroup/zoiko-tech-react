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
    title: "ZoikoPal Personal",
    isPopular: false,
    buttonText: "Get Started",
    buttonType: "outline",
    features: ["AI companion", "Reminders", "Family portal access"],
  },
  {
    title: "ZoikoPal Family+",
    isPopular: true,
    buttonText: "Most Popular",
    buttonType: "solid",
    features: [
      "10 family members",
      "Photo library",
      "Group reminders",
      "Enhanced coordination",
    ],
  },
  {
    title: "ZoikoPal Care Home Edition",
    isPopular: false,
    buttonText: "Contact Sales",
    buttonType: "outline",
    features: [
      "Resident management",
      "Staff roles",
      "Reporting suite",
      "Multi-resident dashboard",
    ],
  },
];

const addOns = ["Hardware bundle", "Sensors", "White-labelling"];

export default function PricingMonetisation() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#2D3748] mb-3 leading-tight">
            Pricing & Monetisation
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Accessible plans for families and care organizations
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 relative ${
                plan.isPopular
                  ? "border-2 border-[#25A18E] shadow-[0_8px_30px_rgba(37,161,142,0.15)] transform lg:-translate-y-2"
                  : "border border-gray-100 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
              }`}
            >
              {/* Plan Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#25A18E] mb-8 min-h-[56px] flex items-center justify-center">
                {plan.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-4 w-full mb-10 flex-grow text-left max-w-[260px] mx-auto">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#25A18E] shrink-0" />
                    <span className="text-[14px] md:text-[15px] text-[#555555]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <a
                href="#"
                className={`w-full max-w-[220px] py-3 px-6 rounded-lg font-semibold text-[15px] transition-all duration-200 text-center ${
                  plan.buttonType === "solid"
                    ? "bg-[#1E7266] hover:bg-[#185B51] text-white shadow-md active:scale-95"
                    : "border-2 border-[#25A18E] text-[#25A18E] hover:bg-[#25A18E]/10 active:scale-95"
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col items-center w-full"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#25A18E] mb-6 tracking-tight">
            Add-ons
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full">
            {addOns.map((addOn) => (
              <a
                key={addOn}
                href="#"
                className="px-6 py-2.5 rounded-lg border-2 border-[#25A18E] text-[#25A18E] font-medium text-[14px] md:text-[15px] hover:bg-[#25A18E]/10 transition-colors duration-200"
              >
                {addOn}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
