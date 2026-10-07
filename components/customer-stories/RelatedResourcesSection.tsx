"use client";

import React from "react";
import { motion } from "framer-motion";

const relatedCards = [
  {
    title: "Curated relationships",
    description:
      "Relevant current stories, approved industry/use-case/technology metadata and a real canonical destination.",
  },
  {
    title: "Case-study relationship",
    description:
      "Separate deep artifact when actually live, under the same or stronger rights/evidence controls.",
  },
  {
    title: "Current prototype",
    description:
      "No approved related records exist in the supplied material. Related proof cards are omitted.",
  },
];

export default function RelatedResourcesSection() {
  return (
    <section
      id="related"
      className="w-full text-white py-16 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(141deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
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
            Related proof follows taxonomy and currentness.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9]">
            No private-account inference or synthetic recommendations.
          </p>
        </motion.div>

        {/* 3 Columns Grid Matching Figma Spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {relatedCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-[#83B7BF]/35 pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
            >
              <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-white mb-3">
                {card.title}
              </h3>
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
