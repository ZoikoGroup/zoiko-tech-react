"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InitiativePoint {
  text: string;
}

const initiatives: InitiativePoint[] = [
  { text: "Conversational AI and Cognitive Companions" },
  { text: "Telecom Monetization Engines for 5G+ Environments" },
  { text: "Intelligent Financial Reporting & Risk Forecasting" },
  { text: "AI-Powered Document and Workflow Compliance" },
  { text: "Driver Optimization Tools (integrated into DriverX Tech™)" },
  { text: "Cross-border Payroll, Tax, and Business Logic Engines" },
];

export default function ZoikoInnovationLabSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
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
    <section className="w-full bg-white text-[#1D1D1F] py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Image without rounded corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] h-auto shadow-xl">
              <img
                src="/innovation-hub/last.png"
                alt="Two executives discussing legal and financial tech solutions with overlay icons"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Initiatives List */}
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
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Zoiko Innovation Lab: <br />
              Where Future Tech Is Born
            </motion.h2>

            {/* Intro text */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl"
            >
              Our Innovation Lab functions as both an incubator and accelerator,
              focusing on emerging technologies and scalable system
              architectures. Current R&amp;D initiatives include:
            </motion.p>

            {/* Checklist items */}
            <motion.ul variants={containerVariants} className="space-y-3 pt-1">
              {initiatives.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center shrink-0 shadow-sm">
                    <Check
                      className="w-3.5 h-3.5"
                      color="#FFFFFF"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[#4B5563] text-sm sm:text-base font-medium">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Post-list quote / objective statement */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
            >
              Our objective is not merely to anticipate the future &mdash; but
              to engineer it.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Full-width Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-[#E5E7EB] pt-8"
        >
          <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed text-left max-w-5xl">
            At ZoikoTech, innovation is governed, ethical, and built for
            longevity. We do not invent in isolation &mdash; we architect
            solutions that serve people, businesses, and institutions around the
            world, responsibly and at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
