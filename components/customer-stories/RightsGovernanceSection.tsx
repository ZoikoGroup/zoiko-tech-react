"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rightsCards = [
  {
    title: "Names and logos",
    description:
      "Current public-use approval and correct brand asset. Missing approved logo uses permitted text, never scraped or recreated branding.",
    image: "/customer-stories/rights-consent-identity.png",
  },
  {
    title: "Quotes",
    description:
      "Exact approved wording, attribution and context. Edited wording follows customer/legal rules; no paraphrase presented as a quote.",
    image: "/customer-stories/rights-governance-audit.png",
  },
  {
    title: "Photos, video and screenshots",
    description:
      "Rights, approved accessible alternatives, captions/transcripts and redaction. No autoplay or fabricated customer imagery.",
    image: "/customer-stories/rights-multi-tenant.png",
  },
  {
    title: "Architecture and partners",
    description:
      "Customer/product approval, safe abstractions and separately approved partner rights.",
    image: "/customer-stories/rights-cryptographic-proof.png",
  },
  {
    title: "Anonymous stories",
    description:
      "Neutral approved descriptors only. Combined location, scale, technology or dates must not re-identify the customer.",
    image: "/customer-stories/rights-zero-trust.png",
  },
  {
    title: "Withdrawal",
    description:
      "Revoked assets and claims leave cards, detail, search, related proof, metadata and caches promptly.",
    image: "/customer-stories/rights-regulatory-compliance.png",
  },
];

export default function RightsGovernanceSection() {
  return (
    <section
      id="rights"
      className="w-full text-white py-16 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[820px] mb-12 sm:mb-14"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-white mb-4">
            Attribution is permission, not decoration.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9]">
            Customer names, quotations and media are individually rights-gated.
          </p>
        </motion.div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {rightsCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border border-[#83B7BF]/35 rounded-[10px] px-5 sm:px-6 pt-7 pb-9 flex flex-col justify-start bg-transparent hover:border-[#83B7BF]/60 transition-colors"
            >
              {/* Illustration Container */}
              <div className="relative w-full h-[100px] mb-5 flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={280}
                  height={100}
                  className="object-contain max-h-[100px]"
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-white mb-3">
                {card.title}
              </h3>
              <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
