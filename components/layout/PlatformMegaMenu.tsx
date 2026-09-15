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

type ProductMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  onLinkClick: () => void;
};

type BottomLinkProps = {
  title: string;
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
   PRODUCT ITEM
========================= */

function ProductItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: ProductItemProps) {
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
          className={`${poppins.className} mt-[3px] w-full pr-1 text-[11px] font-normal leading-[14px] text-gray-300`}
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
   BOTTOM LINK
========================= */

function BottomLink({
  title,
  href,
  icon,
  onLinkClick,
}: BottomLinkProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group flex w-full min-w-0 items-center gap-2"
    >
      {/* ICON */}
      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-700">
        <Image
          src={icon}
          alt=""
          width={14}
          height={14}
          className="size-3.5 object-contain"
        />
      </div>

      {/* TITLE */}
      <span
        className={`${poppins.className} min-w-0 flex-1 text-[12px] font-semibold leading-4 text-white transition-colors duration-150 group-hover:text-teal-200`}
      >
        {title}
      </span>

      {/* ARROW */}
      <Arrow />
    </Link>
  );
}

/* =========================
   ENTERPRISE PRODUCTS
========================= */

const enterpriseProducts = [
  {
    title: "ZoikoTime",
    description:
      "Governed workforce time, productivity and provenance",
    href: "#",
    icon: "/PlatformMegaMenu/enterprise-zoikotime.png",
  },
  {
    title: "Zoiko HR",
    description:
      "Global human resources and workforce operations",
    href: "#",
    icon: "/PlatformMegaMenu/enterprise-zoiko-hr.png",
  },
  {
    title: "Zoiko Payroll",
    description:
      "Payroll operations, controls and multinational workflows",
    href: "#",
    icon: "/PlatformMegaMenu/enterprise-zoiko-payroll.png",
  },
  {
    title: "Zoiko Billing",
    description:
      "Billing, invoicing and revenue operations",
    href: "#",
    icon: "/PlatformMegaMenu/enterprise-zoiko-billing.png",
  },
];

/* =========================
   AI / TELECOM PRODUCTS
========================= */

const aiProducts = [
  {
    title: "ZoikoVertex",
    description:
      "Governed agentic execution and workflow automation",
    href: "#",
    icon: "/PlatformMegaMenu/ai-zoikovertex.png",
  },
  {
    title: "ZoikoNex",
    description:
      "Telecom OSS/BSS, monetization and operator infrastructure",
    href: "#",
    icon: "/PlatformMegaMenu/ai-zoikonex.png",
  },
  {
    title: "Zoiko Sema",
    description:
      "Meetings, messaging and calling",
    href: "#",
    icon: "/PlatformMegaMenu/ai-zoiko-sema.png",
  },
  {
    title: "Zoiko Local",
    description:
      "Communications and local-number infrastructure",
    href: "#",
    icon: "/PlatformMegaMenu/ai-zoiko-local.png",
  },
  {
    title: "ZoikoStream Live Events",
    description:
      "Commercial live-event broadcasting technology",
    href: "#",
    icon: "/PlatformMegaMenu/ai-zoikostream.png",
  },
];

/* =========================
   GROUP PLATFORMS
========================= */

const groupProducts = [
  {
    title: "ZoikoMeds",
    description:
      "Zoiko Healthcare platform - medication and pharmacy-availability intelligence",
    href: "#",
    icon: "/PlatformMegaMenu/group-zoikomed.png",
  },
  {
    title: "Zoiko Social",
    description:
      "Zoiko Media Corp. platform - social and community experience",
    href: "#",
    icon: "/PlatformMegaMenu/group-zoiko-social.png",
  },
  {
    title: "Zoiko Rooms",
    description:
      "Zoiko Realty Group platform - property and accommodation marketplace",
    href: "#",
    icon: "/PlatformMegaMenu/group-zoiko-rooms.png",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export default function ProductMegaMenu({
  isOpen,
  onLinkClick,
}: ProductMegaMenuProps) {
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
      {/* =========================
          HOVER BRIDGE
      ========================== */}

      <div className="absolute -top-5 left-0 h-5 w-full" />

      {/* =========================
          OUTER WHITE CONTAINER
          SAME AS INDUSTRIES
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
            INNER PANEL
            SAME 384px HEIGHT
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
          {/* =========================
              BACKGROUND IMAGE
          ========================== */}

          <Image
            src="/PlatformMegaMenu/platform-mega-menu-bg.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1400px) calc(100vw - 160px), 1400px"
            className="object-cover"
          />

          {/* =========================
              GREEN OVERLAY
          ========================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-emerald-900/35
              via-emerald-900/20
              to-teal-800/25
            "
          />

          {/* =========================
              THREE COLUMNS
          ========================== */}

          <div className="relative z-10 flex h-full w-full">

            {/* =========================================
                COLUMN 1
                ENTERPRISE & WORKFORCE
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
                Enterprise &amp; Workforce
              </CategoryTitle>

              {/* PRODUCTS
                  CLOSER VERTICAL SPACING */}

              <div className="flex w-full flex-col gap-[20px] pt-6">
                {enterpriseProducts.map((item) => (
                  <ProductItem
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
                AI, TELECOM & COMMUNICATIONS
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
                AI, Telecom &amp; Communications
              </CategoryTitle>

              {/* PRODUCTS
                  CLOSER VERTICAL SPACING */}

              <div className="flex w-full flex-col gap-[20px] pt-6">
                {aiProducts.map((item) => (
                  <ProductItem
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
                GROUP PLATFORMS
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
                Group Platforms Powered by Zoiko Technology
              </CategoryTitle>

              {/* GROUP PRODUCTS */}

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-6">
                {groupProducts.map((item) => (
                  <ProductItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    onLinkClick={onLinkClick}
                  />
                ))}

                {/* =========================
                    DIVIDER
                ========================== */}

                <div className="my-2 h-px w-full shrink-0 bg-gray-400/70" />

                {/* =========================
                    CTA GROUP
                    CLOSE TOGETHER
                ========================== */}

                <div className="flex flex-col gap-[3px]">
                  <BottomLink
                    title="→ Explore All Platforms"
                    href="#"
                    icon="/PlatformMegaMenu/explore-all-platforms.png"
                    onLinkClick={onLinkClick}
                  />

                  <BottomLink
                    title="→ Platform Ecosystem"
                    href="#"
                    icon="/PlatformMegaMenu/platform-ecosystem.png"
                    onLinkClick={onLinkClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}