"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RnDEthicalAISection() {
  return (
    <section className="w-full bg-[#F0F0F0] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Image Stack with Cyan Border on Foreground */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Background Base Image */}
            <div className="relative w-full max-w-[460px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/innovation-hub/speaker.png"
                alt="Speaker presenting in front of 3D digital brain graphic"
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* Foreground Overlapping Floating Card with Bright Cyan/Blue Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-6 -left-2 sm:-left-6 w-[80%] max-w-[360px] h-[200px] sm:h-[240px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="/innovation-hub/ai.png"
                alt="Hands operating AI interface on smartphone"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Text and Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 pt-6 lg:pt-0"
          >
            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]">
              Ethical AI &amp; Precision Intelligence
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              Our approach to artificial intelligence is governed by our
              internal AI Design Framework, which enforces four non-negotiable
              principles: fairness, explainability, transparency, and continuous
              learning.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              We reject opaque algorithms in favor of systems that can be
              audited, fine-tuned, and trusted. Clients using ZoikoTech
              platforms benefit from adaptive learning engines that evolve with
              organizational behavior, yet remain accountable to strict
              regulatory controls, including GDPR, CCPA, and the EU AI Act.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              AI is not a feature. It is the foundation of our innovation. We
              use it to drive value, not replace judgment &mdash; always with
              governance at the core.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
