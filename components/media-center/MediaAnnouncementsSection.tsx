"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MediaAnnouncementsSection() {
  return (
    <section className="w-full bg-[#D9D9D933] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Background Base Card/Image */}
            <div className="relative w-full max-w-[480px] h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/media-center/see.png"
                alt="Executive Presentation"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Foreground Overlapping Floating Card with White Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute -left-2 sm:-left-6 w-[85%] max-w-[500px] h-[350px] sm:h-[270px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              <Image
                src="/media-center/show.png"
                alt="Audience applauding executive speaker"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Typography & Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 pt-6 lg:pt-0"
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#000000] leading-[1.15]">
              Trusted Announcements.
              Strategic Signals.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              Every ZoikoTech press release, update, and public statement is
              designed to reflect institutional clarity and our long-term
              strategic direction. From platform launches and global
              partnerships to regulatory compliance milestones and executive
              appointments, each announcement reinforces our credibility,
              performance, and purpose.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed">
              Our media narratives are engineered to align with our operational
              priorities &mdash; whether that&apos;s expanding ZoikoNex into new
              telecom markets, scaling ZoikoPal across elder care networks, or
              integrating ESG intelligence into ZoikoSuite.
            </p>

            {/* Bold Conclusion Callout */}
            <p className="text-[#1D1D1F] text-sm sm:text-base font-bold leading-relaxed pt-2">
              We do not issue noise. We publish clarity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
