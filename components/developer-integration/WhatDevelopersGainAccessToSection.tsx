"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatDevelopersGainAccessToSection() {
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

  const platforms = [
    {
      name: "ZoikoNex™",
      desc: "Real-time telecom billing, mediation, and revenue management",
    },
    {
      name: "ZoikoTime™",
      desc: "AI-enhanced time tracking, workforce analytics, and productivity monitoring",
    },
    {
      name: "ZoikoPal™",
      desc: "AI-driven elderly care and assistive technology with emotional intelligence engines",
    },
    {
      name: "ZoikoAssure™",
      desc: "Document automation and legal compliance tools for regulated entities",
    },
    {
      name: "BookingOrbit™",
      desc: "Advanced scheduling, travel automation, and B2B service orchestration",
    },
  ];

  return (
    <section className="w-full bg-[#0070BB14] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            What Developers Gain Access To
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content Block - Left Side (col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                Modular API Frameworks
              </h3>
              <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed">
                Developers can integrate with ZoikoTech&rsquo;s flagship
                platforms, including:
              </p>
            </div>

            {/* List of Platforms */}
            <div className="space-y-3.5 pt-2">
              {platforms.map((item, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  className="text-sm sm:text-base text-[#6B7280] leading-relaxed"
                >
                  <strong className="font-semibold text-[#111827]">
                    {item.name}
                  </strong>{" "}
                  &ndash; {item.desc}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Single Image Triptych Mask Container - Right Side (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px]">
              {/* Single Image Tag rendered with 3-panel CSS mask cutout */}
              <img
                src="/developer-integration/1.png"
                alt="Developer interacting with API glowing interface"
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
