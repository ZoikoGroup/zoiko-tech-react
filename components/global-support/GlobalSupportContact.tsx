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

const supportFeatures = [
  "Platform access, sandbox testing, and user onboarding",
  "API integration, billing inquiries, and real-time provisioning",
  "Jurisdiction-specific compliance queries and best practices",
  "Technical documentation, system diagnostics, and resolution escalation",
];

export default function GlobalSupportContact() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col w-full">
        {/* Main Title & Lead Paragraphs Section */}
        <motion.div
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-[56px]"
        >
          <h1 className="text-[#1D2939] font-inter font-bold text-[36px] md:text-[44px] leading-[44px] md:leading-[52px] tracking-[-0.02em] mb-6">
            Global Support & Contact
          </h1>

          <div className="flex flex-col gap-4 text-[#667085] font-inter font-normal text-[18px] leading-[24px]">
            <p>
              At ZoikoTech, global service excellence is embedded in our
              culture. We are committed to providing responsive, expert-level
              support for every client, partner, and stakeholder — regardless of
              time zone, jurisdiction, or complexity.
            </p>
            <p>
              Our support systems are engineered for scale, security, and
              clarity — ensuring that every inquiry is handled with precision,
              urgency, and professionalism.
            </p>
            <p>
              Whether you're engaging with our AI platforms, deploying our
              telecom infrastructure, or exploring enterprise collaboration,
              ZoikoTech's global support channels ensure you're never far from
              the expertise you need.
            </p>
          </div>
        </motion.div>

        {/* Two-Column Grid Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start w-full">
          {/* Left Column: Text Content */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2 className="text-[#1D2939] font-inter font-bold text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] tracking-[-0.01em] mb-4">
              Customer &<br />
              Technical Support
            </h2>

            <p className="text-[#667085] font-inter font-normal max-w-130 text-[15px] leading-[24px] mb-6">
              ZoikoTech provides frontline assistance across all core platforms
              — including ZoikoNex™, ZoikoAssure™, ZoikoPal™, ZoikoSuite™,
              ZoikoAxis™, BookingOrbit™, and Zoiko Web Services™.
            </p>

            <p className="text-[#667085] font-inter font-normal text-[15px] leading-[24px] mb-4">
              Our Technical Support Division assists with:
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3.5 mb-8 w-full">
              {supportFeatures.map((feature) => (
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
                  Toll-Free (USA):
                </span>{" "}
                800-484-5564
              </p>
              <p>
                <span className="text-[#344054] font-medium">
                  Support Email:
                </span>{" "}
                <a
                  href="mailto:support@zoikotech.com"
                  className="hover:underline text-[#667085]"
                >
                  support@zoikotech.com
                </a>
              </p>
              <p>
                <span className="text-[#344054] font-medium">
                  Support Hours:
                </span>{" "}
                Mondays to Fridays, 8:00 AM – 8:00 PM (Eastern Time)
              </p>
            </div>

            {/* Footer Note */}
            <p className="text-[#667085] font-inter font-normal text-[14px] leading-[22px] max-w-[540px]">
              All tickets are triaged through our intelligent case management
              system and routed to certified domain experts
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative overflow-hidden">
              <img
                src="/global-support/hero.png"
                alt="Customer and Technical Support Team"
                className="w-full h-auto object-cover aspect-[4/5] block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
