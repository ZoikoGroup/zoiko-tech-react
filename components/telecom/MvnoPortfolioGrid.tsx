"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface PortfolioItem {
  id: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "zoiko-mobile",
    logoSrc: "/telecom/zm.png",
    logoAlt: "Zoiko Mobile Logo",
    description:
      '"The Animal & Music Loving Network," dedicated to animal welfare, creativity, and inclusive connection.',
  },
  {
    id: "go-lite-mobile",
    logoSrc: "/telecom/go.png",
    logoAlt: "Go Lite Mobile Logo",
    description:
      "eco-conscious telecom, contributing to marine life preservation and environmental advocacy.",
  },
  {
    id: "sable-mobile",
    logoSrc: "/telecom/sable.png",
    logoAlt: "Sable Mobile Logo",
    description:
      "tailored for Afro-Caribbean and African American communities, grounded in empowerment and sustainability.",
  },
  {
    id: "raices-mobile",
    logoSrc: "/telecom/raices.png",
    logoAlt: "Raices Mobile Logo",
    description:
      "a cross-border, bilingual network connecting Latino families to their cultural roots and digital future.",
  },
  {
    id: "driver-x-mobile",
    logoSrc: "/telecom/driverxmobile.png",
    logoAlt: "DriverX Mobile Logo",
    description:
      "built for America's rideshare, logistics, and delivery workforce — mobile-first, rugged, and fast.",
  },
  {
    id: "avivo-mobile",
    logoSrc: "/telecom/avivo.png",
    logoAlt: "Avivo Mobile Logo",
    description:
      "designed around wellness, balance, and mindful digital living.",
  },
  {
    id: "item-7",
    logoSrc: "",
    logoAlt: "Mobile Brand Logo",
    description:
      "family-first, safety-forward mobile connectivity with enhanced privacy and parental controls.",
  },
  {
    id: "item-8",
    logoSrc: "",
    logoAlt: "Enterprise Mobile Logo",
    description:
      "security-enhanced mobile solutions built for professionals and users in high-risk or high-trust environments.",
  },
];

// Typed Variants to ensure Framer Motion & TypeScript don't conflict
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MvnoPortfolioGrid() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-12 bg-white text-[#666666] font-sans">
      {/* 3-Column Grid with subtle borders */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 relative"
      >
        {portfolioItems.map((item, index) => {
          const isMiddleCol = index % 3 === 1;
          const isRightCol = index % 3 === 2;

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`flex flex-col items-start px-4 py-2 relative ${
                isMiddleCol || isRightCol
                  ? "md:border-l md:border-gray-100"
                  : ""
              }`}
            >
              {/* Logo Container */}
              <div className="h-16 flex items-center justify-start mb-8">
                {item.logoSrc && (
                  <img
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    className="h-25 w-45 object-contain"
                  />
                )}
              </div>

              {/* Description Text */}
              <p className="text-[18px] leading-relaxed text-[#777777] max-w-xs">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Summary Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 space-y-6 text-[18px] leading-relaxed text-[#272727] max-w-7xl"
      >
        <p>
          Every MVNO in this portfolio is launched, managed, and scaled through
          ZoikoTech’s enterprise telecom stack — providing them with the
          infrastructure, billing intelligence, UX design, and strategic agility
          required to compete at global scale.
        </p>
        <p>
          We don’t just support telecom — we architect the next generation of
          intelligent, inclusive, and ethically-driven mobile networks.
        </p>
      </motion.div>
    </section>
  );
}
