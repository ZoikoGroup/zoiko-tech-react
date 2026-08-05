"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StrategicTechnologyAlliancesTriptychSection() {
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
    <section className="w-full bg-[#F5F5F5] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Single Image Triptych Container - Left Side (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px]">
              {/* Single Image Tag rendered with 3-panel CSS mask cutout */}
              <img
                src="/strategy/1.png"
                alt="Strategic and Technology Alliances Analytics"
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
          </motion.div>

          {/* Text Content Block - Right Side (col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]">
              Strategic &amp; Technology Alliances
            </h2>

            <div className="space-y-4 text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              <p>
                At ZoikoTech, we understand that transformative impact is
                achieved through bold, strategic partnerships. Our Strategic
                &amp; Technology Alliances program is designed for
                forward-thinking organizations that want to co-create
                world-class, regulation-ready solutions across telecom, fintech,
                compliance, AI, and enterprise SaaS.
              </p>

              <p>
                Through our network of trusted global partners, we deliver
                intelligent, scalable, and secure platforms to some of the most
                dynamic sectors in the world &mdash; from MVNO infrastructure to
                eldercare AI and beyond.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}