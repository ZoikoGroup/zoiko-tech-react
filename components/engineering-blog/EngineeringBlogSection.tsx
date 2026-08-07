"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EngineeringBlogSection() {
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
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 text-left"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#111827] leading-tight"
          >
            Engineering Blog
          </motion.h1>

          {/* Body Paragraphs */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-[#272727] text-sm sm:text-base font-normal leading-relaxed"
          >
            <p>
              The ZoikoTech Engineering Blog is more than a technical journal
              &mdash; it&apos;s a global stage for innovation, thought
              leadership, and deep system transparency. Authored by the
              engineers, architects, and AI scientists driving our platforms,
              this blog opens the door to the strategies, architectures, and
              discoveries that shape how ZoikoTech powers the world&apos;s most
              trusted digital ecosystems.
            </p>

            <p>
              From billing frameworks and legal automation to AI for eldercare
              and real-time logistics &mdash; we reveal how we design, build,
              test, and govern transformative technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
