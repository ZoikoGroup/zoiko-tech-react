"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Rocket,
  Globe,
  ShieldCheck,
  Cpu,
  Cloud,
  Activity,
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
    icon: Zap,
    title: "Dynamic Convergence Core™",
    color: "text-amber-300",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Rocket,
    title: "Carrier-Grade Elasticity Engine™",
    color: "text-rose-300",
    bgColor: "bg-rose-400/10",
  },
  {
    icon: Globe,
    title: "Integrated MVNO Fabric™",
    color: "text-sky-300",
    bgColor: "bg-sky-400/10",
  },
];

const stats = [
  {
    icon: Activity,
    value: "99.999%",
    label: "uptime",
  },
  {
    icon: Cpu,
    value: "Fully API-driven",
    label: "architecture",
  },
  {
    icon: Cloud,
    value: "Cloud-native",
    label: "+ On-prem options",
  },
  {
    icon: ShieldCheck,
    value: "Carrier-grade",
    label: "security",
  },
];

export default function TelecomInfrastructureHero() {
  return (
    <section className="w-full bg-[#008B8BCC] py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold tracking-tight text-white mb-6 leading-[1.25] max-w-4xl"
        >
          The Future of Telecom Infrastructure — Unified, Intelligent, and Built
          for Global Scale.
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-white/85 text-[15px] sm:text-[16px] font-normal mb-10 max-w-200 leading-relaxed"
        >
          ZoikoNex powers MVNOs, MVNEs, MVNAs, digital telcos, and global
          connectivity with unmatched performance and flexibility.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          {/* Primary Callout Button */}
          <button className="w-full sm:w-auto bg-[#FF6B4A] hover:bg-[#f05a38] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-[14px]">
            Request a Technical Demo
          </button>

          {/* Secondary Teal Button */}
          <button className="w-full sm:w-auto bg-[#25A18E] hover:bg-[#1d8c7b] text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 text-[14px]">
            Download the Product Overview
          </button>
        </motion.div>

        {/* Glassmorphic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.25 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[170px] hover:bg-white/15 transition-all duration-300 shadow-lg group"
              >
                <div
                  className={`p-3 rounded-xl mb-4 transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-white max-w-50 tracking-wide">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Key Stats Row with Lucide Icons */}
        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-4xl border-t border-white/10 pt-10"
        >
          {stats.map((stat) => {
            return (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center group"
              >
                <span className="text-white font-bold text-xl sm:text-2xl mb-1">
                  {stat.value}
                </span>
                <span className="text-white/70 text-[13px] font-light">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
