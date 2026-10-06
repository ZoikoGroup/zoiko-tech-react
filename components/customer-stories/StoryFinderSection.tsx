"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const finderCards = [
  {
    title: "Search scope",
    description:
      "Approved title, public customer descriptor, summary, industry, use case, technology and controlled outcome categories. No CRM notes or private interviews.",
  },
  {
    title: "Filters",
    description:
      "Approved industry, challenge, technology, outcome and format. Coarse region only when useful and permitted; no availability or residency inference.",
  },
  {
    title: "Sort and recovery",
    description:
      "Featured, newest, recently updated or alphabetical. No fame/spend ranking. Preserve zero-result filters; clear/reset rather than synthesize a similar story.",
  },
  {
    title: "Prototype state",
    description:
      "The story registry is not connected and no approved records were supplied. Search and filter controls will appear when published metadata exists.",
  },
];

export default function StoryFinderSection() {
  return (
    <section id="finder" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
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
            Find relevant, current proof.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            Discovery must search public-safe metadata and preserve claim context.
          </p>
        </motion.div>

        {/* 2-Column Grid Matching Figma Spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 mb-10 sm:mb-12">
          {finderCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border-t border-[#83B7BF]/35 pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
            >
              <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-[#102D2F] mb-3">
                {card.title}
              </h3>
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#5E7076] max-w-[550px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Banner Graphic - 1200x320 rectangular banner matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[1200/320] max-h-[320px] overflow-hidden"
        >
          <Image
            src="/customer-stories/finder-banner.png"
            alt="Find relevant, current proof banner"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
