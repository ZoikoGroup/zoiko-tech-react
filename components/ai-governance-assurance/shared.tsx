/* ============================================================
   AI Governance & Assurance — shared constants
   Figma file: 1440w light (5).png
   Images live in /public/ai-governance-assurance
   ============================================================ */

export const asset = (name: string) => `/ai-governance-assurance/${name}`;

/* ---------- Section gradient backgrounds (sampled from Figma render) ---------- */
export const gradDarkToTeal = {
  backgroundImage: "linear-gradient(157deg, #010f14 0%, #0e353c 100%)",
};
export const gradDarkToTealSoft = {
  backgroundImage: "linear-gradient(157deg, #010f14 0%, #0d353b 100%)",
};

/* ---------- Typography helpers ---------- */
export const heading = "zk-heading text-4xl font-bold leading-10"; // 36/40 Poppins bold
export const body = "zk-body text-base font-normal leading-6"; // 16/24 Inter

/* ---------- Card / table primitives ---------- */
export const cardLight =
  "px-5 bg-color-grey-97 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)] outline outline-1 -outline-offset-1 outline-color-cyan-87";
export const cardLightElevated =
  "px-5 bg-color-grey-97 rounded-2xl shadow-[0px_8px_18px_0px_rgba(0,31,36,0.32)] outline outline-1 -outline-offset-1 outline-color-cyan-87";
export const cardDark =
  "bg-white/6 rounded-2xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35";

export const thCell =
  "px-3.5 pt-2 pb-2.5 bg-black/40 border-b border-color-cyan-87";
export const thText = "zk-body text-color-white-solid text-sm font-semibold leading-6";
export const tdCell = "px-3.5 py-2.5 border-b border-color-cyan-67/20";
export const tdTextStrong = "zk-body text-color-cyan-90 text-sm font-semibold leading-6";
export const tdText = "zk-body text-color-cyan-90 text-sm font-normal leading-6";

/* ---------- Status pills (registry / evaluation tables) ---------- */
export const pillGreen =
  "inline-flex items-start rounded-md bg-color-cyan-19/40 outline outline-1 -outline-offset-1 outline-color-cyan-19 px-2 pb-[1.47px]";
export const pillGreenText =
  "zk-body text-color-white-solid text-xs font-semibold leading-5";
export const pillAmber =
  "inline-flex items-start rounded-md bg-color-grey-92/40 outline outline-1 -outline-offset-1 outline-color-yellow-73 px-2 pb-[1.47px]";
export const pillAmberText =
  "zk-body text-color-orange-21 text-xs font-semibold leading-5";
export const pillRed =
  "inline-flex items-start rounded-md bg-color-grey-94/40 outline outline-1 -outline-offset-1 outline-color-orange-77-2 px-2 pb-[1.47px]";
export const pillRedText =
  "zk-body text-color-orange-25 text-xs font-semibold leading-5";

/* ---------- Buttons ---------- */
export const primaryBtn =
  "inline-flex items-center min-h-12 px-6 bg-color-white-solid rounded-[10px] outline outline-2 -outline-offset-2 outline-color-white-solid zk-body text-color-black-solid text-base font-semibold hover:bg-cyan-50 transition-colors duration-200";
export const ghostBtn =
  "inline-flex items-center min-h-12 px-6 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-67 zk-body text-color-white-solid text-base font-semibold hover:bg-white/10 transition-colors duration-200";
export const textLink =
  "zk-body text-color-cyan-67 text-base font-semibold underline leading-6 hover:text-color-white-solid transition-colors duration-200";
export const darkSectionBtn =
  "inline-flex items-center min-h-12 px-6 bg-color-cyan-7 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-7 zk-body text-color-white-solid text-base font-semibold hover:bg-color-cyan-19 transition-colors duration-200";

/* ---------- Hero flow chips ---------- */
export const chipBase =
  "bg-white/7 zk-body text-color-white-solid text-sm font-semibold leading-5";
export const chipArrow = "zk-body text-color-cyan-67 text-sm font-semibold leading-5";
export const chipFilled = "bg-color-cyan-32/60 zk-body text-color-white-solid text-sm font-semibold leading-5";

/* ---------- Section header (title + subtitle) ---------- */
export function SectionHeader({
  title,
  subtitle,
  light,
  titleClassName = "",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
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
          className={`${body} w-full max-w-[706.56px] ${
            light ? "text-color-cyan-90" : "text-color-cyan-35-2"
          }`}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}

/* ============================================================
   Image mapping — every card photo slot in the Figma render,
   matched against the provided assets in /public/ai-governance-assurance
   ============================================================ */

/* Hero (right visual, 732×488): referenced as "1440w light (5).png" in the brief */
export const heroImg = { src: asset("ss.png") };

/* 281×140 card thumbnails (w-72 h-36 slots) */
export const thumb = {
  inventory: asset("photo-1518770660439-4636190af475.png"),
  approve: asset("photo-1460925895917-afdab827c52f (2).png"),
  agent: asset("photo-1450101499163-c8848c66ca85.png"),
  evaluate: asset("photo-1563986768609-322da13575f3.png"),
  prove: asset("photo-1460925895917-afdab827c52f.png"),
  operate: asset("photo-1504384308090-c894fdcc538d.png"),
  decisionImpact: asset("photo-1531482615713-2afd69097998 (1).png"),
  affectedParties: asset("photo-1522071820081-009f0129c71c.png"),
  domainSensitivity: asset("photo-1518770660439-4636190af475.png"),
  dataSensitivity: asset("photo-1460925895917-afdab827c52f (2).png"),
  reversibility: asset("photo-1450101499163-c8848c66ca85.png"),
  autonomy: asset("photo-1563986768609-322da13575f3.png"),
  externalDependency: asset("photo-1460925895917-afdab827c52f.png"),
  regulatoryContext: asset("photo-1504384308090-c894fdcc538d.png"),
  taskQuality: asset("photo-1531482615713-2afd69097998 (1).png"),
  policyAdherence: asset("photo-1522071820081-009f0129c71c.png"),
  safetyScenarios: asset("photo-1518770660439-4636190af475.png"),
  toolBehavior: asset("photo-1460925895917-afdab827c52f (2).png"),
  humanReview: asset("photo-1450101499163-c8848c66ca85.png"),
  privacySecurity: asset("photo-1563986768609-322da13575f3.png"),
  operationalPerf: asset("photo-1460925895917-afdab827c52f.png"),
  knownLimitations: asset("photo-1504384308090-c894fdcc538d.png"),
  systemEvidence: asset("photo-1504384308090-c894fdcc538d (3).png"),
  evaluationEvidence: asset("photo-1460925895917-afdab827c52f (1).png"),
  policyEvidence: asset("photo-1450101499163-c8848c66ca85 (1).png"),
  securityEvidence: asset("photo-1518770660439-4636190af475 (1).png"),
  approvalEvidence: asset("photo-1450101499163-c8848c66ca85.png"),
  runtimeEvidence: asset("photo-1563986768609-322da13575f3.png"),
  changeEvidence: asset("photo-1504384308090-c894fdcc538d (2).png"),
  modelProvider: asset("photo-1518770660439-4636190af475.png"),
  modelVersion: asset("photo-1460925895917-afdab827c52f.png"),
  promptInstruction: asset("photo-1450101499163-c8848c66ca85.png"),
  dataSource: asset("photo-1504384308090-c894fdcc538d (1).png"),
  toolApi: asset("photo-1531482615713-2afd69097998.png"),
  workflowLogic: asset("photo-1460925895917-afdab827c52f (3).png"),
  policyChange: asset("photo-1450101499163-c8848c66ca85 (1).png"),
  zoikoAi: asset("d731d29497fcf3f554ce43cc090def3d26e13be1.png"), // platform hero crop
  responsibleAi: asset("photo-1522071820081-009f0129c71c.png"),
  aiAgentic: asset("photo-1531482615713-2afd69097998 (1).png"),
  domainAi: asset("photo-1563986768609-322da13575f3 (1).png"),
  trustCenter: asset("photo-1518770660439-4636190af475.png"),
  routeGovernance: asset("photo-1450101499163-c8848c66ca85.png"),
  routeDeployment: asset("photo-1518770660439-4636190af475.png"),
  routeRegulated: asset("photo-1460925895917-afdab827c52f (2).png"),
  routeDeveloper: asset("photo-1504384308090-c894fdcc538d.png"),
  routeSaas: asset("photo-1522071820081-009f0129c71c.png"),
};

/* Large section images */
export const breaksDownImg = {
  src: asset("Governance stock image.png"), // 517×653 — right side of "Why AI governance breaks down"
  alt: "Team reviewing AI governance framework on a whiteboard",
};
export const agentAuthorityImg = {
  src: asset("84424ea0cc13142e6f2c92b5c8b04dcf25aa9a69.jpg"), // 518×619 right side of agent authority
  alt: "Engineer configuring agent authority controls",
};
export const integrationImg = {
  src: asset("image 115.png"), // 615×461 right side of integration layer
  alt: "Developer integration architecture diagram",
};
export const journeyImg = {
  src: asset("AI rollout stock image.png"), // 1180×280 bottom of inventory journey
  alt: "AI rollout timeline across the enterprise",
};
export const incidentIcons = [
  asset("icon-ellipse.png"),
  asset("icon-ellipse (1).png"),
  asset("icon-ellipse (2).png"),
  asset("icon-ellipse (3).png"),
  asset("icon-ellipse (4).png"),
  asset("icon-ellipse (5).png"),
  asset("icon-ellipse (6).png"),
];

/* ---------- Hero flow steps ---------- */
export const flowSteps = [
  "System / Use\ncase",
  "Impact\nclassification",
  "Authority",
  "Evaluation",
  "Approval",
  "Deployment",
  "Monitoring",
  "Evidence /\nreview",
];

/* ---------- Card wrapper used across grid sections ---------- */
export function ThumbCard({
  img,
  title,
  desc,
  pb = "pb-5",
  gap = "gap-[3.30px]",
  shadow = "shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)]",
  titleClass = "zk-body text-color-cyan-6 text-base font-bold leading-6",
}: {
  img: string;
  title: React.ReactNode;
  desc: React.ReactNode;
  pb?: string;
  gap?: string;
  shadow?: string;
  titleClass?: string;
}) {
  return (
    <div
      className={`w-[283px] h-[280px] ${pb} bg-color-grey-97 rounded-2xl ${shadow} outline outline-1 -outline-offset-1 outline-color-cyan-87 flex flex-col items-center ${gap} overflow-hidden`}
    >
      <div className="relative w-full h-36 shrink-0 bg-linear-64 from-color-black-solid to-color-cyan-7">
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="self-stretch w-full px-4 pt-4 flex flex-col justify-start items-start">
        <p className={`self-stretch ${titleClass}`}>{title}</p>
      </div>
      <div className="w-full px-4 pb-[0.63px] flex flex-col justify-start items-start">
        <p className={`self-stretch ${body} tracking-tight text-color-cyan-35-2`}>{desc}</p>
      </div>
    </div>
  );
}
