// Platform evidence layer (where the security technology comes from)
import Image from "next/image";
import MobileLines from "./MobileLines";

const cards = [
  {
    title: "Security technology",
    status: "[Readiness-gated]",
    lines: ["Zoiko Shield appears here by name once its", "public release and evidence are approved."],
    tag: "Security platform",
    href: "/zoiko-shield",
  },
  {
    title: "Shared security capabilities",
    status: "[Maturity]",
    lines: ["Controls embedded across common Zoiko", "foundations, where platform owners approve."],
    tag: "Shared controls",
    href: "#",
  },
  {
    title: "Identity & Access",
    lines: ["Authentication, entitlement and delegated", "authority."],
    tag: "Adjacent solution",
    href: "/solution-zoiko-identity-access",
  },
  {
    title: "Trust Center",
    lines: ["Authoritative security, privacy, compliance and", "evidence."],
    tag: "Trust route",
    href: "#",
  },
  {
    title: "System Status",
    lines: ["Current service health and incidents, never", "hard-coded here."],
    tag: "Status route",
    href: "/status-dashboard",
  },
];

const foundations = [
  { title: "Identity", lines: ["User, admin, service, agent and delegated", "identities"] },
  { title: "APIs & events", lines: ["Approved security-relevant APIs, events", "and webhooks"] },
  { title: "Observability", lines: ["Security and operational state as", "products expose it"] },
  { title: "Change context", lines: ["Configuration, release and access", "changes for review"] },
  { title: "Evidence", lines: ["Control, approval, exception and audit", "history"] },
  { title: "Status & support", lines: ["System Status, Help Center and disclosure", "routes"] },
];

export default function MobileSection09() {
  return (
    <section id="s09-m" className="w-full bg-white px-[32px] py-[88px] font-poppins">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-[24px]">
        <div className="flex w-full flex-col items-start gap-[24px]">
          <div className="flex w-full flex-col gap-[11.05px] pb-[16px]">
            <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
              Platform evidence layer
            </p>
            <h2 className="max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
              <MobileLines lines={["Where the security", "technology comes from"]} />
            </h2>
          </div>
          <p className="max-w-[430px] pr-[20px] text-[16px] leading-[26px] text-[#64748b]">
            <MobileLines
              lines={[
                "Named platforms appear only once",
                "publicly approved. Until then, this page",
                "shows the architecture and routes you to",
                "the team.",
              ]}
            />
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-[16px] pt-[16px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[8px] rounded-[14px] border border-[#e2e8f0] bg-white p-[21px]"
            >
              <div className="flex flex-col items-start gap-[8px]">
                <h3 className="font-plus-jakarta text-[18px] font-extrabold leading-[20.7px] text-[#104668]">
                  {c.title}
                </h3>
                {c.status && (
                  <span className="flex items-center gap-[6px] rounded-full bg-[#e2e8f0] px-[10px] py-[4px] text-[11px] font-semibold leading-[15px] tracking-[0.22px] text-[#334155]">
                    <span className="size-[6px] rounded-[3px] bg-[#334155]" />
                    {c.status}
                  </span>
                )}
              </div>
              <p className="text-[13px] leading-[20px] text-[#334155]">
                <MobileLines lines={c.lines} />
              </p>
              <div className="mt-auto flex items-center justify-between gap-[16px] border-t border-[#e2e8f0] pt-[11px]">
                <span className="rounded-full bg-[#e7eff2] px-[9px] py-[4px] text-[11px] font-semibold leading-[15px] text-[#195b62]">
                  {c.tag}
                </span>
                <a
                  href={c.href}
                  className="flex min-h-[44px] items-center gap-[6px] text-[13px] font-semibold leading-[20px] text-[#247780]"
                >
                  Explore
                  <Image src="/cybersecurity-protection/mobile-icon-arrow-right-teal.svg" alt="" width={16} height={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col overflow-hidden rounded-[20px] bg-[#001315]">
          <div className="relative h-[360px] w-full">
            <Image
              src="/cybersecurity-protection/mobile-shared-foundations-columns.webp"
              alt=""
              fill
              sizes="(max-width: 720px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-[8px] p-[36px]">
            <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
              Integration &amp; shared foundations
            </p>
            <h3 className="pt-[4px] font-plus-jakarta text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-white">
              <MobileLines lines={["Security that runs", "through the shared", "foundations"]} />
            </h3>
            <p className="text-[14px] leading-[22px] text-[#e2e8f0]">
              <MobileLines
                lines={[
                  "No internal telemetry, confidential",
                  "architecture or unsupported",
                  "integration logos are exposed.",
                ]}
              />
            </p>
            <ul className="flex w-full flex-col pb-[16px] pt-[12px]">
              {foundations.map((f) => (
                <li key={f.title} className="flex w-full flex-col border-t border-[rgba(255,255,255,0.2)] pb-[14px] pt-[15px]">
                  <h4 className="font-plus-jakarta text-[15px] font-bold leading-[22px] text-white">{f.title}</h4>
                  <p className="text-[13px] leading-[20px] text-[#e2e8f0]">
                    <MobileLines lines={f.lines} />
                  </p>
                </li>
              ))}
            </ul>
            <a
              href="/developer-portal"
              className="flex min-h-[44px] w-fit items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[12px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Explore Developer Platform
              <Image src="/cybersecurity-protection/mobile-icon-arrow-right-white.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
