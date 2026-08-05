"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LegalTermsContinuedSection() {
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

  const communicationsList = [
    "Legal disclosures, compliance notifications, and service announcements",
    "Transactional messages related to your account or usage",
    "Optional marketing communications, subject to your opt-in preferences",
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
          {/* Section 6: Communications & Notifications */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                6. Communications &amp; Notifications
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                By using ZoikoTech Services, you consent to receive:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {communicationsList.map((text, idx) => (
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
              You may update your communication preferences at any time through
              the platform or by contacting support.
            </p>
          </motion.div>

          {/* Section 7: Disclaimers & Limitation of Liability */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              7. Disclaimers &amp; Limitation of Liability
            </h2>

            <div className="space-y-3 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Services are provided &ldquo;as is&rdquo; and &ldquo;as
                available.&rdquo; ZoikoTech makes no warranties, express or
                implied, regarding uninterrupted access, error-free performance,
                or suitability for specific business outcomes.
              </p>
              <p>
                To the maximum extent permitted by law, ZoikoTech disclaims
                liability for indirect, incidental, punitive, or consequential
                damages unless otherwise stated in an enterprise contract.
              </p>
            </div>
          </motion.div>

          {/* Section 8: Governing Law & Jurisdiction */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              8. Governing Law &amp; Jurisdiction
            </h2>

            <div className="space-y-3 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                These Terms are governed by the laws of the State of California,
                United States of America, without regard to conflict-of-law
                principles.
              </p>
              <p>
                Any dispute arising under these Terms shall be resolved through
                negotiation, with arbitration available for qualified commercial
                disputes as agreed upon in the relevant service agreements.
              </p>
              <p>
                Use of the Services constitutes consent to jurisdiction and
                venue in the courts of California, subject to any binding
                arbitration provisions defined by contract.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
