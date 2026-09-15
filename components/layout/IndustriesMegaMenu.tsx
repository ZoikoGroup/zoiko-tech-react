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

type IndustriesMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type IndustryItemProps = {
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
   INDUSTRY ITEM
========================= */

function IndustryItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: IndustryItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group flex w-full min-w-0 items-start gap-2.5"
    >
      {/* ICON */}
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-700">
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className="size-4 object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1 overflow-hidden">
        {/* TITLE + ARROW */}
        <div className="flex min-w-0 w-full items-center justify-between gap-2">
          <span
            className={`${plusJakarta.className} min-w-0 flex-1 text-[14px] font-bold leading-4 text-white transition-colors duration-150 group-hover:text-teal-200`}
          >
            {title}
          </span>

          <Arrow />
        </div>

        {/* DESCRIPTION */}
        <p
          className={`${poppins.className} mt-[3px] w-full text-[11px] font-normal leading-[14px] text-gray-300`}
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
   CORE INDUSTRIES
========================= */

const coreIndustries = [
  {
    title: "Telecommunications",
    description:
      "Connect networks, subscribers and services at scale",
    href: "#",
    icon: "/IndustriesMegaMenu/telecommunications.png",
  },
  {
    title: "Financial Services",
    description:
      "Banking, insurance, capital markets and fintech platforms",
    href: "#",
    icon: "/IndustriesMegaMenu/financial-services.png",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Care delivery, clinical operations and research workflows",
    href: "#",
    icon: "/IndustriesMegaMenu/healthcare-life-sciences.png",
  },
  {
    title: "Media & Entertainment",
    description:
      "Content, streaming, publishing and digital media operations",
    href: "#",
    icon: "/IndustriesMegaMenu/media-entertainment.png",
  },
  {
    title: "Public Sector & Government",
    description:
      "Citizen services, agency operations and public infrastructure",
    href: "#",
    icon: "/IndustriesMegaMenu/public-sector-government.png",
  },
];

/* =========================
   CONNECTED INDUSTRIES
========================= */

const connectedIndustries = [
  {
    title: "Retail & Commerce",
    description:
      "Omnichannel retail, supply chain and customer experience",
    href: "#",
    icon: "/IndustriesMegaMenu/retail-commerce.png",
  },
  {
    title: "Travel, Mobility & Transportation",
    description:
      "Passenger, freight, fleet and mobility platform operations",
    href: "#",
    icon: "/IndustriesMegaMenu/travel-mobility-transportation.png",
  },
  {
    title: "Real Estate & Property",
    description:
      "Property management, transactions and smart building platforms",
    href: "#",
    icon: "/IndustriesMegaMenu/real-estate-property.png",
  },
  {
    title: "Professional Services",
    description:
      "Project delivery, resource management and client operations",
    href: "#",
    icon: "/IndustriesMegaMenu/professional-services.png",
  },
  {
    title: "Education & Research",
    description:
      "Campus operations, learning platforms and research workflows",
    href: "#",
    icon: "/IndustriesMegaMenu/education-research.png",
  },
];

/* =========================
   INDUSTRY RESOURCES
========================= */

const industryResources = [
  {
    title: "→ View All Industries",
    description:
      "Explore the full range of industries we serve",
    href: "#",
    icon: "/IndustriesMegaMenu/view-all-industries.png",
  },
  {
    title: "→ Industry-Specific Solutions",
    description:
      "Tailored solution pathways mapped to your sector needs",
    href: "#",
    icon: "/IndustriesMegaMenu/industry-specific-solutions.png",
  },
  {
    title: "→ Customer Evidence",
    description:
      "Case studies, outcomes and proven results by industry",
    href: "#",
    icon: "/IndustriesMegaMenu/customer-evidence.png",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export default function IndustriesMegaMenu({
  isOpen,
  onLinkClick,
}: IndustriesMegaMenuProps) {
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
      {/* HOVER BRIDGE */}
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
            INNER BACKGROUND PANEL
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
          {/* BACKGROUND IMAGE */}
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
                "url('/IndustriesMegaMenu/industries-mega-menu-bg.png')",
            }}
          />

          {/* =========================
              THREE COLUMNS
          ========================== */}

          <div className="relative z-10 flex h-full w-full">

            {/* =========================================
                COLUMN 1
                CORE INDUSTRIES
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
                border-gray-400/70
                px-8
                py-6
              "
            >
              {/* TITLE */}
              <CategoryTitle>
                Core Industries
              </CategoryTitle>

              {/* ITEMS */}
              <div className="flex min-h-0 flex-1 flex-col justify-between pt-6">
                {coreIndustries.map((item) => (
                  <IndustryItem
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
                CONNECTED INDUSTRIES
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
                border-gray-400/70
                px-8
                py-6
              "
            >
              {/* TITLE */}
              <CategoryTitle>
                Connected Industries
              </CategoryTitle>

              {/* ITEMS */}
              <div className="flex min-h-0 flex-1 flex-col justify-between pt-6">
                {connectedIndustries.map((item) => (
                  <IndustryItem
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
                INDUSTRY RESOURCES
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
              {/* TITLE */}
              <CategoryTitle>
                Industry Resources
              </CategoryTitle>

              {/* ITEMS */}
              <div className="flex w-full flex-col gap-[20px] pt-8">
                {industryResources.map((item) => (
                  <IndustryItem
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

          </div>
        </div>
      </div>
    </div>
  );
}