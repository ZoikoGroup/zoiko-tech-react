"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ZoikoESGAndDiversitySection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 font-sans overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto space-y-12 md:space-y-16"
      >
        {/* Top Block: ESG Integration & Global Responsibility */}
        <div className="space-y-6">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]"
          >
            ESG Integration & Global Responsibility
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[18px] leading-relaxed text-[#272727]"
          >
            ZoikoTech aligns with the United Nations Sustainable Development
            Goals (SDGs) and integrates ESG practices into platform
            architecture, client enablement, and internal governance. Our impact
            priorities include:
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-3 pt-1">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                SDG 3: AI-enabled wellness for health and aging
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                SDG 9: Scalable digital infrastructure with ethical oversight
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                SDG 10: Access-driven MVNOs for economic and social inclusion
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                SDG 12: Waste reduction via digitization and automation
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                SDG 13: Climate action through energy-conscious engineering
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[18px] leading-relaxed text-[#272727] pt-2"
          >
            We publish measurable ESG outcomes to reinforce transparency, and
            actively partner with NGOs, policy organizations, and ethical
            investors to extend our impact globally.
          </motion.p>
        </div>

        {/* Bottom Block: Diversity, Equity & Algorithmic Integrity */}
        <div className="space-y-6">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]"
          >
            Diversity, Equity & Algorithmic Integrity
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[18px] leading-relaxed text-[#272727]"
          >
            Diversity at ZoikoTech is not rhetorical — it is institutional. From
            board governance and AI design to hiring, procurement, and product
            deployment, we operate with an equity-first approach.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[18px] leading-relaxed text-[#272727]"
          >
            Our AI models are audited for systemic bias
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-3 pt-1">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                Our platforms are translated, localized, and designed for
                universal access
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                Our leadership pipeline reflects the communities we serve
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#63C313]">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <p className="text-[18px] leading-relaxed text-[#272727]">
                Our supplier engagement processes include ethics and labor
                compliance screening
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <p className="text-[18px] leading-relaxed text-[#272727]">
              We believe the future must be engineered — not just imagined. And
              that future must be fair, inclusive, and intelligent by design. At
              ZoikoTech, sustainability and social impact are the operating
              system — not the plugin. We don’t just build technology for
              profit. We build it to protect the planet, empower the
              underserved, and transform the human experience — responsibly,
              ethically, and at scale.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
