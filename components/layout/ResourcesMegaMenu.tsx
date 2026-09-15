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

type ResourcesMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type ResourceItemProps = {
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
   RESOURCE ITEM
========================================================= */

function ResourceItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: ResourceItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="group flex w-full min-w-0 items-start gap-2.5"
    >
      {/* =================================================
          ICON
      ================================================== */}

      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-700">
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className="size-4 object-contain"
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="min-w-0 flex-1 overflow-hidden">
        {/* TITLE + ARROW */}

        <div className="flex min-w-0 w-full items-center justify-between gap-2 overflow-hidden">
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
   LEARN & DISCOVER
========================================================= */

const learnDiscover = [
  {
    title: "Insights & Analysis",
    description:
      "Executive, product and industry perspectives",
    href: "#",
    icon: "/resourcemegamenu/insights-analysis.png",
  },
  {
    title: "Research",
    description:
      "Technical papers, benchmarks and research outputs",
    href: "#",
    icon: "/resourcemegamenu/research.png",
  },
  {
    title: "Guides & Reports",
    description:
      "Structured downloadable resources",
    href: "#",
    icon: "/resourcemegamenu/guides-reports.png",
  },
  {
    title: "Customer Stories",
    description:
      "Evidence-led case studies and results",
    href: "#",
    icon: "/resourcemegamenu/customer-stories.png",
  },
];

/* =========================================================
   BUILD & EVALUATE
========================================================= */

const buildEvaluate = [
  {
    title: "Documentation",
    description:
      "Product and platform documentation",
    href: "#",
    icon: "/resourcemegamenu/documentation.png",
  },
  {
    title: "Developer Resources",
    description:
      "APIs, SDKs, integration guides and developer tools",
    href: "#",
    icon: "/resourcemegamenu/developer-resources.png",
  },
  {
    title: "Trust Center",
    description:
      "Security, privacy, compliance and resilience evidence",
    href: "#",
    icon: "/resourcemegamenu/trust-center.png",
  },
  {
    title: "Status",
    description:
      "Current service availability and incident communications",
    href: "#",
    icon: "/resourcemegamenu/status.png",
  },
];

/* =========================================================
   NEWS & COMPANY
========================================================= */

const newsCompany = [
  {
    title: "Newsroom",
    description:
      "Corporate news and announcements",
    href: "#",
    icon: "/resourcemegamenu/newsroom.png",
  },
  {
    title: "Press Releases",
    description:
      "Official company releases",
    href: "#",
    icon: "/resourcemegamenu/press-releases.png",
  },
  {
    title: "Media Resources",
    description:
      "Approved logos, facts and media assets",
    href: "#",
    icon: "/resourcemegamenu/media-resources.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ResourcesMegaMenu({
  isOpen,
  onLinkClick,
}: ResourcesMegaMenuProps) {
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

              Using backgroundImage instead of <Image>
              prevents the hydration mismatch issue.
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
                "url('/resourcemegamenu/resources-mega-menu-bg.png')",
            }}
          />

          {/* =================================================
              THREE COLUMNS
          ================================================== */}

          <div className="relative z-10 flex h-full w-full">

            {/* =================================================
                COLUMN 1
                LEARN & DISCOVER
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
                border-gray-400/70
                px-8
                py-6
              "
            >
              {/* CATEGORY TITLE */}

              <CategoryTitle>
                Learn &amp; Discover
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col gap-[24px] pt-7">
                {learnDiscover.map((item) => (
                  <ResourceItem
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
                BUILD & EVALUATE
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
                border-gray-400/70
                px-8
                py-6
              "
            >
              {/* CATEGORY TITLE */}

              <CategoryTitle>
                Build &amp; Evaluate
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col gap-[24px] pt-7">
                {buildEvaluate.map((item) => (
                  <ResourceItem
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
                NEWS & COMPANY
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
              {/* CATEGORY TITLE */}

              <CategoryTitle>
                News &amp; Company
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col gap-[24px] pt-7">
                {newsCompany.map((item) => (
                  <ResourceItem
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