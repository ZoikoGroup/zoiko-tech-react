"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, UserCheck, Store, Scale } from "lucide-react";

const ecosystemCards = [
  {
    title: "For Enterprises",
    description:
      "Access compliant global professionals with verifiable credentials and transparent reputation scoring through our ZoikoTrust Index.",
    icon: Building2,
  },
  {
    title: "For Professionals",
    description:
      "Offer services with verifiable reputation scores and operate across multiple jurisdictions with AI-assisted governance.",
    icon: UserCheck,
  },
  {
    title: "For SMEs",
    description:
      "Access end-to-end HR, accounting, legal, and compliance automation through verified professional networks.",
    icon: Store,
  },
  {
    title: "For Regulators",
    description:
      "Access data-driven oversight dashboards with comprehensive audit trails and compliance monitoring.",
    icon: Scale,
  },
];

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

export default function AIGovernedProfessionalEcosystem() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
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
            AI-Governed Professional Ecosystem
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Creating a compliant, intelligent, and ethical ecosystem for
            professional services worldwide
          </p>
        </motion.div>

        {/* Ecosystem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {ecosystemCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={0.12 * (idx + 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-white rounded-[10px] p-7 sm:p-8 shadow-[0_4px_12px_0_#0000001A] border border-slate-200/80 flex flex-col items-start hover:shadow-md transition-all duration-300"
              >
                {/* Circular Teal Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4FD1C7] to-[#3BA8A0] flex items-center justify-center text-white mb-6 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-[#0f1124] mb-3 leading-snug">
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
