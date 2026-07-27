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
    title: "ZoikoTV Basic",
    subtitle: "Free access with ads.",
    highlightBorder: false,
    badgeText: null,
    ctaText: "Start Watching Free",
    features: [
      "Access to all content",
      "Ad-supported viewing",
      "720p quality",
      "Single device",
    ],
  },
  {
    title: "ZoikoTV Premium",
    subtitle: "Ad-free with enhanced features.",
    highlightBorder: true,
    badgeText: "Most Popular",
    ctaText: "Subscribe Now",
    features: [
      "Ad-free experience",
      "4K streaming",
      "Offline downloads",
      "Multiple devices",
      "Early access to content",
    ],
  },
  {
    title: "Creator Pro",
    subtitle: "For professional creators.",
    highlightBorder: false,
    badgeText: null,
    ctaText: "Become a Creator",
    features: [
      "Upload unlimited content",
      "Monetisation tools",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
    ],
  },
];

export default function ZoikoTVPricing() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            Pricing
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] leading-tight">
            Plans for Viewers and Creators
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.15 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center relative min-h-[460px] ${
                plan.highlightBorder
                  ? "border-2 border-[#25A18E]"
                  : "border border-gray-100/80"
              }`}
            >
              {/* Optional Most Popular Badge */}
              {plan.badgeText && (
                <div className="mb-4">
                  <span className="bg-[#006059] text-white px-4 py-1 rounded-full text-[12px] font-medium tracking-wide">
                    {plan.badgeText}
                  </span>
                </div>
              )}

              {/* Plan Title & Subtitle */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1A202C] mb-1">
                {plan.title}
              </h3>
              <p className="text-[14px] text-[#666666] mb-8">{plan.subtitle}</p>

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
                <button className="w-full sm:w-auto px-7 py-3 bg-[#006059] hover:bg-[#004D47] text-white font-semibold rounded-lg text-[14px] transition-all shadow-sm active:scale-95">
                  {plan.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
