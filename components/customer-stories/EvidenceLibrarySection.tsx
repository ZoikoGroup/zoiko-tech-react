"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const contractCards = [
  {
    title: "Story card contract",
    description:
      "Type, factual title, approved customer identity/anonymous descriptor, context, actual technology, qualified outcome and publication/update metadata.",
  },
  {
    title: "Story destination",
    description:
      "Read, watch or case-study action must match a real canonical destination. Publication route was not supplied; none is guessed.",
  },
  {
    title: "Currentness",
    description:
      "Withdrawn stories leave discovery. Review-due visibility depends on policy and cannot remain featured without revalidation.",
  },
];

export default function EvidenceLibrarySection() {
  return (
    <section
      id="library"
      className="w-full text-white py-16 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(131deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
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
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[47px] leading-[1.18] tracking-[-0.015em] text-white mb-4">
            The customer story collection.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9]">
            Proof requires real, current records. A catalog connection is needed to verify and display them.
          </p>
        </motion.div>

        {/* Main Governance / Status Notice Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#83B7BF]/35 pt-8 pb-10 mb-12 sm:mb-14"
        >
          <h3 className="font-poppins font-bold text-2xl sm:text-[28px] text-white leading-tight mb-4">
            Customer story catalog unavailable.
          </h3>
          <p className="font-poppins text-base leading-relaxed text-[#C4D7D9] mb-3 max-w-[860px]">
            No approved public story records accompany this prototype. This does not establish that Zoiko has no customer stories.
          </p>
          <p className="font-poppins text-base leading-relaxed text-[#C4D7D9] mb-8 max-w-[860px]">
            No names, logos, quotes, results or story cards are fabricated. Missing metric fields are omitted instead of displaying zero or placeholder values.
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-white hover:text-[#6FD0F6] font-poppins font-semibold text-base transition-colors group"
            >
              <span>Explore Research</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#technical"
              className="inline-flex items-center gap-2 text-white hover:text-[#6FD0F6] font-poppins font-semibold text-base transition-colors group"
            >
              <span>Review technical and trust handoffs</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* 3 Governance Contract Items (Clean columns with top border matching Figma) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {contractCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-[#83B7BF]/35 pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
            >
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
