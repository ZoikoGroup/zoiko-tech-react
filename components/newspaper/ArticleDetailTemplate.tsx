import type { ComponentType, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type IconKey =
  | "breadcrumb"
  | "typeDate"
  | "headline"
  | "source"
  | "heroMedia"
  | "articleBody"
  | "correction"
  | "related"
  | "htmlFirst"
  | "structure"
  | "productClaims"
  | "assurance"
  | "metrics"
  | "neverIncluded";

type InfoCardData = {
  id: string;
  title: string;
  description: string;
  icon: IconKey;
};

type CardVariant = "region" | "rule";

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const REGIONS = [
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    description:
      "Home > Resources > Newspaper > article title, using the approved canonical path.",
    icon: "breadcrumb",
  },
  {
    id: "type-and-date",
    title: "Type and date",
    description: "Visible content type, publication date and updated or corrected state.",
    icon: "typeDate",
  },
  {
    id: "headline-and-dek",
    title: "Headline and dek",
    description: "Approved headline and optional summary.",
    icon: "headline",
  },
  {
    id: "source-ownership",
    title: "Source / ownership line",
    description:
      "Zoiko Tech or the approved content owner. A named author only when policy and source provide it.",
    icon: "source",
  },
  {
    id: "hero-media",
    title: "Hero media",
    description: "Optional rights- approved asset with alt text, caption and credit where required.",
    icon: "heroMedia",
  },
  {
    id: "article-body",
    title: "Article body",
    description:
      "Canonical public HTML with semantic headings, lists, tables and links. Never PDF-only.",
    icon: "articleBody",
  },
  {
    id: "correction-notice",
    title: "Correction / update notice",
    description: "Visible whenever material changes exist.",
    icon: "correction",
  },
  {
    id: "related-records",
    title: "Related records",
    description:
      "Registry-driven by topic and entity. No engagement-only recommender by default.",
    icon: "related",
  },
] as const satisfies readonly InfoCardData[];

const RULES = [
  {
    id: "html-first",
    title: "HTML first",
    description:
      "HTML is the complete representation. Any PDF is supplementary and version-matched.",
    icon: "htmlFirst",
  },
  {
    id: "structure",
    title: "Structure",
    description: "Headings reflect information structure, not visual decoration.",
    icon: "structure",
  },
  {
    id: "product-claims",
    title: "Product claims",
    description:
      "Capability and availability link to or derive from the current product and documentation registry. Prose can’t make a Preview, Build or Finish item Live.",
    icon: "productClaims",
  },
  {
    id: "assurance-claims",
    title: "Assurance claims",
    description:
      "Certification, compliance and security statements stay scoped and evidence-bound through Trust authority.",
    icon: "assurance",
  },
  {
    id: "metrics-and-quotes",
    title: "Metrics and quotes",
    description:
      "Customer outcomes, metrics and quotes need evidence and rights approval, with methodology where material.",
    icon: "metrics",
  },
  {
    id: "never-included",
    title: "Never included",
    description:
      "Credentials, private incident details, unreleased roadmaps, customer-confidential information or internal-only links.",
    icon: "neverIncluded",
  },
] as const satisfies readonly InfoCardData[];

/* -------------------------------------------------------------------------- */
/*                                  SVG icons                                 */
/* -------------------------------------------------------------------------- */

const STROKE = "#4BB7B1";
const FILL = "#1D4446";
const DEEP = "#0F2F32";
const BRIGHT = "#9ADBD5";
const LINE_WIDTH = 1.6;

function IconFrame({ children, height = 115 }: { children: ReactNode; height?: number }) {
  return (
    <svg
      viewBox={`0 0 217 ${height}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="h-[93px] w-[175px] shrink-0 overflow-visible"
    >
      {children}
    </svg>
  );
}

function Disc() {
  return (
    <circle cx="108" cy="57" r="56.5" fill={DEEP} stroke={STROKE} strokeWidth={LINE_WIDTH} />
  );
}

function BreadcrumbIcon() {
  return (
    <IconFrame>
      <Disc />
      <rect x="0.8" y="41" width="48" height="31" rx="7" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="84.5" y="41" width="48" height="31" rx="7" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="168.2" y="41" width="48" height="31" rx="7" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
    </IconFrame>
  );
}

function TypeDateIcon() {
  const topRow = [73, 99, 124, 149] as const;
  const bottomRow = [73, 99, 124] as const;
  return (
    <IconFrame>
      <Disc />
      <rect x="55" y="14" width="107" height="91" rx="6" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      {topRow.map((x) => (
        <rect key={`top-${x}`} x={x} y="55" width="8" height="8" rx="1" fill={STROKE} />
      ))}
      {bottomRow.map((x) => (
        <rect key={`bottom-${x}`} x={x} y="73" width="8" height="8" rx="1" fill={STROKE} />
      ))}
      <circle cx="149" cy="91" r="14" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
    </IconFrame>
  );
}

function HeadlineIcon() {
  const rows = [47, 61, 74, 88] as const;
  return (
    <IconFrame>
      <Disc />
      <rect x="51" y="11" width="116" height="94" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      {rows.map((y) => (
        <path key={y} d={`M62 ${y} H156`} stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      ))}
    </IconFrame>
  );
}

function SourceIcon() {
  const rows = [51, 64, 77, 90] as const;
  return (
    <IconFrame>
      <Disc />
      <circle cx="57" cy="47" r="17" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="86" y="14" width="78" height="91" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      {rows.map((y, index) => (
        <path
          key={y}
          d={`M98 ${y} H${index === 0 ? 153 : 144}`}
          stroke={STROKE}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <circle cx="151" cy="93" r="14" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
    </IconFrame>
  );
}

function HeroMediaIcon() {
  return (
    <IconFrame>
      <Disc />
      <path d="M100 4 H116 M108 0 V9" stroke={STROKE} strokeWidth={LINE_WIDTH} strokeLinecap="round" />
      <rect x="31" y="23" width="156" height="84" rx="6" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <circle cx="144" cy="45" r="8" fill={STROKE} />
    </IconFrame>
  );
}

function ArticleBodyIcon() {
  const rows = [47, 61, 74, 87] as const;
  return (
    <IconFrame>
      <Disc />
      <rect x="45" y="9" width="128" height="98" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="57" y="20" width="26" height="17" rx="2" fill={STROKE} />
      <path d="M91 33 H145" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      {rows.map((y) => (
        <path key={y} d={`M57 ${y} H163`} stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      ))}
    </IconFrame>
  );
}

function CorrectionIcon() {
  const rows = [50, 63, 77] as const;
  return (
    <IconFrame>
      <Disc />
      <rect x="65" y="14" width="84" height="95" rx="6" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      {rows.map((y, index) => (
        <path
          key={y}
          d={`M76 ${y} H${index === 2 ? 122 : 139}`}
          stroke={STROKE}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <circle cx="147" cy="95" r="16" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
    </IconFrame>
  );
}

function RelatedIcon() {
  return (
    <IconFrame height={120}>
      <Disc />
      <path
        d="M62 44 L109 56 M156 44 L109 56 M109 56 V81"
        stroke={STROKE}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="17" y="13" width="45" height="45" rx="7" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="157" y="13" width="45" height="45" rx="7" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="87" y="81" width="45" height="38" rx="7" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <circle cx="109" cy="56" r="17" fill={STROKE} />
    </IconFrame>
  );
}

function HtmlFirstIcon() {
  return (
    <IconFrame>
      <Disc />
      <rect x="28" y="16" width="160" height="92" rx="6" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <path d="M28 35 H188" stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <circle cx="40" cy="25.5" r="2" fill={STROKE} />
      <circle cx="51" cy="25.5" r="2" fill={STROKE} />
      <circle cx="62" cy="25.5" r="2" fill={STROKE} />
      <path
        d="M76 54 L59 70 L76 86 M100 86 L119 50 M140 54 L157 70 L140 86"
        stroke={BRIGHT}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

function StructureIcon() {
  return (
    <IconFrame>
      <Disc />
      <rect x="28" y="16" width="160" height="92" rx="6" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <path d="M43 34 H126" stroke={BRIGHT} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M46 45 V56 H55 M63 64 V77 H72"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M61 56 H157" stroke={BRIGHT} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M78 77 H163" stroke={BRIGHT} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M78 90 H143" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
    </IconFrame>
  );
}

function ProductClaimsIcon() {
  const rows = [29, 43, 57] as const;
  return (
    <IconFrame>
      <Disc />
      <rect x="41" y="22" width="69" height="73" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="59" y="8" width="67" height="75" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      {rows.map((y) => (
        <path key={y} d={`M69 ${y} H114`} stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      ))}
      <circle cx="155" cy="72" r="26" fill={DEEP} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <path
        d="M141 73 L151 82 L168 62"
        stroke={BRIGHT}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

function AssuranceIcon() {
  return (
    <IconFrame>
      <Disc />
      <path
        d="M108 6 L154 20 V67 Q154 94 108 112 Q62 94 62 67 V20 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={LINE_WIDTH}
        strokeLinejoin="round"
      />
      <path
        d="M70 88 Q90 104 108 106 Q126 104 146 88"
        stroke={STROKE}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M89 57 L97 65 L113 48"
        stroke={BRIGHT}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

function MetricsIcon() {
  return (
    <IconFrame>
      <Disc />
      <rect x="24" y="33" width="104" height="69" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="41" y="78" width="15" height="14" rx="2" fill={STROKE} />
      <rect x="65" y="63" width="15" height="29" rx="2" fill={STROKE} />
      <rect x="90" y="46" width="15" height="46" rx="2" fill={STROKE} />
      <rect x="143" y="16" width="49" height="44" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <rect x="156" y="29" width="9" height="10" rx="1" stroke={BRIGHT} strokeWidth="1.5" />
      <rect x="173" y="29" width="9" height="10" rx="1" stroke={BRIGHT} strokeWidth="1.5" />
      <path d="M146 63 L151 69" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </IconFrame>
  );
}

function NeverIncludedIcon() {
  const rows = [49, 63, 78, 92] as const;
  return (
    <IconFrame>
      <Disc />
      <rect x="67" y="2" width="98" height="108" rx="6" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <path d="M72 35 H132" stroke={BRIGHT} strokeWidth="2.5" strokeLinecap="round" />
      {rows.map((y) => (
        <path key={y} d={`M72 ${y} H112`} stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      ))}
      <path
        d="M121 59 V51 a13.5 13.5 0 0 1 27 0 V59"
        stroke={BRIGHT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="113" y="59" width="43" height="33" rx="5" fill={FILL} stroke={STROKE} strokeWidth={LINE_WIDTH} />
      <circle cx="134.5" cy="72" r="3" fill={BRIGHT} />
      <path d="M134.5 75 V82" stroke={BRIGHT} strokeWidth="2" strokeLinecap="round" />
    </IconFrame>
  );
}

const ICONS = {
  breadcrumb: BreadcrumbIcon,
  typeDate: TypeDateIcon,
  headline: HeadlineIcon,
  source: SourceIcon,
  heroMedia: HeroMediaIcon,
  articleBody: ArticleBodyIcon,
  correction: CorrectionIcon,
  related: RelatedIcon,
  htmlFirst: HtmlFirstIcon,
  structure: StructureIcon,
  productClaims: ProductClaimsIcon,
  assurance: AssuranceIcon,
  metrics: MetricsIcon,
  neverIncluded: NeverIncludedIcon,
} as const satisfies Record<IconKey, ComponentType>;

/* -------------------------------------------------------------------------- */
/*                                Sub-components                              */
/* -------------------------------------------------------------------------- */

const CARD_STYLES = {
  region: "bg-[#FFFFFF0D]",
  rule: "border border-[#2C6F72]/70 bg-[#FFFFFF0D]",
} as const satisfies Record<CardVariant, string>;

const DESCRIPTION_STYLES = {
  region: "mt-[23px] leading-[25px]",
  rule: "mt-5 leading-6",
} as const satisfies Record<CardVariant, string>;

function InfoCard({ card, variant }: { card: InfoCardData; variant: CardVariant }) {
  const Icon = ICONS[card.icon];
  return (
    <article
      className={`flex h-full flex-col items-center rounded-[22px] px-5 pb-5 pt-[33px] text-center ${CARD_STYLES[variant]}`}
    >
      <Icon />
      <h3 className="mt-[31px] text-base font-semibold leading-[22px] text-white">{card.title}</h3>
      <p className={`text-[15px] text-[#D6E4E4] ${DESCRIPTION_STYLES[variant]}`}>
        {card.description}
      </p>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function ArticleDetailTemplate() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] antialiased">
      <div className="mx-auto w-full max-w-6xl px-4 pb-[95px] pt-12 lg:px-0 lg:pt-[94px]">
        <header>
          <h1 className="text-[30px] font-bold leading-10 tracking-[-0.02em] text-white sm:text-[34px]">
            Article detail template
          </h1>
          <p className="mt-[25px] text-[15px] leading-5 text-[#E6EEEE]">
            Eleven regions, in this order.
          </p>
        </header>

        <section aria-labelledby="article-regions-heading" className="mt-5">
          <h2
            id="article-regions-heading"
            className="text-[17px] font-bold leading-6 text-white"
          >
            Article regions
          </h2>
          <ul className="m-0 mt-[19px] grid max-w-[1142px] list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((card) => (
              <li key={card.id}>
                <InfoCard card={card} variant="region" />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="article-rules-heading" className="mt-[18px]">
          <h2 id="article-rules-heading" className="text-[17px] font-bold leading-6 text-white">
            Article body rules
          </h2>
          <ul className="m-0 mt-[19px] grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
            {RULES.map((card) => (
              <li key={card.id}>
                <InfoCard card={card} variant="rule" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
