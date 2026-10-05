import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const rows = [
  ["Wireframe state", "Build"],
  ["Destination", "When ready / subject to approval"],
  ["Operator", "Requires confirmation"],
  ["Supported capabilities", "Not established in supplied source"],
  ["Public availability", "Not asserted"],
  ["Evidence", "Dedicated product records required"],
];

const cards = [
  {
    icon: "/travel-mobility-transportation/icon-database.svg",
    title: "Evidence candidate",
    text: "Use maturity, operator and approved scope to frame future evaluation.",
    pad: "lg:pb-[78.5px]",
  },
  {
    icon: "/travel-mobility-transportation/icon-shield-check.svg",
    title: "Clear capability boundary",
    text: "No telemetry, tracking, diagnostics, driver scoring or automotive integrations are inferred.",
    pad: "",
  },
];

export default function Automotive() {
  return (
    <section
      id="automotive"
      className="w-full bg-[linear-gradient(121deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[28px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-4xl lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Readiness before", "product availability claims."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines
              lines={[
                "DriverXtra is listed as Build and a mobility / automotive destination when ready. Its public descriptor and",
                "feature scope remain approval-dependent.",
              ]}
            />
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-11 lg:flex-row lg:items-center">
          <div className="min-w-0 flex-1 rounded-xl border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0_18px_50px_rgba(0,30,37,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[238px] font-poppins text-lg font-bold leading-[23.4px] text-white">
                DriverXtra readiness record
              </h3>
              <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-4 ${
                    i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="font-inter text-[13px] leading-[20.8px] text-[#9bc2c6]">{k}</dt>
                  <dd className="font-inter text-[13px] leading-[20.8px] text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid min-w-0 flex-1 gap-5 md:grid-cols-2">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 ${c.pad}`}
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
