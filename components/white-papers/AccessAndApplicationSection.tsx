"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface AccessPoint {
  text: string;
}

const accessPoints: AccessPoint[] = [
  {
    text: "Authored by ZoikoTech's cross-disciplinary teams — including software engineers, policy analysts, legal experts, and sector strategists",
  },
  {
    text: "Reviewed by ZSIL's research editorial board for accuracy, applicability, and strategic relevance",
  },
  {
    text: "Delivered in presentation-ready formats (PDF, HTML, or briefing decks)",
  },
  {
    text: "Used by client teams for RFPs, strategy development, board reporting, and policy advisory work",
  },
  {
    text: "Presented during enterprise onboarding sessions, industry events, and executive briefings",
  },
];

export default function AccessAndApplicationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 max-w-6xl"
        >
          {/* Section Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
          >
            Access &amp; Application
          </motion.h2>

          {/* Intro Lead */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
          >
            All white papers and briefs are:
          </motion.p>

          {/* Checklist items */}
          <motion.ul variants={containerVariants} className="space-y-3.5 pt-1">
            {accessPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center shrink-0 mt-0.5">
                  <Check
                    className="w-3.5 h-3.5"
                    color="#FFFFFF"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-[#4B5563] text-sm sm:text-base font-medium leading-normal">
                  {point.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Footer Summary Note */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-4"
          >
            For clients seeking deeper alignment, ZoikoTech offers custom
            walkthroughs, implementation modeling, and sector-specific advisory
            derived from any published insight
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
