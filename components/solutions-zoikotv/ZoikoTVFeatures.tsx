"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tv, Globe, Zap, Sparkles, Search } from "lucide-react";

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

const ottFeatures = [
  {
    title: "Multi-Format Streaming",
    subtitle: "Content in every format you love.",
    icon: Tv,
    items: [
      "Long-form documentaries",
      "Short-form clips",
      "Live streaming events",
    ],
  },
  {
    title: "Category Hubs",
    subtitle: "Explore content that inspires.",
    icon: Globe,
    items: [
      "Animals & Conservation",
      "Technology & Innovation",
      "Climate & Environment",
      "Global Culture",
    ],
  },
  {
    title: "Adaptive Streaming Engine",
    subtitle: "Seamless viewing on any device.",
    icon: Zap,
    items: ["4K/1080p/720p quality", "Offline mode", "Multi-device sync"],
  },
  {
    title: "Personalization",
    subtitle: "Content tailored to your interests.",
    icon: Sparkles,
    items: ["Multiple profiles", "Watchlist", "AI recommendations"],
  },
  {
    title: "Discovery",
    subtitle: "Find your next favorite show.",
    icon: Search,
    items: ["Trending topics", "Curated collections", "Featured creators"],
  },
];

export default function ZoikoTVFeatures() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Badge Tag */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-6"
        >
          <span className="bg-[#E8F2F2] text-[#006666] px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
            ZoikoTV Platform
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A202C] mb-4 leading-tight">
            Next-Generation OTT Streaming
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px] leading-relaxed">
            Watch stories that matter, from wildlife conservation to
            cutting-edge technology.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {ottFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[320px]"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#006059] text-white flex items-center justify-center mb-6 shrink-0 shadow-xs">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Card Header & Subtitle */}
                <h3 className="text-xl font-bold text-[#1A202C] mb-1 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#666666] mb-6">
                  {feature.subtitle}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 w-full text-left mt-auto">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                      <span className="text-[14px] text-[#555555]">{item}</span>
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
