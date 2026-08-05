"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EnvironmentalSustainabilityAndSubcontractorSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const environmentalPoints = [
    "Comply with all environmental regulations relevant to their operations",
    "Minimize environmental footprint through waste reduction, energy efficiency, and pollution control",
    "Disclose the use of hazardous substances and manage them responsibly",
    "Contribute to sustainability through green procurement and circular supply practices",
  ];

  const subcontractorPoints = [
    "Conducting due diligence on all downstream partners",
    "Ensuring contracts include ethics, compliance, and confidentiality obligations",
    "Cooperating with ZoikoTech-led audits and risk reviews when applicable",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 5: Environmental Stewardship & Sustainability */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                5. Environmental Stewardship &amp; Sustainability
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech champions environmental responsibility. We expect
                suppliers to:
              </p>
            </div>

            {/* Dash Bullet List */}
            <div className="space-y-2 pt-1">
              {environmentalPoints.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                    -
                  </span>
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              Preference is given to suppliers demonstrating measurable ESG
              performance and climate action alignment.
            </p>
          </motion.div>

          {/* Section 6: Subcontractor Oversight */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                6. Subcontractor Oversight
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Suppliers must extend the principles of this Code to their own
                vendors, subcontractors, and agents. This includes:
              </p>
            </div>

            {/* Dash Bullet List */}
            <div className="space-y-2 pt-1">
              {subcontractorPoints.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                    -
                  </span>
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              Failure to enforce these obligations throughout the supply chain
              may result in termination of the relationship.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
