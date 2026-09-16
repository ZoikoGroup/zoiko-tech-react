"use client";

import Link from "next/link";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

/* =========================================================
   TYPES
========================================================= */

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

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <span className="relative mt-[1px] h-3.5 w-2 shrink-0 overflow-hidden">
      <span
        className="
          absolute
          left-[5px]
          top-[3.5px]
          block
          h-[6px]
          w-1
          rotate-[-45deg]
          border-r-[1.5px]
          border-b-[1.5px]
          border-slate-400
        "
      />
    </span>
  );
}

/* =========================================================
   INDUSTRY ITEM
========================================================= */

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
      className="
        group
        flex
        w-full
        min-w-0
        items-center
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
          width={20}
          height={20}
          className="
            size-5
            object-contain
          "
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
              truncate
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
            mt-0.5
            w-full
            truncate
            text-xs
            font-normal
            leading-4
            text-gray-400
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
        text-emerald-200
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   CORE INDUSTRIES
========================================================= */

const coreIndustries = [
  {
    title: "Telecommunications",
    description: "Powering a more connected world",
    href: "#",
    icon: "/IndustriesMegaMenu/telecommunications.png",
  },
  {
    title: "Financial Services",
    description: "Secure, intelligent financial experiences",
    href: "#",
    icon: "/IndustriesMegaMenu/financial-services.png",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Better care through technology",
    href: "#",
    icon: "/IndustriesMegaMenu/healthcare-life-sciences.png",
  },
  {
    title: "Media, Sports & Entertainment",
    description: "Engage audiences everywhere",
    href: "#",
    icon: "/IndustriesMegaMenu/media-entertainment.png",
  },
  {
    title: "Public Sector & Government",
    description: "Modern government for greater impact",
    href: "#",
    icon: "/IndustriesMegaMenu/public-sector-government.png",
  },
];

/* =========================================================
   CONNECTED INDUSTRIES
========================================================= */

const connectedIndustries = [
  {
    title: "Retail & Commerce",
    description: "Seamless commerce, anywhere",
    href: "#",
    icon: "/IndustriesMegaMenu/retail-commerce.png",
  },
  {
    title: "Travel, Mobility & Transportation",
    description: "Connected journeys for a moving world",
    href: "#",
    icon: "/IndustriesMegaMenu/travel-mobility-transportation.png",
  },
  {
    title: "Real Estate & Property",
    description: "Smarter spaces and stronger communities",
    href: "#",
    icon: "/IndustriesMegaMenu/real-estate-property.png",
  },
  {
    title: "Professional Services",
    description: "Technology that powers what's next",
    href: "#",
    icon: "/IndustriesMegaMenu/professional-services.png",
  },
  {
    title: "Education & Research",
    description: "Knowledge for a brighter future",
    href: "#",
    icon: "/IndustriesMegaMenu/education-research.png",
  },
];

/* =========================================================
   INDUSTRY RESOURCES
========================================================= */

const industryResources = [
  {
    title: "View All Industries",
    description: "Explore our industry expertise",
    href: "#",
    icon: "/IndustriesMegaMenu/view-all-industries.png",
  },
  {
    title: "Industry-Specific Solutions",
    description: "Tailored solutions for your industry",
    href: "#",
    icon: "/IndustriesMegaMenu/industry-specific-solutions.png",
  },
  {
    title: "Customer Evidence",
    description: "Real results. Lasting impact.",
    href: "#",
    icon: "/IndustriesMegaMenu/customer-evidence.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

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
            INNER PANEL

            Figma:
            h-96
            rounded-lg
            shadow
        =================================================== */}

        <div
          className="
            relative
            flex
            h-96
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
                "url('/IndustriesMegaMenu/industries-mega-menu-bg.png')",
            }}
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 flex h-full w-full">

            {/* =================================================
                COLUMN 1
                CORE INDUSTRIES

                Figma:
                w-80
                px-7
                py-6
                border-r
            ================================================= */}

            <div
              className="
                flex
                h-96
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-gray-400
                px-7
                py-6
              "
            >
              {/* TITLE */}

              <CategoryTitle>
                Core Industries
              </CategoryTitle>

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  min-h-0
                  flex-1
                  flex-col
                  justify-between
                  overflow-hidden
                "
              >
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

            {/* =================================================
                COLUMN 2
                CONNECTED INDUSTRIES

                Figma:
                w-80
                px-7
                py-6
                border-r
            ================================================= */}

            <div
              className="
                flex
                h-96
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-gray-400
                px-7
                py-6
              "
            >
              {/* TITLE */}

              <CategoryTitle>
                Connected Industries
              </CategoryTitle>

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  min-h-0
                  flex-1
                  flex-col
                  justify-between
                  overflow-hidden
                "
              >
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

            {/* =================================================
                COLUMN 3
                INDUSTRY RESOURCES

                Figma:
                w-72
                px-7
                py-6
                border-r
            ================================================= */}

            <div
              className="
                flex
                h-96
                w-72
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-gray-400
                px-7
                py-6
              "
            >
              {/* TITLE */}

              <CategoryTitle>
                Industry Resources
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

            {/* =================================================
                COLUMN 4
                RIGHT HERO

                Figma:
                size-96
                p-8
                gap-4

                Background:
                /IndustriesMegaMenu/image.png
            ================================================= */}

            <div
              className="
                relative
                flex
                h-96
                w-96
                shrink-0
                flex-col
                items-start
                justify-start
                overflow-hidden
              "
            >
              {/* =================================================
                  RIGHT SIDE BACKGROUND IMAGE
              ================================================= */}

              <img
                src="/IndustriesMegaMenu/image.png"
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
                  FIGMA GRADIENT OVERLAY

                  from-teal-950/50
                  to-teal-950/0
                  to 60%
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-teal-950/50
                  from-0%
                  via-teal-950/25
                  via-[45%]
                  to-teal-950/0
                  to-[60%]
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
                  p-8
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
                      text-3xl
                      font-extrabold
                      leading-8
                      text-white
                    "
                  >
                    INDUSTRY
                    <br />
                    EXPERTISE.
                    <br />
                    REAL-WORLD
                  </div>

                  <div
                    className="
                      w-full
                      text-3xl
                      font-extrabold
                      leading-8
                      text-teal-400
                    "
                  >
                    IMPACT.
                  </div>
                </div>

                {/* =================================================
                    TEAL DIVIDER
                ================================================= */}

                <div
                  className="
                    h-[3px]
                    w-10
                    shrink-0
                    rounded-sm
                    bg-teal-400
                  "
                />

                {/* =================================================
                    TAGLINE
                ================================================= */}

                <div
                  className={`
                    ${poppins.className}
                    w-full
                    text-xs
                    font-medium
                    leading-5
                    text-emerald-50
                  `}
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
  );
}