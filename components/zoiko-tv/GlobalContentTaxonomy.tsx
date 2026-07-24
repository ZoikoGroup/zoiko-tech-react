"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Feather,
  Rocket,
  Sprout,
  Clapperboard,
  Globe,
  Microscope,
} from "lucide-react";

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

const taxonomyItems = [
  {
    icon: Feather,
    title: "Zoiko Wildlife",
    description:
      "Stunning wildlife documentaries, conservation stories, and animal behavior studies showcasing the beauty and importance of biodiversity preservation.",
  },
  {
    icon: Rocket,
    title: "Tech Frontiers",
    description:
      "Cutting-edge technology documentaries, innovation showcases, and AI ethics discussions exploring the future of human-technology interaction.",
  },
  {
    icon: Sprout,
    title: "Green Planet",
    description:
      "Environmental conservation, sustainability practices, renewable energy innovations, and climate change solutions from around the world.",
  },
  {
    icon: Clapperboard,
    title: "Zoiko Originals",
    description:
      "Exclusive content created in partnership with leading filmmakers, focusing on ethical storytelling and meaningful human experiences.",
  },
  {
    icon: Globe,
    title: "Voices of the Planet",
    description:
      "Cultural documentaries, indigenous wisdom, global perspectives, and stories of resilience from communities worldwide.",
  },
  {
    icon: Microscope,
    title: "Science & Discovery",
    description:
      "Scientific breakthroughs, research expeditions, space exploration, and educational content that makes complex topics accessible.",
  },
];

export default function GlobalContentTaxonomy() {
  return (
    <section className="w-full bg-slate-50/50 py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[38px] font-bold tracking-tight text-slate-800 text-center mb-3"
        >
          Global Content Taxonomy
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-slate-500 text-[15px] sm:text-[16px] font-normal text-center mb-14"
        >
          Multi-jurisdiction curation for meaningful, ethical entertainment
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {taxonomyItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={0.2 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Icon Container with linear gradient from #4FD1C7 to #2C5F5D */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] flex items-center justify-center shadow-sm mb-6 shrink-0">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-500 text-[14px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
