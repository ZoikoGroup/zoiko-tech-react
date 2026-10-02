import Image from "next/image";
import DesktopLines from "./DesktopLines";

type Platform = {
  name: string;
  desc: string[];
  scope: string[];
  /** icon wrapper height from Figma */
  iconH: string;
  descPad: string;
  /** extra classes on the card (fixed height / negative-margin quirks) */
  tight?: boolean;
  fixed?: boolean;
};

const platforms: Platform[] = [
  {
    name: "ZoikoPay",
    desc: ["Payments and embedded financial infrastructure."],
    scope: ["Zoiko Financial Group entity; workflow operator requires", "confirmation."],
    iconH: "h-[44px]",
    descPad: "pb-[5.31px]",
  },
  {
    name: "Zoiko Remit",
    desc: ["Cross-border remittance and money-movement", "platform."],
    scope: ["Operator, markets and availability require confirmation."],
    iconH: "h-[47px]",
    descPad: "",
  },
  {
    name: "Zoiko Billing",
    desc: ["Billing, invoicing, usage and revenue operations."],
    scope: ["Product scope and contracting entity require confirmation."],
    iconH: "h-[45px]",
    descPad: "pb-[24.5px]",
  },
  {
    name: "Zoiko Payroll",
    desc: ["Payroll operations and workforce payments."],
    scope: ["Country, payment scope and operator require confirmation."],
    iconH: "h-[45px]",
    descPad: "pb-[24.5px]",
    tight: true,
    fixed: true,
  },
  {
    name: "ZoikoAssure",
    desc: ["Regulatory intelligence, compliance and audit", "automation."],
    scope: ["Public maturity and capabilities require confirmation."],
    iconH: "h-[45px]",
    descPad: "",
  },
  {
    name: "Identity foundations",
    desc: ["Identity evidence at approved scope."],
    scope: ["Public readiness and supported methods require", "confirmation."],
    iconH: "h-[46px]",
    descPad: "pb-[5.31px]",
    fixed: true,
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={i}>
          {l}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function DesktopPlatforms() {
  return (
    <section id="platforms" className="w-full bg-white pb-[94px] pt-[93px] font-poppins">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[36px] px-10 xl:px-0">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Specialist platforms.", "Evidence before claims."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.49px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "These source-backed descriptors help frame evaluation. Current maturity, availability and operator records",
                "are not supplied in this prototype.",
              ]}
            />
          </p>
        </div>

        <div className="grid grid-cols-3 items-start gap-x-[20px] gap-y-[62px]">
          {platforms.map((p) => (
            <article
              key={p.name}
              className={`flex min-w-0 flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px] ${
                p.fixed ? "h-[410px]" : ""
              }`}
            >
              <div className={`flex items-center gap-[12px] pb-[22px] ${p.tight ? "-mb-[10px]" : ""}`}>
                <div className={`flex w-[46px] shrink-0 flex-col ${p.iconH}`}>
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image
                      src="/financial-services/desktop-icon-database-stack.svg"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </span>
                </div>
                <h3 className="min-w-0 flex-1 text-[20px] font-bold leading-[26px] text-[#102d2f]">{p.name}</h3>
              </div>
              <p
                className={`pb-[22px] ${p.tight ? "-mb-[10px]" : ""}`}
              >
                <span
                  className={`block text-[15px] leading-[24px] text-[#587176] ${p.descPad}`}
                >
                  <Lines lines={p.desc} />
                </span>
              </p>
              <div className="py-[12px]">
                <dl className="border-t border-[rgba(114,157,164,0.25)] pb-[12px] pt-[15px] text-[12px] leading-[19.2px]">
                  <dt className="-mb-px text-[#9ec9cc]">Maturity</dt>
                  <dd className="-mb-px text-[#102d2f]">Not confirmed</dd>
                  <dt className="-mb-px pt-[12px] text-[#9ec9cc]">Market availability</dt>
                  <dd className="-mb-px text-[#102d2f]">Not published</dd>
                  <dt className="-mb-px pt-[12px] text-[#9ec9cc]">Operator / scope</dt>
                  <dd className="text-[#102d2f]">
                    <Lines lines={p.scope} />
                  </dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
