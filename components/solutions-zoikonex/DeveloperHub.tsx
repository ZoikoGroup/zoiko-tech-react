"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const hubCategories = [
  {
    title: "API Modules",
    description:
      "/subscriber, /rating, /billing, /provisioning, /esim, /catalogue, /cdr",
  },
  {
    title: "SDKs",
    description: "JS, Python, PHP",
  },
  {
    title: "Developer Tools",
    description: "API explorer, CDR simulator, Webhook debugger",
  },
];

export default function DeveloperHub() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Main Section Title */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#222222] text-center mb-16 leading-tight"
        >
          Developer Hub
        </motion.h2>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {hubCategories.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[200px]"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-[#25A18E] mb-4">
                {card.title}
              </h3>

              {/* Category Description */}
              <p className="text-[#666666] text-[14px] leading-relaxed max-w-xs font-mono">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
