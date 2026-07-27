"use client";

import React from "react";
import { motion } from "framer-motion";

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

const integrationCategories = [
  {
    title: "Native Zoiko\nEcosystem",
    tags: ["ZoikoSuite", "ZoikoPay", "ZoikoAxis"],
    description:
      "Sync time and TES™ data into accounting, HR, payroll, and automation workflows",
  },
  {
    title: "Productivity &\nCollaboration",
    tags: ["Google Workspace", "Microsoft 365", "Slack", "Zoom"],
    description: null,
  },
  {
    title: "Project & Task\nManagement",
    tags: ["Jira", "Trello", "Asana", "ClickUp", "Monday.com"],
    description: null,
  },
  {
    title: "Finance &\nAccounting",
    tags: ["QuickBooks", "Xero", "Sage"],
    description: null,
  },
];

export default function IntegrationsAndEcosystem() {
  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Section Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#2D3748] mb-3 leading-tight">
            Integrations & Ecosystem
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-[16px]">
            Connect with your existing tools and workflow
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid matching the layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-start">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={0.15 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_#0000001A] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start border border-gray-100/80 min-h-[260px]"
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#20B2AA] mb-6 leading-snug whitespace-pre-line">
                {category.title}
              </h3>

              {/* Integration Badges / Tags */}
              <div className="flex flex-wrap gap-2.5 max-w-70 mb-4">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F8F9FA] text-[#343A40] text-[13px] font-medium py-1.5 px-3.5 rounded-lg border border-gray-200/60 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Optional Footer Description */}
              {category.description && (
                <p className="text-[13px] italic text-[#777777] mt-auto leading-relaxed">
                  {category.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
