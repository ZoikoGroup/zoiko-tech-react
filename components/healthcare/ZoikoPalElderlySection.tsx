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

export default function ZoikoPalElderlySection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
      >
        {/* Left Image Area */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-sm overflow-hidden shadow-sm">
            <img
              src="/healthcare/patient.png"
              alt="ZoikoPal AI-Powered Elderly Support Platform with caregiver and senior"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              ZoikoPal™ – AI-Powered
              <br className="hidden md:block" /> Elderly Support Platform
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#666666]">
              Built on ZoikoTech infrastructure, ZoikoPal™ enhances
              aging-in-place through intelligent assistance, emotional
              engagement, and seamless connectivity. It offers voice-guided
              companionship, medication reminders, health check-ins, caregiver
              alerts, and AI-enhanced reassurance — underpinned by privacy and
              ethical AI design.
            </p>
          </motion.div>

          {/* Closing Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#666666] pt-2"
          >
            ZoikoPal™ brings dignity and support to digital aging.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
