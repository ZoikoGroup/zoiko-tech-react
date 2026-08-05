"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperCommunityPartnerCertificationSection() {
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

  const benefits = [
    "Access to beta programs and pre-release APIs",
    "Revenue-sharing opportunities for integrated partner solutions",
    "Eligibility to co-develop vertical-specific apps with ZoikoTech",
    "Recognition in our Developer Directory and public certifications",
    "Invitations to developer conferences, sprints, and virtual labs",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Top Block: 2-Column Feature Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content Block - Left Side */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-left order-2 lg:order-1"
            >
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
                  Developer Community <br />
                  &amp; Partner Certification
                </h3>

                <p className="text-[#272727] text-sm sm:text-base font-normal leading-relaxed">
                  Joining the ZoikoTech Developer Network includes:
                </p>
              </div>

              {/* Checklist Items */}
              <div className="space-y-3 pt-1">
                {benefits.map((text, idx) => (
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
                Our community is designed to foster collaboration,
                experimentation, and real-world deployment &mdash; supported by
                ZoikoTech&rsquo;s world-class technical success team.
              </p>
            </motion.div>

            {/* Single Image Container - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full flex justify-center lg:justify-end order-1 lg:order-2 lg:pl-4"
            >
              <div className="relative w-full overflow-hidden rounded-[8px]">
                <img
                  src="/developer-integration/4.png"
                  alt="Developer team collaborating around a computer screen in a modern workspace"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Callout Block */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-[#0070BB20] text-left"
          >
            <p className="text-[#272727] text-sm sm:text-base leading-relaxed">
              Developers are vital to the ZoikoTech ecosystem. Whether
              you&rsquo;re building fintech tools for ZoikoSuite&trade;,
              enhancing MVNO operations via ZoikoNex&trade;, or integrating AI
              into public services with ZoikoPal&trade; &mdash; we equip you to
              innovate with confidence, scale securely, and lead responsibly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
