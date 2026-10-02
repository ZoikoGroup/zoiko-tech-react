// Security & trust architecture (seven layers)
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const layers: { id: string; title: string; lines: string[]; q: string; strong?: boolean }[] = [
  { id: "L1", title: "Critical systems & data", lines: ["Applications, platforms, services, integrations and", "data assets."], q: "What must be protected?" },
  { id: "L2", title: "Identity & authority", lines: ["Human, admin, service and agent identities, roles", "and delegated authority."], q: "Who or what can act?" },
  { id: "L3", title: "Preventive protection", lines: ["Secure engineering, least privilege, configuration", "and secrets boundaries."], q: "How is exposure reduced?" },
  { id: "L4", title: "Signals & operational context", lines: ["Security, identity, configuration and service-health", "signals."], q: "How do we know something changed?" },
  { id: "L5", title: "Response & containment", lines: ["Triage, investigation, containment, remediation", "and recovery."], q: "How is an issue handled?" },
  { id: "L6", title: "Resilience & continuity", lines: ["Critical dependencies, degraded operation and", "recovery priority."], q: "How does the business keep operating?", strong: true },
  { id: "L7", title: "Privacy, evidence & governance", lines: ["Purpose limitation, evidence, exceptions, review", "and disclosure."], q: "Can we explain and prove the control state?", strong: true },
];

export default function DesktopSection04() {
  return (
    <section id="s04" className="w-full bg-[#001315] px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-5 px-8 py-[88px]">
        <div className="flex w-full flex-wrap items-end justify-between gap-x-[84.92px] xl:grid xl:grid-cols-[558px_minmax(0,1fr)] xl:items-start xl:gap-x-0">
          <div className="flex w-[703px] max-w-full flex-col gap-[11px] pb-4 xl:w-auto">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-4 tracking-[1.76px] text-white">
              Security & trust architecture
            </p>
            <h2 className="max-w-[860px] font-plus-jakarta text-[40px] font-bold leading-[1.17] tracking-[-1.44px] text-white xl:whitespace-nowrap xl:text-[48px] xl:leading-[56.16px]">
              Seven layers, one question each
            </h2>
          </div>
          <p className="max-w-[430px] pr-[54.39px] font-poppins xl:mt-1 xl:pr-0 text-[16px] leading-[26px] text-[#e2e8f0]">
            <DesktopLines
              lines={[
                "A cross-enterprise control model. Privacy and",
                "resilience sit alongside protection as first-class",
                "domains, not footnotes.",
              ]}
            />
          </p>
        </div>

        <div className="grid w-full grid-cols-[minmax(0,2fr)_minmax(0,1fr)] pt-5">
          <ol className="flex flex-col items-stretch gap-2">
            {layers.map((l) => (
              <li
                key={l.id}
                className={`flex items-center justify-center gap-5 rounded-xl border border-solid px-[19px] py-[15px] ${
                  l.strong
                    ? "border-[rgba(52,212,202,0.7)] bg-[rgba(36,119,128,0.4)]"
                    : "border-[rgba(52,212,202,0.38)] bg-[rgba(36,119,128,0.16)]"
                }`}
              >
                <span className="w-11 shrink-0 font-plus-jakarta text-[18px] font-extrabold leading-[18px] text-[#4ddcad]">
                  {l.id}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-plus-jakarta text-[16px] font-bold leading-[22px] text-white">
                    {l.title}
                  </h3>
                  <p className="font-poppins text-[13px] leading-5 text-[#cbd5e1]">
                    <DesktopLines lines={l.lines} />
                  </p>
                </div>
                <p className="min-w-0 flex-1 font-poppins text-[14px] font-medium leading-5 text-[#4ddcad]">
                  {l.q}
                </p>
              </li>
            ))}
          </ol>
          <div className="relative min-h-[460px] self-stretch overflow-hidden rounded-[20px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-[-0.29%] top-0 h-full w-[100.58%]">
                <Image
                  src="/cybersecurity-protection/desktop-case-security-architecture-base.webp"
                  alt=""
                  fill
                  sizes="420px"
                  className="object-fill"
                />
              </div>
              <div className="absolute left-[-20.89%] top-[-4.3%] h-[106.07%] w-[120.6%]">
                <Image
                  src="/cybersecurity-protection/desktop-layers-presenter-overlay.webp"
                  alt="Presenter pointing at a globe visual on a screen"
                  fill
                  sizes="500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center">
          <p className="font-poppins text-[13px] leading-5 text-[#cbd5e1]">
            This is a cross-enterprise architecture, not a statement that one Zoiko product delivers every layer.&nbsp;
          </p>
          <a
            href="#"
            className="inline-flex min-h-[44px] items-center gap-[6.01px] py-3 font-poppins text-[14px] font-semibold leading-5 text-[#4ddcad]"
          >
            View architecture
            <Image
              src="/cybersecurity-protection/desktop-arrow-green.svg"
              alt=""
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
