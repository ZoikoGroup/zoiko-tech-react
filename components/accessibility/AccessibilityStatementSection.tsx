"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AccessibilityStatementSection() {
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

  const complianceStandards = [
    "Section 508 of the Rehabilitation Act – United States",
    "Americans with Disabilities Act (ADA)",
    "UK Equality Act 2010",
    "European Accessibility Act (EAA)",
    "ISO/IEC 40500:2012 Accessibility Standard",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: Accessibility Statement */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Accessibility Statement
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                At ZoikoTech, accessibility is not an afterthought &mdash; it is
                a strategic pillar that reflects our commitment to inclusive
                innovation. We design and develop our platforms to ensure that
                everyone, regardless of physical ability, cognitive function,
                language, age, or device, can access and interact with our
                digital experiences with ease and dignity.
              </p>

              <p>
                We believe that technology should be empowering for all users,
                and we are proud to support a culture of digital equity across
                every product we build.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Global Standards & Compliance */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                Global Standards &amp; Compliance
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                ZoikoTech is committed to achieving and maintaining conformance
                with the Web Content Accessibility Guidelines (WCAG) 2.1, Level
                AA, developed by the World Wide Web Consortium (W3C). Our
                accessibility framework also considers:
              </p>
            </div>

            {/* Dash List Items */}
            <div className="space-y-2 pt-1">
              {complianceStandards.map((text, idx) => (
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
              All ZoikoTech platforms &mdash; including ZoikoPal&trade;,
              ZoikoNex&trade;, ZoikoAssure&trade;, ZoikoTime&trade;, and
              BookingOrbit&trade; &mdash; are engineered with
              accessibility-first principles and undergo regular accessibility
              audits, both manual and automated.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
