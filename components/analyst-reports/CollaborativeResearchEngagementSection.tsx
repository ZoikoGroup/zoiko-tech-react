"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CollaborativeResearchEngagementSection() {
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

  const points = [
    <>
      Briefings and position papers shared with sovereign investment entities,
      think tanks, and telecom regulators
    </>,
    <>
      Expert participation in digital transformation roundtables,
      intergovernmental panels, and global forums
    </>,
    <>
      Strategic research packs curated for Zoiko Group stakeholders, MVNO
      partners, and public-sector CIOs
    </>,
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content Block - Left Side (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
              >
                Collaborative Research <br />
                &amp; Industry Engagement
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
              >
                ZoikoTech maintains active relationships with global analysts,
                public-private innovation labs, and independent research bodies.
                Our Strategic Intelligence Lab contributes to and co-develops
                sector-leading insight through:
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
              >
                Highlighted briefs include:
              </motion.p>
            </div>

            {/* Checklist items */}
            <div className="space-y-4 pt-1">
              {points.map((text, idx) => (
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
                  <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
            >
              We welcome analyst collaboration requests and policy advisory
              partnerships where shared foresight can help unlock responsible
              innovation and market resilience.
            </motion.p>
          </div>

          {/* Overlapping Image Composition - Right Side (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] h-[380px] sm:h-[420px]">
              {/* Back Top Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[68%] overflow-hidden rounded-[5px] shadow-sm z-10">
                <img
                  src="/analyst-reports/7.png"
                  alt="Corporate team working around printed data reports and charts on desk"
                  className="w-full h-full object-cover block rounded-[5px]"
                />
              </div>

              {/* Front Bottom Overlapping Image */}
              <div className="absolute bottom-0 right-0 w-[78%] h-[60%] overflow-hidden rounded-[5px] border-[3px] border-white z-20">
                <img
                  src="/analyst-reports/8.png"
                  alt="Analysts reviewing digital dashboards and metrics in high-tech control room"
                  className="w-full h-full object-cover block rounded-[5px]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
