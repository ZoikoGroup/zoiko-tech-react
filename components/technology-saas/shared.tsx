/* ============================================================
   Technology & SaaS — shared constants
   Figma file: 1440w light (6).png
   Images live in /public/technology-saas
   ============================================================ */

export const asset = (name: string) => `/technology-saas/${name}`;

/* ---------- Section gradient backgrounds (sampled from Figma render) ---------- */
export const gradDarkToTeal = {
  backgroundImage: "linear-gradient(157deg, #010f14 0%, #123f44 100%)",
};
export const gradDarkToTealSoft = {
  backgroundImage: "linear-gradient(157deg, #010f14 0%, #0d353b 100%)",
};
export const gradDarkToTealDeep = {
  backgroundImage: "linear-gradient(157deg, #010f14 0%, #0a2f34 100%)",
};

/* ---------- Typography helpers ---------- */
export const heading = "zk-heading text-4xl font-bold leading-10"; // 36/40 Poppins bold
export const body = "zk-body text-base font-normal leading-6"; // 16/24 Inter

/* ---------- Card / container primitives ---------- */
export const cardLight =
  "bg-color-white-solid rounded-2xl shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22)] outline outline-1 -outline-offset-1 outline-color-cyan-87";
export const cardDark =
  "bg-white/6 rounded-2xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35";
export const cardDarkRow =
  "bg-white/6 rounded-xl outline outline-1 -outline-offset-1 outline-color-cyan-67/40";

/* ---------- Buttons ---------- */
export const primaryBtn =
  "inline-flex items-center min-h-12 px-6 bg-color-white-solid rounded-[10px] outline outline-2 -outline-offset-2 outline-color-white-solid zk-body text-color-black-solid text-base font-semibold hover:bg-cyan-50 transition-colors duration-200";
export const ghostBtn =
  "inline-flex items-center min-h-12 px-6 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-67 zk-body text-color-white-solid text-base font-semibold hover:bg-white/10 transition-colors duration-200";
export const textLink =
  "zk-body text-color-cyan-67 text-base font-semibold underline leading-6 hover:text-color-white-solid transition-colors duration-200";
export const darkSectionBtn =
  "inline-flex items-center min-h-12 px-6 bg-color-cyan-7 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-7 zk-body text-color-white-solid text-base font-semibold hover:bg-color-cyan-19 transition-colors duration-200";
export const skyBtn =
  "inline-flex items-center justify-center min-h-12 px-6 py-3 bg-sky-300 rounded-[10px] zk-body text-color-cyan-8 text-base font-semibold hover:bg-sky-200 transition-colors duration-200 disabled:opacity-60";

/* ---------- Section header (title + subtitle) ---------- */
export function SectionHeader({
  title,
  subtitle,
  light,
  center,
  titleClassName = "",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
  center?: boolean;
  titleClassName?: string;
}) {
  return (
    <>
      <h2
        className={`${heading} ${light ? "text-color-white-solid" : "text-color-cyan-6"} ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${body} w-full max-w-[706.56px] ${center ? "text-center mx-auto" : ""} ${
            light ? "text-color-cyan-90" : "text-color-cyan-35-2"
          }`}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}

/* ---------- Status pill (evidence state badges) ---------- */
export function EvidencePill({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-[99px] outline outline-1 -outline-offset-1 outline-color-cyan-7 px-2.5 pt-px pb-[2.47px] ${className}`}
    >
      <span className="zk-body text-color-cyan-7 text-xs font-semibold leading-5">
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   Image mapping — every image slot in the Figma render,
   matched against the provided assets in /public/technology-saas
   ============================================================ */

/* Hero (right visual, 534×533) */
export const heroImg = { src: asset("e8e03630abab1c6f9b05fd93002698d3c432da20.png") };

/* Card thumbnails — mapped to actual files present in /public/technology-saas */
export const photo = {
  // WhatDoYouNeedToGovern section (5 cards)
  saasBoard:  asset("photo-1451187580459-43490279c0fa.png"),        // Modernize legacy systems
  analytics:  asset("photo-1460925895917-afdab827c52f (4).png"),    // Consolidate SaaS sprawl
  circuit:    asset("photo-1461749280684-dccba630e2f6.png"),         // Build with governed AI
  team:       asset("photo-1518770660439-4636190af475 (2).png"),     // Create a developer platform
  approval:   asset("photo-1526374965328-7f61d4dc18c5.png"),         // Unify operations

  // OutcomeArchitecture row 1 (4 cards)
  saasBoard2: asset("photo-1550751827-4bd374c3f58b.png"),            // Modernize core work
  circuit2:   asset("photo-1551288049-bebda4e38f71.png"),            // Build governed intelligence
  analytics2: asset("photo-1558494949-ef010cbdcc31.png"),            // Create shared platform foundations
  decision:   asset("photo-1451187580459-43490279c0fa (1).png"),     // Run across functions

  // DeliveryPatterns (6 cards)
  analytics3: asset("photo-1461749280684-dccba630e2f6 (1).png"),    // Coexist
  analytics4: asset("photo-1461749280684-dccba630e2f6 (2).png"),    // Integrate
  circuit3:   asset("photo-1518770660439-4636190af475 (3).png"),     // Modernize in place
  saasBoard3: asset("photo-1550751827-4bd374c3f58b (1).png"),        // Migrate
  saasBoard4: asset("photo-1550751827-4bd374c3f58b (2).png"),        // Consolidate
  decision2:  asset("photo-1558494949-ef010cbdcc31 (2).png"),        // Build new

  // PlatformEvidence (5 cards)
  monitoring: asset("photo-1451187580459-43490279c0fa.png"),         // Business operations
  desk2:      asset("photo-1451187580459-43490279c0fa (1).png"),     // Developer / infrastructure
  decision3:  asset("photo-1451187580459-43490279c0fa (2).png"),     // AI / automation
  decision4:  asset("photo-1460925895917-afdab827c52f (4).png"),    // Communications
  approval2:  asset("photo-1460925895917-afdab827c52f (5).png"),    // Trust / compliance

  // IntegrationDeveloperLayer (5 cards)
  devBuild:   asset("photo-1461749280684-dccba630e2f6.png"),         // Build
  devInt:     asset("photo-1461749280684-dccba630e2f6 (1).png"),    // Integrate
  devTest:    asset("photo-1461749280684-dccba630e2f6 (2).png"),    // Test
  devOps:     asset("photo-1518770660439-4636190af475 (2).png"),     // Operate
  devGov:     asset("photo-1518770660439-4636190af475 (3).png"),     // Govern

  // TechnologyInPractice (4 cards)
  practCase:  asset("photo-1526374965328-7f61d4dc18c5.png"),         // Case study
  practRef:   asset("photo-1550751827-4bd374c3f58b (1).png"),        // Reference architecture
  practBench: asset("photo-1550751827-4bd374c3f58b (2).png"),        // Technical benchmark
  practDep:   asset("photo-1550751827-4bd374c3f58b.png"),            // Deployment note
};

/* Large section images */
export const modernizeSquareImg = {
  src: asset("34acc58f8655e15591043f8bcaf4f1a0c7564d51.png"),
  alt: "Modernized technology platform overview",
};
export const journeyImg = {
  src: asset("Solution capability stock image.png"),
  alt: "Technology rollout timeline across the enterprise",
};
export const securitySideImg = {
  src: asset("0f22e88621147630b76aa94c0171d4b7ecd0f840.png"),
  alt: "Security and governance operations",
};
export const developerImg = {
  src: asset("photo-1551288049-bebda4e38f71 (1).png"),
  alt: "Developer integration architecture",
};
export const scaleTrustImg = {
  src: asset("photo-1460925895917-afdab827c52f (5).png"),
  alt: "Trust and operations signal panel",
};
export const extendImg = {
  src: asset("photo-1558494949-ef010cbdcc31 (1).png"),
  alt: "Platform expansion pattern",
};
export const journeySideImg = {
  src: asset("Discovery to expansion stock image.png"),
  alt: "Delivery journey from discovery to expansion",
};
export const faqImg = {
  src: asset("14326467e7a6021112b86cbef41cc9f8208832bf.png"),
  alt: "Team discussing technology architecture",
};

/* ---------- Card wrapper: image header + title + description ---------- */
export function ThumbCard({
  img,
  title,
  desc,
  pb = "pb-5",
  titleClass = "zk-body text-color-cyan-6 text-base font-bold leading-6",
  descClass = `${body} text-color-cyan-35-2`,
}: {
  img: string;
  title: React.ReactNode;
  desc: React.ReactNode;
  pb?: string;
  titleClass?: string;
  descClass?: string;
}) {
  return (
    <div
      className={`self-stretch ${pb} ${cardLight} flex flex-col items-center gap-[3.30px] overflow-hidden`}
    >
      <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="self-stretch w-full px-5 pt-3 flex flex-col justify-start items-start">
        <p className={`self-stretch ${titleClass}`}>{title}</p>
      </div>
      <div className="w-full px-5 pb-[0.63px] flex flex-col justify-start items-start">
        <p className={`self-stretch ${descClass}`}>{desc}</p>
      </div>
    </div>
  );
}
