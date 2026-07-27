"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TelecommunicationsSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-12 font-sans bg-white text-[#2B2B2B] overflow-hidden">
      {/* Background Subtle Line Pattern Overlay if needed */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full stroke-current text-slate-400"
        >
          <path
            d="M0 400 L400 0 M100 400 L400 100 M200 400 L400 200"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-8"
      >
        {/* Title & Subheading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-3xl md:text-[32px] font-bold tracking-tight text-[#111111]">
            Telecommunications &amp; MVNOs
          </h2>
          <p className="text-sm md:text-[15px] leading-relaxed text-[#666666] max-w-5xl">
            ZoikoTech empowers the global telecommunications sector with
            precision-engineered technology that transforms how MVNOs, MVNEs,
            MVNAs, and digital operators launch, operate, and scale.
          </p>
        </motion.div>

        {/* Intro sentence */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-[14px] text-[#666666]"
        >
          At the core of our telecom enablement ecosystem are three strategic
          platforms:
        </motion.p>

        {/* Row 1: ZoikoAxis (Logo Left, Text Right) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4"
        >
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <img
              src="/telecom/axis.png"
              alt="ZoikoAxis Logo"
              className="h-45 w-100 object-contain"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] max-w-210 leading-relaxed text-[#555555]">
              <strong className="text-[#333333] font-semibold">
                ZoikoAxis™
              </strong>{" "}
              – our flagship custom solutions suite, delivering fully tailored
              technology infrastructure across BSS, OSS, CRM, ERP, eSIM
              integration, identity verification, digital onboarding, and
              operational intelligence. Whether launching a new MVNO or
              optimizing a multi-country telecom business, ZoikoAxis offers
              bespoke architecture designed for performance, compliance, and
              longevity.
            </p>
          </div>
        </motion.div>

        {/* Row 2: ZoikoNex (Text Left, Logo Right) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4"
        >
          <div className="md:col-span-8 order-2 md:order-1">
            <p className="text-[18px] max-w-210 leading-relaxed text-[#555555]">
              <strong className="text-[#333333] font-semibold">
                ZoikoNex™
              </strong>{" "}
              – our global telecom billing platform and revenue engine. Built
              for real-time charging, multi-jurisdictional tax compliance, fraud
              mitigation, and monetization at scale, ZoikoNex powers everything
              from prepaid to enterprise billing – with full auditability and
              API extensibility
            </p>
          </div>
          <div className="md:col-span-4 order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src="/telecom/nex.png"
              alt="ZoikoNex Logo"
              className="h-45 w-100 object-contain"
            />
          </div>
        </motion.div>

        {/* Row 3: Zoiko Web Services (Logo Left, Text Right) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4"
        >
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <img
              src="/telecom/web.png"
              alt="Zoiko Web Services Logo"
              className="h-45 w-100 object-contain"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] max-w-210 leading-relaxed text-[#555555]">
              <strong className="text-[#333333] font-semibold">
                Zoiko Web Services
              </strong>{" "}
              – our advanced frontend and middleware layer, enabling mobile
              operators to launch high-performance digital portals, customer
              dashboards, automated workflows, and secure omnichannel interfaces
              – all tailored for modern consumers and agile brands.
            </p>
          </div>
        </motion.div>

        {/* Bottom Description Paragraphs */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 pt-4 text-[18px] leading-relaxed text-[#666666]"
        >
          <p>
            These platforms work in harmony to deliver a unified, geo-agnostic
            telecom stack. We integrate with Tier 1 network providers, MVNEs,
            fintech processors, and global enablers – delivering speed,
            compliance, and cost efficiency for next-gen virtual operators.
          </p>
          <p>
            ZoikoTech is the technology force behind one of the most culturally
            aligned and impact-driven MVNO portfolios in the world, developed
            and commercialized under Zoiko Group:
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
