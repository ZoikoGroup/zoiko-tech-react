"use client";

import Link from "next/link";
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
    <span className="relative mt-[1px] h-4 w-7 shrink-0 origin-top-left -rotate-90 overflow-hidden">
      <span className="absolute left-[6px] top-[4px] block h-2 w-1 border-r-[1.5px] border-b-[1.5px] border-zinc-200" />
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
      className="group flex w-full min-w-0 items-start gap-2.5 overflow-hidden"
    >
      {/* ICON */}

      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-700">
        <img
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

        <div className="flex w-full min-w-0 items-center justify-between gap-2 overflow-hidden">
          <span
            className={`${plusJakarta.className} min-w-0 flex-1 truncate text-xs font-bold leading-4 text-white transition-colors duration-150 group-hover:text-teal-200`}
          >
            {title}
          </span>

          <Arrow />
        </div>

        {/* DESCRIPTION */}

        <p
          className={`${poppins.className} mt-[3px] w-full text-xs font-normal leading-4 text-gray-300`}
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
      className={`${poppins.className} w-full shrink-0 text-xs font-bold uppercase leading-4 text-white`}
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
    description: "Expert perspectives on what's next",
    href: "/insights",
    icon: "/resourcemegamenu/insights-analysis.png",
  },
  {
    title: "Research",
    description: "Original research and insights",
    href: "#",
    icon: "/resourcemegamenu/research.png",
  },
  {
    title: "Guides & Reports",
    description: "Practical guidance for real impact",
    href: "#",
    icon: "/resourcemegamenu/guides-reports.png",
  },
  {
    title: "Customer Stories",
    description: "Real customers. Real results.",
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
    description: "Technical docs and product guides",
    href: "#",
    icon: "/resourcemegamenu/documentation.png",
  },
  {
    title: "Developer Resources",
    description: "Tools, SDKs and development support",
    href: "#",
    icon: "/resourcemegamenu/developer-resources.png",
  },
  {
    title: "Trust Center",
    description: "Security, compliance and transparency",
    href: "#",
    icon: "/resourcemegamenu/trust-center.png",
  },
  {
    title: "Status",
    description: "System status and service health",
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
    description: "Latest news and announcements",
    href: "#",
    icon: "/resourcemegamenu/newsroom.png",
  },
  {
    title: "Press Releases",
    description: "Official press releases",
    href: "#",
    icon: "/resourcemegamenu/press-releases.png",
  },
  {
    title: "Media Resources",
    description: "Logos, media kits and brand assets",
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
          flex
          w-full
          flex-col
          items-start
          gap-5
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
            INNER RESOURCE PANEL
        ================================================== */}

        <div
          className="
            relative
            flex
            h-[384px]
            w-full
            items-start
            overflow-hidden
            rounded-lg
            bg-gradient-to-r
            from-emerald-800/40
            via-emerald-900
            to-teal-700/30
            shadow-[0px_4px_4px_0px_rgba(31,122,108,0.60)]
          "
        >
          {/* =================================================
              BACKGROUND IMAGE
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
              CONTENT
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
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-gray-400
                px-8
                py-6
              "
            >
              <CategoryTitle>
                Learn &amp; Discover
              </CategoryTitle>

              <div className="flex w-full flex-col items-start gap-6">
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
                w-80
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-gray-400
                px-8
                py-6
              "
            >
              <CategoryTitle>
                Build &amp; Evaluate
              </CategoryTitle>

              <div className="flex w-full flex-col items-start gap-6">
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
                w-72
                shrink-0
                flex-col
                items-start
                gap-6
                overflow-hidden
                border-r
                border-gray-400
                px-8
                py-6
              "
            >
              <CategoryTitle>
                News &amp; Company
              </CategoryTitle>

              <div className="flex w-full flex-col items-start gap-6">
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

            {/* =================================================
                RIGHT HERO IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-96
                w-96
                shrink-0
                overflow-hidden
                rounded-br-lg
                rounded-tr-lg
              "
            >
              {/* IMAGE */}

              <img
                src="/resourcemegamenu/image.png"
                alt="Resources"
                className="
                  absolute
                  inset-0
                  size-full
                  object-cover
                "
              />

              {/* GRADIENT */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-teal-950
                  via-emerald-900/80
                  to-black/0
                "
              />

              {/* HERO CONTENT */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-4
                  px-7
                  py-8
                "
              >
                {/* HEADING */}

                <div className="flex w-full flex-col items-start">
                  <div
                    className={`${poppins.className} w-full text-xl font-extrabold leading-6 text-white`}
                  >
                    IDEAS, INSIGHTS
                  </div>

                  <div
                    className={`${poppins.className} w-full text-xl font-extrabold leading-6 text-white`}
                  >
                    AND IMPACT
                  </div>

                  <div
                    className={`${poppins.className} w-full text-xl font-extrabold leading-9 text-white`}
                  >
                    FOR WHAT&apos;S
                  </div>

                  <div
                    className={`${poppins.className} w-full text-xl font-extrabold leading-6 text-teal-400`}
                  >
                    NEXT.
                  </div>

                  {/* DIVIDER */}

                  <div className="mt-1 h-[3px] w-10 rounded-sm bg-teal-400" />
                </div>

                {/* TAGLINE */}

                <div className="flex w-full flex-col items-start gap-0.5">
                  <div
                    className={`${poppins.className} w-full text-xs font-normal leading-4 text-slate-300`}
                  >
                    People. Possibilities.
                  </div>

                  <div
                    className={`${poppins.className} w-full text-xs font-normal leading-4 text-slate-300`}
                  >
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