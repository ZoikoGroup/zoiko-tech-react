"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

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

export default function Footer() {
  return (
    <footer className="w-full bg-[#186D7A] text-white/90 text-[13px] leading-relaxed py-16 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 mb-12">
          {/* Column 1: Logo, Bio & Contact */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-4"
          >
            {/* Logo placeholder */}
            <div className="mb-2">
              <img
                src="/logo.png"
                alt="ZoikoTech Logo"
                className="h-10 w-auto max-w-[180px] object-contain"
              />
            </div>

            <p className="text-white/80 leading-relaxed text-[13px]">
              Engineering the Future. Across Borders. At Scale. ZoikoTech Inc.
              is a California-headquartered global technology innovator,
              delivering enterprise SaaS, AI-powered platforms, and intelligent
              infrastructure for businesses and governments worldwide.
            </p>

            <div className="pt-2 space-y-2 text-white/90 font-medium">
              <a
                href="mailto:support@zoikotech.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 shrink-0 text-white/80" />
                <span>support@zoikotech.com</span>
              </a>
              <a
                href="tel:+18004845564"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 shrink-0 text-white/80" />
                <span>+1 (800) 484-5564</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Discover ZoikoTech */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              Discover ZoikoTech
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Global Vision & ESG Commitments
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Leadership & Governance
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Innovation & R&D Hub
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Media Center & Announcements
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Sustainability & Social Impact
            </a>
          </motion.div>

          {/* Column 3: Platforms & Solutions */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-2.5"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              Platforms & Solutions
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoTime</strong> –
              Intelligent time tracking and productivity platform.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoSuite</strong> –
              Unified accounting, HR, and payroll automation.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoNex</strong> –
              Global telecom billing and revenue engine.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoAssure</strong>{" "}
              – Smart compliance and audit automation.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoShield</strong>{" "}
              – AI-driven cybersecurity and fraud defense.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoSocial</strong>{" "}
              – Social platform for animal lovers and advocates.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">ZoikoPal</strong> –
              Companion AI for the elderly and emotionally vulnerable.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">BookingOrbit</strong>{" "}
              – Seamless AI booking for life, travel, and education.
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              <strong className="font-semibold text-white">DriverXtra</strong> –
              Marketplace and perks for global drivers.
            </a>
          </motion.div>

          {/* Column 4: Industries We Empower */}
          <motion.div
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              Industries We Empower
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Telecommunications & MVNOs
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              SaaS & Cloud Enterprises
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Finance, Banking & Fintech
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Legal, Tax & Compliance Firms
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Healthcare, Wellness & Elder Care
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              NGOs, Conservation & Public Sector
            </a>
          </motion.div>

          {/* Column 5: Partner With Us */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              Partner With Us
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Strategic & Technology Alliances
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Developer & Integration Network
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Global Resellers & Channel Partners
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Incubation & Innovation Labs
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Careers, Internships & Leadership Programs
            </a>
          </motion.div>

          {/* Column 6: Insights & Resources */}
          <motion.div
            custom={0.35}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              Insights & Resources
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Case Studies & Success Stories
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Product Demos & Tutorials
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              White Papers & Technical Briefs
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Investor Relations & Disclosures
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Analyst Reports & Market Trends
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Global Support & Contact
            </a>
          </motion.div>

          {/* Column 7: Legal & Corporate Governance */}
          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              Legal & Corporate Governance
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Global Data Privacy (GDPR, CCPA)
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Accessibility Statement
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Code of Ethics & Integrity
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Supplier Code of Conduct
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Anti-Corruption & Whistleblower Policy
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Governance & Risk Oversight
            </a>
          </motion.div>

          {/* Column 8: For Developers */}
          <motion.div
            custom={0.45}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
              For Developers
            </h3>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              API & SDK Documentation
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Sandbox Access
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Developer Portal
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Status Dashboard
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition-all"
            >
              Engineering Blog
            </a>
          </motion.div>

          {/* Column 9: Client Portals & Stay Informed */}
          <motion.div
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col justify-between space-y-8"
          >
            {/* Client Portals Sub-group */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-white font-bold text-[15px] mb-1 tracking-wide">
                Client Portals
              </h3>
              <a
                href="#"
                className="hover:text-white hover:underline transition-all"
              >
                Customer Login
              </a>
              <a
                href="#"
                className="hover:text-white hover:underline transition-all"
              >
                Partner Login
              </a>
              <a
                href="#"
                className="hover:text-white hover:underline transition-all"
              >
                Support Ticketing System
              </a>
              <a
                href="#"
                className="hover:text-white hover:underline transition-all"
              >
                System Health & Uptime Monitor
              </a>
            </div>

            {/* Stay Informed Newsletter Input & Socials */}
            <div className="flex flex-col space-y-3 pt-2">
              <h3 className="text-white font-bold text-[15px] tracking-wide">
                Stay Informed
              </h3>
              <p className="text-[12px] text-white/80 leading-normal">
                Join our global tech & innovation community. Get exclusive
                updates, early releases, and strategic insights.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center w-full mt-2"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white text-gray-800 placeholder-gray-400 px-3.5 py-2.5 text-[13px] rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-300"
                />
                <button
                  type="submit"
                  className="bg-[#00838F] hover:bg-[#006064] text-white px-3.5 py-2.5 rounded-r-md transition-colors duration-200 flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-3">
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>

    
  );
}
