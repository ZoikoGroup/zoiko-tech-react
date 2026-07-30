"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ZoikoGovernanceEthicsSection() {
  return (
    <section className="relative w-full bg-[#F9F4FF] py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14"
      >
        {/* Top Centered Header & Introductory Paragraph */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-6xl mx-auto space-y-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]">
            Governance & Ethics
          </h2>
          <p className="text-[18px] leading-relaxed text-[#272727]">
            Trust is the foundation of every platform we deliver. ZoikoTech
            adheres to globally recognized governance frameworks, including full
            compliance with GDPR, CCPA, and evolving AI accountability
            regulations. Our internal governance programs enforce transparency,
            board oversight, and ethical leadership across business units and
            jurisdictions.
          </p>
        </motion.div>

        {/* Bottom Split Content (Left Paragraphs, Right Dual Overlapping Images) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between">
          {/* Left Text Column */}
          <div className="w-full lg:w-[50%] order-1 space-y-6 flex flex-col justify-center">
            <motion.p
              variants={itemVariants}
              className="text-[18px] leading-relaxed text-[#272727]"
            >
              Platforms like ZoikoAssure and ZoikoNex are engineered to simplify
              regulatory adherence for our clients — whether they operate in
              telecom, finance, healthcare, or government. Internally, we uphold
              a Code of Ethics, Whistleblower Policy, Supplier Code of Conduct,
              and Anti-Corruption Framework that exceeds industry benchmarks.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[18px] leading-relaxed text-[#272727]"
            >
              We are aligned with the United Nations Sustainable Development
              Goals (SDGs) and actively collaborate with governments, NGOs, and
              international partners to advance inclusive, responsible
              technology ecosystems.
            </motion.p>
          </div>

          {/* Right Dual Overlapping Image Composition */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] order-2 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px]">
              {/* Bigger Customer Support / Professional Image (Top-Left Side) */}
              <div className="absolute top-0 left-0 w-[82%] h-[82%] rounded-[6px] overflow-hidden shadow-md z-0">
                <img
                  src="/global-vision/girl.jpg"
                  alt="Professional woman wearing headset at workstation"
                  className="w-full h-full object-cover object-center -scale-x-100"
                />
              </div>

              {/* Smaller Team Collaboration Image (Overlapping on Bottom-Right Side) */}
              <div className="absolute bottom-0 right-0 w-[58%] h-[60%] overflow-hidden rounded-xl border-4 border-white shadow-xl z-10 bg-white">
                <img
                  src="/global-vision/team.jpg"
                  alt="Team of diverse professionals collaborating around laptop"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
