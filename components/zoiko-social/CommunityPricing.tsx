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
    title: "Free",
    price: "$0",
    period: "/month",
    features: [
      "Basic profile & messaging",
      "Community groups access",
      "Event discovery",
      "Limited marketplace access",
      "Basic adoption features",
    ],
    buttonText: "Join Free",
    recommended: false,
  },
  {
    title: "Pro User",
    price: "$5",
    period: "/month",
    features: [
      "Enhanced profile features",
      "Priority support",
      "Advanced marketplace access",
      "Event hosting tools",
      "Analytics dashboard",
      "Ad-free experience",
    ],
    buttonText: "Upgrade",
    recommended: false,
  },
  {
    title: "NGO",
    price: "$9",
    period: "/month",
    features: [
      "Verified organization badge",
      "Fundraising tools",
      "Volunteer management",
      "Event promotion",
      "Adoption platform access",
      "Analytics & reporting",
    ],
    buttonText: "NGO Signup",
    recommended: false,
  },
  {
    title: "Creator",
    price: "$15",
    period: "/month",
    features: [
      "Monetization tools",
      "Brand partnership access",
      "Advanced analytics",
      "Live streaming tools",
      "Content scheduling",
      "Priority verification",
    ],
    buttonText: "Start Creating",
    recommended: true,
  },
  {
    title: "Business",
    price: "$29",
    period: "/month",
    features: [
      "Business verification",
      "Advertising tools",
      "Marketplace integration",
      "Customer analytics",
      "Brand safety tools",
      "Dedicated support",
    ],
    buttonText: "Business Account",
    recommended: false,
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Multi-jurisdiction compliance",
      "Bulk API access",
      "Custom integrations",
      "White-label options",
      "Dedicated account manager",
      "Enterprise security",
    ],
    buttonText: "Contact Sales",
    recommended: false,
  },
];

export default function CommunityPricing() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-3 leading-tight"
        >
          Community Pricing
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#7A7A7A] text-[15px] sm:text-[16px] font-normal text-center mb-16 max-w-xl leading-relaxed"
        >
          Accessible platform for animal lovers, professionals, and
          organizations
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className={`relative bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[500px] ${
                plan.recommended
                  ? "border-2 border-[#52D4B9]"
                  : "border border-transparent"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#52D4B9] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Plan Title & Price */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-[#222222] mb-4">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl sm:text-[40px] font-extrabold text-[#52D4B9] tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[#7A7A7A] text-sm ml-1 font-normal">
                        {plan.period}
                      </span>
                    )}
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
              <button className="w-full bg-[#52D4B9] hover:bg-[#43bdA3] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-sm mt-auto">
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
