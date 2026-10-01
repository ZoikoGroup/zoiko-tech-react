"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
  ShoppingBag,
  Route,
  Plug,
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

const intentCards = [
  {
    title: "Improve customer communications",
    description: "“Connect calling, routing and approved customer communication channels.”",
    image: "/customer-and-local-commerce/router-smartphone.png",
    icon: Phone,
    link: "#customer-communications",
  },
  {
    title: "Strengthen local presence",
    description: "“Make customer contactability and local communication context clearer across markets.”",
    image: "/customer-and-local-commerce/router-waterfront.png",
    icon: MapPin,
    link: "#local-presence",
  },
  {
    title: "Improve marketing operations",
    description: "“Use governed marketing intelligence and repeatable operational workflows.”",
    image: "/customer-and-local-commerce/router-analytics.png",
    icon: Sparkles,
    link: "#marketing-intelligence",
  },
  {
    title: "Connect commerce journeys",
    description: "“Link discovery and customer intent to the systems that complete the transaction or service action.”",
    image: "/customer-and-local-commerce/router-market.png",
    icon: ShoppingBag,
    link: "#commerce-journeys",
  },
  {
    title: "Build cross-domain experiences",
    description: "“Coordinate customer journeys spanning travel, health, education, finance, mobility or connectivity where approved.”",
    image: "/customer-and-local-commerce/router-travel.png",
    icon: Route,
    link: "#life-orchestration",
  },
  {
    title: "Integrate experience systems",
    description: "“Connect customer-facing experiences through APIs, identity, data and events.”",
    image: "/customer-and-local-commerce/router-orchestration.png",
    icon: Plug,
    link: "#integration-developer",
  },
];

export default function IntentRouterSection() {
  return (
    <section id="intent-router" className="w-full bg-white py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col items-start mb-12 sm:mb-14"
        >
          <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
            EXPERIENCE INTENT ROUTER
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.17] tracking-[-0.03em] mb-4 max-w-[850px]">
            What do you need your customer experience to do?
          </h2>

          <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#64748B] leading-[28px] max-w-[820px]">
            Start from the outcome you are trying to improve. Each path routes to the relevant section, platform evidence and specialist team.
          </p>
        </motion.div>

        {/* 3x2 Grid Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {intentCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <a
                key={idx}
                href={card.link}
                className="group relative flex flex-col justify-between bg-white border border-[#E2E8F0] rounded-[14px] overflow-hidden shadow-[0px_6px_20px_0px_rgba(15,23,42,0.06)] hover:shadow-[0px_10px_28px_0px_rgba(15,23,42,0.12)] hover:border-[#1F7A6C]/40 transition-all duration-300 min-h-[364px]"
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative w-full h-[168px] overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    />

                    {/* Floating Teal Icon Badge Overlapping Image Bottom */}
                    <div className="absolute left-5 -bottom-5.5 z-10 w-[44px] h-[44px] rounded-[10px] bg-[#1F7A6C] border-2 border-white flex items-center justify-center shadow-md group-hover:bg-[#247780] transition-colors">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Card Content with top padding to accommodate overlapping badge */}
                  <div className="px-6 pt-9 pb-3">
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] font-bold text-[#0F172A] leading-[26px] tracking-[-0.01em] mb-2.5 group-hover:text-[#1F7A6C] transition-colors">
                      {card.title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] text-[14px] text-[#334155] leading-[22px] font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[14px] font-semibold text-[#1F7A6C] group-hover:text-[#247780] transition-colors">
                    <span>Choose path</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
