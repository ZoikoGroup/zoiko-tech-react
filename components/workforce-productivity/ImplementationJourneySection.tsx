"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  GitFork,
  ShieldCheck,
  FlaskConical,
  ArrowRight,
  Eye,
  Maximize2,
  LucideIcon,
} from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: customDelay,
    },
  }),
};

interface StepItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  status: string;
}

const allSteps: StepItem[] = [
  {
    icon: Target,
    title: "Define purpose",
    desc: "Operational problem, decision or workflow, users and legitimate data need.",
    status: "Purpose and owner approved",
  },
  {
    icon: GitFork,
    title: "Map systems",
    desc: "Time, HR, communications and other sources, with authority boundaries.",
    status: "Boundaries documented",
  },
  {
    icon: ShieldCheck,
    title: "Set policy",
    desc: "Roles, scope, sensitive contexts, retention, exceptions and approvals.",
    status: "Governance reviewed",
  },
  {
    icon: FlaskConical,
    title: "Pilot",
    desc: "Bounded teams and workflows, clear success criteria, stakeholder communication.",
    status: "Pilot evidence reviewed",
  },
  {
    icon: ArrowRight,
    title: "Roll out",
    desc: "Expand deliberately with training, support, monitoring and issue handling.",
    status: "Readiness confirmed",
  },
  {
    icon: Eye,
    title: "Review",
    desc: "Exceptions, data quality, access, policy and workflow outcomes.",
    status: "Periodic review completed",
  },
  {
    icon: Maximize2,
    title: "Expand",
    desc: "Adjacent workforce, communication or HR capabilities where value and governance are proven.",
    status: "Expansion approved",
  },
];

const topSteps = allSteps.slice(0, 4);
const bottomSteps = allSteps.slice(4);

function CardItem({
  item,
  idx,
  className = "",
}: {
  item: StepItem;
  idx: number;
  className?: string;
}) {
  const IconComponent = item.icon;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      custom={idx * 0.05}
      className={`p-5 rounded-[14px] bg-[#F4F9FA] border border-[#D5E3E5] flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow ${className}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#20656C] flex items-center justify-center text-white flex-shrink-0">
            <IconComponent className="w-4 h-4" strokeWidth={2.2} />
          </div>
          <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0A1416]">
            {item.title}
          </h3>
        </div>
        <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#4D6468]">
          {item.desc}
        </p>
      </div>

      <div className="pt-3">
        <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#20656C] leading-[20px] block">
          {item.status}
        </span>
      </div>
    </motion.div>
  );
}

export default function ImplementationJourneySection() {
  return (
    <section id="implementation" className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-[130px]">
        {/* Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.2] text-[#0A1416]">
            Start with a purpose, pilot, then expand
          </h2>
        </motion.div>

        {/* Desktop View (lg and up): 4 Cards on Row 1, 3 Centered on Row 2 */}
        <div className="hidden lg:flex lg:flex-col lg:items-center gap-4 xl:gap-5 w-full max-w-[1140px] mx-auto mb-12">
          {/* Row 1: 4 Cards */}
          <div className="flex justify-center gap-4 xl:gap-5 w-full">
            {topSteps.map((item, idx) => (
              <CardItem
                key={item.title}
                item={item}
                idx={idx}
                className="w-[230px] xl:w-[252px] min-h-[220px]"
              />
            ))}
          </div>

          {/* Row 2: 3 Cards Centered */}
          <div className="flex justify-center gap-4 xl:gap-5 w-full">
            {bottomSteps.map((item, idx) => (
              <CardItem
                key={item.title}
                item={item}
                idx={idx + 4}
                className="w-[230px] xl:w-[252px] min-h-[220px]"
              />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View (< lg): Fluid 1-col on mobile, 2-col on tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden gap-4 w-full max-w-[850px] mx-auto mb-10">
          {allSteps.map((item, idx) => (
            <CardItem
              key={item.title}
              item={item}
              idx={idx}
              className="w-full min-h-[190px] sm:last:col-span-2 sm:last:max-w-[420px] sm:last:mx-auto md:last:col-span-1 md:last:max-w-none"
            />
          ))}
        </div>

        {/* CTA Button - Centered & Responsive */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="flex justify-center"
        >
          <a
            href="#contact-sales"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-[8px] bg-[#20656C] text-white font-semibold text-[15px] sm:text-[16px] hover:bg-[#184f55] transition-colors shadow-sm text-center"
          >
            Discuss rollout
          </a>
        </motion.div>
      </div>
    </section>
  );
}


