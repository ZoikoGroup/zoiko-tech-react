"use client";

import Link from "next/link";
import Image from "next/image";
import { poppins, plusJakarta } from "@/fonts";

/* =========================================================
   TYPES
========================================================= */

type SolutionsMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type SolutionItemProps = {
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
    <span className="relative mt-[1px] size-4 shrink-0 overflow-hidden">
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
   SOLUTION ITEM
========================================================= */

function SolutionItem({
  title,
  description,
  href,
  icon,
  onLinkClick,
}: SolutionItemProps) {
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
        py-2.5
      "
    >
      {/* =================================================
          ICON
      ================================================= */}

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
   CORE SOLUTIONS
========================================================= */

const coreSolutions = [
  {
    title: "Technology & SaaS",
    description: "Modern software and platform solutions",
    href: "#",
    icon: "/SolutionsMegaMenu/technology-saas.png",
  },
  {
    title: "AI & Agentic Automation",
    description: "Automate. Augment. Accelerate.",
    href: "#",
    icon: "/SolutionsMegaMenu/ai-agentic-automation.png",
  },
  {
    title: "Cloud & Developer Infrastructure",
    description: "Scalable cloud and developer solutions",
    href: "#",
    icon: "/SolutionsMegaMenu/cloud-developer-infrastructure.png",
  },
  {
    title: "Modernization & Integration",
    description: "Connect, modernize and transform",
    href: "#",
    icon: "/SolutionsMegaMenu/modernization-integration.png",
  },
];

/* =========================================================
   OPERATIONS & COMMUNICATIONS
========================================================= */

const operationsSolutions = [
  {
    title: "Workforce & Productivity",
    description: "Empower people and teams",
    href: "#",
    icon: "/SolutionsMegaMenu/workforce-productivity.png",
  },
  {
    title: "HR, Payroll & Revenue Operations",
    description: "Unify people, pay and revenue",
    href: "#",
    icon: "/SolutionsMegaMenu/hr-payroll-revenue-operations.png",
  },
  {
    title: "Telecom Operations & Monetization",
    description: "Optimize operations and unlock growth",
    href: "#",
    icon: "/SolutionsMegaMenu/telecom-operations-monetization.png",
  },
  {
    title: "Communications & Collaboration",
    description: "Seamless, secure and intelligent collaboration",
    href: "#",
    icon: "/SolutionsMegaMenu/communications-collaboration.png",
  },
];

/* =========================================================
   TRUST, SECURITY & GOVERNANCE
========================================================= */

const trustSolutions = [
  {
    title: "Cybersecurity & Resilience",
    description: "Protect what matters",
    href: "#",
    icon: "/SolutionsMegaMenu/cybersecurity-resilience.png",
  },
  {
    title: "Identity & Access",
    description: "Secure and simplify access",
    href: "#",
    icon: "/SolutionsMegaMenu/identity-access.png",
  },
  {
    title: "Regulatory & Compliance",
    description: "Navigate complexity with confidence",
    href: "#",
    icon: "/SolutionsMegaMenu/regulatory-compliance.png",
  },
  {
    title: "AI Governance & Assurance",
    description: "Responsible AI for lasting trust",
    href: "#",
    icon: "/SolutionsMegaMenu/ai-governance-assurance.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SolutionsMegaMenu({
  isOpen,
  onLinkClick,
}: SolutionsMegaMenuProps) {
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

          No fixed height.
          This prevents unnecessary white space below.
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
            INNER SOLUTIONS MENU
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
              BACKGROUND IMAGE

              Uses the Solutions Mega Menu background image.
              No additional gradient overlay.
          ================================================= */}

          <Image
            src="/SolutionsMegaMenu/solutions-mega-menu-bg.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="
              absolute
              inset-0
              z-0
              object-cover
              object-center
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 flex h-full w-full">
            {/* =================================================
                COLUMN 1
                CORE SOLUTIONS

                Figma:
                width: 320px
                height: 384px
                padding: 32px / 24px
            ================================================= */}

            <div
              className="
                flex
                h-96
                w-80
                shrink-0
                flex-col
                items-start
                gap-1
                overflow-hidden
                border-r
                border-gray-400
                px-8
                py-6
              "
            >
              {/* CATEGORY */}

              <CategoryTitle>
                Core Solutions
              </CategoryTitle>

              {/* Figma spacer */}

              <div className="h-4 w-full shrink-0" />

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  overflow-hidden
                "
              >
                {coreSolutions.map((item) => (
                  <SolutionItem
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
                OPERATIONS & COMMUNICATIONS
            ================================================= */}

            <div
              className="
                flex
                h-96
                w-80
                shrink-0
                flex-col
                items-start
                gap-1
                overflow-hidden
                border-r
                border-gray-400
                px-8
                py-6
              "
            >
              {/* CATEGORY */}

              <CategoryTitle>
                Operations &amp; Communications
              </CategoryTitle>

              {/* Figma spacer */}

              <div className="h-4 w-full shrink-0" />

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  overflow-hidden
                "
              >
                {operationsSolutions.map((item) => (
                  <SolutionItem
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
                TRUST, SECURITY & GOVERNANCE
            ================================================= */}

            <div
              className="
                flex
                h-96
                w-80
                shrink-0
                flex-col
                items-start
                gap-1
                overflow-hidden
                border-r
                border-gray-400
                px-8
                py-6
              "
            >
              {/* CATEGORY */}

              <CategoryTitle>
                Trust, Security &amp; Governance
              </CategoryTitle>

              {/* Figma spacer */}

              <div className="h-4 w-full shrink-0" />

              {/* ITEMS */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  overflow-hidden
                "
              >
                {trustSolutions.map((item) => (
                  <SolutionItem
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
                size-96 = 384 x 384
                padding: 32px
            ================================================= */}

            <div
              className="
                relative
                h-96
                w-96
                shrink-0
                overflow-hidden
                rounded-tr-lg
                rounded-br-lg
              "
            >
              {/* =================================================
                  RIGHT SIDE BACKGROUND IMAGE

                  Saved in:
                  public/SolutionsMegaMenu/image.png
              ================================================= */}

              <Image
                src="/SolutionsMegaMenu/image.png"
                alt=""
                fill
                priority
                sizes="384px"
                className="
                  object-cover
                  object-center
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
                  overflow-hidden
                  p-8
                "
              >
                {/* =================================================
                    HEADING
                ================================================= */}

                <div
                  className={`
                    ${plusJakarta.className}
                    flex
                    w-full
                    flex-col
                    items-start
                    gap-0
                  `}
                >
                  <span
                    className="
                      text-[24px]
                      font-extrabold
                      leading-7
                      text-white
                    "
                  >
                    SOLUTIONS
                  </span>

                  <span
                    className="
                      text-[24px]
                      font-extrabold
                      leading-7
                      text-white
                    "
                  >
                    FOR A MORE
                  </span>

                  <span
                    className="
                      text-[24px]
                      font-extrabold
                      leading-7
                      text-white
                    "
                  >
                    RESILIENT,
                  </span>

                  <span
                    className="
                      text-[24px]
                      font-extrabold
                      leading-7
                      text-white
                    "
                  >
                    INTELLIGENT
                  </span>

                  <span
                    className="
                      text-[24px]
                      font-extrabold
                      leading-7
                      text-teal-400
                    "
                  >
                    TOMORROW.
                  </span>
                </div>

                {/* =================================================
                    TEAL DIVIDER
                ================================================= */}

                <div
                  className="
                    mt-4
                    h-0.5
                    w-10
                    shrink-0
                    bg-teal-400
                  "
                />

                {/* =================================================
                    TAGLINE
                ================================================= */}

                <div
                  className={`
                    ${poppins.className}
                    mt-3
                    flex
                    w-full
                    flex-col
                    items-start
                    gap-0.5
                  `}
                >
                  <div
                    className="
                      text-[12px]
                      font-medium
                      leading-5
                      text-emerald-50
                    "
                  >
                    People. Possibilities.
                  </div>

                  <div
                    className="
                      text-[12px]
                      font-medium
                      leading-5
                      text-emerald-50
                    "
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