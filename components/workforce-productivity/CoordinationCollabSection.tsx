"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const collabCapabilities = [
  {
    title: "Meetings",
    text: "Decisions, approvals, action items or scheduling context, only where approved and relevant.",
  },
  {
    title: "Messaging",
    text: "A coordination and handoff channel. No analysis of private message content for scoring.",
  },
  {
    title: "Calling",
    text: "A communication capability and workflow route, not a surveillance input.",
  },
  {
    title: "Action items & decisions",
    text: "Accountable owner, due state, source and status, with decision context preserved where supported.",
  },
  {
    title: "External participants",
    text: "Privacy, guest and AI policy boundaries apply.",
  },
];

const workflowSteps = [
  {
    title: "Operational event",
    desc: "A staffing, time or work exception needs coordination.",
  },
  {
    title: "Route",
    desc: "The responsible manager or reviewer gets a task or notification.",
  },
  {
    title: "Collaborate",
    desc: "The relevant meeting, message or call path is available.",
  },
  {
    title: "Decide",
    desc: "The decision or approval is recorded in the workflow.",
  },
  {
    title: "Resolve",
    desc: "Exception state updates with source and owner.",
  },
  {
    title: "Evidence",
    desc: "Material change and approval retained where required.",
  },
];

export default function CoordinationCollabSection() {
  return (
    <section
      id="coordination-collab"
      className="w-full text-white py-16 lg:py-24 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(140deg, rgba(0, 0, 0, 1) 0%, rgba(28, 92, 98, 1) 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[130px] flex flex-col items-center">
        {/* Centered Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col items-center text-center mb-8 sm:mb-10 max-w-[1076px]"
        >
          <h2 className="text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold leading-tight sm:leading-[1.2] text-white mb-3">
            Coordination and collaboration
          </h2>
          <p className="text-[14.5px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] text-[#DCECEE] max-w-[880px]">
            Zoiko Sema is a communications evidence layer. Communication supports
            work, and private communication is not broadly monitored.
          </p>
        </motion.div>

        {/* 5 Capability Cards: 4 on Row 1, 1 centered on Row 2 */}
        <div className="w-full max-w-[1180px] flex flex-wrap justify-center gap-4 mb-16">
          {/* First 4 Cards */}
          {collabCapabilities.slice(0, 4).map((item, idx) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.05}
              className="w-full sm:w-[283px] p-5 rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-start min-h-[140px] shadow-sm hover:border-[#7FD0D9]/60 transition-colors"
            >
              <h3 className="text-[16.8px] font-bold text-white mb-2 leading-[1.3]">
                {item.title}
              </h3>
              <p className="text-[14.5px] leading-[22px] text-[#DCECEE]">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Row 2: Centered 5th Card */}
          <div className="w-full flex justify-center">
            {collabCapabilities.slice(4).map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.25}
                className="w-full sm:w-[283px] p-5 rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-start min-h-[140px] shadow-sm hover:border-[#7FD0D9]/60 transition-colors"
              >
                <h3 className="text-[16.8px] font-bold text-white mb-2 leading-[1.3]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[22px] text-[#DCECEE]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Section Subheading - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="text-center mb-8"
        >
          <h3 className="text-[20px] sm:text-[22px] font-bold text-white">
            Communication-to-workflow example
          </h3>
        </motion.div>

        {/* 6 Workflow Example Steps: 4 on Row 1, 2 Centered on Row 2 */}
        <div className="w-full max-w-[1180px] flex flex-wrap justify-center gap-4 mb-12">
          {/* Row 1: 4 Cards */}
          {workflowSteps.slice(0, 4).map((step, idx) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.05}
              className="w-full sm:w-[272px] min-h-[186px] p-[18px] rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-start shadow-sm"
            >
              {/* Solid White Circle Indicator from Figma */}
              <div className="w-[26px] h-[26px] rounded-full bg-white mb-4 shrink-0 shadow-sm" />

              <h4 className="text-[16px] font-bold text-white mb-2 leading-[1.3]">
                {step.title}
              </h4>
              <p className="text-[14px] leading-[21px] text-[#DCECEE]">
                {step.desc}
              </p>
            </motion.div>
          ))}

          {/* Row 2: 2 Centered Cards */}
          <div className="w-full flex flex-wrap justify-center gap-4">
            {workflowSteps.slice(4).map((step, idx) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.25 + idx * 0.05}
                className="w-full sm:w-[272px] min-h-[186px] p-[18px] rounded-[14px] bg-white/[0.06] border border-[#7FD0D9]/35 backdrop-blur-sm flex flex-col justify-start shadow-sm"
              >
                {/* Solid White Circle Indicator */}
                <div className="w-[26px] h-[26px] rounded-full bg-white mb-4 shrink-0 shadow-sm" />

                <h4 className="text-[16px] font-bold text-white mb-2 leading-[1.3]">
                  {step.title}
                </h4>
                <p className="text-[14px] leading-[21px] text-[#DCECEE]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Centered CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.35}
          className="flex justify-center w-full sm:w-auto"
        >
          <a
            href="#platform-evidence"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[10px] bg-white text-black font-semibold text-[16px] hover:bg-[#DCECEE] transition-colors shadow-md text-center"
          >
            <ArrowRight className="w-4 h-4 text-black shrink-0" />
            Explore collaboration
          </a>
        </motion.div>
      </div>
    </section>
  );
}
