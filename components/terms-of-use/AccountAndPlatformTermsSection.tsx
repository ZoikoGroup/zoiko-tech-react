"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AccountAndPlatformTermsSection() {
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

  const accountResponsibilities = [
    "Safeguarding your login credentials",
    "Ensuring that usage is restricted to authorized individuals",
    "Reporting any suspicious activity or unauthorized access",
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
          {/* Section 2: Account Registration & Security */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
                2. Account Registration &amp; Security
              </h2>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                Certain ZoikoTech services require user authentication,
                enterprise validation, or role-based authorization.
              </p>

              <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed pt-1">
                You are responsible for:
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-1">
              {accountResponsibilities.map((text, idx) => (
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
              ZoikoTech enforces credential isolation and does not allow
              credential sharing across users or business units.
            </p>
          </motion.div>

          {/* Section 3: Intellectual Property */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              3. Intellectual Property
            </h2>

            <div className="space-y-3 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                All software, algorithms, user interfaces, documentation,
                trademarks, and content associated with ZoikoTech Services are
                the exclusive intellectual property of ZoikoTech Inc. or its
                licensors.
              </p>
              <p>
                Use of the Services does not grant ownership or any rights
                beyond those explicitly permitted in client agreements or
                licenses.
              </p>
              <p>
                You may not reproduce, repurpose, sublicense, or modify any
                ZoikoTech asset without prior written consent.
              </p>
            </div>
          </motion.div>

          {/* Section 4: Platform Availability & Modification */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              4. Platform Availability &amp; Modification
            </h2>

            <div className="space-y-3 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                ZoikoTech strives to maintain high-availability across all
                mission-critical platforms. Service updates, system maintenance,
                or jurisdictional compliance interventions may result in
                temporary access adjustments.
              </p>
              <p>
                We reserve the right to modify or deprecate features, products,
                or modules &mdash; with advance notice to affected clients
                wherever commercially reasonable.
              </p>
            </div>
          </motion.div>

          {/* Section 5: Data Use & Privacy */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#111827] leading-tight">
              5. Data Use &amp; Privacy
            </h2>

            <div className="space-y-3 text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Your use of ZoikoTech Services is also governed by our Privacy
                Policy. We process data in accordance with global regulatory
                frameworks and only for legitimate operational, legal, and
                contractual purposes.
              </p>
              <p>
                Client-specific data rights and obligations may be further
                defined in master service agreements or data processing addenda.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
