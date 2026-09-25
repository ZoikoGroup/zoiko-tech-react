"use client";

import Link from "next/link";
import Image from "next/image";
import { poppins, plusJakarta } from "@/fonts";

/* =========================================================
   TYPES
========================================================= */

type PlatformMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type PlatformItemProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  onLinkClick: () => void;
};

type BottomLinkProps = {
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
    <span
      aria-hidden="true"
      className="relative mt-[1px] size-4 shrink-0 overflow-hidden"
    >
      <span
        className="
          absolute
          left-[5px]
          top-[4px]
          block
          h-[7px]
          w-[7px]
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
   PLATFORM ITEM
========================================================= */

function PlatformItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: PlatformItemProps) {
  return (
    <a
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
        rounded-md
        outline-none
        transition-colors
        duration-150
        focus-visible:ring-2
        focus-visible:ring-teal-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-transparent
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          size-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-teal-700
        "
      >
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

        <div className="flex w-full min-w-0 items-center justify-between gap-2">
          <span
            className={`
              ${plusJakarta.className}
              min-w-0
              flex-1
              text-[12px]
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
            text-[10px]
            font-normal
            leading-3
            text-gray-300
          `}
        >
          {description}
        </p>
      </div>
    </a>
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
        text-[12px]
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
   BOTTOM LINK
========================================================= */

function BottomLink({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: BottomLinkProps) {
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
        gap-2
        overflow-hidden
        rounded-md
        outline-none
        focus-visible:ring-2
        focus-visible:ring-teal-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-transparent
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          size-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-teal-700
        "
      >
        <Image
          src={icon}
          alt=""
          width={14}
          height={14}
          className="size-3.5 object-contain"
        />
      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1 overflow-hidden">
        {/* TITLE + ARROW */}

        <div className="flex w-full items-center justify-between gap-2">
          <span
            className={`
              ${poppins.className}
              min-w-0
              flex-1
              text-[12px]
              font-semibold
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
            text-[10px]
            font-normal
            leading-3
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
   ENTERPRISE & WORKFORCE
========================================================= */

const enterpriseProducts = [
  {
    title: "ZoikoTime",
    description: "Time, scheduling and workforce management",
    href: "https://zoikotime.com",
    icon: "/PlatformMegaMenu/enterprise-zoikotime.png",
  },
  {
    title: "Zoiko HR",
    description: "People operations for a modern workforce",
    href: "https://zoikohr.com",
    icon: "/PlatformMegaMenu/enterprise-zoiko-hr.png",
  },
  {
    title: "Zoiko Payroll",
    description: "Payroll, benefits and global pay",
    href: "https://zoikopayroll.com",
    icon: "/PlatformMegaMenu/enterprise-zoiko-payroll.png",
  },
  {
    title: "Zoiko Billing",
    description: "Billing, invoicing and revenue operations",
    href: "https://zoikobilling.com",
    icon: "/PlatformMegaMenu/enterprise-zoiko-billing.png",
  },
];

/* =========================================================
   AI, COMMUNICATIONS & DIGITAL PLATFORMS
========================================================= */

const digitalProducts = [
  {
    title: "ZoikoVertex",
    description: "AI and analytics for real-world impact",
    href: "https://zoikovertex.com",
    icon: "/PlatformMegaMenu/ai-zoikovertex.png",
  },
  {
    title: "ZoikoNex",
    description: "Next-generation communications platform",
    href: "https://zoikonex.com",
    icon: "/PlatformMegaMenu/ai-zoikonex.png",
  },
  {
    title: "Zoiko Sema",
    description: "Intelligent messaging and AI agents",
    href: "https://zoikosema.com",
    icon: "/PlatformMegaMenu/ai-zoiko-sema.png",
  },
  {
    title: "Zoiko Social",
    description: "Social platforms for communities and brands",
    href: "https://zoikosocial.com",
    icon: "/PlatformMegaMenu/group-zoiko-social.png",
  },
  {
    title: "Zoiko Local",
    description: "Location intelligence and local engagement",
    href: "https://zoikolocal.com",
    icon: "/PlatformMegaMenu/ai-zoiko-local.png",
  },
  {
    title: "ZoikoStream Live Events",
    description: "Live streaming, virtual and hybrid events",
    href: "https://zoikostream.com",
    icon: "/PlatformMegaMenu/ai-zoikostream.png",
  },
];

/* =========================================================
   CONNECTED GROUP PLATFORMS
========================================================= */

const groupProducts = [
  {
    title: "ZoikoMeds",
    description: "Healthcare access and patient experiences",
    href: "https://zoikomeds.com",
    icon: "/PlatformMegaMenu/group-zoikomed.png",
  },
  {
    title: "Zoiko Rooms",
    description: "Smart rooms and workspace experiences",
    href: "https://zoikorooms.com",
    icon: "/PlatformMegaMenu/group-zoiko-rooms.png",
  },
  {
    title: "Zoiko Pay",
    description: "Payments and financial experiences",
    href: "https://zoikopay.com",
    icon: "/PlatformMegaMenu/group-zoiko-pay.png",
  },
  {
    title: "Zoiko Travel",
    description: "Travel and mobility platform",
    href: "https://zoikotravel.com",
    icon: "/PlatformMegaMenu/group-zoiko-travel.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PlatformMegaMenu({
  isOpen,
  onLinkClick,
}: PlatformMegaMenuProps) {
  return (
    <div
      className={`
        fixed
        left-1/2
        top-[95px]
        z-[100]
        w-[calc(100vw-128px)]
        max-w-[1440px]
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
      ===================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          items-start
          justify-start
          overflow-hidden
          bg-white
          px-12
          pb-8
          pt-7
          shadow-[0px_12px_28px_0px_rgba(15,23,42,0.08)]
        "
      >
        {/* ===================================================
            INNER MEGA MENU
        =================================================== */}

        <div
          className="
            relative
            flex
            h-96
            w-full
            overflow-hidden
            rounded-lg
            shadow-[0px_4px_4px_0px_rgba(31,122,108,0.60)]
          "
        >
          {/* =================================================
              MAIN BACKGROUND IMAGE
          ================================================= */}

          <Image
            src="/PlatformMegaMenu/platform-mega-menu-bg.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="
              absolute
              inset-0
              z-0
              object-cover
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 flex h-full w-full">
            {/* =================================================
                COLUMN 1
            ================================================= */}

            <div
              className="
                flex
                h-full
                w-[25%]
                shrink-0
                flex-col
                overflow-hidden
                border-r
                border-slate-400/60
                px-8
                py-7
              "
            >
              <CategoryTitle>
                Enterprise &amp; Workforce
              </CategoryTitle>

              <div
                className="
                  mt-6
                  flex
                  w-full
                  flex-col
                  gap-[19px]
                  overflow-hidden
                "
              >
                {enterpriseProducts.map((item) => (
                  <PlatformItem
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
            ================================================= */}

            <div
              className="
                flex
                h-full
                w-[25%]
                shrink-0
                flex-col
                overflow-hidden
                border-r
                border-slate-400/60
                px-8
                py-6
              "
            >
              <CategoryTitle>
                AI, Communications &amp; Digital
                <br />
                Platforms
              </CategoryTitle>

              <div
                className="
                  mt-6
                  flex
                  w-full
                  flex-col
                  gap-[13px]
                  overflow-hidden
                "
              >
                {digitalProducts.map((item) => (
                  <PlatformItem
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
            ================================================= */}

            <div
              className="
                flex
                h-full
                w-[25%]
                shrink-0
                flex-col
                overflow-hidden
                border-r
                border-slate-400/60
                px-8
                py-6
              "
            >
              <CategoryTitle>
                Connected Group Platforms
                <br />
                Powered by Zoiko Technology
              </CategoryTitle>

              <div
                className="
                  mt-6
                  flex
                  w-full
                  flex-col
                  gap-[14px]
                  overflow-hidden
                "
              >
                {groupProducts.map((item) => (
                  <PlatformItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    onLinkClick={onLinkClick}
                  />
                ))}
              </div>

              {/* DIVIDER */}

              <div
                className="
                  mt-4
                  h-px
                  w-full
                  shrink-0
                  bg-slate-400/70
                "
              />

              {/* BOTTOM LINKS */}

              <div
                className="
                  mt-3
                  flex
                  w-full
                  flex-col
                  gap-3
                  overflow-hidden
                "
              >
                <BottomLink
                  title="Explore All Platforms"
                  description="Discover the full platform portfolio"
                  href="/platforms"
                  icon="/PlatformMegaMenu/explore-all-platforms.png"
                  onLinkClick={onLinkClick}
                />

                <BottomLink
                  title="Platform Ecosystem"
                  description="An open ecosystem for partners"
                  href="/platform-ecosystem"
                  icon="/PlatformMegaMenu/platform-ecosystem.png"
                  onLinkClick={onLinkClick}
                />
              </div>
            </div>

            {/* =================================================
                COLUMN 4
                RIGHT HERO IMAGE
            ================================================= */}

            <div
              className="
                relative
                h-full
                min-w-0
                flex-1
                overflow-hidden
                rounded-tr-lg
                rounded-br-lg
              "
            >
              {/* RIGHT SIDE BACKGROUND IMAGE */}

              <Image
                src="/PlatformMegaMenu/image.png"
                alt=""
                fill
                priority
                sizes="480px"
                className="
                  object-cover
                  object-center
                "
              />

              {/* HERO CONTENT */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  w-full
                  flex-col
                  items-start
                  px-8
                  py-7
                "
              >
                {/* HEADING */}

                <div
                  className={`
                    ${poppins.className}
                    flex
                    flex-col
                    items-start
                    gap-0
                  `}
                >
                  <span
                    className="
                      text-[30px]
                      font-extrabold
                      leading-8
                      text-white
                    "
                  >
                    PLATFORMS
                  </span>

                  <span
                    className="
                      text-[30px]
                      font-extrabold
                      leading-8
                      text-white
                    "
                  >
                    THAT MOVE
                  </span>

                  <span
                    className="
                      text-[30px]
                      font-extrabold
                      leading-8
                      text-white
                    "
                  >
                    THE WORLD
                  </span>

                  <span
                    className="
                      text-[30px]
                      font-extrabold
                      leading-8
                      text-teal-400
                    "
                  >
                    FORWARD.
                  </span>
                </div>

                {/* TEAL LINE */}

                <div
                  className="
                    mt-4
                    h-[3px]
                    w-10
                    shrink-0
                    rounded-sm
                    bg-teal-400
                  "
                />

                {/* TAGLINE */}

                <div
                  className={`
                    ${poppins.className}
                    mt-3
                    flex
                    flex-col
                    gap-0.5
                  `}
                >
                  <span
                    className="
                      text-[12px]
                      font-medium
                      leading-5
                      text-sky-100
                    "
                  >
                    People. Possibilities.
                  </span>

                  <span
                    className="
                      text-[12px]
                      font-medium
                      leading-5
                      text-sky-100
                    "
                  >
                    A More Connected Tomorrow.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}