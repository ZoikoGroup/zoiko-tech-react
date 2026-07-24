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

const plans = [
  {
    title: "Free",
    price: "$0",
    period: "/month",
    features: [
      "Limited content library",
      "Educational documentaries",
      "Wildlife highlights",
      "Basic personalization",
      "Ad-supported viewing",
    ],
    buttonText: "Start Watching",
    recommended: false,
  },
  {
    title: "Premium",
    price: "$12.99",
    period: "/month",
    features: [
      "Full content library",
      "Zoiko Originals",
      "4K streaming",
      "Offline downloads",
      "Ad-free experience",
      "Multiple devices",
    ],
    buttonText: "Subscribe",
    recommended: true,
  },
  {
    title: "Family",
    price: "$19.99",
    period: "/month",
    features: [
      "Up to 6 profiles",
      "Parental controls",
      "Educational content",
      "Family sharing",
      "Priority support",
      "Content recommendations",
    ],
    buttonText: "Start Family Plan",
    recommended: false,
  },
  {
    title: "Institutional",
    pricePrefix: "From ",
    price: "$299",
    period: "/year",
    features: [
      "Educational licensing",
      "Classroom features",
      "Bulk user management",
      "Custom content curation",
      "Analytics dashboard",
      "Dedicated support",
    ],
    buttonText: "Contact Education",
    recommended: false,
  },
];

export default function EthicalStreamingPlans() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#2B2B2B] text-center mb-3 leading-tight"
        >
          Ethical Streaming Plans
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16"
        >
          Accessible pricing for individuals, families, and institutions
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`relative bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[480px] ${
                plan.recommended
                  ? "border-2 border-[#52D4B9]"
                  : "border border-slate-100"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#52D4B9] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    {plan.pricePrefix && (
                      <span className="text-2xl font-bold text-[#52D4B9] mr-1">
                        {plan.pricePrefix}
                      </span>
                    )}
                    <span className="text-4xl sm:text-[40px] font-extrabold text-[#52D4B9] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[#7A7A7A] text-sm ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[14px] text-[#555555]"
                    >
                      <Check className="w-4 h-4 text-[#52D4B9] mr-3 shrink-0 stroke-[2.5]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#52D4B9] hover:bg-[#43bdA3] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-sm">
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          custom={0.55}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#2B2B2B] text-[13px] font-semibold text-center"
        >
          Enterprise Partner packages available from $1,500/year
        </motion.p>
      </div>
    </section>
  );
}
