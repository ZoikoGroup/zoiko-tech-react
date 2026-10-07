"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface DocCard {
  title: string;
  description: string;
}

const photoCards: PhotoCard[] = [
  {
    image: "/documentation/start-by-goal-learn.png",
    alt: "People reviewing information on a laptop",
    title: "Learn & get started",
    description: "Understand concepts and sourced prerequisites before beginning.",
  },
  {
    image: "/documentation/start-by-goal-configure.png",
    alt: "Technology team collaborating",
    title: "Configure & operate",
    description: "Approved settings, authority, side effects and validation.",
  },
  {
    image: "/documentation/start-by-goal-troubleshoot.png",
    alt: "Professionals reviewing documents",
    title: "Troubleshoot & evaluate",
    description: "Safe checks, recovery, scope and the next authoritative route.",
  },
];

const docCards: DocCard[] = [
  {
    title: "Build / integrate",
    description:
      "API, SDK and integration contracts belong to Developer Resources.",
  },
  {
    title: "Check service state",
    description:
      "Status owns current incidents and availability; static documentation does not.",
  },
];

export default function StartByGoalSection() {
  return (
    <section id="start-by-goal" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 lg:py-[74px]">
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
            Start with what you need to do.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Product taxonomy should not stand between you and a useful answer.
          </p>
        </motion.div>

        {/* Row 1 - Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mb-6">
          {photoCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-[10px] border border-[#D5E5E5] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-[26px] flex flex-col gap-3 flex-1">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0">
                  <Image
                    src="/documentation/card-icon.svg"
                    alt="Document icon"
                    width={25}
                    height={25}
                  />
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-[20px] leading-[26px] text-[#102D2F]">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Row 2 - Doc Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
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
                <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-[#102D2F] mb-1">
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
