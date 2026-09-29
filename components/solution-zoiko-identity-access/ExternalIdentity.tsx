"use client";

import React from "react";
import { motion } from "framer-motion";

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

const cardClass =
  "bg-[rgba(255,255,255,0.06)] border border-[rgba(127,208,217,0.35)] rounded-[14px] flex flex-col items-start gap-[6px] p-[20px]";

const cardTitleClass =
  "font-sora font-bold text-[16.8px] leading-[19.32px] text-white";

const cardBodyClass =
  "font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee]";

const cards = [
  {
    title: "External identity",
    lines: ["Partner, customer, contractor or", "guest, with an internal sponsor."],
  },
  {
    title: "Organization boundary",
    lines: ["External company, tenant,", "domain or relationship."],
  },
  {
    title: "Resource scope",
    lines: ["Only approved applications,", "workspaces, APIs or data."],
  },
  {
    title: "Duration & sponsor",
    lines: ["Expiry or review defaults, and an", "accountable internal role."],
  },
  {
    title: "Policy",
    lines: ["Domain, market, data and", "workspace restrictions where", "supported."],
  },
  {
    title: "Offboarding",
    lines: ["Revoke or expire when the", "relationship or purpose ends."],
  },
];

export default function ExternalIdentity() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:px-[130px] lg:py-[96px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[19.9px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[19.9px] w-full"
          >
            <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white max-w-[698px]">
              External and partner access
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
              Temporary access and clear sponsorship by default. External
              access is never permanent unless someone decides it should be.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="grid grid-cols-4 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
          >
            <a
              href="#review-external-access"
              className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Review external access
            </a>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design ============ */}
      <div
        className="flex lg:hidden flex-col items-start px-[24px] py-[46px] sm:px-[38.4px] sm:pt-[60.43px] sm:pb-[61.44px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14.2px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex flex-col items-start gap-[14.2px] w-full"
          >
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[508px]">
              External and partner access
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
              Temporary access and clear sponsorship by default. External
              access is never permanent unless someone decides it should be.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full"
          >
            {cards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>
                  {card.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.25}
          >
            <a
              href="#review-external-access"
              className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
            >
              Review external access
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
