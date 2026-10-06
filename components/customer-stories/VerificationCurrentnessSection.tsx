"use client";

import React from "react";
import { motion } from "framer-motion";

const currentnessPillars = [
  {
    title: "Dates and evidence",
    description:
      "Publication, update, review and review-due states are distinct. Public, controlled and unavailable evidence must not be conflated.",
  },
  {
    title: "Lifecycle",
    description:
      "Draft and customer/legal review stay internal. Live requires all rights, claims, routes and accessibility gates.",
  },
  {
    title: "Review due / archived",
    description:
      "Visibility only under policy; historical context must remain accurate and rights-valid.",
  },
  {
    title: "Conflicts and changes",
    description:
      "Hold disputed claims; remove revoked metrics; preserve historic product context without implying current availability.",
  },
  {
    title: "Media and search failure",
    description:
      "Use approved text/transcript fallback. No substitute stock customer photo. Search failure can show only a governed current catalog.",
  },
];

export default function VerificationCurrentnessSection() {
  return (
    <section id="currentness" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-[#102D2F] mb-4">
            Show what the story proves. And what it does not.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            Scope, limitations and rights remain readable before conversion.
          </p>
        </motion.div>

        {/* 2-Column Grid Matching Figma Spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11">
          {currentnessPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border-t border-[#DEEBEB] pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
            >
              <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-[#102D2F] mb-3">
                {pillar.title}
              </h3>
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#5E7076] max-w-[550px]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
