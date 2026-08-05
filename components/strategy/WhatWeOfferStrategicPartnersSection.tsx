"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatWeOfferStrategicPartnersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  const benefits = [
    <>
      Access to our global GTM infrastructure across telecom, medtech, fintech, and compliance
    </>,
    <>
      Collaborative opportunities in co-branded solution development, API integrations, and white-label licensing
    </>,
    <>
      Early access to product roadmaps, beta environments, and sandbox testing for ZoikoPal&trade;, ZoikoAssure&trade;, and BookingOrbit&trade;
    </>,
    <>
      Participation in joint research initiatives, regulatory pilots, and public sector tenders
    </>,
    <>
      Invitations to ZoikoTech-hosted executive roundtables, partner councils, and strategic ecosystem events
    </>,
    <>
      Tiered benefits including joint marketing, revenue share options, and preferred technical support
    </>,
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Top Block: 2-Column Feature Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Container - Left Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full flex justify-center lg:justify-start lg:pr-4"
            >
              <div className="relative w-full overflow-hidden rounded-[8px]">
                <img
                  src="/strategy/3.png"
                  alt="Business team shaking hands and finalizing strategic partnership in modern office"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </motion.div>

            {/* Text Content Block - Right Side */}
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-[2.25rem] font-bold tracking-tight text-[#111827] leading-tight"
                >
                  What We Offer <br />
                  Our Strategic Partners
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-[#6B7280] text-sm sm:text-base font-normal leading-relaxed"
                >
                  As a ZoikoTech alliance partner, you gain:
                </motion.p>
              </div>

              {/* Checklist Items */}
              <div className="space-y-3.5 pt-1">
                {benefits.map((text, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="#56B810" />
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Callout Block */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 pt-6 border-t border-[#0070BB20] text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Let&rsquo;s Build the Future &mdash; Together
            </h3>

            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-4xl">
              Whether you&rsquo;re a hyperscale tech provider, regional infrastructure enabler, or regulatory innovator &mdash; ZoikoTech invites you to join a partnership ecosystem grounded in trust, global scalability, and transformative ambition.
            </p>

            <div className="pt-2 text-sm sm:text-base text-[#6B7280] space-y-1">
              <p className="font-medium text-[#374151]">For partnership inquiries, contact:</p>
              <p>Email: <a href="mailto:partnerships@zoikotech.com" className="text-[#0070BB] hover:underline">partnerships@zoikotech.com</a></p>
              <p>Phone (Toll-Free USA): <span className="text-[#374151]">800-484-5564</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}