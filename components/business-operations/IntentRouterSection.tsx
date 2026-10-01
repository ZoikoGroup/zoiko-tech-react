"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
};

export default function IntentRouterSection() {
  const cards = [
    {
      title: "Run people\noperations",
      description: "Coordinate governed\nHR and workforce\nprocesses.",
      icon: "/business-operations/icons/icon-people.svg",
      link: "#operating-domains",
    },
    {
      title: "Run payroll / billing",
      description: "Control recurring\npayroll, billing and\nrevenue workflows.",
      icon: "/business-operations/icons/icon-payroll.svg",
      link: "#operating-domains",
    },
    {
      title: "Improve\nworkforce assurance",
      description: "Connect time,\nworkforce context and\naccountability.",
      icon: "/business-operations/icons/icon-workforce.svg",
      link: "#operating-domains",
    },
    {
      title: "Coordinate\ncommunications",
      description: "Connect meetings,\nmessaging and\ncalling to business work.",
      icon: "/business-operations/icons/icon-facilities.svg", // speech bubble icon
      link: "#operating-domains",
    },
    {
      title: "Improve marketing\noperations",
      description: "Governed operations\naround repeatable\nmarketing work.",
      icon: "/business-operations/icons/icon-comms.svg", // megaphone icon
      link: "#operating-domains",
    },
    {
      title: "Strengthen\ncompliance operations",
      description: "Connect obligations,\ncontrols, evidence and\nworkflows.",
      icon: "/business-operations/icons/icon-compliance.svg",
      link: "#operating-domains",
    },
  ];

  return (
    <section
      id="intent-router"
      className="w-full bg-[#F8FAFC] border-b border-[#E2E8F0] py-12 sm:py-14"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="mb-6 flex flex-col gap-2"
        >
          <span className="block font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[0.16em] text-[#247780] uppercase">
            OPERATIONS INTENT ROUTER
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[26px] sm:text-[28px] font-bold text-[#0F172A] leading-[34px] tracking-[-0.02em]">
            Which operation do you need to run better?
          </h2>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[14px]">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1 + idx * 0.05}
              className="h-full"
            >
              <Link
                href={card.link}
                className="group flex flex-col justify-between h-full bg-white p-[21px] rounded-[14px] border border-[#E2E8F0] hover:border-[#1F7A6C]/50 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Icon Container: 40x40px, rounded-[10px], Elm bg #1F7A6C */}
                  <div className="w-10 h-10 rounded-[10px] bg-[#1F7A6C] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shadow-sm shrink-0">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={18}
                      height={18}
                      className="w-[18px] h-[18px] object-contain"
                    />
                  </div>

                  {/* Title: 16px Bold #0F172A leading-[22px] */}
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-bold text-[#0F172A] leading-[22px] mb-2 min-h-[44px] group-hover:text-[#247780] transition-colors whitespace-pre-line">
                    {card.title}
                  </h3>

                  {/* Description: 13px Regular #334155 leading-[20px] */}
                  <p className="font-['Poppins',sans-serif] text-[13px] text-[#334155] leading-[20px] mb-4 font-normal min-h-[60px] whitespace-pre-line">
                    {card.description}
                  </p>
                </div>

                {/* Choose domain link with arrow: Poppins SemiBold 13px #247780 */}
                <div className="flex items-center gap-1.5 text-[#247780] font-['Poppins',sans-serif] text-[13px] font-semibold group-hover:gap-2 transition-all">
                  <span>Choose domain</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#247780] shrink-0 transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M3.3335 8H12.6668"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.6665 4L12.6665 8L8.6665 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
