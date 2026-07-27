"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Radio, Code2, Workflow, Cloud, ShieldCheck } from "lucide-react";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const solutionsData = [
  {
    icon: Bot,
    title: "Custom AI Engineering",
    description: "Build intelligent systems that transform your operations.",
    items: [
      "Agentic AI systems",
      "Predictive analytics",
      "LLM fine-tuning",
      "ML pipelines",
      "Retrieval systems",
      "AI governance integration",
    ],
  },
  {
    icon: Radio,
    title: "Telecom Engineering",
    description: "Enterprise-grade telecommunications infrastructure.",
    items: [
      "OSS/BSS modules",
      "eSIM provisioning",
      "Number management",
      "Network automation",
      "Wholesale integrations",
    ],
  },
  {
    icon: Code2,
    title: "Advanced Software Development",
    description: "Build scalable, modern applications.",
    items: [
      "SaaS platforms",
      "Real-time systems",
      "APIs & microservices",
      "Cross-platform apps",
    ],
  },
  {
    icon: Workflow,
    title: "Automation & Workflows",
    description: "Streamline operations with intelligent automation.",
    items: ["Multi-step workflows", "API orchestration", "Document automation"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Modern infrastructure that scales.",
    items: [
      "AWS/Azure/GCP",
      "Terraform IaC",
      "CI/CD pipelines",
      "Kubernetes operations",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Enterprise security built-in from day one.",
    items: [
      "Zero-trust design",
      "Identity & access control",
      "Compliance engineering",
    ],
  },
];

export default function ZoikoTechnologySolutions() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Top Header Badge */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-4"
        >
          <div className="flex flex-row items-center justify-center p-[6px_14px] bg-[#EEF8F7] border border-[#D5EDED] rounded-[100px]">
            <span className="text-[#327F7A] font-inter font-semibold text-[13px] leading-[18px]">
              Engineering Capabilities
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-[60px] max-w-[680px]"
        >
          <h2 className="text-[#1D2939] font-inter font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[60px] tracking-[-0.96px] mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-[#667085] max-w-160 font-inter font-normal text-[16px] leading-[24px]">
            From AI systems to telecom infrastructure, we engineer solutions
            that scale with your ambitions.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[32px] w-full">
          {solutionsData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={0.15 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUpVariant}
                className="flex flex-col items-start p-[32px] bg-white border border-[#E9E9E9] rounded-[16px] shadow-[0_4px_12px_#0000001A]"
              >
                {/* Icon Container with linear gradient */}
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[linear-gradient(135deg,#4FD1C7_0%,#2C5F5D_100%)] flex items-center justify-center mb-6 shadow-sm">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-[#1D2939] font-inter font-bold text-[20px] leading-[28px] mb-2">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#667085] font-inter font-normal text-[14px] leading-[20px] mb-6">
                  {card.description}
                </p>

                {/* Bullet List */}
                <ul className="flex flex-col items-start gap-[12px] w-full mt-auto">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex flex-row items-center gap-[10px]"
                    >
                      {/* Dot */}
                      <div className="w-[5px] h-[5px] rounded-full bg-[#4FD1C7] flex-shrink-0"></div>
                      <span className="text-[#475467] font-inter font-medium text-[14px] leading-[20px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
