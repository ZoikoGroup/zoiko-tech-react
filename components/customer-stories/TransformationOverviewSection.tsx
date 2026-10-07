"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const overviewSteps = [
  {
    title: "At a glance",
    description:
      "Approved industry, use case, actual technology, deployment stage, timeframe and outcome type.",
    image: "/customer-stories/overview-at-a-glance.png",
  },
  {
    title: "Challenge",
    description:
      "Factual pre-existing context, with no dramatization or confidential detail.",
    image: "/customer-stories/overview-challenge.png",
  },
  {
    title: "Approach",
    description:
      "What was used or changed within supported product and customer scope.",
    image: "/customer-stories/overview-approach.png",
  },
  {
    title: "Evidence narrative",
    description:
      "Approved implementation, operating model, outcomes, source limitations and currentness.",
    image: "/customer-stories/overview-evidence.png",
  },
  {
    title: "Current prototype",
    description:
      "No story detail is populated with synthetic customer facts. These are the reading requirements for a future approved record.",
    image: "/customer-stories/overview-prototype.png",
  },
];

export default function TransformationOverviewSection() {
  return (
    <section id="overview" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 md:py-24">
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
            A story begins with operating context.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#5E7076]">
            The approved narrative moves from the challenge to the evidence, without overstating what changed.
          </p>
        </motion.div>

        {/* 3-Column Grid Matching Figma Spec (Row 1: 3 cards, Row 2: 2 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-6">
          {overviewSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-black/10 rounded-[10px] px-[10px] pt-[23px] pb-[38px] flex flex-col justify-start shadow-[0_1px_10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[348/180] h-[180px] rounded-[6px] overflow-hidden mb-4 bg-slate-100 flex-shrink-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col flex-1 px-1">
                <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-[#102D2F] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#587176]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
