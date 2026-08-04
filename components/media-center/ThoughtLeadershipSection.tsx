"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeaturePoint {
  text: string;
}

const featurePoints: FeaturePoint[] = [
  { text: "ZoikoTech Executive Briefings" },
  { text: "Global keynotes and summits" },
  { text: "Interviews with financial and policy media" },
  { text: "LinkedIn and Medium posts authored by senior executives" },
];

export default function ThoughtLeadershipSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="w-full bg-[#F0F0F0] text-[#1D1D1F] py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content and Bullet Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Thought Leadership <br />
              from the Executive Office
            </motion.h2>

            {/* Main Paragraph Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#272727] text-base font-normal leading-relaxed max-w-160"
            >
              ZoikoTech&apos;s executive team &mdash; including our Founder
              &amp; Executive Chairman, Lennox McLeod &mdash; regularly
              contributes insights to the global technology dialogue. Our
              leaders speak on the most critical topics of the decade:
              responsible AI, digital sovereignty, time intelligence,
              cross-border telecom monetization, and ethical innovation.
            </motion.p>

            {/* Feature List Header */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal pt-2"
            >
              These perspectives are featured in:
            </motion.p>

            {/* Bullet Points with exact #56B810 background ticks */}
            <motion.ul
              variants={containerVariants}
              className="space-y-3.5 pt-1"
            >
              {featurePoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  {/* Exact #56B810 Green Badge Icon */}
                  <div className="w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center shrink-0 shadow-sm">
                    <Check
                      className="w-3.5 h-3.5"
                      color="#FFFFFF"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[#4B5563] text-sm sm:text-base font-medium">
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Featured Executive Meeting Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[460px] md:h-[500px] overflow-hidden shadow-xl">
              <img
                src="/media-center/laugh.png"
                alt="Executive office meeting and collaboration"
                className="object-cover object-center h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
