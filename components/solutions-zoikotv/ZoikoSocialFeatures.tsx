"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Palette, MessageSquare, ShieldCheck } from "lucide-react";

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

const socialFeatures = [
  {
    title: "Topic Communities",
    subtitle: "Join conversations that matter to you.",
    icon: Users,
  },
  {
    title: "Creator Tools",
    subtitle: "Share your content and build your audience.",
    icon: Palette,
  },
  {
    title: "Engagement Features",
    subtitle: "Like, comment, share, and connect.",
    icon: MessageSquare,
  },
  {
    title: "Moderation & Safety",
    subtitle: "Safe, respectful community spaces.",
    icon: ShieldCheck,
  },
];

export default function ZoikoSocialFeatures() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
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
            ZoikoSocial Platform
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
          <h2 className="text-3xl sm:text-4xl md:text-[42px] max-w-xl font-bold tracking-tight text-[#1A202C] mb-4 leading-tight">
            Connect With Like-Minded Enthusiasts
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px] leading-relaxed">
            Join communities, share experiences, and engage with content
            creators.
          </p>
        </motion.div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {socialFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[260px]"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#006059] text-white flex items-center justify-center mb-6 shrink-0 shadow-xs">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#1A202C] mb-2 leading-snug">
                  {feature.title}
                </h3>

                {/* Card Subtitle Description */}
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  {feature.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
