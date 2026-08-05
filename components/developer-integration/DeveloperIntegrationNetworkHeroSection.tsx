"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperIntegrationNetworkHeroSection() {
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
    <section className="relative w-full min-h-[500px] lg:min-h-[560px] flex items-end pb-0 sm:pb-0 pt-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/developer-integration/hero.png"
          alt="Developer & Integration Network background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for consistent text legibility */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Grounded Card Box */}
          <motion.div
            variants={itemVariants}
            className="bg-[#082C4ACC] backdrop-blur-md rounded-t-[12px] p-8 sm:p-10 md:p-12 shadow-2xl space-y-6 text-left w-full max-w-[700px] min-h-[425px] flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-[2.25rem] font-bold tracking-tight text-white leading-[1.2]">
              Developer &amp; Integration Network
            </h1>

            <div className="space-y-4 text-[#D1D5DB] max-w-145 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                At ZoikoTech, we recognize that developers are the architects of
                digital transformation. Our Developer &amp; Integration Network
                empowers global developers, system integrators, and digital
                transformation partners to build secure, compliant, and scalable
                solutions using ZoikoTech&rsquo;s powerful suite of AI-powered
                platforms.
              </p>

              <p>
                Through open APIs, enterprise-grade SDKs, and sandbox
                environments, we invite developers to co-create transformative
                solutions across telecom, fintech, healthcare, compliance, and
                public infrastructure.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
