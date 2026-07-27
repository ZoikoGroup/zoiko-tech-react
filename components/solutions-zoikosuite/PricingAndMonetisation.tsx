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
    title: "ZoikoSuite Core",
    features: [
      "Accounting + HR + basic compliance",
      "Standard reporting",
      "Email support",
      "Basic integrations",
    ],
    buttonText: "Get Started",
    isFeatured: false,
  },
  {
    title: "ZoikoSuite\nProfessional",
    features: [
      "AP/AR automation",
      "Compliance matrix, RBAC",
      "Advanced workflows",
      "Priority support",
    ],
    buttonText: "Most Popular",
    isFeatured: true,
  },
  {
    title: "ZoikoSuite Enterprise",
    features: [
      "UCC, SmartOps Ledger Engine™, People Graph™",
      "SSO, advanced workflows",
      "Priority support",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    isFeatured: false,
  },
];

const addonsRowOne = ["Payroll module", "Assets/inventory"];
const addonsRowTwo = ["Document automation pack"];

export default function PricingAndMonetisation() {
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
            Pricing & Monetisation
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Flexible plans to support businesses of all sizes
          </p>
        </motion.div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16 items-stretch">
          {pricingPlans.map((plan, planIndex) => (
            <motion.div
              key={plan.title}
              custom={0.15 + planIndex * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between min-h-[420px] relative ${
                plan.isFeatured
                  ? "border-[2px] border-[#25A18E]"
                  : "border border-gray-100"
              }`}
            >
              {/* Card Header & Features */}
              <div>
                <h3 className="text-2xl font-bold text-[#25A18E] mb-8 leading-snug whitespace-pre-line text-center min-h-[64px] flex items-center justify-center">
                  {plan.title}
                </h3>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#25A18E] shrink-0 mt-1" />
                      <span className="text-[14px] text-[#555555] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 flex justify-center">
                {plan.isFeatured ? (
                  <button className="px-8 py-2.5 bg-[#FF6B35] hover:bg-[#f05a24] text-white font-medium text-[14px] rounded-lg shadow-[0_4px_12px_#FF6B3540] transition-colors duration-200">
                    {plan.buttonText}
                  </button>
                ) : (
                  <button className="px-8 py-2.5 border-2 border-[#25A18E] text-[#25A18E] hover:bg-[#25A18E]/5 font-medium text-[14px] rounded-lg transition-colors duration-200 bg-white">
                    {plan.buttonText}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          custom={0.45}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col items-center text-center w-full"
        >
          <h3 className="text-2xl font-bold text-[#25A18E] mb-6">Add-ons</h3>

          <div className="flex flex-col items-center gap-3">
            {/* First Row of Addon Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {addonsRowOne.map((addon) => (
                <button
                  key={addon}
                  className="border-2 border-[#25A18E] text-[#25A18E] hover:bg-[#25A18E]/5 bg-white text-[14px] font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  {addon}
                </button>
              ))}
            </div>

            {/* Second Row of Addon Buttons */}
            <div className="flex justify-center">
              {addonsRowTwo.map((addon) => (
                <button
                  key={addon}
                  className="border-2 border-[#25A18E] text-[#25A18E] hover:bg-[#25A18E]/5 bg-white text-[14px] font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  {addon}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
