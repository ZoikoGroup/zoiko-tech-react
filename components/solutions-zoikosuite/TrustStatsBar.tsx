"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const trustItems = [
  {
    type: "text",
    content: "Built by Zoiko Tech Inc.",
  },
  {
    type: "text",
    content: "Global compliance support",
  },
  {
    type: "stat",
    value: "99.9%",
    label: "UPTIME",
  },
  {
    type: "text",
    content: "GDPR/UK GDPR aligned",
  },
];

export default function TrustStatsBar() {
  return (
    <section className="w-full bg-[#F8F9FA] py-10 px-6 md:px-12 lg:px-16 border-y border-gray-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center text-center">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              custom={0.1 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className="flex flex-col items-center justify-center min-h-[60px]"
            >
              {item.type === "stat" ? (
                <>
                  <span className="text-3xl md:text-4xl font-extrabold text-[#25A18E] tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[11px] font-semibold text-[#888888] tracking-widest uppercase mt-1">
                    {item.label}
                  </span>
                </>
              ) : (
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#333333] leading-snug max-w-[180px]">
                  {item.content}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
