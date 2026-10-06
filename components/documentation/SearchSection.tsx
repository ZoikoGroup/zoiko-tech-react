"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SearchCard {
  title: string;
  description: string;
}

const cardsRow1: SearchCard[] = [
  {
    title: "Public-safe scope",
    description:
      "Approved titles, summaries, product/platform, goal/type and public keywords. No private document leakage.",
  },
  {
    title: "Controlled facets",
    description:
      "Only metadata backed by current published articles; preserve selected state and announce results.",
  },
  {
    title: "Recovery",
    description:
      "No match: clear/refine and browse. Search failure: keep governed current browse available.",
  },
];

export default function SearchSection() {
  return (
    <section id="search" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 lg:py-[74px]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[840px] mb-10 sm:mb-12"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-[-0.0217em] text-[#102D2F] mb-3">
            Search enhances a usable browse path.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Published answers remain readable without search or JavaScript.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1: 3 cards */}
          {cardsRow1.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F1F7F8] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-[46px] h-[46px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0">
                <Image
                  src="/documentation/card-icon.svg"
                  alt="Document icon"
                  width={25}
                  height={25}
                />
              </div>
              <div className="pt-2">
                <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-[#102D2F] mb-2">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}

          {/* Row 2: 1 card + 1 banner spanning 2 columns */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#F1F7F8] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="w-[46px] h-[46px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0">
              <Image
                src="/documentation/card-icon.svg"
                alt="Document icon"
                width={25}
                height={25}
              />
            </div>
            <div className="pt-2">
              <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-[#102D2F] mb-2">
                Current prototype
              </h3>
              <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176]">
                Registry not connected. No live article-search controls or fabricated result counts.
              </p>
            </div>
          </motion.article>

          {/* Banner spanning 2 cols on lg screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 relative min-h-[200px] sm:min-h-[226px] rounded-[10px] overflow-hidden bg-[#102D2F]/[0.08] border border-[#D5E5E5] shadow-sm"
          >
            <Image
              src="/documentation/search-workstation.png"
              alt="Search workstation"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
