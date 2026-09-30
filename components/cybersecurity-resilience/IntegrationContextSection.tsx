"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Puzzle, Activity, Layers, Clock, Monitor } from "lucide-react";

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

const integrationItems = [
  {
    title: "User, admin, service and delegated identities",
    icon: Users,
  },
  {
    title: "Approved APIs, events and webhooks",
    icon: Puzzle,
  },
  {
    title: "Observability signals",
    icon: Activity,
  },
  {
    title: "Asset and service criticality",
    icon: Layers,
  },
  {
    title: "Recent approved changes",
    icon: Clock,
  },
  {
    title: "System Status and support routes",
    icon: Monitor,
  },
];

export default function IntegrationContextSection() {
  return (
    <section id="integration-context" className="w-full bg-white py-14 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px]">
        {/* Header (Figma itemSpacing: 20px) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="w-full max-w-[1180px] mx-auto mb-8 lg:mb-[32px]"
        >
          <h2 className="font-poppins text-[26px] sm:text-[32px] lg:text-[35.2px] font-bold text-[#0A1416] leading-[1.2] lg:leading-[40.5px] tracking-[-0.02em] mb-2.5">
            Integration and operational context
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4D6468] leading-[24px] sm:leading-[25.6px] max-w-[700px]">
            Security signals mean more with context. Internal telemetry and confidential architecture stay off this public page.
          </p>
        </motion.div>

        {/* 6 Integration Dimension Cards (Figma: 381px x 257px, top icon-area + bottom text-area) */}
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mb-8 lg:mb-[32px]">
          {integrationItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={0.1 + idx * 0.04}
                className="bg-white border border-[#D5E3E5] rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col min-h-[257px] transition-all duration-300"
              >
                {/* Top Half: Soft Teal Banner (160px height) with Large Circular Disc (137x137) */}
                <div className="w-full h-[160px] bg-[#EEF5F6] flex items-center justify-center shrink-0">
                  <div className="w-[137px] h-[137px] rounded-full bg-[#D5E3E5] flex items-center justify-center shadow-inner">
                    <Icon className="w-[58px] h-[58px] text-[#247780] stroke-[2.2]" />
                  </div>
                </div>

                {/* Bottom Half: Title Only (Pure White, padding: 20px, font-bold text-[#0A1416]) */}
                <div className="w-full bg-white px-5 pt-4 pb-6 flex items-center flex-1">
                  <h3 className="font-poppins text-[16.8px] font-bold text-[#0A1416] leading-[22px]">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons (Figma: h-[48px] px-6 rounded-[10px], primary filled + secondary outlined) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.3}
          className="w-full max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-[48px] rounded-[10px] bg-[#247780] hover:bg-[#1C5C62] text-white font-semibold text-[16px] transition-colors shadow-sm"
          >
            Explore Security Technology
          </a>
          <a
            href="/developer-portal"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-[48px] rounded-[10px] border-2 border-[#247780] hover:bg-[#EEF5F6] text-[#247780] font-semibold text-[16px] transition-colors"
          >
            Developer Platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
