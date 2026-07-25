"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EldercareSection() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center py-16 px-6 sm:px-12 lg:px-20 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            Eldercare Reinvented: <br />
            AI for Aging Populations
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
            Through ZoikoPal™, ZoikoTech launched the world&apos;s first
            AI-powered wellness and financial support platform tailored to
            seniors and caregivers — delivering secure, voice-first tools for
            bill management, oversight, and digital inclusion.
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
            <strong className="font-bold text-[#333333]">Impact:</strong>{" "}
            Increased safety, autonomy, and dignity for aging users — while
            giving caregivers real-time visibility, shared controls, and peace
            of mind in complex support environments.
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
              src="/insights/light.png"
              alt="Caregiver assisting elderly person"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Floating AI Graphic Card */}
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
                src="/insights/ai.png"
                alt="AI Healthcare Medical Interface"
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
