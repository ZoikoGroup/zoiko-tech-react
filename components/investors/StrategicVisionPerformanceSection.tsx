"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StrategicVisionPerformanceSection() {
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

  const points = [
    <>
      The expanding adoption and market readiness of ZoikoTech&apos;s SaaS
      ecosystem, including platforms such as ZoikoNex&trade;,
      ZoikoAssure&trade;, ZoikoPal&trade;, ZoikoSuite&trade;, ZoikoAxis&trade;,
      and BookingOrbit&trade;
    </>,
    <>
      MVNO enablement partnerships and telecom infrastructure deployed via Zoiko
      Mobile, GoLite Mobile, Sable Mobile, Ra&iacute;ces Mobile, Avivo Mobile,
      HavenZ Mobile, and EverGuard Mobile.
    </>,
    <>
      Digital transformation projects for public and private institutions
      through Zoiko Web Services
    </>,
    <>
      Performance updates, customer traction, and jurisdictional developments
      are published through quarterly updates and strategic briefings.
    </>,
  ];

  return (
    <section className="w-full text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content Block (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#111827] leading-[1.18]"
              >
                Strategic Vision <br />
                &amp; Performance
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
              >
                ZoikoTech operates as the technology engine of Zoiko Group
                &mdash; delivering mission-critical platforms that power
                telecommunications, fintech, public sector modernization, and
                eldercare AI across multiple jurisdictions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed pt-2"
              >
                Our growth is driven by:
              </motion.p>
            </div>

            {/* Checklist items */}
            <div className="space-y-4 pt-1">
              {points.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#56B810" />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Container (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] h-auto overflow-hidden rounded-[5px]">
              <img
                src="/investors/1.png"
                alt="Executive presentation in a modern conference room"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
