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

// ----------------------------------------------------------------------------
// Animation
// ----------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------
// Shared styles (kept identical to the original markup)
// ----------------------------------------------------------------------------
const linkClass = "hover:text-white hover:underline transition-all";
const headingClass = "text-white font-bold text-[15px] mb-1 tracking-wide";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------
type SimpleLink = { label: string; href: string };
type PlatformLink = { name: string; description: string; href: string };

const discoverLinks: SimpleLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Global Vision & ESG Commitments", href: "/global-vision" },
  { label: "Leadership & Governance", href: "/leadership-and-governance" },
  { label: "Innovation & R&D Hub", href: "/innovation-hub" },
  { label: "Media Center & Announcements", href: "/media-center" },
  { label: "Sustainability & Social Impact", href: "/sustainability" },
];

const platformLinks: PlatformLink[] = [
  {
    name: "ZoikoTime",
    description: "Intelligent time tracking and productivity platform.",
    href: "/zoiko-time",
  },
  {
    name: "ZoikoSuite",
    description: "Unified accounting, HR, and payroll automation.",
    href: "/zoiko-suite",
  },
  {
    name: "ZoikoNex",
    description: "Global telecom billing and revenue engine.",
    href: "/zoiko-nex",
  },
  {
    name: "ZoikoAssure",
    description: "Smart compliance and audit automation.",
    href: "/zoiko-assure",
  },
  {
    name: "ZoikoShield",
    description: "AI-driven cybersecurity and fraud defense.",
    href: "/zoiko-shield",
  },
  {
    name: "ZoikoSocial",
    description: "Social platform for animal lovers and advocates.",
    href: "/zoiko-social",
  },
  {
    name: "ZoikoPal",
    description: "Companion AI for the elderly and emotionally vulnerable.",
    href: "/zoiko-pal",
  },
  {
    name: "BookingOrbit",
    description: "Seamless AI booking for life, travel, and education.",
    href: "/booking-orbit",
  },
  {
    name: "DriverXtra",
    description: "Marketplace and perks for global drivers.",
    href: "/driver-xtra",
  },
];

const industryLinks: SimpleLink[] = [
  { label: "Telecommunications & MVNOs", href: "/telecom" },
  { label: "SaaS & Cloud Enterprises", href: "/sme-saas" },
  { label: "Finance, Banking & Fintech", href: "/fintech" },
  { label: "Legal, Tax & Compliance Firms", href: "/compliance" },
  { label: "Healthcare, Wellness & Elder Care", href: "/healthcare" },
  { label: "NGOs, Conservation & Public Sector", href: "/social" },
];

const partnerLinks: SimpleLink[] = [
  { label: "Strategic & Technology Alliances", href: "#" },
  { label: "Developer & Integration Network", href: "#" },
  { label: "Global Resellers & Channel Partners", href: "#" },
  { label: "Incubation & Innovation Labs", href: "#" },
  { label: "Careers, Internships & Leadership Programs", href: "#" },
];

const insightLinks: SimpleLink[] = [
  { label: "Case Studies & Success Stories", href: "#" },
  { label: "Product Demos & Tutorials", href: "/product-demo" },
  { label: "White Papers & Technical Briefs", href: "/white-papers" },
  { label: "Investor Relations & Disclosures", href: "#" },
  { label: "Analyst Reports & Market Trends", href: "#" },
  { label: "Global Support & Contact", href: "/global-support" },
];

const legalLinks: SimpleLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Global Data Privacy (GDPR, CCPA)", href: "#" },
  { label: "Accessibility Statement", href: "#" },
  { label: "Code of Ethics & Integrity", href: "#" },
  { label: "Supplier Code of Conduct", href: "#" },
  { label: "Anti-Corruption & Whistleblower Policy", href: "#" },
  { label: "Governance & Risk Oversight", href: "#" },
];

const developerLinks: SimpleLink[] = [
  { label: "API & SDK Documentation", href: "#" },
  { label: "Sandbox Access", href: "#" },
  { label: "Developer Portal", href: "#" },
  { label: "Status Dashboard", href: "#" },
  { label: "Engineering Blog", href: "#" },
];

const clientPortalLinks: SimpleLink[] = [
  { label: "Customer Login", href: "#" },
  { label: "Partner Login", href: "#" },
  { label: "Support Ticketing System", href: "#" },
  { label: "System Health & Uptime Monitor", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "X (Twitter)", href: "#", Icon: FaXTwitter },
];

// ----------------------------------------------------------------------------
// Small reusable pieces
// ----------------------------------------------------------------------------

/** A footer column wrapper with the shared fade-up-on-scroll animation. */
function FooterColumn({
  delay,
  className,
  children,
}: {
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUpVariant}
      className={className ?? "flex flex-col space-y-3"}
    >
      {children}
    </motion.div>
  );
}

/** Renders a simple list of text links under a heading. */
function LinkList({ title, links }: { title: string; links: SimpleLink[] }) {
  return (
    <>
      <h3 className={headingClass}>{title}</h3>
      {links.map((link) => (
        <a key={link.label} href={link.href} className={linkClass}>
          {link.label}
        </a>
      ))}
    </>
  );
}

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------
export default function Footer() {
  return (
    <footer className="w-full bg-[#186D7A] text-white/90 text-[13px] leading-relaxed py-16 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 mb-12">
          {/* Column 1: Logo, Bio & Contact */}
          <FooterColumn delay={0.1}>
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
          </FooterColumn>

          {/* Column 2: Discover ZoikoTech */}
          <FooterColumn delay={0.15}>
            <LinkList title="Discover ZoikoTech" links={discoverLinks} />
          </FooterColumn>

          {/* Column 3: Platforms & Solutions */}
          <FooterColumn delay={0.2} className="flex flex-col space-y-2.5">
            <h3 className={headingClass}>Platforms & Solutions</h3>
            {platformLinks.map((platform) => (
              <a key={platform.name} href={platform.href} className={linkClass}>
                <strong className="font-semibold text-white">
                  {platform.name}
                </strong>{" "}
                – {platform.description}
              </a>
            ))}
          </FooterColumn>

          {/* Column 4: Industries We Empower */}
          <FooterColumn delay={0.25}>
            <LinkList title="Industries We Empower" links={industryLinks} />
          </FooterColumn>

          {/* Column 5: Partner With Us */}
          <FooterColumn delay={0.3}>
            <LinkList title="Partner With Us" links={partnerLinks} />
          </FooterColumn>

          {/* Column 6: Insights & Resources */}
          <FooterColumn delay={0.35}>
            <LinkList title="Insights & Resources" links={insightLinks} />
          </FooterColumn>

          {/* Column 7: Legal & Corporate Governance */}
          <FooterColumn delay={0.4}>
            <LinkList title="Legal & Corporate Governance" links={legalLinks} />
          </FooterColumn>

          {/* Column 8: For Developers */}
          <FooterColumn delay={0.45}>
            <LinkList title="For Developers" links={developerLinks} />
          </FooterColumn>

          {/* Column 9: Client Portals & Stay Informed */}
          <FooterColumn
            delay={0.5}
            className="flex flex-col justify-between space-y-8"
          >
            {/* Client Portals Sub-group */}
            <div className="flex flex-col space-y-3">
              <LinkList title="Client Portals" links={clientPortalLinks} />
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
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
}
