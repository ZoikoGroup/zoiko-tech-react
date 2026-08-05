"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalResponsibilityAndEthicsSection() {
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

  const ethicsPoints = [
    "Speak up when they witness or suspect unethical behavior",
    "Report concerns through confidential and secure channels",
    "Escalate risks through structured governance pathways",
    "Participate in regular dialogue about ethical dilemmas and social responsibility",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Section 1: Our Global Responsibility */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight">
              Our Global Responsibility
            </h1>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                ZoikoTech supports clients across industries where ethics and
                trust are paramount &mdash; including telecommunications,
                finance, eldercare, compliance, medtech, government, and
                conservation. We maintain internal Ethics and Compliance
                Committees that conduct risk assessments, policy reviews, and
                product-level audits.
              </p>

              <p>
                All employees undergo mandatory annual training on our Code of
                Ethics, anti-corruption policies, and inclusion standards.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Ethics in Practice */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                Ethics in Practice
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                We empower every individual at ZoikoTech to:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {ethicsPoints.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#56B810" />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              Ethics is not the responsibility of one department &mdash; it is
              everyone&rsquo;s responsibility.
            </p>
          </motion.div>

          {/* Section 3: Questions or Reporting */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Questions or Reporting
            </h2>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                To report concerns or request clarification about our Code of
                Ethics &amp; Integrity, please contact:
              </p>

              <div className="space-y-1 pt-1">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:ethics@zoikotech.com"
                    className="text-[#0070BB] hover:underline transition-colors"
                  >
                    ethics@zoikotech.com
                  </a>
                </p>
                <p>Phone (Toll-Free USA): 800-484-5564</p>
              </div>

              <p className="pt-2">
                We respond to verified reports with discretion, professionalism,
                and a commitment to corrective action when necessary.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
