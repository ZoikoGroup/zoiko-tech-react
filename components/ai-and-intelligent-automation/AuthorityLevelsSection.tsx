"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, User } from "lucide-react";

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

export default function AuthorityLevelsSection() {
  const levels = [
    {
      num: "01",
      title: "Assist",
      description: "Retrieve, summarize, draft, classify or explain.",
      humanRole: "Human acts",
      linkText: "Enterprise AI · Domain AI →",
      href: "#patterns",
      bgStyle: "bg-[#247780]/12 border-[#34D4CA]/30",
    },
    {
      num: "02",
      title: "Recommend",
      description: "Surface options, risks, exceptions or next steps.",
      humanRole: "Human decides",
      linkText: "Intelligent Operations →",
      href: "#patterns",
      bgStyle: "bg-[#247780]/21 border-[#34D4CA]/42",
    },
    {
      num: "03",
      title: "Prepare",
      description: "Assemble an action, response, plan or transaction.",
      humanRole: "Human reviews before\nrelease",
      linkText: "AI & Agentic Automation →",
      href: "#patterns",
      bgStyle: "bg-[#247780]/30 border-[#34D4CA]/54",
    },
    {
      num: "04",
      title: "Execute with\napproval",
      description: "Perform the action after explicit authorization.",
      humanRole: "Human releases action",
      linkText: "AI & Agentic Automation →",
      href: "#patterns",
      bgStyle: "bg-[#247780]/39 border-[#34D4CA]/66",
    },
    {
      num: "05",
      title: "Execute within\nbounds",
      description: "Pre-authorized low-risk actions within policy, tool and data limits.",
      humanRole: "Human owns policy,\nmonitoring and revoke",
      linkText: "Agentic Automation · AI\nGovernance →",
      href: "#trust-governance",
      bgStyle: "bg-[#247780]/48 border-[#34D4CA]/78",
    },
  ];

  return (
    <section
      id="authority-levels"
      className="w-full bg-[#001315] py-8 sm:py-10 lg:py-14 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(262deg, rgba(6, 85, 72, 0.39) 78%, rgba(0, 38, 42, 0.39) 100%), #001315",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
        {/* Section Header: Fully responsive typography and line wrapping */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mb-6 sm:mb-7 lg:mb-9"
        >
          <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold tracking-[0.16em] uppercase block mb-2 sm:mb-2.5">
            AI &amp; AUTOMATION PATTERN MAP
          </span>

          {/* Heading: Fluid on mobile, strictly 2 lines on desktop matching Screenshot 2 */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-bold leading-[1.2] sm:leading-[1.18] tracking-[-0.03em] text-white mb-3 sm:mb-4">
            <span className="block md:inline-block md:whitespace-nowrap">
              Five levels of authority. A named human
            </span>{" "}
            <span className="block">owner at every one.</span>
          </h2>

          {/* Subtitle: Responsive formatting */}
          <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] lg:text-[15px] leading-[21px] sm:leading-[23px] lg:leading-[24px] text-[#CBD5E1] max-w-[440px]">
            Not every use case should run the same way.
            <br className="hidden sm:inline" />
            {" "}Choose the authority level each workflow can
            <br className="hidden sm:inline" />
            {" "}support, then grow it with evidence.
          </p>
        </motion.div>

        {/* 5 Cards Grid: items-stretch on mobile/tablet for clean cards, items-end on desktop for natural staircase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch lg:items-end mb-6 lg:mb-8">
          {levels.map((lvl, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.1 + index * 0.05}
              className={`w-full flex flex-col justify-end ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`flex flex-col justify-between p-4 sm:p-[18px] lg:p-[18px_14px] xl:p-[22px_18px] rounded-[14px] border ${lvl.bgStyle} hover:border-[#4DDCAD] transition-all duration-300 shadow-md h-full lg:h-auto`}
              >
                <div>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-extrabold text-[#4DDCAD] block mb-1">
                    {lvl.num}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-white mb-1.5 leading-[23px] sm:leading-[24px] whitespace-pre-line">
                    {lvl.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[12.5px] lg:text-[13px] leading-[18px] sm:leading-[19px] text-[#CBD5E1]">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/15">
                  <div className="flex items-start gap-1.5 mb-1.5 sm:mb-2">
                    <User className="w-3.5 h-3.5 text-[#4DDCAD] shrink-0 mt-0.5" />
                    <span className="font-['Poppins',sans-serif] text-[11px] sm:text-[11.5px] font-semibold text-white leading-tight whitespace-pre-line">
                      {lvl.humanRole}
                    </span>
                  </div>
                  <a
                    href={lvl.href}
                    className="inline-block text-[#4DDCAD] font-['Poppins',sans-serif] text-[11px] sm:text-[11.5px] lg:text-[12px] font-semibold hover:underline whitespace-pre-line leading-tight"
                  >
                    {lvl.linkText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note with Shield: Clean and responsive */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.25}
          className="flex items-start sm:items-center gap-2 sm:gap-2.5 pt-1"
        >
          <ShieldCheck className="w-4 h-4 text-[#4DDCAD] shrink-0 mt-0.5 sm:mt-0" />
          <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[13px] text-[#CBD5E1] leading-relaxed sm:leading-normal">
            Bounded authority with accountable human ownership is the default. No ‘fully autonomous’ or ‘zero-touch’ claims.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
