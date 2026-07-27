"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  CheckSquare,
  Zap,
  FileText,
  RefreshCw,
  Smartphone,
  Check,
} from "lucide-react";

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

const topBadges = ["PCI-DSS Ready", "FX Routing", "Global Coverage"];

const featureCards = [
  {
    title: "Payment Acceptance",
    icon: CreditCard,
    items: [
      "Visa/Mastercard processing",
      "Bank transfers (ACH/SEPA)",
      "Mobile Money integration",
      "Wallet payments",
      "Checkout pages, payment links, QR codes",
      "Subscription billing",
    ],
  },
  {
    title: "Smart Wallets™",
    icon: Wallet,
    items: [
      "Multi-currency balances",
      "Internal transfers",
      "Auto-FX routing",
      "Merchant and customer wallets",
      "Virtual account numbers",
    ],
  },
  {
    title: "Merchant Onboarding & Compliance",
    icon: CheckSquare,
    items: [
      "KYC/KYB checks",
      "Document uploads",
      "Business verification",
      "Risk scoring",
      "Compliance engine (AML/CTF, GDPR, UK GDPR)",
    ],
  },
  {
    title: "Payouts & Settlements",
    icon: Zap,
    items: [
      "Instant payouts",
      "Multi-currency payouts",
      "Scheduled settlements",
      "Bulk payouts",
    ],
  },
  {
    title: "Invoicing & Billing",
    icon: FileText,
    items: [
      "Multi-currency invoicing",
      "Payment links",
      "Auto-reminders",
      "Client portal",
    ],
  },
  {
    title: "Subscription Engine",
    icon: RefreshCw,
    items: ["Usage-based billing", "Recurring payments", "Dunning workflows"],
  },
  {
    title: "Telecom Billing\n(ZoikoNex Integration)",
    icon: Smartphone,
    items: [
      "Top-ups",
      "Bundles",
      "Failed charge recovery",
      "Multi-brand billing",
    ],
  },
];

export default function ZoikoPayFeaturesAndCapabilities() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Badges */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap justify-between gap-4 sm:gap-6 mb-12 w-full"
        >
          {topBadges.map((badge) => (
            <div
              key={badge}
              className="bg-white border-2 border-[#1E7769] rounded-lg px-25 py-2.5 shadow-2xs flex items-center justify-center font-semibold text-[#343A40] min-w-[160px]"
            >
              {badge}
            </div>
          ))}
        </motion.div>

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
            Features & Capabilities
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Comprehensive financial infrastructure for modern businesses
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center border border-gray-100/80 min-h-[360px]"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl text-[#25A18E] flex items-center justify-center mb-2 shrink-0">
                  <IconComponent className="w-9 h-9 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-[22px] font-bold text-[#25A18E] mb-6 leading-snug whitespace-pre-line min-h-[56px] flex items-center justify-center">
                  {card.title}
                </h3>

                {/* Feature List */}
                <ul className="space-y-3 w-full text-left ">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#25A18E] shrink-0 mt-0.5" />
                      <span className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
