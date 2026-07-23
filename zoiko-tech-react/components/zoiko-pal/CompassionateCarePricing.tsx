"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Home Plus",
    price: "$29.99",
    period: "/month",
    isRecommended: false,
    ctaText: "Start Free Trial",
    ctaHref: "/signup?plan=home-plus",
    features: [
      "Personal health monitoring",
      "Medication reminders",
      "Emergency detection",
      "Basic health insights",
      "Family notifications",
      "Mobile app access",
    ],
  },
  {
    name: "Facility Pro",
    price: "$1,200",
    period: "/month",
    isRecommended: true,
    ctaText: "Request Demo",
    ctaHref: "/demo?plan=facility-pro",
    features: [
      "Multi-patient monitoring",
      "Staff coordination tools",
      "Compliance reporting",
      "Integration with EMR systems",
      "24/7 support",
      "Advanced analytics dashboard",
    ],
  },
  {
    name: "Enterprise Care",
    price: "Custom",
    period: "",
    isRecommended: false,
    ctaText: "Contact Sales",
    ctaHref: "/contact-sales",
    features: [
      "Custom deployment",
      "Data residency options",
      "AI ethics audits",
      "Dedicated account management",
      "Custom integrations",
      "White-label options",
    ],
  },
];

// Motion animation variants with typed easing
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

export default function CompassionateCarePricing() {
  const router = useRouter();

  const handleCardButtonClick = (href: string) => {
    // Standard router navigation example
    router.push(href);
  };

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
            Compassionate Care Pricing
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Accessible health AI for individuals, facilities, and enterprises
          </p>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 w-full items-stretch mb-12">
          {pricingPlans.map((plan, idx) => (
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
                      <Check className="w-4 h-4 text-[#4FD1C7] shrink-0 mt-0.5" />
                      <span className="text-[#64748b] text-[14px] font-normal leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link / Router Push Button */}
              <div>
                {/* Method 1: Using Next.js Link tag */}
                <Link
                  href={plan.ctaHref}
                  className="w-full inline-block text-center bg-[#4FD1C7] hover:bg-[#3BA8A0] text-white font-semibold text-[15px] py-3.5 rounded-lg transition-colors duration-300 shadow-xs"
                >
                  {plan.ctaText}
                </Link>

                {/* Method 2: Router Push Alternative (Uncomment if preferring button handler) */}
                {/* 
                <button
                  onClick={() => handleCardButtonClick(plan.ctaHref)}
                  className="w-full text-center bg-[#4FD1C7] hover:bg-[#3BA8A0] text-white font-semibold text-[15px] py-3.5 rounded-lg transition-colors duration-300 shadow-xs"
                >
                  {plan.ctaText}
                </button> 
                */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Footer Note */}
        <motion.p
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center text-[#64748b] text-[13.5px] sm:text-[14.5px] leading-relaxed"
        >
          <strong className="text-[#1e293b]">Add-ons Available:</strong> Data
          Residency • AI Ethics Audits • Advanced Compliance Modules
        </motion.p>
      </div>
    </section>
  );
}
