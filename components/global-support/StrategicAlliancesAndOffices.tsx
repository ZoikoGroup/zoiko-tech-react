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

const allianceFeatures = [
  "API integrations and data partnerships",
  "MVNO enablement using ZoikoAxis™ and ZoikoNex™",
  "AI innovation across regulated and emerging markets",
  "Ecosystem inclusion within the Zoiko Group platform portfolio",
];

const officeLocations = [
  "Sacramento, California",
  "Austin, Texas",
  "Albany, New York",
  "Dover, Delaware",
  "Orlando, Florida",
  "Springfield, Illinois",
];

export default function StrategicAlliancesAndOffices() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col w-full">
        {/* Top Section: Strategic Alliances & Technology Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full mb-20">
          {/* Left Column: Text Content */}
          <motion.div
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2 className="text-[#1D2939] font-inter font-bold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] tracking-[-0.02em] mb-4">
              Strategic Alliances &<br />
              Technology Ecosystem
            </h2>

            <p className="text-[#667085] font-inter font-normal text-[15px] leading-[24px] mb-6">
              ZoikoTech partners with MVNOs, sovereign digital programs,
              ESG-driven fintechs, NGOs, and multilateral institutions to
              co-create next-generation platforms.
            </p>

            <p className="text-[#667085] font-inter font-normal text-[15px] leading-[24px] mb-4">
              If you're exploring:
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3.5 mb-8 w-full">
              {allianceFeatures.map((feature) => (
                <li key={feature} className="flex flex-row items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white fill-[#56B810] shrink-0 mt-0.5 stroke-[2.2]" />
                  <span className="text-[#667085] font-inter font-normal text-[14px] md:text-[15px] leading-[22px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact Details */}
            <div className="text-[#667085] font-inter font-normal text-[14px] md:text-[15px] leading-[24px] flex flex-col gap-1">
              <p>
                Please contact:{" "}
                <a
                  href="mailto:partnerships@zoikotech.com"
                  className="hover:underline text-[#667085]"
                >
                  partnerships@zoikotech.com
                </a>
              </p>
              <p>
                We offer structured partnership onboarding and co-branding for
                strategic collaborators.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative overflow-hidden">
              <img
                src="/global-support/strategy.png"
                alt="Strategic Alliances & Technology Ecosystem Team"
                className="w-full h-auto object-cover aspect-[4/5] block"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Office Locations */}
        <motion.div
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col items-start w-full"
        >
          <h2 className="text-[#1D2939] font-inter font-bold text-[32px] md:text-[36px] leading-[40px] md:leading-[44px] tracking-[-0.02em] mb-4">
            Office Locations
          </h2>

          <p className="text-[#667085] font-inter font-normal text-[15px] leading-[24px] mb-6">
            ZoikoTech maintains U.S.-based operational and executive
            coordination offices in:
          </p>

          {/* Office List */}
          <ul className="flex flex-col gap-2 mb-8 text-[#667085] font-inter font-normal text-[15px] leading-[24px]">
            {officeLocations.map((location) => (
              <li key={location}>- {location}</li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 text-[#667085] font-inter font-normal text-[17.5px] leading-[24px]">
            <p>
              All visits are by appointment only. To schedule an executive
              meeting or platform demonstration, please reach out via email or
              complete our Enterprise Contact Form.
            </p>
            <p>
              Secure, encrypted communications are available for clients
              requiring jurisdiction-specific data protection, legal oversight,
              or compliance verification protocols.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
