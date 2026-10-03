import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    img: "/public-sector-government/desktop-evidence-policy-controls.webp",
    icon: "/public-sector-government/desktop-practice-document-icon.svg",
    title: "Policy & controls",
    lines: ["Authoritative source, effective period, scope", "and accountable owner."],
  },
  {
    img: "/public-sector-government/desktop-evidence-decision-approval.webp",
    icon: "/public-sector-government/desktop-contact-users-icon.svg",
    title: "Decision & approval",
    lines: ["Actor, authority, source evidence, result and", "timestamp."],
  },
  {
    img: "/public-sector-government/desktop-evidence-exception-override.webp",
    icon: "/public-sector-government/desktop-icon-shield-check.svg",
    title: "Exception & override",
    lines: ["Reason, authority, expiry, review and", "supporting evidence."],
  },
];

const steps = [
  { title: "Source captured", text: "Reference and effective context retained" },
  { title: "Work routed", text: "Receiving owner and handoff recorded" },
  { title: "Review requested", text: "Evidence and authority checked" },
  { title: "Decision pending", text: "Awaiting authoritative officer or system" },
];

export default function DesktopEvidence() {
  return (
    <section id="evidence" className="flex w-full flex-col items-center bg-white pt-[93px] pb-[108px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] leading-[50.6px] font-bold tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Leave a clear record", "of what happened and why."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Policy, ownership, review and evidence belong alongside the work they govern.
          </p>
        </div>
        <ul className="flex items-start justify-center gap-5 pt-[10px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex h-[420px] min-w-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8]"
            >
              <div className="relative h-[210px] w-full shrink-0">
                <Image src={c.img} alt="" fill sizes="387px" className="object-cover" />
              </div>
              <div className="flex h-[210px] flex-col gap-[12px] overflow-hidden p-[24px]">
                <div className="flex h-[46px] items-center gap-[12px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                  <h3 className="min-w-0 flex-1 font-poppins text-[20px] leading-[26px] font-bold text-[#102d2f]">
                    {c.title}
                  </h3>
                </div>
                <p className="pb-[22px] font-poppins text-[15px] leading-[24px] text-[#587176]">
                  <DesktopLines lines={c.lines} />
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ol className="flex items-start justify-center gap-5 pt-[9.99px]">
          {steps.map((s) => (
            <li
              key={s.title}
              className="flex min-w-0 flex-1 flex-col gap-[7.01px] border-t-2 border-[#247780] pt-[18px]"
            >
              <strong className="font-poppins text-[16px] leading-[25.6px] font-bold text-[#102d2f]">
                {s.title}
              </strong>
              <span className="pb-[0.8px] font-poppins text-[13px] leading-[20.8px] text-[#536f74]">
                {s.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
