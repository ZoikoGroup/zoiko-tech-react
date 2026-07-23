"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Users,
  Laptop,
  Rocket,
  Building2,
} from "lucide-react";

const userJourneys = [
  {
    icon: Briefcase,
    title: "Skilled Workers",
    description:
      "Visa pathways, job market insights, salary benchmarking, and professional credential transfers with Zoiko Agora integration.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Student visa guides, university selection, scholarship opportunities, and academic pathway planning.",
  },
  {
    icon: Users,
    title: "Families",
    description:
      "Family visa options, school selection, childcare resources, and family-friendly neighborhood recommendations.",
  },
  {
    icon: Laptop,
    title: "Digital Nomads",
    description:
      "Remote work visas, co-working spaces, temporary housing, and nomad community connections.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description:
      "Investor visas, business registration, startup ecosystems, and entrepreneurial support networks.",
  },
  {
    icon: Building2,
    title: "Corporate HR",
    description:
      "Employee relocation management, compliance tracking, expense monitoring, and vendor coordination.",
  },
];

// Motion animation variants with typed easing
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

export default function ComprehensiveUserJourneys() {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-14 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Comprehensive User Journeys
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Tailored experiences for every type of international mover
          </p>
        </motion.div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {userJourneys.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.12 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
              >
                {/* Circular Teal Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#2C5F5D] flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
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
