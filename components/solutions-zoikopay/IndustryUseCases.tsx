"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Radio,
  Plane,
  Briefcase,
  Store,
  Handshake,
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

const useCases = [
  {
    title: "E-commerce",
    icon: ShoppingCart,
    items: ["Checkout optimization", "Split payments", "Seller wallets"],
  },
  {
    title: "Telecom/MVNOs",
    icon: Radio,
    items: ["Carrier billing", "Multi-brand wallets", "Top-ups and add-ons"],
  },
  {
    title: "Travel/eSIM",
    icon: Plane,
    items: ["Micro-transactions", "Global FX routing"],
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    items: ["Invoicing & payment links", "Multi-currency billing"],
  },
  {
    title: "Marketplaces",
    icon: Store,
    items: ["Multi-seller settlements", "Escrow services"],
  },
  {
    title: "NGOs",
    icon: Handshake,
    items: ["Donation flows", "Bulk payouts"],
  },
];

export default function IndustryUseCases() {
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
            Industry Use Cases
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Powering payments across diverse business sectors
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center border border-gray-100/80 min-h-[260px]"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#25A18E]/10 text-[#25A18E] flex items-center justify-center mb-4 shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-[22px] font-bold text-[#2D3748] mb-5">
                  {useCase.title}
                </h3>

                {/* Bullet List */}
                <ul className="space-y-2.5 w-full text-left mt-auto">
                  {useCase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] md:text-[14px] text-[#666666]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                      <span>{item}</span>
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
