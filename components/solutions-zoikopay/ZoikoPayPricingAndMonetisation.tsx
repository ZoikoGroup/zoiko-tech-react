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
    title: "ZoikoPay Standard",
    highlightBorder: false,
    ctaText: "Get Started",
    ctaVariant: "outline",
    features: ["Basic payments", "Wallets", "Invoicing", "Standard support"],
  },
  {
    title: "ZoikoPay Business",
    highlightBorder: true,
    ctaText: "Most Popular",
    ctaVariant: "filled",
    features: [
      "Multi-currency payments",
      "FX routing",
      "Subscription billing",
      "Payout automation",
      "Priority support",
    ],
  },
  {
    title: "ZoikoPay Enterprise",
    highlightBorder: false,
    ctaText: "Contact Sales",
    ctaVariant: "outline",
    features: [
      "Custom pricing",
      "Multi-region routing",
      "Dedicated account manager",
      "SSO & RBAC",
      "24/7 support",
    ],
  },
];

const addOns = [
  "Chargeback management",
  "FX optimisation",
  "Dedicated compliance",
];

export default function ZoikoPayPricingAndMonetisation() {
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
            Transparent pricing that scales with your business
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.15 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center relative min-h-[420px] ${
                plan.highlightBorder
                  ? "border-2 border-[#25A18E]"
                  : "border border-gray-100/80"
              }`}
            >
              {/* Plan Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#25A18E] mb-8">
                {plan.title}
              </h3>

              {/* Feature Checklist */}
              <ul className="space-y-4 w-full text-left mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#25A18E] shrink-0" />
                    <span className="text-[14px] text-[#555555] font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button Section */}
              <div className="mt-auto w-full flex flex-col items-center">
                {plan.ctaVariant === "filled" ? (
                  <button className="w-full sm:w-auto px-8 py-3 bg-[#006059] hover:bg-[#004D47] text-white font-semibold rounded-lg text-[14px] transition-all shadow-sm">
                    {plan.ctaText}
                  </button>
                ) : (
                  <button className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-[#F1F3F5] text-[#25A18E] border border-[#25A18E] font-semibold rounded-lg text-[14px] transition-all">
                    {plan.ctaText}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Sub-Section */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full text-center"
        >
          <h3 className="text-2xl font-bold text-[#25A18E] mb-8">Add-ons</h3>

          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn}
                custom={0.35 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-xl py-3.5 px-8 border border-[#25A18E] text-[#25A18E] font-semibold text-[14px] shadow-xs hover:shadow-md transition-all duration-300 min-w-[200px]"
              >
                {addOn}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
