"use client";

import React from "react";
import { motion } from "framer-motion";

const implementationPillars = [
  {
    title: "Systems and integrations",
    description:
      "Named systems require customer permission. Otherwise describe public-safe categories, internal endpoints and sensitive topology.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#4BAE98]"
      >
        {/* Connected Systems Nodes */}
        <rect x="6" y="8" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <rect x="32" y="8" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <rect x="19" y="31" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <path
          d="M16 12.5H32M24 12.5V31"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Deployment phase",
    description:
      "Pilot, shadow, phased rollout and migration dates must match approved status. Partial deployment does not prove completed migration.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#4BAE98]"
      >
        {/* Ascending Stairs with checkmark & growth arrow */}
        <path
          d="M8 38H18V28H28V18H38"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 22L15 24L19 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 12L25 14L29 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 8H40V16M40 8L27 21"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "People and governance",
    description:
      "Public-safe roles and actual approved control patterns. No invented staffing or transformation claims.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#4BAE98]"
      >
        {/* User silhouettes with shield */}
        <circle cx="18" cy="14" r="5" stroke="currentColor" strokeWidth="2.2" />
        <path
          d="M8 32C8 26.5 12.5 24 18 24C20.5 24 22.8 24.5 24.5 25.6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="31" cy="15" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path
          d="M31 38C26 35 25 30 25 25C29 25 31 23 31 23C31 23 33 25 37 25C37 30 36 35 31 38Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Partners and timeline",
    description:
      "Separate name/asset permission; publish timing only when defined and approved.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#4BAE98]"
      >
        {/* Calendar / Schedule Icon */}
        <rect
          x="8"
          y="10"
          width="32"
          height="30"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path d="M8 18H40" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 6V12M32 6V12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="16" cy="26" r="1.5" fill="currentColor" />
        <circle cx="24" cy="26" r="1.5" fill="currentColor" />
        <circle cx="32" cy="26" r="1.5" fill="currentColor" />
        <circle cx="16" cy="33" r="1.5" fill="currentColor" />
        <circle cx="24" cy="33" r="1.5" fill="currentColor" />
        <circle cx="32" cy="33" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ImplementationPatternsSection() {
  return (
    <section
      id="implementation"
      className="w-full text-white py-16 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(143deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-white mb-4">
            Implementation reality matters.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9]">
            Show coexistence, integration and governance only at the level approved for public disclosure.
          </p>
        </motion.div>

        {/* 4 Cards Grid Matching Figma Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {implementationPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border border-[#83B7BF]/35 rounded-[10px] px-5 pt-8 pb-10 flex flex-col items-center text-center justify-start bg-transparent hover:border-[#83B7BF]/60 transition-colors"
            >
              {/* Icon */}
              <div className="mb-5 flex items-center justify-center w-14 h-14">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-white mb-3 text-center leading-snug">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9] text-center">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
