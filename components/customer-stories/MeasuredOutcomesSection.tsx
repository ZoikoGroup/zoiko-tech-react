"use client";

import React from "react";
import { motion } from "framer-motion";

const outcomeCards = [
  {
    title: "Improvement or reduction",
    description:
      "Approved baseline/denominator, period, sample and measurement method.",
  },
  {
    title: "Time, cost and revenue",
    description:
      "Defined process, currency or metric basis, timeframe, attribution and relevant external factors.",
  },
  {
    title: "Accuracy and performance",
    description:
      "Exact metric, population and conditions; an anecdote does not establish an SLA.",
  },
  {
    title: "Causality and aggregates",
    description:
      "No unsupported causal result or synthetic customer average. Qualitative observations do not become numeric proof.",
  },
];

export default function MeasuredOutcomesSection() {
  return (
    <section id="outcomes" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-[#102D2F] mb-4">
            An outcome stays attached to its scope.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            Results are customer-specific. No quantified outcomes were supplied.
          </p>
        </motion.div>

        {/* Clean Grid Matching Figma Spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {outcomeCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border-t border-[#DEEBEB] pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
            >
              <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-[#102D2F] mb-3">
                {card.title}
              </h3>
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#5E7076]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
