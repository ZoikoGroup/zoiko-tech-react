"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalConversationsSection() {
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

  const highlights = [
    "Engineering deep dives with source diagrams and code snippets",
    "AI governance essays and internal model explainability reviews",
    "Open-source projects and architecture visualizations",
    "API innovation stories and performance retrospectives",
    "Tactical guidance, executive insights, and emerging frameworks",
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Main Grid: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Image Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src="/engineering-blog/7.jpg"
                alt="Global Conversations, Built by Builders"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>

            {/* Right Text Content Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
                Global Conversations,
                <br />
                Built by Builders
              </h2>

              <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-normal">
                The ZoikoTech Engineering Blog isn&apos;t curated for marketing
                &mdash; it&apos;s crafted by our builders, for the world&apos;s
                builders. Our writing is practical, insightful, and
                unapologetically technical. Whether you&apos;re scaling an MVNO,
                building fintech APIs, deploying AI ethics frameworks, or just
                curious how industry leaders think &mdash; this is your source.
              </p>

              {/* Checkmark Bullet List */}
              <div className="space-y-3 pt-2">
                {highlights.map((text, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider Line & Closing Statement */}
          <motion.div variants={itemVariants} className="pt-4">
            <div className="w-full border-t border-gray-200 mb-8" />
            <p className="text-[#374151] text-xs sm:text-sm font-normal leading-relaxed text-left">
              We&apos;re building the infrastructure of trust, responsibility,
              and intelligence. Our blog is your front-row seat to how it all
              comes together &mdash; and where it&apos;s headed next.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
