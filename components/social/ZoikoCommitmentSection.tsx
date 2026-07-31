"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

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

const commitments: string[] = [
  "ZoikoPal™ – AI-powered eldercare and wellness companion",
  "GoLite Mobile – Telecom brand supporting marine conservation",
  "Zoiko Mobile – Community & lifestyle wireless network for animal lovers",
  "Sable Mobile – Serving African and Caribbean communities through digital inclusion",
  "ZoikoSuite – Public-sector-ready payroll, accounting, and compliance infrastructure",
];

export default function ZoikoCommitmentSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between"
      >
        {/* Left Image Area */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[45%] order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl shadow-sm">
            <img
              src="/social/dog.png"
              alt="Woman hugging dogs in outdoor environment"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="w-full lg:w-[55%] order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Our Commitment to
              <br className="hidden md:block" /> Animals, People & Planet
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              ZoikoTech powers multiple purpose-driven ventures across the
              public and NGO sectors, including:
            </p>
          </motion.div>

          {/* Feature List */}
          <motion.ul variants={itemVariants} className="space-y-3">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#52B61B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-sm text-[#555555] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2 leading-relaxed"
          >
            We are also technology allies to emerging platforms serving
            biodiversity, clean energy, disability inclusion, and access to
            education in low-resource environments
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
