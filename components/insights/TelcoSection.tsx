"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TelcoSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0070BB14] flex items-center justify-center py-16 px-6 sm:px-12 lg:px-20 font-sans text-[#2A2A2A] overflow-hidden">
      {/* Background Decorative Graphic (Geometric Star Pattern) */}
      <div className="absolute left-0 bottom-0 top-0 w-1/2 pointer-events-none opacity-20 flex items-center justify-start -ml-20">
        
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-end text-right space-y-5">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-[1.2] tracking-tight text-[#2B2B2B]"
          >
            Conservation Meets Commerce: <br />
            Telco as a Purpose Engine
          </motion.h2>

          {/* Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#6D6D6D] text-sm sm:text-[15px] leading-relaxed max-w-lg"
          >
            Through the GoLite Mobile brand and Zoiko Web Services™, ZoikoTech
            enabled the first marine-life-focused telecom provider to link
            customer usage directly to conservation impact — blending seamless
            mobile service with mission-driven value.
          </motion.p>

          {/* Impact Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#6D6D6D] text-sm sm:text-[15px] leading-relaxed max-w-lg"
          >
            <strong className="font-bold text-[#333333]">Impact:</strong> Direct
            funding for conservation nonprofits, scalable customer growth among
            ocean-conscious users, and brand loyalty built on measurable
            environmental outcomes.
          </motion.p>
        </div>

        {/* Right Column: Visual Composite */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex justify-center lg:justify-start">
          {/* Main Background Card / Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full aspect-[16/11] rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src="/insights/main.png"
              alt="Customer support team"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Floating Marine Graphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -bottom-10 right-0 sm:-right-4 w-[55%] aspect-[16/11] rounded-xl p-[3px] bg-white shadow-2xl overflow-hidden z-10"
          >
            <div className="relative w-full h-full rounded-[9px] overflow-hidden">
              <Image
                src="/insights/water.png"
                alt="Scuba diver holding Go Mobile device underwater"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}