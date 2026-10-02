"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Flag } from "lucide-react";

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

const rolloutGates = [
  {
    step: "1",
    title: "Map journeys",
    description: "Identify customer intents, channels, locations, systems and owners.",
    gate: "Gate: Journey scope approved",
  },
  {
    step: "2",
    title: "Map authoritative systems",
    description: "Define sources of truth for customer, communications, commerce and fulfillment.",
    gate: "Gate: System map approved",
  },
  {
    step: "3",
    title: "Define trust boundaries",
    description: "Identity, consent, data minimization, partner and AI rules.",
    gate: "Gate: Control design approved",
  },
  {
    step: "4",
    title: "Integrate & validate",
    description: "Test communication, routing, handoff, failure and return states with synthetic data.",
    gate: "Gate: Acceptance criteria met",
  },
  {
    step: "5",
    title: "Pilot",
    description: "Launch one bounded journey, market or location with observable exception paths.",
    gate: "Gate: Pilot evidence reviewed",
  },
  {
    step: "6",
    title: "Roll out",
    description: "Expand channels, markets and experiences based on approved availability.",
    gate: "Gate: Operational readiness confirmed",
  },
  {
    step: "7",
    title: "Improve",
    description: "Review abandonment, exception, handoff and support patterns.",
    gate: "Gate: Periodic review completed",
  },
];

export default function ImplementationAdoptionSection() {
  return (
    <section id="implementation" className="w-full bg-white py-16 sm:py-20 lg:py-[96px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading, Subtext, Image & CTA Button Below Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.1}
            className="flex flex-col items-start w-full lg:max-w-[480px] shrink-0"
          >
            <span className="font-['Poppins',sans-serif] text-[#1F7A6C] text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">
              Implementation & adoption
            </span>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-[#0F172A] leading-[1.18] tracking-[-0.03em] mb-4">
              Start with one journey. Prove it. Then expand.
            </h2>

            <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[17px] text-[#64748B] leading-[26px] mb-6 font-normal">
              A gated rollout keeps every market, channel and integration grounded in evidence before it scales.
            </p>

            {/* Shopfront Image (Placed directly above the button matching Figma) */}
            <div className="relative w-full h-[240px] sm:h-[320px] rounded-[20px] overflow-hidden mb-6">
              <Image
                src="/customer-and-local-commerce/implementation-shopfront.png"
                alt="Small local shopfront with a bicycle outside"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>

            {/* Discuss Rollout Button */}
            <div>
              <a
                href="#contact-sales"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[6px] bg-[#1F7A6C] hover:bg-[#247780] text-white font-['Poppins',sans-serif] font-semibold text-[14px] transition-colors shadow-sm group"
              >
                <span>Discuss rollout</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 7 Gated Steps as a Connected Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.2}
            className="w-full lg:flex-1 flex flex-col pt-1"
          >
            {rolloutGates.map((gate, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-5 relative">
                {/* Stepper Node: Number Badge & Vertical Connector Line */}
                <div className="flex flex-col items-center shrink-0 self-stretch">
                  <div className="w-9 h-9 rounded-full bg-[#1F7A6C] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] sm:text-[15px] flex items-center justify-center shadow-sm z-10 shrink-0">
                    {gate.step}
                  </div>
                  {idx < rolloutGates.length - 1 && (
                    <div className="w-[1.5px] bg-[#CBD5E1] flex-1 my-1" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex flex-col pb-6 sm:pb-7 flex-1">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#0F172A] mb-1">
                    {gate.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[13.5px] text-[#475569] leading-relaxed mb-2.5 max-w-[560px]">
                    {gate.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[#1F7A6C] font-['Poppins',sans-serif] text-[13px] font-semibold">
                    <Flag className="w-3.5 h-3.5 shrink-0 stroke-[2]" />
                    <span>{gate.gate}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
