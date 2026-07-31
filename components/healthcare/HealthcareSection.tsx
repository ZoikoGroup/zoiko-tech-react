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

export default function HealthcareSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
            Healthcare, Wellness & Elder Care
          </h2>
        </motion.div>

        {/* First Paragraph */}
        <motion.p
          variants={itemVariants}
          className="leading-relaxed text-[#666666] mt-6"
        >
          ZoikoTech is redefining the digital core of global health. We provide
          intelligent, secure, and compliant technology solutions to healthcare
          systems, MedTech innovators, and companies across the pharmaceutical
          and nutraceutical sectors — enabling them to deliver better outcomes,
          streamline operations, and scale with trust.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          variants={itemVariants}
          className="leading-relaxed text-[#666666]"
        >
          From virtual care and diagnostics to product manufacturing, regulatory
          intelligence, and cross-border digital commerce — we support the
          end-to-end modernization of the health and life sciences ecosystem.
          Whether you’re a hospital, a telehealth startup, a MedTech platform, a
          pharmaceutical supplier, or a nutraceutical brand, ZoikoTech gives you
          the infrastructure and compliance frameworks to move fast — without
          risk.
        </motion.p>
      </motion.div>
    </section>
  );
}
