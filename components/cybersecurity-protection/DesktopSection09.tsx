// Platform evidence layer (route cards + shared foundations panel)
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    title: ["Security technology"],
    badge: "[Readiness-gated]",
    body: ["Zoiko Shield appears here by", "name once its public release", "and evidence are approved."],
    tag: ["Security", "platform"],
    href: "/zoiko-shield",
  },
  {
    title: ["Shared security", "capabilities"],
    badge: "[Maturity]",
    body: ["Controls embedded across", "common Zoiko foundations,", "where platform owners", "approve."],
    tag: ["Shared controls"],
    href: "#",
  },
  {
    title: ["Identity & Access"],
    body: ["Authentication, entitlement", "and delegated authority."],
    tag: ["Adjacent", "solution"],
    href: "/solution-zoiko-identity-access",
  },
  {
    title: ["Trust Center"],
    body: ["Authoritative security,", "privacy, compliance and", "evidence."],
    tag: ["Trust route"],
    href: "#",
  },
  {
    title: ["System Status"],
    body: ["Current service health and", "incidents, never hard-coded", "here."],
    tag: ["Status route"],
    href: "/status-dashboard",
  },
];

const foundations = [
  { t: "Identity", d: ["User, admin, service, agent and", "delegated identities"] },
  { t: "APIs & events", d: ["Approved security-relevant APIs,", "events and webhooks"] },
  { t: "Observability", d: ["Security and operational state as", "products expose it"] },
  { t: "Change context", d: ["Configuration, release and access", "changes for review"] },
  { t: "Evidence", d: ["Control, approval, exception and audit", "history"] },
  { t: "Status & support", d: ["System Status, Help Center and", "disclosure routes"] },
];

export default function DesktopSection09() {
  return (
    <section id="s09" className="hidden w-full bg-white px-[80px] lg:block">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] px-[32px] py-[88px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex max-w-[860px] flex-col gap-[11.075px] pb-[16px]">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-[#247780]">
              Platform evidence layer
            </p>
            <h2 className="font-plus-jakarta text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-[#0f172a]">
              <DesktopLines lines={["Where the security technology comes", "from"]} />
            </h2>
          </div>
          <p className="font-poppins max-w-[430px] pr-[76.56px] text-[16px] leading-[26px] text-[#64748b]">
            <DesktopLines
              lines={[
                "Named platforms appear only once publicly",
                "approved. Until then, this page shows the",
                "architecture and routes you to the team.",
              ]}
            />
          </p>
        </div>

        <ul className="flex items-stretch justify-center gap-[16px] pt-[16px]">
          {cards.map((c) => (
            <li
              key={c.title.join(" ")}
              className="flex min-w-0 flex-1 flex-col gap-[8px] rounded-[14px] border border-solid border-[#e2e8f0] bg-white p-[21px]"
            >
              <div className="flex flex-col items-start gap-[8px]">
                <h3 className="font-plus-jakarta text-[18px] font-extrabold leading-[20.7px] text-[#104668]">
                  <DesktopLines lines={c.title} />
                </h3>
                {c.badge && (
                  <span className="font-poppins flex items-center gap-[6px] rounded-full bg-[#e2e8f0] px-[10px] py-[4px] text-[11px] font-semibold leading-[15px] tracking-[0.22px] text-[#334155]">
                    <span className="size-[6px] rounded-[3px] bg-[#334155]" />
                    {c.badge}
                  </span>
                )}
              </div>
              <p className="font-poppins flex-1 pb-[12px] text-[13px] leading-[20px] text-[#334155]">
                <DesktopLines lines={c.body} />
              </p>
              <div className="flex items-center justify-between gap-[8px] border-t border-solid border-[#e2e8f0] pt-[11px]">
                <span className="font-poppins rounded-full bg-[#e7eff2] px-[9px] py-[4px] text-[11px] font-semibold leading-[15px] text-[#195b62]">
                  <DesktopLines lines={c.tag} />
                </span>
                <a
                  href={c.href}
                  className="font-poppins flex min-h-[44px] items-center gap-[6px] text-[13px] font-semibold leading-[20px] text-[#247780]"
                >
                  Explore
                  <Image src="/cybersecurity-protection/desktop-arrow-teal.svg" alt="" width={16} height={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex w-full overflow-hidden rounded-[20px] bg-[#001315]">
          <div className="relative min-h-[581px] min-w-0 flex-1 self-stretch">
            <Image
              src="/cybersecurity-protection/desktop-shared-foundations-photo.webp"
              alt="Presenter beside a glowing digital padlock projection"
              fill
              sizes="(min-width:1440px) 580px, 40vw"
              className="object-cover"
              style={{ objectPosition: "46% 50%" }}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[8px] p-[36px]">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
              Integration &amp; shared foundations
            </p>
            <h3 className="font-plus-jakarta pt-[4px] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-white">
              <DesktopLines lines={["Security that runs through the shared", "foundations"]} />
            </h3>
            <p className="font-poppins text-[14px] leading-[22px] text-[#e2e8f0]">
              <DesktopLines
                lines={[
                  "No internal telemetry, confidential architecture or unsupported integration",
                  "logos are exposed.",
                ]}
              />
            </p>
            <ul className="grid grid-cols-2 gap-x-[24px] pb-[16px] pt-[12px]">
              {foundations.map((f) => (
                <li key={f.t} className="flex flex-col border-t border-solid border-[rgba(255,255,255,0.2)] pb-[14px] pt-[15px]">
                  <h4 className="font-plus-jakarta text-[15px] font-bold leading-[22px] text-white">{f.t}</h4>
                  <p className="font-poppins text-[13px] leading-[20px] text-[#e2e8f0]">
                    <DesktopLines lines={f.d} />
                  </p>
                </li>
              ))}
            </ul>
            <a
              href="/developer-portal"
              className="font-poppins flex min-h-[44px] w-fit items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[12px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Explore Developer Platform
              <Image src="/cybersecurity-protection/desktop-arrow-white.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
