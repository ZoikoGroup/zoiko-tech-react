"use client";

import React from "react";
import { motion } from "framer-motion";

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
    title: "Zoiko Chat",
    description:
      "End-to-end encrypted messaging powered by Zoiko AI Halo with smart moderation, group chats, and community safety features.",
  },
  {
    title: "Zoiko Feed",
    description:
      "AI-driven timeline using Nova Engine for personalized content discovery promoting positive animal stories and educational content.",
  },
  {
    title: "Zoiko Stories",
    description:
      "24-hour updates for sharing daily moments with pets, rescue stories, and behind-the-scenes shelter content with privacy controls.",
  },
  {
    title: "Zoiko Events",
    description:
      "Adoption drives, fundraising events, pet shows, and community gatherings with integrated ticketing and donation systems.",
  },
  {
    title: "Zoiko News",
    description:
      "Fact-checked, AI-verified journalism focusing on animal welfare, conservation, and ethical treatment with credible source verification.",
  },
  {
    title: "Zoiko Groups",
    description:
      "Communities organized by breed, region, cause, or interest with moderated discussions and expert-led educational content.",
  },
  {
    title: "Zoiko Market",
    description:
      "Comprehensive pet ecosystem commerce via ZWS with verified sellers, ethical product sourcing, and integrated payment processing.",
  },
  {
    title: "Adoption Hub",
    description:
      "Streamlined pet adoption with verified shelters, health records, compatibility matching, and post-adoption support systems.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen flex items-center">
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
          Platform Features
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
          Comprehensive social and commercial tools powered by Zoiko ecosystem
          integration
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#222222] mb-4">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
