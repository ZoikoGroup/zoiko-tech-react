"use client";

import React from "react";
import { motion } from "framer-motion";

export default function KeyFocusAreasSection() {
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
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-3 max-w-4xl">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Key Focus Areas
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
            >
              Our reports track macroeconomic movements, regulatory evolution,
              and product-market dynamics across:
            </motion.p>
          </div>

          {/* Grid Container (5/7 Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Container (col-span-5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[480px] h-auto overflow-hidden rounded-[5px]">
                <img
                  src="/analyst-reports/1.png"
                  alt="Engineers silhouetted against sunset near telecommunication cell tower"
                  className="w-full h-auto object-cover block rounded-[5px]"
                />
              </div>
            </motion.div>

            {/* Text Content Block (col-span-7) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-4 text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] leading-tight">
                Telecommunications <br />
                &amp; MVNO Expansion
              </h3>

              <p className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl">
                Detailed insight into the rise of community-driven, culturally
                aligned MVNOs &mdash; including growth trends around eSIM
                technology, real-time provisioning, roaming elimination, and
                consumer trust. Strategic coverage includes Zoiko Mobile, GoLite
                Mobile, Sable Mobile, Ra&iacute;ces Mobile, Avivo Mobile, HavenZ
                Mobile, and EverGuard Mobile.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
