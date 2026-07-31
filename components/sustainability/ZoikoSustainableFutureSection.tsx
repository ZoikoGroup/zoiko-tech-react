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
      staggerChildren: 0.08,
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

export default function ZoikoSustainableFutureSection() {
  return (
    <section className="relative w-full bg-[#FAF8FC] py-16 md:py-24 px-6 font-sans overflow-hidden">
      {/* Background Subtle Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto space-y-6 md:space-y-7"
      >
        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]"
        >
          Built for a Sustainable Digital Future
        </motion.h2>

        {/* First Introductory Paragraph */}
        <motion.p
          variants={itemVariants}
          className="leading-relaxed text-[#272727]"
        >
          We embed sustainability at the architecture level. ZoikoTech platforms
          are designed with energy-efficient infrastructures, serverless
          deployment models, AI workload optimization, and minimal resource
          dependency — enabling clients to scale while reducing environmental
          impact.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          variants={itemVariants}
          className="leading-relaxed text-[#272727]"
        >
          Our enterprise solutions, such as ZoikoSuite™ for accounting and
          compliance and ZoikoAssure™ for global regulatory risk management,
          empower organizations to digitize operations, eliminate
          paper-intensive workflows, and adopt sustainable business processes by
          design.
        </motion.p>

        {/* Third Paragraph Header */}
        <motion.p
          variants={itemVariants}
          className="leading-relaxed text-[#272727]"
        >
          This commitment also extends across our MVNO ecosystem, where each
          brand reflects a deeper purpose:
        </motion.p>

        {/* Brand Key-Value Paragraph List */}
        <motion.div variants={itemVariants} className="space-y-2 pl-0.5">
          <p className="leading-relaxed text-[#272727]">
            <strong className="font-bold text-[#1a1a1a]">Zoiko Mobile</strong> —
            our flagship MVNO — fuses connectivity with animal advocacy and
            music, championing wildlife protection and cultural enrichment.
          </p>

          <p className="leading-relaxed text-[#272727]">
            <strong className="font-bold text-[#1a1a1a]">GoLite Mobile</strong>{" "}
            contributes a portion of revenue to ocean and marine conservation,
            translating mobile usage into tangible environmental action.
          </p>

          <p className="leading-relaxed text-[#272727]">
            <strong className="font-bold text-[#1a1a1a]">Sable Mobile</strong>{" "}
            uplifts Afro-Caribbean and African American communities with
            culturally relevant services and an emphasis on digital equity and
            ecological mindfulness.
          </p>

          <p className="leading-relaxed text-[#272727]">
            <strong className="font-bold text-[#1a1a1a]">Raíces Mobile</strong>{" "}
            connects U.S.-based Latino families to their roots while promoting
            access, sustainability, and community empowerment.
          </p>

          <p className="leading-relaxed text-[#272727]">
            <strong className="font-bold text-[#1a1a1a]">DriverX Mobile</strong>{" "}
            supports the vital professional driver workforce with specialized
            connectivity and tools for safer, more sustainable mobility.
          </p>
        </motion.div>

        {/* Concluding Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-[18px] leading-relaxed text-[#272727]"
        >
          These brands are not simply wireless carriers — they are
          purpose-driven platforms embedded with environmental and cultural
          intelligence, powered by ZoikoTech.
        </motion.p>
      </motion.div>
    </section>
  );
}
