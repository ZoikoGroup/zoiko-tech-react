"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type TechnologyMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type TechnologyItemProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  onLinkClick: () => void;
};

/* =========================
   ARROW
========================= */

function Arrow() {
  return (
    <span className="relative mt-[2px] size-4 shrink-0 overflow-hidden">
      <span className="absolute left-[5px] top-[4px] block h-[7px] w-[7px] rotate-[-45deg] border-r-[1.5px] border-b-[1.5px] border-zinc-200" />
    </span>
  );
}

/* =========================
   TECHNOLOGY ITEM
========================= */

function TechnologyItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: TechnologyItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group flex w-full min-w-0 items-start gap-2.5"
    >
      {/* Icon */}
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-700">
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className="size-4 object-contain"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 overflow-hidden">
        {/* Title + Arrow */}
        <div className="flex min-w-0 w-full items-center justify-between gap-2">
          <span
            className={`${plusJakarta.className} min-w-0 flex-1 text-[14px] font-bold leading-4 text-white transition-colors duration-150 group-hover:text-teal-200`}
          >
            {title}
          </span>

          <Arrow />
        </div>

        {/* Description */}
        <p
          className={`${poppins.className} mt-[3px] w-full text-[12px] font-normal leading-4 text-gray-300`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

/* =========================
   CATEGORY TITLE
========================= */

function CategoryTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${poppins.className} w-full shrink-0 text-[14px] font-bold uppercase leading-5 text-white`}
    >
      {children}
    </div>
  );
}

/* =========================
   AI & INFRASTRUCTURE
========================= */

const aiInfrastructure = [
  {
    title: "Artificial Intelligence & Agentic Systems",
    description:
      "Domain-specific AI, governed execution and orchestration",
    href: "#",
    icon:
      "/technologymegamenu/artificial-intelligence-agentic-systems.png",
  },
  {
    title: "Cloud & Digital Infrastructure",
    description:
      "Zoiko Cloud, developer platform and ecosystem services",
    href: "#",
    icon:
      "/technologymegamenu/cloud-digital-infrastructure.png",
  },
  {
    title: "Developer Platform",
    description:
      "APIs, SDKs, tooling and integration resources",
    href: "#",
    icon:
      "/technologymegamenu/developer-platform.png",
  },
];

/* =========================
   OPERATIONS & COMMUNICATIONS
========================= */

const operationsCommunications = [
  {
    title: "Enterprise & Financial Operations",
    description:
      "Business operating systems and professional intelligence",
    href: "#",
    icon:
      "/technologymegamenu/enterprise-financial-operations.png",
  },
  {
    title: "Communications & Media Infrastructure",
    description:
      "Telecom, real-time communications and streaming",
    href: "#",
    icon:
      "/technologymegamenu/communications-media-infrastructure.png",
  },
];

/* =========================
   SECURITY & TRUST
========================= */

const securityTrust = [
  {
    title: "Security, Identity & Assurance",
    description:
      "Cybersecurity, identity, authentication and evidence",
    href: "#",
    icon:
      "/technologymegamenu/security-identity-assurance.png",
  },
  {
    title: "Industry Technology",
    description:
      "Telecom, healthcare, finance and sector-specific systems",
    href: "#",
    icon:
      "/technologymegamenu/industry-technology.png",
  },
];

/* =========================
   BOTTOM TECHNOLOGY LINKS
========================= */

const technologyResources = [
  {
    title: "→ Zoiko Research",
    href: "#",
    icon: "/technologymegamenu/zoiko-research.png",
  },
  {
    title: "→ Frontier Technologies",
    href: "#",
    icon: "/technologymegamenu/frontier-technologies.png",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export default function TechnologyMegaMenu({
  isOpen,
  onLinkClick,
}: TechnologyMegaMenuProps) {
  return (
    <div
      className={`
        fixed
        left-1/2
        top-[95px]
        z-[100]
        w-[calc(100vw-64px)]
        max-w-[1400px]
        -translate-x-1/2
        max-md:hidden
        transition-all
        duration-200
        ease-out
        ${
          isOpen
            ? "visible translate-y-0 pointer-events-auto opacity-100"
            : "invisible translate-y-2 pointer-events-none opacity-0"
        }
      `}
    >
      {/* Hover bridge */}
      <div className="absolute -top-5 left-0 h-5 w-full" />

      {/* =========================
          OUTER WHITE CONTAINER
      ========================== */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          bg-white
          px-12
          pb-8
          pt-7
          shadow-[0px_12px_28px_0px_rgba(15,23,42,0.08)]
        "
      >
        {/* =========================
            GREEN TECHNOLOGY PANEL
        ========================== */}

        <div
          className="
            relative
            h-[384px]
            w-full
            overflow-hidden
            rounded-lg
            shadow-[0px_4px_4px_0px_rgba(31,122,108,0.60)]
          "
        >
          {/* Actual background image */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage:
                "url('/technologymegamenu/technology-mega-menu-bg.png')",
            }}
          />

          {/* =========================
              THREE COLUMNS
          ========================== */}

          <div className="relative z-10 flex h-full w-full">

            {/* =========================================
                COLUMN 1
                AI & INFRASTRUCTURE
            ========================================== */}

            <div
              className="
                flex
                h-full
                w-[31.5%]
                min-w-0
                flex-col
                overflow-hidden
                border-r
                border-slate-500/80
                px-8
                py-6
              "
            >
              {/* Heading */}
              <CategoryTitle>
                AI &amp; Infrastructure
              </CategoryTitle>

              {/* Items */}
              <div className="flex w-full flex-col gap-[24px] pt-8">
                {aiInfrastructure.map((item) => (
                  <TechnologyItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    onLinkClick={onLinkClick}
                  />
                ))}
              </div>
            </div>

            {/* =========================================
                COLUMN 2
                OPERATIONS & COMMUNICATIONS
            ========================================== */}

            <div
              className="
                flex
                h-full
                w-[37%]
                min-w-0
                flex-col
                overflow-hidden
                border-r
                border-slate-500/80
                px-8
                py-6
              "
            >
              {/* Heading */}
              <CategoryTitle>
                Operations &amp; Communications
              </CategoryTitle>

              {/* Items */}
              <div className="flex w-full flex-col gap-[24px] pt-8">
                {operationsCommunications.map((item) => (
                  <TechnologyItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    onLinkClick={onLinkClick}
                  />
                ))}
              </div>
            </div>

            {/* =========================================
                COLUMN 3
                SECURITY & TRUST
            ========================================== */}

            <div
              className="
                flex
                h-full
                w-[31.5%]
                min-w-0
                flex-col
                overflow-hidden
                px-8
                py-6
              "
            >
              {/* Heading */}
              <CategoryTitle>
                Security &amp; Trust
              </CategoryTitle>

              {/* Main items */}
              <div className="flex w-full flex-col gap-[24px] pt-8">
                {securityTrust.map((item) => (
                  <TechnologyItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    onLinkClick={onLinkClick}
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full shrink-0 bg-slate-400/80" />

              {/* Bottom links */}
              <div className="flex w-full flex-col gap-3">
                {technologyResources.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onLinkClick}
                    className="group flex w-full items-center gap-2"
                  >
                    {/* Small icon */}
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-700">
                      <Image
                        src={item.icon}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5 object-contain"
                      />
                    </div>

                    {/* Text */}
                    <span
                      className={`${poppins.className} min-w-0 flex-1 text-[12px] font-semibold leading-4 text-white transition-colors duration-150 group-hover:text-teal-200`}
                    >
                      {item.title}
                    </span>

                    {/* Arrow */}
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}