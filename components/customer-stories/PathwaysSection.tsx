"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const pathwayCards = [
  {
    title: "Industry",
    description: "Comparable sector and approved operating context.",
    image: "/customer-stories/pathways-industry.png",
  },
  {
    title: "Challenge / use case",
    description: "A problem like yours, from approved story metadata.",
    image: "/customer-stories/pathways-challenge.png",
  },
  {
    title: "Technology / platform",
    description: "Actual canonical public capabilities involved.",
    image: "/customer-stories/pathways-technology.png",
  },
  {
    title: "Outcome",
    description: "Verified qualitative or quantitative categories.",
    image: "/customer-stories/pathways-outcome.png",
  },
  {
    title: "Format",
    description: "Story, video, spotlight, quote or deep case-study link.",
    image: "/customer-stories/pathways-format.png",
  },
  {
    title: "Latest / updated",
    description: "Current publication and review metadata; no popularity ranking.",
    image: "/customer-stories/pathways-latest.png",
  },
];

export default function PathwaysSection() {
  return (
    <section id="pathways" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-[#102D2F] mb-4">
            Start with the proof you need.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            Six discovery intents keep the operating context ahead of the result.
          </p>
        </motion.div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {pathwayCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-[#F8FBFA] border border-[#DEEBEB] rounded-2xl overflow-hidden hover:border-[#247780]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-[180px] bg-slate-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-poppins font-bold text-xl text-[#102D2F] mb-2 group-hover:text-[#247780] transition-colors">
                  {card.title}
                </h3>
                <p className="font-poppins text-sm sm:text-[15px] leading-relaxed text-[#5E7076]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
