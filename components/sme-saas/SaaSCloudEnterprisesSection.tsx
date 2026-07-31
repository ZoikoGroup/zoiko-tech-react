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

export default function SaaSCloudEnterprisesSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto space-y-6"
      >
        {/* Title */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
            SaaS & Cloud Enterprises
          </h2>
        </motion.div>

        {/* First Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-[15px] leading-relaxed text-[#666666]"
        >
          ZoikoTech empowers SaaS and cloud-native companies to scale
          intelligently, monetize globally, and operate with uncompromising
          compliance and security. From early-stage disruptors to multinational
          software providers, we deliver the technological foundation to
          accelerate growth — without compromising governance, infrastructure,
          or customer trust.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-[15px] leading-relaxed text-[#666666]"
        >
          In a world where product velocity must be matched by regulatory
          clarity and operational resilience, we provide the complete stack for
          modern SaaS: from custom backend architecture and intelligent billing
          to embedded compliance and cyber defense.
        </motion.p>
      </motion.div>
    </section>
  );
}
