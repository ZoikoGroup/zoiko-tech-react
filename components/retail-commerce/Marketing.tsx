import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const specimen = [
  ["Initiative", "Sample customer communication draft"],
  ["Owner", "Marketing operations"],
  ["Source context", "Approved sample product information"],
  ["AI role", "Prepare — derived output"],
  ["Approval state", "Human review required"],
  ["Execution state", "Not executed"],
];

const cardBase =
  "flex flex-col items-start rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7 md:flex-1 lg:flex-none";
const iconBox = "flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]";
const h3Cls = "font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]";
const pCls = "font-poppins text-[15px] leading-6 text-[#587176]";
const route = "mt-5 font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780] lg:hidden";

export default function Marketing() {
  return (
    <section id="marketing" className="w-full bg-white py-14 md:pb-[94px] md:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-8 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            05 / MARKETING INTELLIGENCE &amp; OPERATIONS
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:text-[38px] lg:leading-[44px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Govern the work", "between intelligence and execution."]}
              tablet={["Govern the work", "between intelligence and execution."]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 font-poppins text-[15px] leading-6 text-[#587176] md:text-[16px] md:leading-[25.6px]">
            <Lines
              desktop={[
                "ZoikoVertex is described as a governed agentic marketing operating system. Use recommendations and",
                "prepared actions within approved workflow and integration scope.",
              ]}
              tablet={[
                "ZoikoVertex is described as a governed agentic marketing operating system. Use recommendations",
                "and prepared actions within approved workflow and integration scope.",
              ]}
            />
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-11">
          {/* Specimen */}
          <div className="min-w-0 rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] drop-shadow-[0px_18px_25px_rgba(0,30,37,0.06)] lg:flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[160px] font-poppins text-[18px] font-bold leading-[23.4px] text-[#102d2f] lg:max-w-[231px]">
                Marketing work / specimen
              </h3>
              <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-4 tracking-[0.3px] text-[#247780]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {specimen.map(([label, value], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-4 font-poppins text-[13px] leading-[20.8px] ${
                    i < specimen.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="text-[#648287]">{label}</dt>
                  <dd className="text-[#102d2f]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Cards */}
          <div className="flex min-w-0 flex-col gap-5 md:flex-row lg:flex-1 lg:flex-col">
            <a href="#pathways" className={`${cardBase} lg:h-[231px] lg:gap-[17px]`}>
              <div className="flex flex-col items-start lg:w-full lg:flex-row lg:items-center lg:gap-[51px]">
                <span className={`${iconBox} mb-[22px] lg:mb-0`}>
                  <Image src="/retail-commerce/desktop-icon-sparkle.svg" alt="" width={25} height={25} />
                </span>
                <h3 className={`${h3Cls} mb-3 lg:mb-0`}>Source-aware proposals</h3>
              </div>
              <p className={`${pCls} lg:max-w-[456px]`}>
                Recommendations and prepared content stay clearly labeled as derived.
              </p>
              <span className={route}>
                Explore pathway <span aria-hidden="true">↗</span>
              </span>
            </a>
            <a href="#pathways" className={`${cardBase} lg:h-[201px] lg:gap-[17px]`}>
              <div className="flex flex-col items-start lg:w-full lg:flex-row lg:items-center lg:gap-[49px]">
                <span className={`${iconBox} mb-[22px] lg:mb-0`}>
                  <Image src="/retail-commerce/desktop-icon-shield-check.svg" alt="" width={25} height={25} />
                </span>
                <h3 className={`${h3Cls} mb-3 lg:mb-0`}>Approved execution</h3>
              </div>
              <p className={pCls}>Customer-facing work follows the required human or policy review.</p>
              <span className={route}>
                Explore pathway <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
