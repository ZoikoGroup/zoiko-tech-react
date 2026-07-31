"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
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

export default function ZoikoEnvironmentalResponsibilitySection() {
  return (
    <section className="relative w-full bg-[#0070BB14] py-16 md:py-24 px-6 font-sans text-[#555555]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14"
      >
        {/* Top Centered Header & Introductory Paragraph */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-5xl mx-auto space-y-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]">
            Environmental Responsibility
          </h2>
          <p className="text-[18px] leading-relaxed text-[#272727]">
            We are actively reshaping digital transformation to be
            climate-conscious and ecologically aligned. Our commitment includes
            reducing the environmental footprint of our cloud-based platforms,
            optimizing system efficiency to minimize energy use, and supporting
            initiatives that champion environmental protection.
          </p>
        </motion.div>

        {/* Bottom Split Content (Left Paragraphs, Right Dual Overlapping Images) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between">
          {/* Left Text Column */}
          <div className="w-full lg:w-[50%] order-1 space-y-6 flex flex-col justify-center">
            <motion.p
              variants={itemVariants}
              className="text-[18px] leading-relaxed text-[#272727]"
            >
              <strong className="font-bold text-[#272727]">
                Through our affiliated MVNOs —
              </strong>{" "}
              GoLite Mobile, which donates a portion of its profits to marine
              conservation, and Sable Mobile, which uplifts Afro-Caribbean and
              African American communities with a focus on cultural preservation
              and eco-conscious growth — ZoikoTech amplifies environmental
              awareness through connectivity. Our social platform ZoikoSocial
              promotes wildlife advocacy and responsible digital engagement for
              animal lovers worldwide.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[18px] leading-relaxed text-[#272727]"
            >
              Across our infrastructure, we aim to implement low-carbon
              computing strategies, responsible hardware lifecycle management,
              and smart cloud integrations that support enterprise
              sustainability goals. We are committed to scaling innovation
              without compromising the planet.
            </motion.p>
          </div>

          {/* Right Dual Overlapping Image Composition */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] order-2 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px]">
              {/* Bigger Underwater Image (Right Side) */}
              <div className="absolute top-0 right-0 w-[82%] h-[82%] overflow-hidden rounded-xl shadow-md z-0">
                <img
                  src="/global-vision/water.jpg"
                  alt="Scuba diver underwater holding GoLite Mobile sign next to fish"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Smaller Tech Image with built-in logo (Overlapping on Bottom-Left Side) */}
              <div className="absolute bottom-0 left-0 w-[56%] h-[58%] overflow-hidden rounded-xl border-4 border-white shadow-xl z-10 bg-white">
                <img
                  src="/global-vision/girlogo.png"
                  alt="Woman interacting with digital interface on phone with GoLite Mobile logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
