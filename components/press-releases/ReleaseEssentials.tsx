import type { ComponentType, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type IconKey = "headline" | "date" | "entity" | "currentness" | "source";

type EssentialCard = {
  id: string;
  title: string;
  description: string;
  icon: IconKey;
  /** Optional Tailwind max-width class that controls where the description wraps. */
  descriptionWidth?: string;
};

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const TOP_CARDS = [
  {
    id: "exact-headline",
    title: "Exact headline",
    description: "Approved formal wording, never a clickbait rewrite.",
    icon: "headline",
  },
  {
    id: "publication-date",
    title: "Publication date",
    description: "Visible date/time and machine-readable metadata from the release record.",
    icon: "date",
  },
  {
    id: "publishing-entity",
    title: "Publishing entity",
    description: "Correct public entity/brand and approved relationship wording.",
    icon: "entity",
  },
] as const satisfies readonly EssentialCard[];

const BOTTOM_CARDS = [
  {
    id: "currentness",
    title: "Currentness",
    description: "Current, corrected, superseded or withdrawn state, communicated in text.",
    icon: "currentness",
    descriptionWidth: "max-w-[340px]",
  },
  {
    id: "canonical-source",
    title: "Canonical source",
    description: "One authoritative release, with approved supporting links and history.",
    icon: "source",
  },
] as const satisfies readonly EssentialCard[];

/* -------------------------------------------------------------------------- */
/*                                  SVG icons                                 */
/* -------------------------------------------------------------------------- */

/** Artwork is drawn at the reference image scale, then shrunk to display size. */
const ART_SCALE = 1.81;

const DARK = "#0E3A40";
const MID = "#5B8E94";
const PAPER = "#F6FBFB";
const HALO = "#CDE4E6";
const TINT = "#E3F0F1";
const OUTLINE = 3;

function IconFrame({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={Math.round(width / ART_SCALE)}
      height={Math.round(height / ART_SCALE)}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="max-w-full"
    >
      {children}
    </svg>
  );
}

function CheckBadge({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill={PAPER} />
      <path
        d={`M${cx - 11} ${cy} L${cx - 1} ${cy + 10} L${cx + 15} ${cy - 11}`}
        stroke={DARK}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function HeadlineIcon() {
  return (
    <IconFrame width={175} height={142}>
      <circle cx="67" cy="70" r="67" fill={HALO} opacity="0.6" />
      <rect x="7" y="17" width="120" height="114" rx="6" fill={PAPER} stroke={MID} strokeWidth={OUTLINE} />
      <rect x="25" y="9" width="118" height="122" rx="6" fill={PAPER} stroke={DARK} strokeWidth={OUTLINE} />
      <rect x="41" y="26" width="85" height="13" rx="3" fill={DARK} />
      <path d="M39 60 H118 M39 77 H110 M39 95 H120" stroke={MID} strokeWidth="3.5" strokeLinecap="round" />
      <CheckBadge cx={144} cy={110} r={22} />
    </IconFrame>
  );
}

function DateIcon() {
  const columns = [35, 63, 91, 119] as const;
  const rows = [74, 95, 116] as const;
  return (
    <IconFrame width={200} height={142}>
      <circle cx="85" cy="70" r="67" fill={HALO} opacity="0.6" />
      <rect x="10" y="26" width="148" height="106" rx="8" fill={PAPER} stroke={DARK} strokeWidth={OUTLINE} />
      <path
        d="M10 34 a8 8 0 0 1 8 -8 H150 a8 8 0 0 1 8 8 V53 H10 Z"
        fill={HALO}
        stroke={DARK}
        strokeWidth={OUTLINE}
        strokeLinejoin="round"
      />
      <path d="M37 11 V37 M127 11 V37" stroke={DARK} strokeWidth="4" strokeLinecap="round" />
      {rows.map((y) =>
        columns.map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="9" height="9" rx="1.5" fill={MID} />
        )),
      )}
      <circle cx="165" cy="105" r="30" fill={PAPER} />
      <path
        d="M165 80 V102 L180 116"
        stroke={DARK}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

function EntityIcon() {
  const columns = [82, 106, 130] as const;
  const rows = [52, 79] as const;
  return (
    <IconFrame width={230} height={142}>
      <circle cx="117" cy="70" r="67" fill={HALO} opacity="0.6" />
      <circle cx="206" cy="36" r="11" fill={HALO} />
      <rect x="21" y="69" width="48" height="62" rx="5" fill="#CBE2E4" stroke={MID} strokeWidth={OUTLINE} />
      <rect x="167" y="69" width="43" height="62" rx="5" fill="#CBE2E4" stroke={MID} strokeWidth={OUTLINE} />
      <rect x="70" y="36" width="96" height="95" rx="4" fill={PAPER} stroke={DARK} strokeWidth={OUTLINE} />
      <path d="M58 38 L117 9 L177 38" stroke={DARK} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {rows.map((y) =>
        columns.map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" rx="1.5" fill={MID} />
        )),
      )}
      <rect x="105" y="109" width="25" height="22" fill={DARK} />
      <path d="M7 132 H222" stroke={DARK} strokeWidth="4" strokeLinecap="round" />
    </IconFrame>
  );
}

function CurrentnessIcon() {
  return (
    <IconFrame width={235} height={150}>
      <circle cx="106" cy="72" r="68" fill={HALO} opacity="0.6" />
      <rect x="14" y="30" width="78" height="96" rx="5" fill={PAPER} stroke={DARK} strokeWidth={OUTLINE} />
      <rect x="27" y="47" width="52" height="6" rx="2" fill={DARK} />
      <path d="M28 71 H76 M28 91 H78 M28 110 H70" stroke={MID} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="137" y="13" width="83" height="104" rx="5" fill={PAPER} stroke={DARK} strokeWidth={OUTLINE} />
      <rect x="150" y="33" width="55" height="6" rx="2" fill={DARK} />
      <path d="M150 57 H205 M150 76 H205 M150 92 H196" stroke={MID} strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M96 69 H126 M117 60 L127 69 L117 78"
        stroke={DARK}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <CheckBadge cx={198} cy={111} r={22} />
      <path d="M44 139 H181" stroke={MID} strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="139" r="5" fill={MID} />
      <circle cx="107" cy="139" r="5" fill={MID} />
      <circle cx="181" cy="139" r="5" fill={DARK} />
    </IconFrame>
  );
}

function SourceIcon() {
  return (
    <IconFrame width={270} height={150}>
      <circle cx="118" cy="72" r="66" fill={HALO} opacity="0.6" />
      <path d="M57 69 H85 M176 69 H211" stroke={DARK} strokeWidth="4" strokeLinecap="round" />
      <rect x="10" y="46" width="47" height="47" rx="6" fill={TINT} stroke={MID} strokeWidth={OUTLINE} />
      <path d="M20 58 H47 M20 72 H40" stroke={MID} strokeWidth="3" strokeLinecap="round" />
      <rect x="211" y="46" width="47" height="47" rx="6" fill={TINT} stroke={MID} strokeWidth={OUTLINE} />
      <path d="M221 58 H248 M221 72 H241" stroke={MID} strokeWidth="3" strokeLinecap="round" />
      <rect x="85" y="13" width="91" height="114" rx="5" fill={PAPER} stroke={DARK} strokeWidth={OUTLINE} />
      <rect x="100" y="33" width="62" height="6" rx="2" fill={DARK} />
      <path d="M98 57 H162 M98 75 H162 M98 92 H146" stroke={MID} strokeWidth="3.5" strokeLinecap="round" />
      <CheckBadge cx={166} cy={117} r={20} />
    </IconFrame>
  );
}

const ICONS = {
  headline: HeadlineIcon,
  date: DateIcon,
  entity: EntityIcon,
  currentness: CurrentnessIcon,
  source: SourceIcon,
} as const satisfies Record<IconKey, ComponentType>;

/* -------------------------------------------------------------------------- */
/*                                Sub-components                              */
/* -------------------------------------------------------------------------- */

function EssentialCardView({ card }: { card: EssentialCard }) {
  const Icon = ICONS[card.icon];
  return (
    <article className="flex h-full min-h-[257px] flex-col rounded-2xl border border-[#B7D6D9] bg-[#F0F8F9] p-[22px] text-center">
      <div className="flex h-[100px] items-center justify-center rounded-xl bg-[#DDEEEF]">
        <Icon />
      </div>
      <h3 className="mt-[14px] text-[19px] font-bold leading-7 tracking-[-0.01em] text-[#0E2F33]">
        {card.title}
      </h3>
      <p
        className={`mx-auto mt-[11px] text-sm leading-[23px] text-[#5E7379] ${
          "descriptionWidth" in card && card.descriptionWidth ? card.descriptionWidth : ""
        }`}
      >
        {card.description}
      </p>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function ReleaseEssentials() {
  return (
    <main className="min-h-screen bg-white">
      <section
        aria-labelledby="release-essentials-heading"
        className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 lg:px-0 lg:pt-[71px]"
      >
        <header>
          <h1
            id="release-essentials-heading"
            className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E2F33] sm:text-[36px]"
          >
            Five essentials for every release
          </h1>
          <p className="mt-[23px] text-sm leading-[22px] text-[#5B7077]">
            These five cards explain publication standards. They are not press release records.
          </p>
        </header>

        <ul className="m-0 mt-[34px] grid list-none grid-cols-1 gap-[16.5px] p-0 md:grid-cols-3">
          {TOP_CARDS.map((card) => (
            <li key={card.id}>
              <EssentialCardView card={card} />
            </li>
          ))}
        </ul>

        <ul className="m-0 mt-[16.5px] grid max-w-[1145px] list-none grid-cols-1 gap-[16.5px] p-0 md:grid-cols-2">
          {BOTTOM_CARDS.map((card) => (
            <li key={card.id}>
              <EssentialCardView card={card} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
