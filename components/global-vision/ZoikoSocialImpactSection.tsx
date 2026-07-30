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

export default function ZoikoSocialImpactSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 font-sans text-[#555555]">
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
          className="text-center max-w-6xl mx-auto space-y-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a1a1a]">
            Social Impact
          </h2>
          <p className="text-[18px] leading-relaxed text-[#272727]">
            ZoikoTech&apos;s platforms are designed to solve real-world problems
            for underserved, aging, and multicultural populations. ZoikoPal uses
            AI to support the emotional and cognitive needs of older adults,
            promoting independent living and dignity at scale. ZoikoTime helps
            workers and enterprises across the globe optimize productivity while
            respecting boundaries and well-being.
          </p>
        </motion.div>

        {/* Bottom Split Content (Left Dual Overlapping Images, Right Paragraphs) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between">
          {/* Left Dual Overlapping Image Composition */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] order-2 lg:order-1 flex items-center justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px]">
              {/* Bigger Worker/Tech Image (Top-Right Side) */}
              <div className="absolute top-0 right-0 w-[82%] h-[82%] overflow-hidden rounded-xl shadow-md z-0">
                <img
                  src="/global-vision/worker.jpg"
                  alt="Worker in hard hat surrounded by digital binary data code"
                  className="w-full h-full object-cover object-center -scale-x-100"
                />
              </div>

              {/* Smaller Woman Image with Raíces Mobile logo built-in (Bottom-Left Side) */}
              <div className="absolute bottom-0 left-0 w-[58%] h-[60%] overflow-hidden rounded-xl border-4 border-white shadow-xl z-10 bg-white">
                <img
                  src="/global-vision/woman.png"
                  alt="Smiling woman using smartphone with Raíces Mobile logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Text Column */}
          <div className="w-full lg:w-[50%] order-1 lg:order-2 space-y-6 flex flex-col justify-center">
            <motion.p
              variants={itemVariants}
              className="text-[18px] leading-relaxed text-[#272727]"
            >
              We proudly serve diverse MVNO brands like Raíces Mobile, which
              celebrates Hispanic culture and identity in the U.S., and DriverX
              Mobile, tailored to support the needs of America&apos;s
              professional driver workforce. Inclusion is engineered into our
              products — not as an afterthought, but as a fundamental design
              principle.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[18px] leading-relaxed text-[#272727]"
            >
              We champion diverse hiring, equitable access to technology, and
              the responsible use of AI that respects human rights, context, and
              cultural integrity.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
