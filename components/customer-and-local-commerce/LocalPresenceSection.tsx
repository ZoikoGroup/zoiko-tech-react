"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

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

const marketData = [
  {
    market: "Austin, TX",
    endpoint: "Local number",
    status: "Active",
    statusType: "active",
    target: "Store Support Team",
  },
  {
    market: "Sacramento, CA",
    endpoint: "Local number",
    status: "Active",
    statusType: "active",
    target: "Regional Service Desk",
  },
  {
    market: "London, UK",
    endpoint: "Local number",
    status: "Requires review",
    statusType: "warning",
    target: "Pending approval",
  },
  {
    market: "Singapore",
    endpoint: "Endpoint",
    status: "Not published",
    statusType: "neutral",
    target: "Fallback: Contact Sales",
  },
];

export default function LocalPresenceSection() {
  return (
    <section
      id="local-presence"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-[96px]"
      style={{
        background:
          "linear-gradient(234deg, rgba(6, 85, 72, 0.6) 13%, rgba(0, 38, 42, 0.6) 73%), #00191E",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Full-width Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-10 sm:mb-12"
        >
          <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            LOCAL PRESENCE & REACHABILITY
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.17] tracking-[-0.03em] mb-4">
            Be reachable in every market you serve,
            <br className="hidden sm:inline" />
            and honest about where you are not yet
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#E2E8F0] leading-[28px] max-w-[780px]">
            Local presence means customers can reach the right team, location or workflow through local numbers and routing. Availability varies by market, so the experience shows it explicitly.
          </p>
        </motion.div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Column: Waterfront Image + 2x2 Grid of 4 Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="flex flex-col gap-3"
          >
            {/* Waterfront Image */}
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src="/customer-and-local-commerce/local-waterfront.png"
                alt="Colorful waterfront buildings with shops and cafes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>

            {/* 2x2 Grid of 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="bg-[#002227]/40 border border-[#34D4CA]/20 rounded-[14px] p-5 flex flex-col justify-start">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[15px] sm:text-[16px] mb-1.5">
                  Market / locality
                </h3>
                <p className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] leading-relaxed">
                  Country, region, city or local-area context only where relevant and approved.
                </p>
              </div>

              <div className="bg-[#002227]/40 border border-[#34D4CA]/20 rounded-[14px] p-5 flex flex-col justify-start">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[15px] sm:text-[16px] mb-1.5">
                  Number / endpoint
                </h3>
                <p className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] leading-relaxed">
                  Availability, status, operator constraints and approved usage.
                </p>
              </div>

              <div className="bg-[#002227]/40 border border-[#34D4CA]/20 rounded-[14px] p-5 flex flex-col justify-start">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[15px] sm:text-[16px] mb-1.5">
                  Routing destination
                </h3>
                <p className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] leading-relaxed">
                  Team, location, workflow or endpoint at the product-supported level.
                </p>
              </div>

              <div className="bg-[#002227]/40 border border-[#34D4CA]/20 rounded-[14px] p-5 flex flex-col justify-start">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[15px] sm:text-[16px] mb-1.5">
                  Fallback state
                </h3>
                <p className="font-['Poppins',sans-serif] text-[13px] text-[#CBD5E1] leading-relaxed">
                  An alternate contact or review path when local availability is not published.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Local Presence Panel Card + What Local Means Here + CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.3}
            className="flex flex-col gap-5"
          >
            {/* Local Presence Panel White Card */}
            <div className="w-full bg-white rounded-[14px] p-6 shadow-[0px_12px_32px_0px_rgba(15,23,42,0.14)] text-[#0F172A]">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0] mb-4">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] sm:text-[16px] text-[#0F172A]">
                  Local presence panel
                </span>
                <span className="font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.08em] uppercase text-[#64748B]">
                  SPECIMEN · SYNTHETIC DATA
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[13px] min-w-[480px]">
                  <thead>
                    <tr className="text-[#64748B] text-[11px] font-medium uppercase tracking-wider">
                      <th className="pb-3 pr-3 font-medium">MARKET</th>
                      <th className="pb-3 px-3 font-medium">ENDPOINT</th>
                      <th className="pb-3 px-3 font-medium">STATUS</th>
                      <th className="pb-3 pl-3 font-medium">ROUTING TARGET</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {marketData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 pr-3 font-['Poppins',sans-serif] font-semibold text-[#0F172A]">
                          {row.market}
                        </td>
                        <td className="py-3.5 px-3 font-['Poppins',sans-serif] text-[#334155]">
                          {row.endpoint}
                        </td>
                        <td className="py-3.5 px-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                              row.statusType === "active"
                                ? "bg-[#E6F4EA] text-[#137333]"
                                : row.statusType === "warning"
                                ? "bg-[#FEF3C7] text-[#B45309]"
                                : "bg-[#E2E8F0] text-[#475569]"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                row.statusType === "active"
                                  ? "bg-[#137333]"
                                  : row.statusType === "warning"
                                  ? "bg-[#B45309]"
                                  : "bg-[#475569]"
                              }`}
                            />
                            <span>{row.status}</span>
                          </span>
                        </td>
                        <td className="py-3.5 pl-3 font-['Poppins',sans-serif] text-[#334155]">
                          {row.target}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Warning Footnote */}
              <div className="flex items-start gap-2 pt-3 border-t border-[#E2E8F0]">
                <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 stroke-[1.75]" />
                <p className="font-['Poppins',sans-serif] text-[11.5px] sm:text-[12px] text-[#64748B] leading-relaxed">
                  Where local availability is not published, customers are offered an alternate contact path. Coverage is never assumed.
                </p>
              </div>
            </div>

            {/* What Local Means Here Box */}
            <div className="p-5 sm:p-6 rounded-[14px] bg-[#00191E]/60 border border-[#34D4CA]/50">
              <span className="block font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] font-semibold tracking-[0.16em] uppercase mb-2">
                WHAT ‘LOCAL’ MEANS HERE
              </span>
              <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[13.5px] text-[#CBD5E1] leading-relaxed">
                Local is grounded in customer communications and local presence through Zoiko Local. Maps listings, local SEO, merchant discovery, reviews, reservations, POS and marketplace functions are not part of this solution unless a separate approved product provides them.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-1">
              <a
                href="#marketing-intelligence"
                className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#4DDCAD] hover:text-white transition-colors group"
              >
                <span>Explore local presence</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
