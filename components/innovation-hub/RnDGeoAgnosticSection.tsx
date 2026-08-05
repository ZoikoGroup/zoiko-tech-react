"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RnDGeoAgnosticSection() {
  return (
    <section className="w-full bg-[#F9F4FF99] text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Content (Right-aligned text on large screens) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 lg:text-right"
          >
            {/* Right-aligned Title with matching line breaks */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-[#111827] leading-[1.18]">
              Geo-Agnostic. Industry- <br className="hidden sm:inline" />
              Responsive.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed ml-auto max-w-xl">
              ZoikoTech&apos;s platforms are developed under a geo-agnostic
              architecture, designed to function seamlessly across legal
              jurisdictions, time zones, data environments, and regulatory
              systems. From ZoikoNex&trade;, our AI-powered telecom billing and
              monetization engine, to ZoikoSuite&trade;, our accounting and
              compliance platform &mdash; every product is adaptable, compliant,
              and immediately operational in the U.S., U.K., E.U., Asia, and the
              Caribbean.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#6E6E73] text-sm sm:text-base font-normal leading-relaxed ml-auto max-w-xl">
              We are committed to helping businesses and public institutions
              digitize their core functions &mdash; without the burden of
              jurisdictional fragmentation or localization delays.
            </p>
          </motion.div>

          {/* Right Column: Overlapping Image Stack (Right-aligned foreground image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end items-center pt-6 lg:pt-0"
          >
            {/* Background Base Card/Image */}
            <div className="relative w-full max-w-[480px] h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/innovation-hub/presentation.png"
                alt="Engineering team presenting on interactive smart screen"
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* Foreground Overlapping Floating Card on the Right Bottom Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-8 -right-2 sm:-right-4 w-[80%] max-w-[380px] h-[200px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl border-3 border-white"
            >
              <img
                src="/innovation-hub/coder.png"
                alt="Digital dashboard interfaces on tablet and laptop"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
