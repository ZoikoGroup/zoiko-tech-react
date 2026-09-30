"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
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

const routerGoals = [
  {
    title: "Reduce exposure",
    description:
      "Find and prioritize known, unknown, unsupported or misconfigured security conditions.",
    image: "/cybersecurity-resilience/identity-datacenter-servers.png",
    link: "#exposure-posture",
  },
  {
    title: "Strengthen identity & access",
    description:
      "Apply least privilege, authentication and delegated authority with clearer boundaries.",
    image: "/cybersecurity-resilience/card-code-terminal.png",
    link: "#identity-access",
  },
  {
    title: "Improve security operations",
    description:
      "Create clearer triage, investigation, ownership and response states.",
    image: "/cybersecurity-resilience/card-chip-hardware.png",
    link: "#security-operations",
  },
  {
    title: "Secure engineering and change",
    description:
      "Build prevention and control into configuration, environments and release workflows.",
    image: "/cybersecurity-resilience/card-analytics-telemetry.png",
    link: "#secure-engineering",
  },
  {
    title: "Improve resilience",
    description:
      "Understand dependencies, degraded operation, recovery priorities and business continuity.",
    image: "/cybersecurity-resilience/card-digital-network.png",
    link: "#resilience-continuity",
  },
  {
    title: "Review trust evidence",
    description:
      "Evaluate current security, privacy, disclosure and assurance evidence.",
    image: "/cybersecurity-resilience/card-cyber-lock-matrix.png",
    link: "#evidence-disclosure",
  },
];

export default function IntentRouterSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current && Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="intent-router" className="w-full bg-white py-14 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header (Figma itemSpacing: 20px) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start mb-5"
        >
          <h2 className="font-poppins text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0A1416] leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] mb-3 sm:mb-5">
            What do you want to improve first?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[24px] sm:leading-[25.6px]">
            Pick the closest goal and jump to the matching section.
          </p>
        </motion.div>

        {/* Outer Bordered Container (Figma: rounded-[20px], border-black 1px, width 1180px, height 375px) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.15}
          className="w-full max-w-[1180px] mx-auto rounded-[20px] border border-black min-h-[360px] sm:min-h-[375px] py-4 sm:py-[34px] px-3 sm:px-6 lg:px-[34px] overflow-hidden"
        >
          {/* Horizontal Scroller Carousel */}
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            className="w-full flex flex-row items-center gap-[20px] sm:gap-[32px] lg:gap-[53px] overflow-x-auto py-2 scrollbar-none select-none scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {routerGoals.map((goal) => (
              <a
                key={goal.title}
                href={goal.link}
                className="group w-[260px] sm:w-[282px] min-w-[260px] sm:min-w-[282px] h-[306px] bg-white rounded-[14px] border border-[#D5E3E5] shadow-[0_3px_8px_rgba(0,0,0,0.12),0_12px_30px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.16),0_16px_36px_rgba(0,0,0,0.26)] flex flex-col justify-start overflow-hidden transition-all duration-300 shrink-0 cursor-pointer snap-start"
              >
                {/* Top Image: exactly 140px height, edge to edge at top */}
                <div className="relative w-full h-[140px] bg-gray-100 overflow-hidden shrink-0 rounded-t-[13px]">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="282px"
                  />
                </div>

                {/* Content: Title & Description with exact Figma paddings */}
                <div className="flex flex-col px-4 sm:px-5 pt-[13px] pb-[21px] flex-1">
                  <h3 className="font-poppins text-[15.5px] sm:text-[16px] font-bold text-[#0A1416] group-hover:text-[#247780] transition-colors leading-[24px] sm:leading-[25.6px] tracking-[-0.01em]">
                    {goal.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15.2px] text-[#4D6468] leading-[22px] sm:leading-[24.3px] pt-1">
                    {goal.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
