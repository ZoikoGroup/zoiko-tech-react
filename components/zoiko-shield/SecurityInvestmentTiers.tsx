"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Essential",
    price: "$1,200",
    period: "/month",
    subtitle: "SMEs up to 100 users",
    isRecommended: false,
    ctaText: "Get Started",
    ctaHref: "/checkout?tier=essential&product=zoikoshield",
    features: [
      "Core threat protection",
      "Endpoint defense",
      "Compliance templates",
      "Basic incident response",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$4,500",
    period: "/month",
    subtitle: "Mid-size regulated entities",
    isRecommended: true,
    ctaText: "Request Demo",
    ctaHref: "/demo?tier=professional&product=zoikoshield",
    features: [
      "AI threat modeling",
      "ZWS integration",
      "Incident reporting",
      "Compliance automation",
      "24/7 monitoring",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    subtitle: "Global organizations",
    isRecommended: false,
    ctaText: "Contact Sales",
    ctaHref: "/contact?tier=enterprise&product=zoikoshield",
    features: [
      "Full AI security stack",
      "Private cloud hosting",
      "Legal defensibility suite",
      "Custom integrations",
      "Dedicated security team",
      "Executive briefings",
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

export default function SecurityInvestmentTiers() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
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
            Security Investment Tiers
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Scalable protection for organizations of every size
          </p>
        </motion.div>

        {/* 3-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch mb-12">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              custom={0.1 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className={`relative bg-white rounded-[10px] p-8 sm:p-9 shadow-[0_4px_12px_0_#0000001A] flex flex-col justify-between transition-all duration-300 ${
                tier.isRecommended
                  ? "border-2 border-[#4FD1C7] shadow-lg md:-translate-y-2"
                  : "border border-slate-200/80 hover:shadow-md"
              }`}
            >
              {/* RECOMMENDED Badge for Middle Card */}
              {tier.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4FD1C7] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-xs">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Tier Name */}
                <h3 className="text-xl md:text-[22px] font-bold text-[#0f1124] text-center mb-4">
                  {tier.name}
                </h3>

                {/* Price Display */}
                <div className="text-center mb-2">
                  <span className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#4FD1C7] tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-[#64748b] text-[14px] font-medium ml-1">
                      {tier.period}
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                <p className="text-center text-[#64748b] text-[13.5px] italic font-normal mb-8">
                  {tier.subtitle}
                </p>

                {/* Feature List */}
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-3 text-[14px] text-[#334155]"
                    >
                      <Check className="w-4 h-4 text-[#4FD1C7] shrink-0 stroke-[2.5]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button (#4FD1C7) */}
              <div className="mt-auto pt-2">
                <Link
                  href={tier.ctaHref}
                  className="block w-full text-center bg-[#4FD1C7] hover:bg-[#3dbbb1] text-white font-bold text-[15px] py-3 rounded-lg shadow-xs transition-all duration-300"
                >
                  {tier.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Legal / Compliance Governance Footer */}
        <motion.p
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-[#334155] text-[13px] sm:text-[14px] font-bold text-center tracking-tight"
        >
          Contracts governed by Delaware law | Arbitration seat: New York | Data
          residency selectable (U.S., E.U., APAC)
        </motion.p>
      </div>
    </section>
  );
}
