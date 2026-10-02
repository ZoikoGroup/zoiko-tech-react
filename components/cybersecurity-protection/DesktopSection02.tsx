// Security intent router
import Image from "next/image";
import DesktopLines from "./DesktopLines";

type Box = { l: string; t: string; w: string; h: string };

const cards: {
  title: string;
  lines: string[];
  base: string;
  baseBox: Box;
  overlay: string;
  overlayBox: Box;
  overlayCover?: boolean;
}[] = [
  {
    title: "Reduce exposure",
    lines: ["Strengthen preventive controls, ownership and", "remediation around critical systems."],
    base: "desktop-intent-reduce-exposure-base.webp",
    baseBox: { l: "0", t: "-37.5%", w: "100%", h: "175%" },
    overlay: "desktop-intent-reduce-exposure-overlay.webp",
    overlayBox: { l: "-0.51%", t: "-0.38%", w: "100.51%", h: "100.36%" },
  },
  {
    title: "Control identity & authority",
    lines: ["Apply authentication, entitlement, least privilege", "and delegated authority."],
    base: "desktop-case-identity-security.webp",
    baseBox: { l: "0", t: "-55.04%", w: "100%", h: "210.08%" },
    overlay: "desktop-intent-identity-authority-overlay.webp",
    overlayBox: { l: "0", t: "-0.02%", w: "100%", h: "100.36%" },
  },
  {
    title: "Improve security operations",
    lines: ["Create clearer triage, investigation, containment", "and recovery workflows."],
    base: "desktop-intent-security-operations-base.webp",
    baseBox: { l: "0", t: "-70.59%", w: "100%", h: "241.18%" },
    overlay: "desktop-intent-security-operations-overlay.webp",
    overlayBox: { l: "0", t: "-0.02%", w: "100%", h: "100%" },
  },
  {
    title: "Improve resilience",
    lines: ["Understand critical dependencies, degraded", "modes and recovery priorities."],
    base: "desktop-case-resilience.webp",
    baseBox: { l: "-8.38%", t: "0", w: "116.77%", h: "100%" },
    overlay: "desktop-intent-resilience-overlay.webp",
    overlayBox: { l: "-7.4%", t: "-0.03%", w: "114.8%", h: "100.36%" },
    overlayCover: true,
  },
  {
    title: "Review trust evidence",
    lines: ["Evaluate security, privacy, compliance and", "current assurance state."],
    base: "desktop-case-assurance-note.webp",
    baseBox: { l: "-3.59%", t: "0", w: "107.18%", h: "100%" },
    overlay: "desktop-intent-trust-evidence-overlay.webp",
    overlayBox: { l: "-3.57%", t: "-0.03%", w: "107.14%", h: "100%" },
    overlayCover: true,
  },
  {
    title: "Report a security issue",
    lines: ["Use the responsible-disclosure route for", "vulnerability reporting."],
    base: "desktop-faq-signposts-base.webp",
    baseBox: { l: "-3.97%", t: "0", w: "107.94%", h: "100%" },
    overlay: "desktop-intent-report-issue-overlay.webp",
    overlayBox: { l: "0", t: "0", w: "100%", h: "100%" },
    overlayCover: true,
  },
];

const built = [
  "Security leaders",
  "Platform & engineering teams",
  "IT operations",
  "Risk & compliance",
  "Procurement & vendor review",
];

const asBox = (b: Box) => ({ left: b.l, top: b.t, width: b.w, height: b.h });

export default function DesktopSection02() {
  return (
    <section id="s02" className="w-full bg-white px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-7 px-8 py-[88px]">
        <div className="flex w-full flex-col items-start justify-end gap-[24.01px]">
          <div className="flex w-full max-w-[860px] flex-col gap-[11.08px] pb-4">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-4 tracking-[1.76px] text-[#247780]">
              Security intent router
            </p>
            <h2 className="font-plus-jakarta text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-[#0f172a]">
              <DesktopLines lines={["What do you need to protect, prove or", "fix?"]} />
            </h2>
          </div>
          <p className="max-w-[430px] pr-[19.59px] font-poppins text-[16px] leading-[26px] text-[#64748b]">
            <DesktopLines
              lines={[
                "Start from your current concern. Each path leads to",
                "the right control area, trust route or specialist team.",
              ]}
            />
          </p>
        </div>

        <ul className="grid w-full grid-cols-3 gap-5 pt-3">
          {cards.map((c) => (
            <li key={c.title} className="h-[280px]">
              <a
                href="#"
                className="relative block h-full overflow-hidden rounded-2xl"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute" style={asBox(c.baseBox)}>
                    <Image
                      src={`/cybersecurity-protection/${c.base}`}
                      alt=""
                      fill
                      sizes="400px"
                      className="object-fill"
                    />
                  </div>
                  <div className="absolute" style={asBox(c.overlayBox)}>
                    <Image
                      src={`/cybersecurity-protection/${c.overlay}`}
                      alt=""
                      fill
                      sizes="400px"
                      className={c.overlayCover ? "object-cover" : "object-fill"}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,19,21,0.05)] from-20% to-[rgba(0,19,21,0.92)]" />
                <div className="absolute inset-x-[22px] bottom-5 flex flex-col gap-[6px]">
                  <h3 className="font-plus-jakarta text-[20px] font-bold leading-[26px] text-white">
                    {c.title}
                  </h3>
                  <p className="font-poppins text-[14px] leading-[21px] text-[#e2e8f0]">
                    <DesktopLines lines={c.lines} />
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-wrap items-center gap-x-[10px] gap-y-2">
          <span className="pr-[6px] font-poppins text-[13px] font-semibold leading-[18px] text-[#0f172a]">
            Built for:
          </span>
          {built.map((b) => (
            <span
              key={b}
              className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-[15px] py-[9px] font-poppins text-[13px] font-medium leading-[18px] text-[#334155]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
