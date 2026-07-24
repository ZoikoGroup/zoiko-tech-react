"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const zoikoPayPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    isRecommended: false,
    ctaText: "Get Started",
    ctaHref: "/signup?plan=starter",
    features: [
      "Sandbox access",
      "5 API keys",
      "Test wallet functionality",
      "Basic documentation",
      "Community support",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    isRecommended: true,
    ctaText: "Start Trial",
    ctaHref: "/signup?plan=growth",
    features: [
      "50 API calls per hour",
      "Basic AML module",
      "Standard support",
      "Fraud detection",
      "Multi-currency wallets",
      "Compliance reporting",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    isRecommended: false,
    ctaText: "Contact Sales",
    ctaHref: "/contact-sales?product=zoikopay",
    features: [
      "Private cloud hosting",
      "Dedicated compliance team",
      "Custom integrations",
      "24/7 support",
      "Advanced AI features",
      "Multi-jurisdiction support",
    ],
  },
];

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

export default function ChooseYourPlan() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Choose Your Plan
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Flexible pricing for developers, SMEs, and enterprises
          </p>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 w-full items-stretch">
          {zoikoPayPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              custom={0.12 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className={`relative bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] flex flex-col justify-between hover:shadow-md transition-all duration-300 ${
                plan.isRecommended
                  ? "border-2 border-[#4FD1C7]"
                  : "border border-slate-200/80"
              }`}
            >
              {/* RECOMMENDED Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4FD1C7] text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-xs">
                  Recommended
                </div>
              )}

              <div>
                {/* Plan Name */}
                <h3 className="text-center text-[22px] font-bold text-[#1e293b] mb-4">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="text-center mb-8">
                  <span className="text-4xl sm:text-[42px] font-bold text-[#4FD1C7]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#64748b] text-[14px] font-medium ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Feature List */}
                <ul className="space-y-3.5 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#4FD1C7] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="text-[#64748b] text-[14px] font-normal leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link / Button Integration */}
              <div>
                <Link
                  href={plan.ctaHref}
                  className="w-full inline-block text-center bg-[#4FD1C7] hover:bg-[#3BA8A0] text-white font-semibold text-[15px] py-3.5 rounded-lg transition-colors duration-300 shadow-xs"
                >
                  {plan.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
