"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scan,
  Search,
  AlertTriangle,
  Settings,
  ShieldCheck,
  FileCheck,
  Database,
  FileText,
  Shield,
  Wrench,
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

const statusCards = [
  {
    title: "Unknown",
    description: "State not established or evidence unavailable.",
    icon: Scan,
    badgeColor: "border-[#7FD0D9]/50 text-[#7FD0D9]",
  },
  {
    title: "Needs review",
    description: "Owner review or evidence refresh required.",
    icon: Search,
    badgeColor: "border-[#E8D48A]/50 text-[#E8D48A]",
  },
  {
    title: "Exception",
    description: "Known deviation, accepted through an approved process.",
    icon: AlertTriangle,
    badgeColor: "border-[#FFB088]/50 text-[#FFB088]",
  },
  {
    title: "Remediating",
    description: "Corrective work in progress.",
    icon: Settings,
    badgeColor: "border-[#7FD0D9]/50 text-[#7FD0D9]",
  },
  {
    title: "Verified",
    description: "Current approved evidence exists.",
    icon: ShieldCheck,
    badgeColor: "border-[#7FD0D9] text-[#7FD0D9]",
  },
  {
    title: "Resolved / retired",
    description: "Closed or removed, evidence retained.",
    icon: FileCheck,
    badgeColor: "border-[#DCECEE]/50 text-[#DCECEE]",
  },
];

const detailDimensions = [
  {
    title: "Asset / service",
    description:
      "Name and type, owner, business criticality, environment, lifecycle state.",
    icon: Database,
  },
  {
    title: "Exposure / issue",
    description:
      "Category, source, affected scope, first-known date where supported, current owner.",
    icon: FileText,
  },
  {
    title: "Control",
    description:
      "Purpose, current status, evidence source, last review, next review.",
    icon: Shield,
  },
  {
    title: "Exception",
    description:
      "Reason, approving authority, scope, expiry or review date, compensating control where approved.",
    icon: AlertTriangle,
  },
  {
    title: "Remediation",
    description:
      "Owner, target date, status, validation and closure evidence.",
    icon: Wrench,
  },
];

export default function PostureExposureSection() {
  return (
    <section
      id="exposure-posture"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-24"
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
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-3">
            Exposure and control posture
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#DCECEE] leading-[26px]">
            Visibility, ownership and remediation shown as factual states. Six
            statuses, no single security score.
          </p>
        </motion.div>

        {/* Two-Column Grid: 6 Status Cards on Left, 5 Detailed Rows on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6 Status Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statusCards.map((status, idx) => {
              const Icon = status.icon;
              return (
                <motion.div
                  key={status.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  custom={0.1 + idx * 0.05}
                  className="bg-white/[0.06] border border-[#7FD0D9]/30 rounded-[14px] p-5 flex flex-col justify-between backdrop-blur-sm hover:border-[#7FD0D9] hover:bg-white/[0.09] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#7FD0D9]/20 flex items-center justify-center text-[#7FD0D9] shrink-0">
                      <Icon className="w-4 h-4 text-[#7FD0D9]" />
                    </div>
                    <span className="text-[15.5px] font-bold text-white">
                      {status.title}
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[#DCECEE] leading-[21px]">
                    {status.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: 5 Detail Dimensions */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {detailDimensions.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  custom={0.15 + idx * 0.05}
                  className="bg-white/[0.04] border border-white/10 rounded-[12px] p-4 sm:p-5 flex items-start gap-4 hover:border-[#7FD0D9]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-[#7FD0D9]/15 flex items-center justify-center text-[#7FD0D9] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#7FD0D9]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[16px] sm:text-[16.8px] font-bold text-white">
                      {detail.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-[#DCECEE] leading-[21px]">
                      {detail.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
