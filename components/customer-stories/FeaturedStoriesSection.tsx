"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeaturedStoriesSection() {
  return (
    <section
      id="featured"
      className="w-full text-white py-16 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(143deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
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
            Featured proof follows approval.
          </h2>
          <p className="font-poppins text-base sm:text-[17px] leading-relaxed text-[#C4D7D9]">
            At most one current, eligible story. Never a rotating testimonial carousel.
          </p>
        </motion.div>

        {/* 2-Column Grid Matching Figma Spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11">
          {/* Item 1: Eligibility (Col 1, Row 1) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-t border-[#83B7BF]/35 pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
          >
            <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-white mb-3">
              Eligibility
            </h3>
            <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9] max-w-[550px]">
              Live, rights-cleared, claim-cleared, reviewed and explicitly selected for featuring.
            </p>
          </motion.div>

          {/* Item 2: Proof context (Col 2, Row 1) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t border-[#83B7BF]/35 pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
          >
            <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-white mb-3">
              Proof context
            </h3>
            <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9] max-w-[550px]">
              Story type, approved identity or descriptor, challenge, scoped outcome and currentness.
            </p>
          </motion.div>

          {/* Item 3: Current prototype (Col 1, Row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-[#83B7BF]/35 pt-6 pb-9 sm:pb-10 flex flex-col justify-start"
          >
            <h3 className="font-poppins font-bold text-xl sm:text-[21px] text-white mb-3">
              Current prototype
            </h3>
            <p className="font-poppins text-sm sm:text-[15px] leading-[25.5px] text-[#C4D7D9] max-w-[550px]">
              No eligible story was supplied. The featured story is omitted, with no empty promotional shell or substitute customer imagery.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
