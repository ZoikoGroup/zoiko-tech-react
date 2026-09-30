"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Rocket,
  RefreshCw,
  Infinity as InfinityIcon,
} from "lucide-react";

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

const phases = [
  {
    title: "Define critical scope",
    description:
      "Critical services, assets, identities, markets, environments and owners.",
    gate: "Gate: scope and ownership approved",
    icon: Target,
  },
  {
    title: "Establish baseline",
    description:
      "Known and unknown control state, access model, evidence, major dependencies.",
    gate: "Gate: baseline reviewed",
    icon: ClipboardList,
  },
  {
    title: "Prioritize exposure",
    description:
      "Classify remediation, exception and review work by business impact and evidence.",
    gate: "Gate: priority plan approved",
    icon: BarChart3,
  },
  {
    title: "Validate controls",
    description:
      "Test approved controls, access boundaries, incident and recovery workflows, evidence capture.",
    gate: "Gate: acceptance criteria met",
    icon: ShieldCheck,
  },
  {
    title: "Pilot / roll out",
    description:
      "Bounded systems, teams or workflows with explicit monitoring and support.",
    gate: "Gate: operational readiness confirmed",
    icon: Rocket,
  },
  {
    title: "Review resilience",
    description:
      "Dependencies, degraded mode, recovery ownership and lessons.",
    gate: "Gate: resilience review completed",
    icon: RefreshCw,
  },
  {
    title: "Improve continuously",
    description:
      "Refresh evidence, close exceptions, update controls, expand to adjacent systems.",
    gate: "Gate: periodic review completed",
    icon: InfinityIcon,
  },
];

export default function ImplementationJourneySection() {
  return (
    <section
      id="implementation-journey"
      className="relative w-full overflow-hidden text-white py-14 sm:py-20 lg:pt-[96px] lg:pb-[120px]"
      style={{
        background:
          "linear-gradient(155deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-8 lg:mb-[32px]"
        >
          <h2 className="font-sora text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] max-w-[620px]">
            From critical scope to continuous improvement
          </h2>
        </motion.div>

        {/* Content Row: Left Column 594x595px with Outer Cyan Box, Right Column 560-627px Cyclic Diagram */}
        <div className="w-full max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[24px]">
          {/* Left Column: Outer Cyan Bordered Box (Figma: width 594px, height 595px, rounded-[20px], border-2 border-[#6FD0F6], p-[21px], overflow-y-auto) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.15}
            className="w-full lg:w-[594px] h-auto lg:h-[595px] lg:overflow-y-auto rounded-[20px] border-2 border-[#6FD0F6] p-4 sm:p-[21px] pr-2 sm:pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#7FD0D9]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#7FD0D9]/60"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {phases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.title}
                    className="bg-white/[0.06] border border-[#7FD0D9]/35 rounded-[14px] p-4 sm:p-[18px] pb-5 flex flex-col justify-between backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.1] transition-all duration-200 min-h-[230px] sm:min-h-[274px]"
                  >
                    <div>
                      {/* Top Row: 32x32 White Circular Icon Badge + Bold Title */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-sm">
                          <Icon className="w-4 h-4 text-[#0F3A34] stroke-[2.2]" />
                        </div>
                        <h3 className="font-sora text-[15.5px] sm:text-[16px] font-bold text-[#DCECEE] leading-snug">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[13.5px] sm:text-[14px] text-[#DCECEE]/80 sm:text-[#A3B8B9] leading-[21px] sm:leading-[22px] mb-4">
                        {phase.description}
                      </p>
                    </div>

                    {/* Gate Text (at the bottom in cyan text) */}
                    <div className="text-[12.8px] sm:text-[13.3px] text-[#7FD0D9] font-semibold leading-[1.3] mt-auto">
                      {phase.gate}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Cyclic Workflow Diagram (Figma: 627x627 clean graphic, floating directly on gradient) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.25}
            className="w-full lg:w-[560px] flex justify-center items-center self-center py-2 lg:py-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[600px]">
              <Image
                src="/cybersecurity-resilience/implementation-workflow.png"
                alt="Continuous security implementation workflow diagram"
                width={627}
                height={627}
                className="w-full h-auto object-contain drop-shadow-2xl"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 600px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
