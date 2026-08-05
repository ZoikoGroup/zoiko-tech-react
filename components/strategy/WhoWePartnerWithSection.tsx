"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhoWePartnerWithSection() {
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
    <section className="w-full bg-[#0070BB14] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      {/* Increased max-w to 7xl to give the image more potential space */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Who We Partner With
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
            >
              We welcome partnerships across a wide spectrum of disciplines and
              markets, including:
            </motion.p>
          </div>

          {/* Changed grid ratio from 5/7 to 6/6 (half-and-half) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Image Container - Now col-span-1 of 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              // Increased max-w of the image wrapper itself
              className="w-full flex justify-center lg:justify-start lg:pr-8"
            >
              <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-[8px]">
                <img
                  src="/strategy/2.png"
                  alt="Customer service and telecommunications support agents with headsets working at computer terminals"
                  // object-cover is essential to fill the space if the aspect ratio changes
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </motion.div>

            {/* Text Content Block - Now col-span-1 of 2 */}
            <motion.div variants={itemVariants} className="space-y-6 text-left">
              <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] leading-tight">
                Telecom Operators, <br />
                MVNEs &amp; Network Enablers
              </h3>

              {/* Fixed max-w-140 to standard Tailwind or removed it */}
              <p className="text-[#6B7280] text-sm sm:text-base max-w-140 font-normal leading-relaxed">
                We collaborate with Tier 1 carriers, wholesale aggregators, and
                digital infrastructure leaders to support our growing portfolio
                of MVNOs including Zoiko Mobile, GoLite Mobile, Sable Mobile,
                Avivo Mobile, HavenZ Mobile, EverGuard Mobile, and DriverXtra
                &mdash; a lifestyle network for professional drivers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
