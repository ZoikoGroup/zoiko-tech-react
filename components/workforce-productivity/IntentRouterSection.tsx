"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

const intents = [
  {
    title: "Improve time visibility",
    description:
      "Create clearer, verifiable\nworkforce-time context for\noperations.",
    image: "/workforce-productivity/router-time-visibility.png",
    href: "#time-assurance",
  },
  {
    title: "Coordinate teams",
    description:
      "Connect schedules,\nresponsibilities, handoffs and\nteam context.",
    image: "/workforce-productivity/router-coordinate-teams.png",
    href: "#coordination-collab",
  },
  {
    title: "Reduce workflow exceptions",
    description:
      "Surface missing, conflicting or\npolicy-sensitive workforce\nsignals for review.",
    image: "/workforce-productivity/router-reduce-exceptions.png",
    href: "#exceptions-accountability",
  },
  {
    title: "Connect collaboration",
    description:
      "Link meetings, messaging and\ndecisions to operational\nworkflows where appropriate.",
    image: "/workforce-productivity/router-connect-collaboration.png",
    href: "#coordination-collab",
  },
  {
    title: "Align HR operations",
    description:
      "Connect workforce context to\napproved HR processes and\npolicies.",
    image: "/workforce-productivity/router-align-hr-operations.png",
    href: "#hr-handoffs",
  },
  {
    title: "Strengthen accountability",
    description:
      "Make ownership, approvals and\nevidence visible without\nemployee surveillance.",
    image: "/workforce-productivity/router-strengthen-accountability.png",
    href: "#governance",
  },
];

export default function IntentRouterSection() {
  return (
    <section
      id="intent-router"
      className="w-full bg-white py-16 lg:py-[96px] flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[130px] flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col items-center text-center mb-8 sm:mb-10 max-w-[561px]"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold leading-tight sm:leading-[40.48px] text-[#0A1416] mb-3">
            What do you want to improve?
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#4D6468] leading-[22px] sm:leading-[25.6px] max-w-[534px]">
            Choose the closest intent and jump to the relevant part of the model.
          </p>
        </motion.div>

        {/* 6 Intent Cards Container: Exactly 4 on top row, 2 centered below */}
        <div className="w-full max-w-[1180px] flex flex-wrap justify-center gap-4">
          {intents.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={index * 0.06}
              className="group block w-full sm:w-[283px] h-auto sm:h-[266px] p-[19px_20px_20px] rounded-[14px] bg-[#F3F9FA] border border-[#D5E3E5] shadow-[0px_8px_20px_0px_rgba(10,20,22,0.08)] hover:shadow-[0px_12px_28px_0px_rgba(10,20,22,0.14)] hover:border-[#7FD0D9] transition-all duration-300 transform hover:-translate-y-1 shrink-0"
            >
              {/* Image Container */}
              <div className="relative w-full h-[128px] rounded-[14px] overflow-hidden mb-[10px] bg-gray-100 shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-bold leading-[22px] text-[#0A1416] mb-[6px] group-hover:text-[#247780] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] font-normal leading-[20px] text-[#4D6468] whitespace-pre-line">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
