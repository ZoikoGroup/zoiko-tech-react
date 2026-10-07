"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DirectoryCard {
  title: string;
  description: string;
}

const directoryCards: DirectoryCard[] = [
  {
    title: "Canonical identity",
    description:
      "Public product/platform name and source-approved documentation scope.",
  },
  {
    title: "Available article types",
    description:
      "Show only types with actual current public articles; no empty product shells.",
  },
  {
    title: "Maturity boundary",
    description:
      "Documentation presence does not establish availability, entitlement or a live product.",
  },
  {
    title: "Prototype state",
    description:
      "No approved directory inventory was supplied. No product documentation breadth is inferred.",
  },
];

export default function DirectorySection() {
  return (
    <section
      id="directory"
      className="w-full text-white py-16 sm:py-20 lg:py-[74px]"
      style={{
        background:
          "linear-gradient(134deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
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
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-[-0.0217em] text-white mb-3">
            Browse documented products and platforms.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Only surfaces with approved public documentation records belong in
            the directory.
          </p>
        </motion.div>

        {/* 2 Columns: 2x2 Cards Grid Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {directoryCards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.03] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="w-[46px] h-[46px] rounded-[10px] bg-[#62C6CA]/10 flex items-center justify-center shrink-0">
                  <Image
                    src="/documentation/card-icon.svg"
                    alt="Document icon"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="pt-2">
                  <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#C4D7D9]">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[360px] sm:h-[450px] lg:h-[536px] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src="/documentation/directory-preview.png"
              alt="Browse documented products and platforms preview"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
