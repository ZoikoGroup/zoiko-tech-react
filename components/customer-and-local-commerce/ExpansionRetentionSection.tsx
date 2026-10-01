"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const expansionRoutes = [
  {
    startingPoint: "Customer communications",
    then: "Then: Telecom Infrastructure",
    logicalNext: "Communications &\nCollaboration",
    nextLink: "/solution-zoiko-communications-collaboration",
    alignRight: true,
  },
  {
    startingPoint: "Marketing operations",
    then: "Then: AI & Agentic Automation · AI Governance & Assurance",
    logicalNext: "AI & Intelligent Automation",
    nextLink: "/solution-zoiko-ai-agentic-automation",
    alignRight: false,
  },
  {
    startingPoint: "Digital commerce / retail",
    then: "Then: Financial, billing or integration solutions where supported",
    logicalNext: "Retail & Commerce industry",
    nextLink: "/solutions-zoikosuite",
    alignRight: false,
  },
  {
    startingPoint: "Local presence",
    then: "Then: Zoiko Local technical path · Developer Platform",
    logicalNext: "Telecom Infrastructure",
    nextLink: "/telecom",
    alignRight: false,
  },
  {
    startingPoint: "Life orchestration",
    then: "Then: Other industry destinations by journey scope",
    logicalNext: "Mobility, Healthcare or Financial\nServices",
    nextLink: "/healthcare",
    alignRight: true,
  },
];

export default function ExpansionRetentionSection() {
  return (
    <section
      id="expansion-retention"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-[96px]"
      style={{
        background:
          "linear-gradient(228deg, rgba(6, 85, 72, 0.65) 46%, rgba(0, 38, 42, 0.65) 76%), #00191E",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[56px]">
          {/* Left Column: Heading, Subtext & Headset Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[500px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.14em] uppercase mb-3">
              Expansion & retention
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.17] tracking-[-0.03em] mb-4">
              Where to go next, based on where you start
            </h2>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[17px] text-[#CBD5E1] leading-[26px] mb-8 font-normal">
              Adjacent solutions follow your customer intent. We never promote unrelated platforms during a failed transaction, sensitive support interaction or consent change.
            </p>

            <div className="relative w-full h-[260px] sm:h-[317px] rounded-[20px] overflow-hidden">
              <Image
                src="/customer-and-local-commerce/expansion-headset.png"
                alt="Person wearing a glowing mixed-reality headset"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </motion.div>

          {/* Right Column: Routing Matrix (borderless, directly on gradient background) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1"
          >
            {/* Header Row: 2-column layout (shown on sm+) */}
            <div className="hidden sm:grid grid-cols-2 gap-6 pb-4 text-[11px] font-semibold text-[#4DDCAD] tracking-wider uppercase font-['Poppins',sans-serif]">
              <div className="flex flex-col gap-2">
                <span>STARTING POINT</span>
                <span>THEN</span>
              </div>
              <div>
                <span>LOGICAL NEXT ROUTE</span>
              </div>
            </div>

            {/* Matrix Rows */}
            <div>
              {expansionRoutes.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:grid sm:grid-cols-2 gap-y-2.5 sm:gap-y-2 gap-x-6 py-5 border-t border-[#4DDCAD]/25"
                >
                  {/* Starting Point (Col 1, Row 1 on desktop) */}
                  <div className="sm:col-start-1 sm:row-start-1">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[17px] sm:text-[18px] text-white leading-snug">
                      {row.startingPoint}
                    </span>
                  </div>

                  {/* Logical Next Route (Col 2, Row 1 on desktop) */}
                  <div className="sm:col-start-2 sm:row-start-1 flex items-center my-0.5 sm:my-0">
                    <a
                      href={row.nextLink}
                      className={`font-['Poppins',sans-serif] font-semibold text-[14.5px] sm:text-[16px] text-[#4DDCAD] hover:text-white transition-colors group ${
                        row.alignRight
                          ? "flex items-center justify-between w-full"
                          : "inline-flex items-center gap-2"
                      }`}
                    >
                      <span className="whitespace-pre-line leading-snug">{row.logicalNext}</span>
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Then description (Col 1, Row 2 on desktop) */}
                  <div className="sm:col-start-1 sm:row-start-2 pt-0.5 sm:pt-1">
                    <span className="font-['Poppins',sans-serif] text-[12.5px] sm:text-[13.5px] text-[#CBD5E1] leading-snug">
                      {row.then}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
