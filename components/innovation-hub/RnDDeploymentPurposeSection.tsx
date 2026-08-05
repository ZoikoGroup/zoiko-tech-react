"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RnDDeploymentPurposeSection() {
  return (
    <section className="w-full bg-[#D9D9D933] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Background Base Card/Image */}
            <div className="relative w-full max-w-[480px] h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/media-center/see.png"
                alt="R&D team reviewing laptop analytics in modern office"
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* Foreground Overlapping Floating Card with White Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-6 -left-2 sm:-left-6 w-[85%] max-w-[400px] h-[210px] sm:h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              <img
                src="/innovation-hub/laptop.jpg"
                alt="Engineers discussing solution on tablet and laptop"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Content and Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 pt-6 lg:pt-0"
          >
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-[#111827] leading-[1.18]">
              From Concept to <br />
              Deployment &mdash; with Purpose
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              Every platform at ZoikoTech begins in our R&amp;D Hub, where
              concepts are subjected to intensive analysis, multidisciplinary
              collaboration, and real-world validation. From behavioral AI and
              real-time billing engines to compliance intelligence and
              productivity optimization, our innovation pipeline is
              mission-critical.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              Whether engineering ZoikoPal&trade; to support the dignity and
              autonomy of aging populations, or evolving ZoikoTime&trade; to
              reflect post-pandemic workforce realities, our solutions are
              designed not just for market readiness &mdash; but for human
              impact.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              Our teams operate in agile sprints across verticals, co-developing
              with domain experts, academia, telecom operators, and cross-border
              legal and financial consultants. We do not iterate in isolation
              &mdash; we co-create with the global enterprise community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
