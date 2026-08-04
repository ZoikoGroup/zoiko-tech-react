"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface BriefPoint {
  text: string;
}

const briefPoints: BriefPoint[] = [
  {
    text: "Multi-Jurisdiction KYC: Scalable Identity Protocols with ZoikoAssure™",
  },
  {
    text: "Threat-Resilient Design: Deploying ZoikoShield™ in Conflict Zones and Public Networks",
  },
  { text: "Smart Billing Triggers and Real-Time Charging Logic in ZoikoNex™" },
  { text: "Deploying ZoikoAxis™ as a Modular Compliance-First Infrastructure" },
  {
    text: "Architecting Embedded Audit Trails Across ZoikoSuite™ and ZoikoTime™",
  },
];

export default function TechnicalBriefsSection() {
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
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title, Subtext, Checklist & Summary (col-span-7) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
            >
              Technical Briefs
            </motion.h2>

            {/* Lead Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl"
            >
              Our technical briefs are built for engineers, compliance officers,
              security architects, and product owners. Each brief translates
              ZoikoTech&apos;s architecture into actionable integration and
              policy logic.
            </motion.p>

            {/* Intro Lead */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl pt-1"
            >
              Highlighted briefs include:
            </motion.p>

            {/* Checklist items */}
            <motion.ul
              variants={containerVariants}
              className="space-y-3.5 pt-1"
            >
              {briefPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#56B810] flex items-center justify-center shrink-0 mt-0.5">
                    <Check
                      className="w-3.5 h-3.5"
                      color="#FFFFFF"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[#4B5563] text-sm sm:text-base font-medium leading-normal">
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Footer Summary Note */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed max-w-xl pt-4"
            >
              Each brief includes real-world configurations, integration
              pathways, security models, and automation triggers &mdash;
              enabling seamless implementation across client systems.
            </motion.p>
          </motion.div>

          {/* Right Column: Overlapping Image Stack (col-span-5, No Shadows) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end items-center pt-6 lg:pt-0"
          >
            {/* Background Base Image */}
            <div className="relative w-full max-w-[420px] h-[320px] sm:h-[380px] rounded-xl overflow-hidden">
              <img
                src="/white-papers/1.png"
                alt="Business professional explaining technical brief architecture in discussion"
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* Foreground Overlapping Floating Card with White Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-6 -right-2 sm:-right-4 w-[85%] max-w-[340px] h-[200px] sm:h-[240px] rounded-xl overflow-hidden border-4 border-white bg-white"
            >
              <img
                src="/white-papers/2.png"
                alt="Engineers reviewing tablet data analytics and technical specifications"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
