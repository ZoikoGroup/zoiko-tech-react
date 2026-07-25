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
    title: "ZoikoTime Teams",
    subtitle: "For freelancers, small teams, and SMEs up to ~50 users",
    highlightBorder: false,
    ctaText: "Get Started",
    ctaVariant: "outline", // Outlined teal button
    billingNote: "Monthly and annual billing with volume discounts",
    features: [
      "Core time tracking",
      "Project and client tracking",
      "Basic TES™ scoring",
      "Standard reports and exports",
      "Standard support",
    ],
  },
  {
    title: "ZoikoTime Enterprise",
    subtitle: "For mid-market and large organisations",
    highlightBorder: true,
    ctaText: "Most Popular",
    ctaVariant: "filled", // Solid teal button
    billingNote: "Volume-based pricing with enterprise agreements",
    features: [
      "Full Work Pattern DNA™ capabilities",
      "Temporal Behaviour Engine™ insights",
      "Advanced TES™ with decomposition",
      "Department and business unit hierarchies",
      "SSO and priority support",
      "Dedicated account management",
    ],
  },
];

const addOns = [
  {
    title: "Onboarding\nConcierge",
    description: "Guided implementation and admin training",
  },
  {
    title: "Custom\nIntegrations",
    description: "Bespoke connectors to in-house systems",
  },
  {
    title: "Dedicated\nInfrastructure",
    description: "Isolated instances for regulated customers",
  },
  {
    title: "Partner\nProgramme",
    description: "Co-branded or reseller arrangements",
  },
];

export default function PricingAndCommercialModel() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            Pricing & Commercial Model
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Choose the plan that fits your team’s needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.15 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center relative ${
                plan.highlightBorder
                  ? "border-2 border-[#25A18E]"
                  : "border border-gray-100/80"
              }`}
            >
              {/* Plan Title & Subtitle */}
              <h3 className="text-2xl md:text-[26px] font-bold text-[#25A18E] mb-2">
                {plan.title}
              </h3>
              <p className="text-[13px] italic text-[#888888] mb-8 max-w-xs">
                {plan.subtitle}
              </p>

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

              {/* Billing Note & CTA Button Section */}
              <div className="mt-auto w-full flex flex-col items-center">
                <p className="text-[11px] md:text-[12px] italic text-[#999999] mb-4">
                  {plan.billingNote}
                </p>

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

        {/* Add-ons & Services Sub-Section */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="w-full text-center"
        >
          <h3 className="text-2xl font-bold text-[#25A18E] mb-8">
            Add-ons & Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-4xl">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.title}
                custom={0.35 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-xl p-6 border border-[#25A18E]/60 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all duration-300 min-h-[160px]"
              >
                <h4 className="text-[16px] font-bold text-[#25A18E] mb-2 leading-tight whitespace-pre-line">
                  {addOn.title}
                </h4>
                <p className="text-[12px] md:text-[13px] text-[#666666] leading-relaxed">
                  {addOn.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
