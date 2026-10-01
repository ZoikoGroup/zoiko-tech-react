"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Check } from "lucide-react";

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

const failureModes = [
  {
    failure: "Communication channels are disconnected",
    response: "One customer and interaction context, with channel-specific boundaries.",
  },
  {
    failure: "Local availability is unclear",
    response: "Market, number and service availability states instead of assumed coverage.",
  },
  {
    failure: "Marketing work is separated from operations",
    response: "Governed marketing operations connected to approved journeys and handoffs.",
  },
  {
    failure: "Commerce action is disconnected from context",
    response: "Downstream transaction and fulfillment systems shown explicitly, never hidden.",
  },
  {
    failure: "Customer intent is lost between teams",
    response: "A clear request, handoff, owner and status model.",
  },
  {
    failure: "Consent and identity vary by channel",
    response: "Purpose, consent, identity and data access made visible.",
  },
  {
    failure: "Exceptions are handled outside the journey",
    response: "Blocked, unavailable, needs-review and failed-handoff states built in.",
  },
];

export default function WhyFragmentedSection() {
  return (
    <section
      id="why-fragmented"
      className="relative w-full overflow-hidden text-white py-16 sm:py-20 lg:py-[96px]"
      style={{
        background:
          "linear-gradient(252deg, rgba(6, 85, 72, 0.6) 54%, rgba(0, 38, 42, 0.6) 87%), #001315",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading, Context & Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[500px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase mb-4">
              WHY CUSTOMER EXPERIENCES FRAGMENT
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18] tracking-[-0.03em] mb-5">
              Customers see one brand. Behind it sit disconnected channels, data and owners.
            </h2>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-white/80 leading-[26px] mb-8 font-normal">
              Most experience problems are handoff problems. We design the journey so every channel, team and system knows who owns the next step.
            </p>

            {/* Two Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="relative h-[220px] sm:h-[280px] rounded-[16px] overflow-hidden">
                <Image
                  src="/customer-and-local-commerce/silos-street.png"
                  alt="Narrow street lined with local shops"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 260px"
                />
              </div>
              <div className="relative h-[220px] sm:h-[280px] rounded-[16px] overflow-hidden">
                <Image
                  src="/customer-and-local-commerce/silos-bicycle.png"
                  alt="Bicycle parked outside a small shopfront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 260px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Failure Mode vs Architecture Table (No outer card/background) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1"
          >
            {/* Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.35fr] gap-4 sm:gap-8 pb-3 border-b border-white/15">
              <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase">
                FAILURE MODE
              </span>
              <span className="font-['Poppins',sans-serif] text-[#4DDCAD] text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase">
                HOW THE PAGE&apos;S ARCHITECTURE RESPONDS
              </span>
            </div>

            {/* Rows */}
            <div className="flex flex-col">
              {failureModes.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_1.35fr] gap-3 sm:gap-8 py-4 sm:py-[18px] border-b border-white/10 items-start"
                >
                  {/* Left: Failure Mode with Warning Triangle */}
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-[16px] h-[16px] text-white/80 shrink-0 mt-0.5 stroke-[1.75]" />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14.5px] sm:text-[15.5px] leading-snug text-white">
                      {item.failure}
                    </span>
                  </div>

                  {/* Right: Architecture Response with Clean Checkmark */}
                  <div className="flex items-start gap-2.5">
                    <Check className="w-[15px] h-[15px] text-[#34D4CA] shrink-0 mt-1 stroke-[2.2]" />
                    <span className="font-['Poppins',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-relaxed text-white/80">
                      {item.response}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Link: Continue to the architecture */}
            <div className="pt-6">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[14px] sm:text-[15px] font-semibold text-[#34D4CA] hover:text-white transition-colors group"
              >
                <span>Continue to the architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
