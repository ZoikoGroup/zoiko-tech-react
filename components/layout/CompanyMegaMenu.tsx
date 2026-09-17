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

/* =========================================================
   TYPES
========================================================= */

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
    <span className="relative mt-[1px] h-4 w-7 shrink-0 origin-top-left -rotate-90 overflow-hidden">
      <span className="absolute left-[6px] top-[4px] block h-2 w-1 border-r-[1.5px] border-b-[1.5px] border-zinc-200" />
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
      className="group flex w-full min-w-0 items-center gap-2.5 overflow-hidden"
    >
      {/* =================================================
          ICON
      ================================================== */}

      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-700">
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
      ================================================== */}

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
   ABOUT ZOIKO TECH
========================================================= */

const aboutZoikoTech = [
  {
    title: "About Zoiko Tech",
    description: "Our purpose, people and impact",
    href: "#",
    icon: "/companymegamenu/about-zoikotech.png",
  },
  {
    title: "Leadership & Governance",
    description: "Experienced leaders. Lasting value.",
    href: "#",
    icon: "/companymegamenu/leadership-governance.png",
  },
  {
    title: "Global Presence",
    description: "A growing global footprint",
    href: "#",
    icon: "/companymegamenu/global-presence.png",
  },
  {
    title: "Technology Strategy",
    description: "How Zoiko builds what's next.",
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
    description: "Build your future with us",
    href: "#",
    icon: "/companymegamenu/careers.png",
  },
  {
    title: "Partners",
    description: "Stronger together",
    href: "#",
    icon: "/companymegamenu/partners.png",
  },
  {
    title: "Suppliers",
    description: "Join our global supply network",
    href: "#",
    icon: "/companymegamenu/suppliers.png",
  },
  {
    title: "Investors",
    description: "Long-term value. A brighter tomorrow.",
    href: "#",
    icon: "/companymegamenu/investors.png",
  },
];

/* =========================================================
   CONNECT & SUPPORT
========================================================= */

const connectSupport = [
  {
    title: "Contact Us",
    description: "Get in touch",
    href: "#",
    icon: "/companymegamenu/contact-us.png",
  },
  {
    title: "Support",
    description: "Find help and support",
    href: "#",
    icon: "/companymegamenu/support.png",
  },
  {
    title: "Zoiko Group",
    description: "Part of a stronger ecosystem",
    href: "#",
    icon: "/companymegamenu/zoiko-group.png",
  },
  {
    title: "Legal & Privacy",
    description: "Policies, terms and compliance",
    href: "#",
    icon: "/companymegamenu/legal-privacy.png",
  },
  {
    title: "Accessibility",
    description: "Technology for everyone",
    href: "#",
    icon: "/companymegamenu/accessibility.png",
  },
];

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
            INNER COMPANY PANEL
        ================================================== */}

        <div
          className="
            relative
            flex
            h-96
            w-full
            items-start
            justify-between
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
                "url('/companymegamenu/company-mega-menu-bg.png')",
            }}
          />

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="relative z-10 flex h-full w-full">
            {/* =================================================
                COLUMN 1
                ABOUT ZOIKO TECH
            ================================================== */}

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
                border-slate-500
                px-7
                py-6
              "
            >
              {/* CATEGORY TITLE */}

              <CategoryTitle>
                About Zoiko Tech
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col items-start gap-6">
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
                h-96
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
              {/* CATEGORY TITLE */}

              <CategoryTitle>
                Work With Us
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col items-start gap-6">
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
                h-96
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
              {/* CATEGORY TITLE */}

              <CategoryTitle>
                Connect &amp; Support
              </CategoryTitle>

              {/* ITEMS */}

              <div className="flex w-full flex-col items-start gap-6">
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
            </div>

            {/* =================================================
                RIGHT HERO
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
              {/* HERO IMAGE */}

              <img
                src="/companymegamenu/image.png"
                alt="Zoiko Tech"
                className="
                  absolute
                  inset-0
                  size-full
                  object-cover
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-teal-950/90
                  via-emerald-900/55
                  to-black/0
                "
              />

              {/* =================================================
                  HERO CONTENT
              ================================================== */}

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
                  py-7
                "
              >
                <div className="flex w-full flex-col items-start gap-4">
                  {/* HEADING */}

                  <div
                    className={`${poppins.className} w-full text-2xl font-bold leading-9`}
                  >
                    <span className="text-white">
                      PEOPLE,
                      <br />
                      PARTNERSHIPS
                      <br />
                      AND PROGRESS
                      <br />
                    </span>

                    <span className="text-teal-500">
                      WORLDWIDE.
                    </span>
                  </div>

                  {/* DIVIDER */}

                  <div className="h-[3px] w-10 rounded-sm bg-teal-500" />

                  {/* TAGLINE */}

                  <div
                    className={`${poppins.className} w-full text-sm font-normal leading-5 text-slate-300`}
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