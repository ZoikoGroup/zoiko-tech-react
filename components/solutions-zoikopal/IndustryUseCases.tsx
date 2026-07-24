"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, Handshake, Ambulance } from "lucide-react";

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

const useCases = [
  {
    title: "Families",
    icon: Home,
    items: ["Daily reassurance", "Memory prompts", "Coordination hub"],
  },
  {
    title: "Care Homes",
    icon: Building2,
    items: ["Multi-resident dashboard", "Staff notes", "Family communication"],
  },
  {
    title: "NGOs / Elder Programs",
    icon: Handshake,
    items: ["Social inclusion indicators", "Community check-ins"],
  },
  {
    title: "Home Care Agencies",
    icon: Ambulance,
    items: ["Visit summaries", "Carer coordination", "Family notifications"],
  },
];

export default function IndustryUseCases() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#2D3748] mb-3 leading-tight">
            Industry Use Cases
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Supporting elder care across different environments and
            organizations
          </p>
        </motion.div>

        {/* 2x2 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                custom={0.15 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center min-h-[300px]"
              >
                {/* Icon Wrapper */}
                <div className="flex items-center justify-center mb-6 shrink-0">
                  <IconComponent className="w-7 h-7 text-[#25A18E]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#2D3748] mb-6">
                  {useCase.title}
                </h3>

                {/* Bulleted Items List */}
                <ul className="space-y-3 text-left self-start w-full">
                  {useCase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] md:text-[15px] text-[#555555] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25A18E] shrink-0" />
                      <span>{item}</span>
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
