"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProductDemosTutorialsSection() {
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

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl space-y-6"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
          >
            Product Demos <br />
            &amp; Tutorials
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
          >
            ZoikoTech&apos;s Product Demos &amp; Tutorials are engineered for
            depth, clarity, and action &mdash; enabling global clients,
            developers, integrators, and institutional partners to explore our
            enterprise platforms through intuitive walkthroughs, immersive
            simulations, and hands-on guidance.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
          >
            Across our entire suite &mdash; from ZoikoAxis&trade; to
            BookingOrbit&trade; &mdash; each demo is powered by AI-enhanced
            delivery, ensuring the right content is presented to the right user
            based on role, region, product stage, and sector-specific needs.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
          >
            These world-class tutorials are not static: they learn, evolve, and
            optimize in real-time &mdash; just like the platforms they teach.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
