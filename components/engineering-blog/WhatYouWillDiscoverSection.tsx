"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatYouWillDiscoverSection() {
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

  const features = [
    {
      iconSrc: "/engineering-blog/1.png",
      title: "Scalable Platform Architecture",
      description:
        "In-depth explorations of our microservice architectures, multi-tenant SaaS environments, and elastic cloud deployments \u2014 including deep dives into ZoikoNex\u2122, ZoikoSuite\u2122, and ZoikoPal\u2122.",
    },
    {
      iconSrc: "/engineering-blog/2.png",
      title: "AI, ML & Responsible Innovation",
      description:
        "How ZoikoTech implements explainable AI in ZoikoPal\u2122, trains ethical models for ZoikoTime\u2122, and uses real-time data to drive personalization and wellness with integrity.",
    },
    {
      iconSrc: "/engineering-blog/3.png",
      title: "Telecom Infrastructure & MVNO Engineering",
      description:
        "Behind the curtain of ZoikoNex\u2122 \u2014 our global telecom billing platform powering Zoiko Mobile, Sable Mobile, GoLite Mobile, DriverX Mobile, Avivo Mobile, HavenZ Mobile, and EverGuard Mobile \u2014 including eSIM activation, mediation, and revenue assurance pipelines.",
    },
    {
      iconSrc: "/engineering-blog/4.png",
      title: "Security, Privacy & Compliance",
      description:
        "Our zero-trust approach, consent management frameworks, encryption strategies, and jurisdiction-specific governance tooling (GDPR, CCPA, HIPAA, FCC, and beyond).",
    },
    {
      iconSrc: "/engineering-blog/5.png",
      title: "DevOps, Observability & Resilience Engineering",
      description:
        "Our live deployment and rollback strategies, container orchestration, chaos testing, AI-driven anomaly detection, and the uptime disciplines behind our 99.99% SLAs.",
    },
    {
      iconSrc: "/engineering-blog/6.png",
      title: "Product Design & Accessibility Engineering",
      description:
        "How we fuse accessibility standards, inclusive design, and cross-cultural UI/UX into platforms like BookingOrbit\u2122, ZoikoPal\u2122, and DriverXtra \u2014 so that intelligent technology works for everyone.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#1D1D1F] pb-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {/* Centered Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#111827] text-center leading-tight"
          >
            What You&apos;ll Discover
          </motion.h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-left">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-start space-y-4"
              >
                {/* Icon Image */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
