"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay,
    },
  }),
};

type FooterItem = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  items: FooterItem[];
  delay?: number;
  exploreLabel?: string;
  exploreHref?: string;
};

const platforms: FooterItem[] = [
  { label: "Zoiko AI", href: "/zoiko-ai" },
  { label: "ZoikoTime", href: "/zoiko-time" },
  { label: "ZoikoVertex", href: "/zoiko-vertex" },
  { label: "ZoikoNex", href: "/zoiko-nex" },
  { label: "Zoiko HR", href: "/zoiko-hr" },
  { label: "Zoiko Payroll", href: "/zoiko-payroll" },
  { label: "Zoiko Billing", href: "/zoiko-billing" },
  { label: "Zoiko Local", href: "/zoiko-local" },
  { label: "ZoikoMeds", href: "/zoiko-meds" },
  { label: "Zoiko Sema", href: "/zoiko-sema" },
  { label: "Zoiko Rooms", href: "/zoiko-rooms" },
  { label: "ZoikoStream Live", href: "/zoiko-stream-live" },
  { label: "Zoiko Social", href: "/zoiko-social" },
];

const solutions: FooterItem[] = [
  {
    label: "Technology & SaaS",
    href: "/solutions/technology-saas",
  },
  {
    label: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    label: "Workforce Productivity",
    href: "/solutions/workforce-productivity",
  },
  {
    label: "Business Operations",
    href: "/solutions/business-operations",
  },
  {
    label: "Telecom Infrastructure",
    href: "/solutions/telecom-infrastructure",
  },
  {
    label: "Cloud & Developer Infrastructure",
    href: "/solutions/cloud-developer-infrastructure",
  },
  {
    label: "Cybersecurity & Protection",
    href: "/solutions/cybersecurity-protection",
  },
  {
    label: "Identity & Access",
    href: "/solutions/identity-access",
  },
  {
    label: "Regulatory & Compliance",
    href: "/solutions/regulatory-compliance",
  },
  {
    label: "Customer & Local Commerce",
    href: "/solutions/customer-local-commerce",
  },
  {
    label: "Healthcare & AgeTech",
    href: "/solutions/healthcare-agetech",
  },
  {
    label: "Media & Streaming",
    href: "/solutions/media-streaming",
  },
];

const industries: FooterItem[] = [
  {
    label: "Technology & SaaS",
    href: "/industries/technology-saas",
  },
  {
    label: "Telecommunications",
    href: "/industries/telecommunications",
  },
  {
    label: "Financial Services",
    href: "/industries/financial-services",
  },
  {
    label: "Healthcare & Life Sciences",
    href: "/industries/healthcare-life-sciences",
  },
  {
    label: "Media & Entertainment",
    href: "/industries/media-entertainment",
  },
  {
    label: "Retail & Commerce",
    href: "/industries/retail-commerce",
  },
  {
    label: "Travel & Mobility",
    href: "/industries/travel-mobility",
  },
  {
    label: "Real Estate & Property",
    href: "/industries/real-estate-property",
  },
  {
    label: "Professional Services",
    href: "/industries/professional-services",
  },
  {
    label: "Public Sector",
    href: "/industries/public-sector",
  },
  {
    label: "Regulated Industries",
    href: "/industries/regulated-industries",
  },
];

const technology: FooterItem[] = [
  {
    label: "Artificial Intelligence",
    href: "/technology/artificial-intelligence",
  },
  {
    label: "Agentic Systems",
    href: "/technology/agentic-systems",
  },
  {
    label: "Governed Work Orchestration",
    href: "/technology/governed-work-orchestration",
  },
  {
    label: "Cloud Infrastructure",
    href: "/technology/cloud-infrastructure",
  },
  {
    label: "Developer Platform",
    href: "/developer-portal",
  },
  {
    label: "Digital Identity",
    href: "/technology/digital-identity",
  },
  {
    label: "Cybersecurity",
    href: "/technology/cybersecurity",
  },
  {
    label: "Regulatory Technology",
    href: "/technology/regulatory-technology",
  },
  {
    label: "AI Safety & Governance",
    href: "/technology/ai-safety-governance",
  },
  {
    label: "Zoiko Research",
    href: "/research",
  },
  {
    label: "Frontier Technologies",
    href: "/technology/frontier-technologies",
  },
];

const resources: FooterItem[] = [
  { label: "Insights", href: "/insights" },
  { label: "Research", href: "/research" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Guides & Reports", href: "/guides-reports" },
  { label: "Documentation", href: "/documentation" },
  { label: "Developer Resources", href: "/developer-resources" },
  { label: "Trust Center", href: "/trust-center" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Press & Media", href: "/press-and-media" },
];

const company: FooterItem[] = [
  { label: "About Zoiko Tech", href: "/about-us" },
  {
    label: "Leadership & Governance",
    href: "/leadership-and-governance",
  },
  {
    label: "Technology Strategy",
    href: "/technology-strategy",
  },
  {
    label: "Global Presence",
    href: "/global-presence",
  },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
  {
    label: "Sustainability & Impact",
    href: "/sustainability",
  },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Zoiko Group", href: "/zoiko-group" },
];

const developerItems = [
  {
    title: "Developer Platform",
    description: "Entry point for Zoiko developer services",
    href: "/developer-portal",
  },
  {
    title: "Documentation",
    description: "Technical product and integration documentation",
    href: "/documentation",
  },
  {
    title: "API & SDK Docs",
    description: "Authoritative API and SDK references",
    href: "/api-documentation",
  },
  {
    title: "Integrations",
    description: "Supported integration catalog and patterns",
    href: "/integrations",
  },
  {
    title: "Engineering Blog",
    description: "Technical architecture and reliability content",
    href: "/engineering-blog",
  },
];

const trustItems = [
  {
    title: "Trust Center",
    description: "Security, privacy and compliance evidence",
    href: "/trust-center",
  },
  {
    title: "Security",
    description: "Security program and product security information",
    href: "/security",
  },
  {
    title: "Privacy",
    description: "Global privacy framework and notices",
    href: "/privacy-policy",
  },
  {
    title: "Responsible AI",
    description: "AI governance, safety and accountability",
    href: "/responsible-ai",
  },
  {
    title: "Responsible Disclosure",
    description: "Security vulnerability reporting route",
    href: "/responsible-disclosure",
  },
];

const supportItems = [
  {
    title: "Help & Support",
    description: "Human-readable support entry point",
    href: "/support",
  },
  {
    title: "Customer Login",
    description: "Customer account / platform access",
    href: "/customer-login",
  },
  {
    title: "Partner Portal",
    description: "Approved partner access",
    href: "/partner-portal",
  },
  {
    title: "System Status",
    description: "Service health and incident status",
    href: "/status-dashboard",
  },
  {
    title: "Contact Support",
    description: "Support request route",
    href: "/contact-support",
  },
];

const partnerItems = [
  {
    title: "Technology Alliances",
    description: "Strategic technology collaboration",
    href: "/strategy",
  },
  {
    title: "Integration Network",
    description: "Technical ecosystem partnerships",
    href: "/developer-integration",
  },
  {
    title: "Resellers & Channels",
    description: "Commercial routes to market",
    href: "/resellers",
  },
  {
    title: "Suppliers",
    description: "Supplier and procurement information",
    href: "/supplier",
  },
  {
    title: "Partner With ZoikoTech",
    description: "Primary partner inquiry destination",
    href: "/partners",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    Icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "#",
    Icon: FaXTwitter,
  },
  {
    label: "YouTube",
    href: "#",
    Icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "#",
    Icon: FaInstagram,
  },
];

function FooterColumn({
  title,
  items,
  delay = 0,
  exploreLabel,
  exploreHref,
}: FooterColumnProps) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUpVariant}
      className="flex min-w-0 flex-1 flex-col items-start gap-3 overflow-hidden"
    >
      <h3 className="w-full text-xs font-bold uppercase text-zinc-100">
        {title}
      </h3>

      <div className="h-px w-full border-t border-zinc-700" />

      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="w-full text-sm font-normal leading-5 text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
        >
          {item.label}
        </a>
      ))}

      {exploreLabel && (
        <a
          href={exploreHref || "/"}
          className="w-full text-sm font-semibold leading-5 text-zinc-100 transition-colors duration-200 hover:text-teal-400"
        >
          → {exploreLabel}
        </a>
      )}
    </motion.div>
  );
}

function DetailColumn({
  title,
  items,
  delay,
}: {
  title: string;
  items: {
    title: string;
    description: string;
    href: string;
  }[];
  delay: number;
}) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUpVariant}
      className="flex min-w-0 flex-1 flex-col items-start gap-4 overflow-hidden"
    >
      <h3 className="w-full text-xs font-bold uppercase text-zinc-100">
        {title}
      </h3>

      <div className="h-px w-full border-t border-zinc-700" />

      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="flex w-full flex-col items-start gap-1 overflow-hidden"
        >
          <div className="w-full text-sm font-semibold text-zinc-100 transition-colors duration-200 hover:text-teal-400">
            {item.title}
          </div>

          <div className="w-full text-sm font-normal leading-5 text-zinc-400">
            {item.description}
          </div>
        </a>
      ))}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/layout/footer-background.png')",
        }}
      />

      {/* LIGHT OVERLAY - IMAGE IS NOW CLEARLY VISIBLE */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,47,46,0.38) 0%, rgba(4,47,46,0.28) 35%, rgba(0,0,0,0.18) 65%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="relative z-10">
        {/* TOP SECTION */}
        <div className="px-6 pb-16 pt-16 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <FooterColumn
              title="Platforms"
              items={platforms}
              delay={0.05}
              exploreLabel="Explore All Platforms"
              exploreHref="/platforms"
            />

            <FooterColumn
              title="Solutions"
              items={solutions}
              delay={0.1}
              exploreLabel="Explore All Solutions"
              exploreHref="/solutions"
            />

            <FooterColumn
              title="Industries"
              items={industries}
              delay={0.15}
              exploreLabel="Explore All Industries"
              exploreHref="/industries"
            />

            <FooterColumn
              title="Technology"
              items={technology}
              delay={0.2}
              exploreLabel="Explore Our Technology"
              exploreHref="/technology"
            />

            <FooterColumn
              title="Resources"
              items={resources}
              delay={0.25}
              exploreLabel="View All Resources"
              exploreHref="/resources"
            />

            <FooterColumn
              title="Company"
              items={company}
              delay={0.3}
              exploreLabel="Explore Company"
              exploreHref="/company"
            />
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="px-6 pb-16 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <DetailColumn
              title="For Developers"
              items={developerItems}
              delay={0.35}
            />

            <DetailColumn
              title="Trust & Security"
              items={trustItems}
              delay={0.4}
            />

            <DetailColumn
              title="Support & Portals"
              items={supportItems}
              delay={0.45}
            />

            <DetailColumn
              title="Partner With Us"
              items={partnerItems}
              delay={0.5}
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full border-t border-zinc-700" />

        {/* COMPANY + NEWSLETTER */}
        <div className="grid grid-cols-1 gap-14 px-6 py-16 md:px-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:px-14">
          {/* COMPANY INFORMATION */}
          <motion.div
            custom={0.55}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex flex-col items-start gap-5"
          >
            <img
              src="/layout/zoikotech-logo.png"
              alt="ZoikoTech"
              className="h-12 w-auto max-w-[160px] object-contain"
            />

            <div className="text-sm font-bold text-zinc-400">
              INTELLIGENCE. INFRASTRUCTURE. IMPACT.
            </div>

            <p className="max-w-[760px] text-sm font-normal leading-6 text-zinc-100">
              ZoikoTech Inc. is a California-based global technology company
              building intelligent infrastructure, enterprise platforms and
              domain-specific AI for organizations operating across industries,
              jurisdictions and borders.
            </p>

            <div className="text-sm font-normal text-zinc-400">
              A Zoiko Group company
            </div>

            <div className="text-sm font-normal leading-5 text-zinc-400">
              Headquarters: 1401 21st Street, Suite R, Sacramento, CA 95811,
              United States
            </div>

            <div className="text-sm font-normal leading-5 text-zinc-400">
              European Headquarters: 167–169 Great Portland Street, 5th Floor,
              London W1W 5PF, United Kingdom
            </div>

            <a
              href="/global-presence"
              className="text-sm font-semibold text-teal-500 transition-colors duration-200 hover:text-teal-300"
            >
              → Explore Global Locations
            </a>

            <div className="mt-1 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-sm bg-zinc-800 text-zinc-100 transition-colors duration-200 hover:bg-zinc-700 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
            className="flex w-full max-w-[620px] flex-col items-start gap-4 lg:ml-auto"
          >
            <h3 className="text-lg font-bold text-zinc-100">
              Stay informed
            </h3>

            <p className="text-sm font-normal leading-5 text-zinc-400">
              Get Zoiko Tech research, product updates and company news.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-[52px] w-full rounded-sm border border-zinc-700 bg-zinc-800 px-4 text-sm font-normal text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
              />

              <button
                type="submit"
                className="h-[52px] w-full rounded-sm bg-cyan-700 text-sm font-semibold text-zinc-100 transition-colors duration-200 hover:bg-cyan-600"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm font-normal leading-5 text-neutral-400">
              By subscribing, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="underline transition-colors hover:text-zinc-200"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms-of-use"
                className="underline transition-colors hover:text-zinc-200"
              >
                Terms of Use
              </a>
              . We respect your privacy and never share your information.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="border-t border-zinc-700 bg-gray-900 px-6 pb-10 pt-9 md:px-10 lg:px-14">
          <div className="flex flex-col gap-4 text-sm font-normal text-zinc-400">
            <div>
              © 2026 ZoikoTech Inc. All rights reserved.
              <span className="mx-2">·</span>
              ZoikoTech Inc. is a Zoiko Group company.
            </div>

            <div className="leading-5">
              Headquarters: 1401 21st Street, Suite R, Sacramento, CA 95811,
              United States.
              <span className="mx-2">|</span>
              European Headquarters: 167–169 Great Portland Street, 5th Floor,
              London W1W 5PF, United Kingdom.
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-zinc-200"
              >
                Privacy
              </a>

              <span>|</span>

              <a
                href="/terms-of-use"
                className="transition-colors hover:text-zinc-200"
              >
                Terms
              </a>

              <span>|</span>

              <a
                href="/cookies"
                className="transition-colors hover:text-zinc-200"
              >
                Cookies
              </a>

              <span>|</span>

              <a
                href="/accessibility"
                className="transition-colors hover:text-zinc-200"
              >
                Accessibility
              </a>

              <span>|</span>

              <a
                href="/legal"
                className="transition-colors hover:text-zinc-200"
              >
                Legal
              </a>

              <span>|</span>

              <a
                href="/security"
                className="transition-colors hover:text-zinc-200"
              >
                Security
              </a>

              <span>|</span>

              <a
                href="/responsible-disclosure"
                className="transition-colors hover:text-zinc-200"
              >
                Responsible Disclosure
              </a>

              <span>|</span>

              <a
                href="/privacy-choices"
                className="transition-colors hover:text-zinc-200"
              >
                Privacy Choices
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span>United States / English</span>

              <button
                type="button"
                className="transition-colors hover:text-zinc-200"
                onClick={() => {
                  // Connect this to your cookie settings implementation.
                }}
              >
                🍪 Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}