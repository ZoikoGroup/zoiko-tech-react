"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

const sections = [
  {
    title: "Compliance",
    items: [
      "GDPR, CCPA, PCI DSS",
      "FCC/Ofcom aligned",
      "SIM swap logs",
      "Network audit records",
    ],
  },
  {
    title: "Governance",
    items: [
      "Role-based access control",
      "API key governance",
      "Immutable audit trails",
    ],
  },
];

export default function ComplianceAndGovernance() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              custom={0.1 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[320px] flex flex-col justify-start"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-[#25A18E] mb-8">
                {section.title}
              </h3>

              {/* Items Checklist */}
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-[14px] text-[#555555]"
                  >
                    <Check className="w-4 h-4 text-[#25A18E] mr-3 shrink-0 stroke-[2.5]" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
