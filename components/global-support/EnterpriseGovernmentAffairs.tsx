"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Motion animation variants with typed custom easing
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const enterpriseFeatures = [
  "Licensing, compliance assurance, and product validation",
  "Data sovereignty, procurement processes, and regulatory briefings",
  "National-scale rollouts and digital infrastructure consultation",
  "Custom solution modeling and implementation mapping",
];

export default function EnterpriseGovernmentAffairs() {
  return (
    <section className="w-full bg-[#F0F0F0] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col w-full">
        {/* Two-Column Grid Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Image */}
          <motion.div
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 w-full flex justify-center"
          >
            <div className="relative overflow-hidden">
              <img
                src="/global-support/document.png"
                alt="Enterprise, Public Sector & Government Affairs Team"
                className="w-full h-auto object-cover aspect-[1/1] sm:aspect-[4/3] lg:aspect-[1/1] block"
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="text-[#1D2939] font-inter font-bold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] tracking-[-0.02em] mb-6">
              Enterprise, Public
              <br />
              Sector & Government Affairs
            </h2>

            <p className="text-[#667085] font-inter font-normal text-[15px] leading-[24px] mb-6">
              For institutional engagements, RFPs, and strategic technology
              deployments, our Commercial & Legal Affairs Office provides
              personalized guidance across:
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3.5 mb-8 w-full">
              {enterpriseFeatures.map((feature) => (
                <li key={feature} className="flex flex-row items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white fill-[#56B810] shrink-0 mt-0.5 stroke-[2.2]" />
                  <span className="text-[#667085] font-inter font-normal text-[14px] md:text-[15px] leading-[22px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact Details */}
            <div className="text-[#667085] font-inter font-normal text-[14px] md:text-[15px] leading-[24px] flex flex-col gap-1 mb-6">
              <p>
                <span className="text-[#344054] font-medium">
                  Enterprise Email:
                </span>{" "}
                <a
                  href="mailto:enterprise@zoikotech.com"
                  className="hover:underline text-[#667085]"
                >
                  enterprise@zoikotech.com
                </a>
              </p>
              <p>
                <span className="text-[#344054] font-medium">Phone (USA):</span>{" "}
                800-484-5564
              </p>
            </div>

            {/* Footer Note */}
            <p className="text-[#667085] font-inter font-normal text-[14px] leading-[22px] max-w-[540px]">
              Clients may request secure briefings, digital consultations, or
              onsite discovery sessions in eligible jurisdictions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
