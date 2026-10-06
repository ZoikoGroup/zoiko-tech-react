"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ChangeCard {
  image: string;
  title: string;
  description: string;
}

const changeCards: ChangeCard[] = [
  {
    image: "/documentation/changes-behavior.png",
    title: "Behavior and terminology",
    description:
      "Update source-approved articles and dependent search/related metadata.",
  },
  {
    image: "/documentation/changes-replacement.png",
    title: "Split / merge / replacement",
    description:
      "Assign canonical owner and redirect strategy; avoid contradictory duplicate answers.",
  },
  {
    image: "/documentation/changes-sensitive.png",
    title: "Sensitive changes",
    description:
      "Applicable Security/Privacy/Trust review; current incident communications remain in Status.",
  },
];

export default function ChangesSection() {
  return (
    <section id="changes" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 lg:py-[74px]">
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
            Changes need one canonical answer.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Retire obsolete instructions and preserve useful deep-link recovery.
          </p>
        </motion.div>

        {/* 3 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {changeCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#F1F7F8] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative w-full h-[220px] rounded-[10px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
        </div>
      </div>
    </section>
  );
}
