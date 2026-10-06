// Three protection paths
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards: {
  image: string;
  alt: string;
  title: string[];
  body: string[];
  chips: string[];
  chipsH: string;
  cta: string;
  href: string;
}[] = [
  {
    image: "desktop-paths-identity-card.webp",
    alt: "People collaborating around a laptop",
    title: ["Identity & least privilege"],
    body: [
      "Separate privileged access from routine access,",
      "treat services and agents as governed",
      "identities, and keep revocation visible.",
    ],
    chips: [
      "Authentication",
      "Authorization",
      "Privileged access",
      "Service & agent identity",
      "Delegated authority",
      "Review / revocation",
    ],
    chipsH: "h-[90px]",
    cta: "Explore Identity & Access",
    href: "/solution-zoiko-identity-access",
  },
  {
    image: "desktop-intent-report-issue-overlay.webp",
    alt: "Analyst working at a security operations desk",
    title: ["Security operations &", "response"],
    body: [
      "A concise operating route from signal to lesson",
      "learned. The deep incident model lives on the",
      "specialist page.",
    ],
    chips: ["Signal / report", "Triage", "Investigate", "Contain", "Remediate", "Recover", "Learn"],
    chipsH: "h-[60px]",
    cta: "Explore Cybersecurity & Resilience",
    href: "/cybersecurity-resilience",
  },
  {
    image: "desktop-paths-resilience-card.webp",
    alt: "Operator monitoring systems in a dark control room",
    title: ["Resilience & continuity"],
    body: [
      "Map critical services to their dependencies,",
      "decide what can safely continue in degraded",
      "mode, and validate recovery.",
    ],
    chips: ["Critical services", "Dependencies", "Degraded mode", "Recovery priority", "Validation"],
    chipsH: "h-[90px]",
    cta: "Explore resilience",
    href: "/cybersecurity-resilience",
  },
];

export default function DesktopSection06() {
  return (
    <section id="s06" className="w-full bg-[#e9f9f8] px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-5 px-8 py-[88px]">
        <div className="flex w-full flex-col items-start justify-end gap-6">
          <div className="flex w-full max-w-[860px] flex-col gap-[11.08px] pb-4">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-4 tracking-[1.76px] text-[#247780]">
              Three protection paths
            </p>
            <h2 className="font-plus-jakarta text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-[#0f172a]">
              <DesktopLines
                lines={[
                  "Identity, response and resilience, each",
                  "with a specialist route",
                ]}
              />
            </h2>
          </div>
          <p className="max-w-[430px] font-poppins text-[16px] leading-[26px] text-[#64748b]">
            <DesktopLines
              lines={[
                "This hub explains how they fit together. Deeper design",
                "and operating models sit on each specialist page.",
              ]}
            />
          </p>
        </div>

        <ul className="flex w-full items-start justify-center gap-6 pt-5">
          {cards.map((c) => (
            <li
              key={c.title.join(" ")}
              className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-[240px] w-full shrink-0">
                <Image
                  src={`/cybersecurity-protection/${c.image}`}
                  alt={c.alt}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-3 p-[26px]">
                <h3 className="font-plus-jakarta text-[24px] font-bold leading-[30px] tracking-[-0.48px] text-[#0f172a]">
                  <DesktopLines lines={c.title} />
                </h3>
                <p className="font-poppins text-[14px] leading-[22px] text-[#334155]">
                  <DesktopLines lines={c.body} />
                </p>
                <ul className={`flex ${c.chipsH} w-full flex-wrap content-start gap-x-[10px] gap-y-[6px]`}>
                  {c.chips.map((chip) => (
                    <li
                      key={chip}
                      className="h-[26px] whitespace-nowrap rounded-full bg-[#e7eff2] px-[10px] py-[5px] font-poppins text-[12px] font-medium leading-4 text-[#195b62]"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <a
                  href={c.href}
                  className="inline-flex min-h-[44px] w-full items-center gap-[6px] py-3 font-poppins text-[14px] font-semibold leading-5 text-[#247780]"
                >
                  {c.cta}
                  <Image
                    src="/cybersecurity-protection/desktop-arrow-teal.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="flex w-full items-start gap-2 font-poppins text-[13px] leading-5 text-[#64748b]">
          <Image
            src="/cybersecurity-protection/desktop-warning-icon.svg"
            alt=""
            width={16}
            height={16}
            className="mt-0.5 shrink-0"
          />
          Managed backup, disaster recovery, multi-region failover and recovery-time commitments are published only with product or service evidence.
        </p>
      </div>
    </section>
  );
}
