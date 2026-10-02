// Security intent router (choose-a-path photo cards)
import Image from "next/image";
import MobileLines from "./MobileLines";

const paths = [
  {
    title: "Reduce exposure",
    body: ["Strengthen preventive controls, ownership", "and remediation around critical systems."],
    img: "mobile-router-reduce-exposure.webp",
    href: "/cybersecurity-resilience",
  },
  {
    title: "Control identity & authority",
    body: ["Apply authentication, entitlement, least", "privilege and delegated authority."],
    img: "mobile-case-identity-security.webp",
    href: "/solution-zoiko-identity-access",
  },
  {
    title: "Improve security operations",
    body: ["Create clearer triage, investigation,", "containment and recovery workflows."],
    img: "mobile-office-towers.webp",
    href: "/cybersecurity-resilience",
  },
  {
    title: "Improve resilience",
    body: ["Understand critical dependencies,", "degraded modes and recovery priorities."],
    img: "mobile-case-resilience.webp",
    href: "/cybersecurity-resilience",
  },
  {
    title: "Review trust evidence",
    body: ["Evaluate security, privacy, compliance and", "current assurance state."],
    img: "mobile-assurance-building.webp",
    href: "#",
  },
  {
    title: "Report a security issue",
    body: ["Use the responsible-disclosure route for", "vulnerability reporting."],
    img: "mobile-signposts.webp",
    href: "#",
  },
];

const builtFor = [
  ["Security leaders"],
  ["Platform & engineering teams"],
  ["IT operations", "Risk & compliance"],
  ["Procurement & vendor review"],
];

export default function MobileSection02() {
  return (
    <section id="s02-m" className="flex w-full flex-col items-start bg-white">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-start gap-[28px] px-[32px] py-[88px]">
        <div className="flex w-full flex-col items-start justify-end gap-[24px]">
          <div className="flex w-full max-w-[348px] flex-col items-start gap-[11.045px] pb-[16px]">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] whitespace-nowrap text-[#247780]">
              Security intent router
            </p>
            <h2 className="w-full font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-[#0f172a]">
              <MobileLines lines={["What do you need to", "protect, prove or fix?"]} />
            </h2>
          </div>
          <p className="max-w-[430px] pr-[7.19px] font-poppins text-[16px] leading-[26px] text-[#64748b]">
            <MobileLines
              lines={[
                "Start from your current concern. Each path",
                "leads to the right control area, trust route",
                "or specialist team.",
              ]}
            />
          </p>
        </div>

        <ul className="flex w-full flex-col items-start gap-[20px] pt-[12px] sm:grid sm:grid-cols-2">
          {paths.map((p) => (
            <li key={p.title} className="w-full">
              <a href={p.href} className="relative block h-[280px] min-h-[280px] w-full overflow-hidden rounded-[16px]">
                <Image
                  src={`/cybersecurity-protection/${p.img}`}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 350px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,19,21,0.05)] from-[20%] to-[rgba(0,19,21,0.92)]" />
                <div className="absolute bottom-[20px] left-[22px] right-[22px] flex flex-col items-start gap-[6px]">
                  <h3 className="w-full font-plus-jakarta text-[20px] font-bold leading-[26px] text-white">{p.title}</h3>
                  <p className="w-full font-poppins text-[14px] leading-[21px] text-[#e2e8f0]">
                    <MobileLines lines={p.body} />
                  </p>
                  <span className="flex w-full items-center gap-[6px] pt-[6px]">
                    <span className="font-poppins text-[14px] font-semibold leading-[20px] whitespace-nowrap text-[#4ddcad]">
                      Choose path
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cybersecurity-protection/mobile-icon-arrow-right-green.svg" alt="" className="size-[16px]" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col items-start gap-[8px]">
          {builtFor.map((row, i) => (
            <div key={i} className="flex flex-wrap items-center gap-[8px]">
              {i === 0 && (
                <span className="pr-[6px] font-poppins text-[13px] font-semibold leading-[18px] whitespace-nowrap text-[#0f172a]">
                  Built for:
                </span>
              )}
              {row.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-[15px] py-[9px] font-poppins text-[13px] font-medium leading-[18px] whitespace-nowrap text-[#334155]"
                >
                  {chip}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
