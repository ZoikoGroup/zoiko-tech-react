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

type CompanyMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type CompanyItemProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  onLinkClick: () => void;
};

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <span className="relative mt-[2px] size-4 shrink-0 overflow-hidden">
      <span className="absolute left-[5px] top-[4px] block h-[7px] w-[7px] rotate-[-45deg] border-r-[1.5px] border-b-[1.5px] border-zinc-200" />
    </span>
  );
}

/* =========================================================
   COMPANY ITEM
========================================================= */

function CompanyItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: CompanyItemProps) {
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
          className={`${poppins.className} mt-[3px] w-full text-[12px] font-normal leading-4 text-gray-300`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

/* =========================================================
   CATEGORY TITLE
========================================================= */

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

/* =========================================================
   ABOUT ZOIKOTECH
========================================================= */

const aboutZoikoTech = [
  {
    title: "About ZoikoTech",
    description:
      "Corporate positioning, mission and operating model",
    href: "#",
    icon: "/companymegamenu/about-zoikotech.png",
  },
  {
    title: "Leadership & Governance",
    description:
      "Executive leadership and governance information",
    href: "#",
    icon: "/companymegamenu/leadership-governance.png",
  },
  {
    title: "Global Presence",
    description:
      "Headquarters, hubs and operating footprint",
    href: "#",
    icon: "/companymegamenu/global-presence.png",
  },
  {
    title: "Technology Strategy",
    description:
      "How Zoiko builds, integrates and governs technology",
    href: "#",
    icon: "/companymegamenu/technology-strategy.png",
  },
];

/* =========================================================
   WORK WITH US
========================================================= */

const workWithUs = [
  {
    title: "Careers",
    description:
      "Global roles, culture and candidate information",
    href: "#",
    icon: "/companymegamenu/careers.png",
  },
  {
    title: "Partners",
    description:
      "Technology, channel and strategic partnership paths",
    href: "#",
    icon: "/companymegamenu/partners.png",
  },
  {
    title: "Suppliers",
    description:
      "Procurement and supplier information",
    href: "#",
    icon: "/companymegamenu/suppliers.png",
  },
];

/* =========================================================
   CONNECT & SUPPORT
========================================================= */

const connectSupport = [
  {
    title: "Contact Us",
    description:
      "General enquiries and routed contact paths",
    href: "#",
    icon: "/companymegamenu/contact-us.png",
  },
  {
    title: "Support",
    description:
      "Customer support entry points and product routing",
    href: "#",
    icon: "/companymegamenu/support.png",
  },
  {
    title: "Zoiko Group",
    description:
      "Parent-group corporate website",
    href: "#",
    icon: "/companymegamenu/zoiko-group.png",
  },
];

/* =========================================================
   BOTTOM LINKS
========================================================= */

const companyResources = [
  {
    title: "→ Legal & Privacy",
    href: "#",
    icon: "/companymegamenu/legal-privacy.png",
  },
  {
    title: "→ Accessibility",
    href: "#",
    icon: "/companymegamenu/accessibility.png",
  },
];

/* =========================================================
   SMALL BOTTOM LINK
========================================================= */

function CompanyBottomLink({
  title,
  href,
  icon,
  onLinkClick,
}: {
  title: string;
  href: string;
  icon: string;
  onLinkClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group flex w-full items-center gap-2 overflow-hidden"
    >
      {/* SMALL ICON */}

      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-700">
        <Image
          src={icon}
          alt=""
          width={14}
          height={14}
          className="size-3.5 object-contain"
        />
      </div>

      {/* TEXT */}

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

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CompanyMegaMenu({
  isOpen,
  onLinkClick,
}: CompanyMegaMenuProps) {
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
      {/* =================================================
          HOVER BRIDGE
      ================================================== */}

      <div className="absolute -top-5 left-0 h-5 w-full" />

      {/* =================================================
          OUTER WHITE FIGMA CONTAINER
      ================================================== */}

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
        {/* =================================================
            INNER GREEN PANEL
        ================================================== */}

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
          {/* =================================================
              ACTUAL BACKGROUND IMAGE

              Do NOT use next/image here.
              This prevents the hydration mismatch issue.
          ================================================== */}

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
                "url('/companymegamenu/company-mega-menu-bg.png')",
            }}
          />

          {/* =================================================
              THREE COLUMNS
          ================================================== */}

          <div className="relative z-10 flex h-full w-full">

            {/* =================================================
                COLUMN 1
                ABOUT ZOIKOTECH
            ================================================== */}

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
              {/* HEADING */}

              <CategoryTitle>
                About ZoikoTech
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col gap-[24px] pt-8">
                {aboutZoikoTech.map((item) => (
                  <CompanyItem
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

            {/* =================================================
                COLUMN 2
                WORK WITH US
            ================================================== */}

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
              {/* HEADING */}

              <CategoryTitle>
                Work With Us
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col gap-[24px] pt-8">
                {workWithUs.map((item) => (
                  <CompanyItem
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

            {/* =================================================
                COLUMN 3
                CONNECT & SUPPORT
            ================================================== */}

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
              {/* HEADING */}

              <CategoryTitle>
                Connect &amp; Support
              </CategoryTitle>

              {/* MAIN ITEMS */}

              <div className="flex w-full flex-col gap-[24px] pt-8">
                {connectSupport.map((item) => (
                  <CompanyItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    onLinkClick={onLinkClick}
                  />
                ))}
              </div>

              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div className="my-6 h-px w-full shrink-0 bg-slate-400/80" />

              {/* =================================================
                  BOTTOM LINKS
              ================================================== */}

              <div className="flex w-full flex-col gap-3">
                {companyResources.map((item) => (
                  <CompanyBottomLink
                    key={item.title}
                    title={item.title}
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