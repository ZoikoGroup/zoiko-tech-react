"use client";

import Link from "next/link";
import { poppins, plusJakarta } from "@/fonts";

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

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <span className="relative mt-[1px] h-4 w-7 shrink-0 overflow-hidden">
      <span
        className="
          absolute
          left-[6px]
          top-[4px]
          block
          h-2
          w-1
          rotate-[-45deg]
          border-r-[1.5px]
          border-b-[1.5px]
          border-zinc-200
        "
      />
    </span>
  );
}

/* =========================================================
   TECHNOLOGY ITEM
========================================================= */

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
      className="
        group
        flex
        w-full
        min-w-0
        items-start
        gap-2.5
        overflow-hidden
      "
    >
      {/* =================================================
          ICON
      ================================================= */}

      <div
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-teal-700
        "
      >
        <img
          src={icon}
          alt=""
          width={16}
          height={16}
          className="size-4 object-contain"
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="min-w-0 flex-1 overflow-hidden">
        {/* TITLE + ARROW */}

        <div
          className="
            flex
            w-full
            min-w-0
            items-center
            justify-between
            gap-2
            overflow-hidden
          "
        >
          <span
            className={`
              ${plusJakarta.className}
              min-w-0
              flex-1
              text-xs
              font-bold
              leading-4
              text-white
              transition-colors
              duration-150
              group-hover:text-teal-200
            `}
          >
            {title}
          </span>

          <Arrow />
        </div>

        {/* DESCRIPTION */}

        <p
          className={`
            ${poppins.className}
            mt-[3px]
            w-full
            text-xs
            font-normal
            leading-4
            text-gray-300
          `}
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
      className={`
        ${poppins.className}
        w-full
        shrink-0
        text-xs
        font-bold
        uppercase
        leading-4
        text-white
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   AI & INFRASTRUCTURE
========================================================= */

const aiInfrastructure = [
  {
    title: "Artificial Intelligence & Agentic Systems",
    description: "From models to real-world outcomes",
    href: "#",
    icon:
      "/technologymegamenu/artificial-intelligence-agentic-systems.png",
  },
  {
    title: "Cloud & Digital Infrastructure",
    description: "Secure, scalable and always on",
    href: "#",
    icon:
      "/technologymegamenu/cloud-digital-infrastructure.png",
  },
  {
    title: "Developer Platform",
    description: "Build without limits",
    href: "#",
    icon:
      "/technologymegamenu/developer-platform.png",
  },
];

/* =========================================================
   OPERATIONS & PLATFORMS
========================================================= */

const operationsPlatforms = [
  {
    title: "Enterprise & Financial Operations",
    description: "Intelligent operations at scale",
    href: "#",
    icon:
      "/technologymegamenu/enterprise-financial-operations.png",
  },
  {
    title: "Communications & Media Infrastructure",
    description: "Networks, platforms and possibilities",
    href: "#",
    icon:
      "/technologymegamenu/communications-media-infrastructure.png",
  },
  {
    title: "Industry Platforms & Systems",
    description: "Purpose-built for what's next",
    href: "#",
    icon:
      "/technologymegamenu/industry-platforms-systems.png",
  },
];

/* =========================================================
   SECURITY, TRUST & RESEARCH
========================================================= */

const securityTrustResearch = [
  {
    title: "Security, Identity & Assurance",
    description: "Built for a safer, more open future",
    href: "#",
    icon:
      "/technologymegamenu/security-identity-assurance.png",
  },
  {
    title: "Zoiko Research",
    description: "Insights for what's next",
    href: "#",
    icon:
      "/technologymegamenu/zoiko-research.png",
  },
  {
    title: "Frontier Technologies",
    description: "Exploring today, building tomorrow",
    href: "#",
    icon:
      "/technologymegamenu/frontier-technologies.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

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
      {/* =====================================================
          HOVER BRIDGE
      ===================================================== */}

      <div className="absolute -top-5 left-0 h-5 w-full" />

      {/* =====================================================
          OUTER WHITE CONTAINER

          Figma:
          px-12
          pt-7
          pb-8
          gap-5
      ===================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          items-start
          justify-start
          gap-5
          overflow-hidden
          bg-white
          px-12
          pb-8
          pt-7
          shadow-[0px_12px_28px_0px_rgba(15,23,42,0.08)]
        "
      >
        {/* ===================================================
            TECHNOLOGY PANEL

            Figma:
            h-80 = 320px
        =================================================== */}

        <div
          className="
            relative
            flex
            h-80
            w-full
            items-start
            justify-start
            overflow-hidden
            rounded-lg
            shadow-[0px_4px_4px_0px_rgba(31,122,108,0.60)]
          "
        >
          {/* =================================================
              MAIN BACKGROUND IMAGE
          ================================================= */}

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

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 flex h-full w-full">

            {/* =================================================
                COLUMN 1
                AI & INFRASTRUCTURE

                Figma:
                size-80
                px-7
                py-6
                border-r
            ================================================= */}

            <div
              className="
                flex
                h-80
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-slate-500
                px-7
                py-6
              "
            >
              {/* TITLE */}

              <CategoryTitle>
                AI &amp; Infrastructure
              </CategoryTitle>

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  gap-6
                  overflow-hidden
                "
              >
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

            {/* =================================================
                COLUMN 2
                OPERATIONS & PLATFORMS

                Figma:
                size-80
                px-7
                py-6
                border-r
            ================================================= */}

            <div
              className="
                flex
                h-80
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-slate-500
                px-7
                py-6
              "
            >
              {/* TITLE */}

              <CategoryTitle>
                Operations &amp; Platforms
              </CategoryTitle>

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  gap-6
                  overflow-hidden
                "
              >
                {operationsPlatforms.map((item) => (
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

            {/* =================================================
                COLUMN 3
                SECURITY, TRUST & RESEARCH

                Figma:
                size-80
                px-7
                py-6
                border-r
            ================================================= */}

            <div
              className="
                flex
                h-80
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-slate-500
                px-7
                py-6
              "
            >
              {/* TITLE */}

              <CategoryTitle>
                Security, Trust &amp; Research
              </CategoryTitle>

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  gap-6
                  overflow-hidden
                "
              >
                {securityTrustResearch.map((item) => (
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

            {/* =================================================
                RIGHT HERO

                Figma:
                w-96
                h-80
                px-7
                pt-7
                gap-4

                Image:
                /technologymegamenu/image.png
            ================================================= */}

            <div
              className="
                relative
                h-80
                w-96
                shrink-0
                overflow-hidden
                rounded-tr-lg
                rounded-br-lg
              "
            >
              {/* =================================================
                  RIGHT SIDE BACKGROUND IMAGE
              ================================================= */}

              <img
                src="/technologymegamenu/image.png"
                alt=""
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* =================================================
                  RIGHT SIDE GRADIENT

                  Figma:
                  from-emerald-900
                  via-teal-950/60
                  to-black/0
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-emerald-900
                  via-teal-950/60
                  to-black/0
                "
              />

              {/* =================================================
                  HERO CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  w-full
                  flex-col
                  items-start
                  justify-start
                  gap-4
                  overflow-hidden
                  px-7
                  pt-7
                "
              >
                {/* =================================================
                    HEADING
                ================================================= */}

                <div
                  className={`
                    ${poppins.className}
                    flex
                    w-full
                    flex-col
                    items-start
                    gap-3
                  `}
                >
                  <div
                    className="
                      w-full
                      text-2xl
                      font-extrabold
                      leading-7
                      text-white
                    "
                  >
                    TECHNOLOGY
                    <br />
                    FOR A BOLDER
                    <br />
                    <span className="text-teal-500">
                      TOMORROW.
                    </span>
                  </div>

                  {/* =================================================
                      DIVIDER
                  ================================================= */}

                  <div
                    className="
                      h-[3px]
                      w-9
                      shrink-0
                      rounded-sm
                      bg-teal-500
                    "
                  />

                  {/* =================================================
                      TAGLINE
                  ================================================= */}

                  <div
                    className="
                      w-full
                      text-xs
                      font-normal
                      leading-5
                      text-slate-300
                    "
                  >
                    People. Possibilities.
                    <br />
                    A More Connected Tomorrow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}