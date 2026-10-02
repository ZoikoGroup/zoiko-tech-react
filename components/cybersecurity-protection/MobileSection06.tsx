// Three protection paths (identity, security operations, resilience cards)
import Image from "next/image";
import MobileLines from "./MobileLines";

const cards: {
  img: string;
  title: string[];
  body: string[];
  chips: string[][];
  link: string;
  href: string;
}[] = [
  {
    img: "mobile-person-glass-tower.webp",
    title: ["Identity & least privilege"],
    body: [
      "Separate privileged access from routine",
      "access, treat services and agents as",
      "governed identities, and keep revocation",
      "visible.",
    ],
    chips: [
      ["Authentication", "Authorization"],
      ["Privileged access", "Service & agent identity"],
      ["Delegated authority", "Review / revocation"],
    ],
    link: "Explore Identity & Access",
    href: "/solution-zoiko-identity-access",
  },
  {
    img: "mobile-office-towers.webp",
    title: ["Security operations &", "response"],
    body: ["A concise operating route from signal to", "lesson learned. The deep incident model", "lives on the specialist page."],
    chips: [
      ["Signal / report", "Triage", "Investigate"],
      ["Contain", "Remediate", "Recover", "Learn"],
    ],
    link: "Explore Cybersecurity & Resilience",
    href: "/cybersecurity-resilience",
  },
  {
    img: "mobile-case-resilience.webp",
    title: ["Resilience & continuity"],
    body: [
      "Map critical services to their",
      "dependencies, decide what can safely",
      "continue in degraded mode, and validate",
      "recovery.",
    ],
    chips: [["Critical services", "Dependencies"], ["Degraded mode", "Recovery priority"], ["Validation"]],
    link: "Explore resilience",
    href: "/cybersecurity-resilience",
  },
];

export default function MobileSection06() {
  return (
    <section id="s06-m" className="flex w-full flex-col items-start bg-[#e9f9f8]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-start gap-[20px] px-[32px] py-[88px]">
        <div className="flex w-full flex-col items-start justify-end gap-[24px]">
          <div className="flex w-full max-w-[348px] flex-col items-start gap-[11.095px] pb-[16px]">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] whitespace-nowrap text-[#247780]">
              Three protection paths
            </p>
            <h2 className="w-full max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
              <MobileLines lines={["Identity, response and", "resilience, each with a", "specialist route"]} />
            </h2>
          </div>
          <p className="max-w-[430px] pr-[1.64px] font-poppins text-[16px] leading-[26px] text-[#64748b]">
            <MobileLines
              lines={[
                "This hub explains how they fit together.",
                "Deeper design and operating models sit on",
                "each specialist page.",
              ]}
            />
          </p>
        </div>

        <ul className="flex w-full flex-col items-start gap-[24px] pt-[20px] sm:grid sm:grid-cols-2 sm:items-stretch">
          {cards.map((c) => (
            <li key={c.link} className="w-full">
              <article className="flex h-full w-full flex-col items-start overflow-hidden rounded-[16px] bg-white shadow-[0px_6px_20px_0px_rgba(15,23,42,0.08)]">
                <div className="relative h-[240px] w-full shrink-0">
                  <Image
                    src={`/cybersecurity-protection/${c.img}`}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 330px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-1 flex-col items-start gap-[12px] p-[26px]">
                  <h3 className="w-full font-plus-jakarta text-[24px] font-bold leading-[30px] tracking-[-0.48px] text-[#0f172a]">
                    <MobileLines lines={c.title} />
                  </h3>
                  <p className="w-full font-poppins text-[14px] leading-[22px] text-[#334155]">
                    <MobileLines lines={c.body} />
                  </p>
                  <div className="flex w-full flex-col items-start gap-[6px]">
                    {c.chips.map((row, i) => (
                      <ul key={i} className="m-0 flex list-none flex-wrap gap-[8px] p-0">
                        {row.map((chip) => (
                          <li
                            key={chip}
                            className="rounded-full bg-[#e7eff2] px-[10px] py-[5px] font-poppins text-[12px] font-medium leading-[16px] whitespace-nowrap text-[#195b62]"
                          >
                            {chip}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                  <a
                    href={c.href}
                    className="mt-auto flex min-h-[44px] w-full items-center gap-[6px] py-[12px] font-poppins text-[14px] font-semibold leading-[20px] whitespace-nowrap text-[#247780]"
                  >
                    {c.link}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cybersecurity-protection/mobile-icon-arrow-right-teal.svg" alt="" className="size-[16px]" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="flex w-full items-start gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cybersecurity-protection/mobile-asterisk-note.svg" alt="" className="h-[16.003px] w-[5.72px] shrink-0" />
          <p className="font-poppins text-[13px] leading-[20px] text-[#64748b]">
            <MobileLines
              lines={[
                "Managed backup, disaster recovery, multi-region",
                "failover and recovery-time commitments are",
                "published only with product or service evidence.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
