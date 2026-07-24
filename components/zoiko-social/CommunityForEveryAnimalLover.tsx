"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Stethoscope,
  Home,
  Building2,
  Palette,
  Newspaper,
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

const communityCards = [
  {
    title: "Standard Users",
    description:
      "Personal feed, secure chat, event discovery, and integrated wallet for supporting causes and making purchases within the ecosystem.",
    icon: User,
  },
  {
    title: "Professionals",
    description:
      "Veterinarians, trainers, and animal care professionals with booking systems, Q&A platforms, and monetization through Zoiko Pay integration.",
    icon: Stethoscope,
  },
  {
    title: "NGOs & Shelters",
    description:
      "Adoption listings, volunteer coordination, fundraising tools, and comprehensive shelter management with verified organization badges.",
    icon: Home,
  },
  {
    title: "Ethical Brands",
    description:
      "Verified business accounts with advertising dashboard, sales analytics, and direct integration with the ZoikoSocial marketplace.",
    icon: Building2,
  },
  {
    title: "Content Creators",
    description:
      "Monetization tools via Zoiko Pay, content analytics, brand partnerships, and direct fan support through integrated tipping systems.",
    icon: Palette,
  },
  {
    title: "Verified Journalists",
    description:
      "Publish verified animal and environmental news with fact-checking support, editorial tools, and reach amplification for important stories.",
    icon: Newspaper,
  },
];

export default function CommunityForEveryAnimalLover() {
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
          Community for Every Animal Lover
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
          Diverse account types and dashboards for every member of the animal
          community
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {communityCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.2 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[260px]"
              >
                <div>
                  {/* Icon Circle with Linear Gradient */}
                  <div className="w-12 h-12 rounded-full bg-[linear-gradient(180deg,#4FD1C7_0%,#2C5F5D_100%)] flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-6 h-6 text-white stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-[#222222] mb-3">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#555555] text-[14px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
