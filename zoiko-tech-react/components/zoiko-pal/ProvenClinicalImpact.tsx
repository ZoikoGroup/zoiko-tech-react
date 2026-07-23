"use client";

import React from "react";
import { motion } from "framer-motion";

const impactData = [
  {
    title: "Medication Adherence",
    stat: "+28% Improvement",
    description:
      "Significant increase in medication compliance through personalized AI coaching and smart reminders.",
  },
  {
    title: "Emergency Response",
    stat: "+39% Faster Detection",
    description:
      "Dramatic improvement in fall detection and emergency response times saving critical minutes.",
  },
  {
    title: "Hospitalization Reduction",
    stat: "-17% Hospital Admissions",
    description:
      "Proactive health monitoring and preventive care recommendations reducing emergency visits.",
  },
  {
    title: "Dispute Resolution",
    stat: "+33% Fewer Disputes",
    description:
      "Clear communication and transparent care plans reducing misunderstandings and conflicts.",
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

export default function ProvenClinicalImpact() {
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
            Proven Clinical Impact
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Quantified health outcomes from real-world deployments
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {impactData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={0.12 * (idx + 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Card Title */}
              <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Highlighted Stat Metric */}
              <p className="text-[14px] font-bold text-slate-800 mb-2">
                {item.stat}
              </p>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
