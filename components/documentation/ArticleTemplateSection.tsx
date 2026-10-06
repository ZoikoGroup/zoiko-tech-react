"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AnatomyCard {
  title: string;
  description: string;
}

const row1Cards: AnatomyCard[] = [
  {
    title: "Identity & applicability",
    description:
      "Approved title, type, product/platform scope and version/currentness.",
  },
  {
    title: "Before you begin",
    description:
      "Prerequisites and authority only when sourced.",
  },
  {
    title: "Body & outcome",
    description:
      "Concept or ordered procedure, expected result, validation and safe recovery.",
  },
];

export default function ArticleTemplateSection() {
  return (
    <section
      id="article-template"
      className="w-full bg-white text-[#102D2F] py-16 sm:py-20 lg:py-[74px]"
    >
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
            A canonical answer has a clear anatomy.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Direct answer first, then the detail needed to complete or
            understand the task.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {row1Cards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F1F7F8] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col items-center text-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-[60px] h-[60px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0 mb-1">
                  <Image
                    src="/documentation/card-icon.svg"
                    alt="Document icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-[#102D2F]">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176] max-w-[340px]">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Row 2: 1 Full width / centered card */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-full bg-[#F1F7F8] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col items-center text-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="w-[60px] h-[60px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0 mb-1">
              <Image
                src="/documentation/card-icon.svg"
                alt="Document icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-[#102D2F]">
              Limits & next route
            </h3>
            <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176] max-w-[560px]">
              Unsupported cases and appropriate Developer, Trust, Status, Support or product handoff.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
