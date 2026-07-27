"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Smartphone,
  Plane,
  Car,
  FileCheck,
  Cpu,
  CreditCard,
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

const featureCards = [
  {
    title: "Global eSIM Platform",
    subtitle: "Stay connected anywhere with our Global Connectivity Fabric™.",
    icon: Smartphone,
    items: [
      "Country packs",
      "Regional unlimited plans",
      "Global roaming",
      "Usage tracking",
      "Auto top-up",
      "Multi-device support",
    ],
  },
  {
    title: "Flights & Hotels",
    subtitle: "Find and book the perfect accommodations and flights.",
    icon: Plane,
    items: [
      "Multi-airline search",
      "Price-drop alerts",
      "Flexible date search",
      "Map view hotels",
      "Amenities & filters",
      "Flexible cancellation",
    ],
  },
  {
    title: "Mobility & Transfers",
    subtitle: "Complete your journey with seamless ground transportation.",
    icon: Car,
    items: [
      "Car rentals",
      "Airport transfers",
      "Chauffeur services (coming soon)",
    ],
  },
  {
    title: "Visa & Travel Requirements",
    subtitle: "Navigate international travel requirements with ease.",
    icon: FileCheck,
    items: [
      "Eligibility checker",
      "Documentation guidance",
      "Appointment reminders",
    ],
  },
  {
    title: "Orbit Intelligence Engine™",
    subtitle: "AI-powered trip planning and optimization.",
    icon: Cpu,
    items: [
      "Multi-city trip planner",
      "Smart itinerary builder",
      "Disruption alerts",
    ],
  },
  {
    title: "Bookings & Wallet",
    subtitle: "Secure, flexible payment options.",
    icon: CreditCard,
    items: [
      "Multi-currency wallet",
      "Secure payments via ZoikoPay",
      "Installment options",
      "Refund automation",
    ],
  },
];

export default function SeamlessTravelFeatures() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            Platform Features
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-4 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] max-w-xl font-bold tracking-tight text-[#1A202C] leading-tight">
            Everything You Need for Seamless Travel
          </h2>
        </motion.div>

        {/* Section Subtitle */}
        <motion.div
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-2xl"
        >
          <p className="text-[15px] md:text-base text-[#666666] font-normal leading-relaxed">
            From connectivity to bookings, we've got your journey covered.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
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
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[320px]"
              >
                {/* Icon Container with linear gradient */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] flex items-center justify-center mb-6 shadow-sm shrink-0">
                  <IconComponent className="w-6 h-6 text-white stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-[22px] font-bold text-[#1A202C] mb-2 leading-snug">
                  {card.title}
                </h3>

                {/* Card Subtitle */}
                <p className="text-[14px] text-[#666666] mb-8 leading-relaxed min-h-[42px]">
                  {card.subtitle}
                </p>

                {/* Bullet List with Plus Icons */}
                <ul className="space-y-3.5 w-full text-left">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#25A18E] shrink-0 stroke-[2.5] ml-3"></div>
                      <span className="text-[14px] text-[#555555] font-medium leading-relaxed">
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
