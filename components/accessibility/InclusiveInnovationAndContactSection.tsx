"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InclusiveInnovationAndContactSection() {
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

  const collaborators = [
    "Industry experts and advisory groups",
    "Assistive technology users",
    "UX researchers and inclusive design consultants",
    "Cross-functional engineering and product teams",
  ];

  const strategyPoints = [
    "Automated and manual testing using real assistive technologies",
    "Periodic conformance reviews for legacy and emerging platforms",
    "Role-based accessibility training across departments",
    "Accessibility-first documentation and onboarding workflows",
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
          {/* Section 1: Inclusive Innovation & Continuous Improvement */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                Inclusive Innovation &amp; Continuous Improvement
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Accessibility at ZoikoTech is not static &mdash; it is embedded
                into our DevOps, product, and QA workflows. Our dedicated
                Accessibility Taskforce collaborates with:
              </p>
            </div>

            {/* Collaborators List */}
            <div className="space-y-2 pt-1 pl-1">
              {collaborators.map((text, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Accessibility Strategy Sub-section */}
            <div className="space-y-3 pt-3">
              <p className="text-[#111827] text-sm sm:text-base font-bold leading-relaxed">
                Our accessibility strategy includes:
              </p>

              <div className="space-y-2 pt-1 pl-1">
                {strategyPoints.map((text, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-2">
              We are continuously expanding our accessibility roadmap to support
              neurodiverse users, cognitive accessibility, and regional
              accessibility laws in emerging markets.
            </p>
          </motion.div>

          {/* Section 2: Feedback & Contact */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              Feedback &amp; Contact
            </h2>

            <div className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                ZoikoTech welcomes feedback and input from our global user base
                to help us improve accessibility and inclusion. If you encounter
                any access barriers or wish to request alternative formats or
                accommodations, please contact us:
              </p>

              <div className="space-y-1 pt-1">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:accessibility@zoikotech.com"
                    className="text-[#0070BB] hover:underline transition-colors"
                  >
                    accessibility@zoikotech.com
                  </a>
                </p>
                <p>Phone (Toll-Free USA): 800-484-5564</p>
              </div>

              <p className="pt-2">
                We will respond within 5 business days and commit to resolving
                accessibility issues in a timely and effective manner. Your
                feedback helps us build better, smarter, and more inclusive
                technology for the world.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
