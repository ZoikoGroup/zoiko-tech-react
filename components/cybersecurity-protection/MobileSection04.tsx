// Security & trust architecture (seven layers L1-L7)
import Image from "next/image";
import MobileLines from "./MobileLines";

const layers: {
  id: string;
  title: string[];
  desc: string[];
  question: string[];
  h: number;
  idTop: number;
  qTop: number;
  strong?: boolean;
}[] = [
  { id: "L1", title: ["Critical systems & data"], desc: ["Applications, platforms, services,", "integrations and data assets."], question: ["What", "must", "be", "protected?"], h: 178, idTop: 36, qTop: 82 },
  { id: "L2", title: ["Identity & authority"], desc: ["Human, admin, service and agent", "identities, roles and delegated", "authority."], question: ["Who", "or", "what", "can", "act?"], h: 218, idTop: 46, qTop: 102 },
  { id: "L3", title: ["Preventive protection"], desc: ["Secure engineering, least privilege,", "configuration and secrets", "boundaries."], question: ["How", "is", "exposure", "reduced?"], h: 198, idTop: 46, qTop: 102 },
  { id: "L4", title: ["Signals & operational context"], desc: ["Security, identity, configuration and", "service-health signals."], question: ["How", "do we", "know", "something", "changed?"], h: 198, idTop: 36, qTop: 82 },
  { id: "L5", title: ["Response & containment"], desc: ["Triage, investigation, containment,", "remediation and recovery."], question: ["How", "is an", "issue", "handled?"], h: 178, idTop: 36, qTop: 82 },
  { id: "L6", title: ["Resilience & continuity"], desc: ["Critical dependencies, degraded", "operation and recovery priority."], question: ["How", "does", "the", "business", "keep", "operating?"], h: 218, idTop: 36, qTop: 82, strong: true },
  { id: "L7", title: ["Privacy, evidence &", "governance"], desc: ["Purpose limitation, evidence,", "exceptions, review and disclosure."], question: ["Can", "we", "explain", "and", "prove", "the", "control", "state?"], h: 280, idTop: 47, qTop: 104, strong: true },
];

export default function MobileSection04() {
  return (
    <section id="s04-m" className="flex w-full flex-col items-start bg-[#001315]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-start gap-[20px] px-[32px] py-[88px]">
        <div className="flex w-full flex-col items-start justify-end gap-[24px]">
          <div className="flex w-full max-w-[348px] flex-col items-start gap-[11.045px] pb-[16px]">
            <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] whitespace-nowrap text-white">
              Security &amp; trust architecture
            </p>
            <h2 className="w-full max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-white">
              <MobileLines lines={["Seven layers, one", "question each"]} />
            </h2>
          </div>
          <p className="max-w-[430px] pr-[19.22px] font-poppins text-[16px] leading-[26px] text-[#e2e8f0]">
            <MobileLines
              lines={[
                "A cross-enterprise control model. Privacy",
                "and resilience sit alongside protection as",
                "first-class domains, not footnotes.",
              ]}
            />
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[20px]">
          <ol className="flex w-full flex-col items-start gap-[8px]">
            {layers.map((l) => (
              <li
                key={l.id}
                style={{ height: l.h }}
                className={`relative w-full rounded-[12px] border border-solid ${
                  l.strong
                    ? "border-[rgba(52,212,202,0.7)] bg-[rgba(36,119,128,0.4)]"
                    : "border-[rgba(52,212,202,0.38)] bg-[rgba(36,119,128,0.16)]"
                }`}
              >
                <span
                  style={{ top: l.idTop }}
                  className="absolute left-[18px] font-plus-jakarta text-[18px] font-extrabold leading-[18px] whitespace-nowrap text-[#4ddcad]"
                >
                  {l.id}
                </span>
                <div className="absolute left-[82px] right-[18px] top-[14px] flex flex-col items-start">
                  <h3 className="w-full font-plus-jakarta text-[16px] font-bold leading-[22px] text-white">
                    <MobileLines lines={l.title} />
                  </h3>
                  <p className="w-full font-poppins text-[13px] leading-[20px] text-[#cbd5e1]">
                    <MobileLines lines={l.desc} />
                  </p>
                </div>
                <p
                  style={{ top: l.qTop }}
                  className="absolute left-[18px] font-poppins text-[14px] font-medium leading-[20px] whitespace-nowrap text-[#4ddcad]"
                >
                  {l.question.map((w) => (
                    <span key={w} className="block">
                      {w}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>

          <div className="relative h-[460px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/cybersecurity-protection/mobile-case-security-architecture.webp"
              alt="Curved repeating balconies on a white tower"
              fill
              sizes="(min-width: 720px) 656px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <p className="w-full font-poppins text-[13px] leading-[20px] text-[#cbd5e1]">
          <MobileLines
            lines={[
              "This is a cross-enterprise architecture, not a",
              "statement that one Zoiko product delivers every",
            ]}
          />{" "}
          layer.{" "}
          <a
            href="/cybersecurity-resilience"
            className="inline-flex min-h-[44px] items-center gap-[6px] py-[12px] align-middle font-semibold text-[#4ddcad]"
          >
            View architecture
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cybersecurity-protection/mobile-icon-arrow-right-green.svg" alt="" className="size-[16px]" />
          </a>
        </p>
      </div>
    </section>
  );
}
