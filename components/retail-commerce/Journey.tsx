import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const steps = [
  "Discover / engage",
  "Identify intent",
  "Present / prepare",
  "Commit / hand off",
  "Confirm outcome",
  "Operate / support",
];

const specimen = [
  ["Customer intent", "Sample service request"],
  ["Authoritative system", "External commerce / service system"],
  ["Context passed", "Minimum necessary specimen reference"],
  ["Handoff state", "Pending confirmation"],
  ["Current owner", "Integration operations"],
  ["Return state", "Not received"],
  ["Recovery", "Approved support or retry path required"],
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="w-full bg-[linear-gradient(121deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:pb-[108px] md:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-6 md:gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            06 / COMMERCE JOURNEY &amp; SYSTEM HANDOFFS
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] lg:text-[38px] lg:leading-[44px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Make every transfer explicit.", "Confirm the outcome at its source."]}
              tablet={["Make every transfer explicit.", "Confirm the outcome at its source."]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 font-poppins text-[15px] leading-6 text-[#c4d7d9] md:text-[16px] md:leading-[25.6px]">
            The responsible commerce system retains ownership of cart, order, booking and service state.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-3 pt-[10px] md:grid-cols-3 lg:grid-cols-6">
          {steps.map((label, i) => (
            <li
              key={label}
              className="flex flex-col gap-[7px] border-t-2 border-[#236d75] bg-[#14363a] px-[10px] py-[18px]"
            >
              <span className="pb-[0.8px] font-poppins text-[13px] leading-[20.8px] text-[#236d75]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-poppins text-[13px] font-bold leading-[20.8px] text-white lg:whitespace-nowrap">
                {label}
              </span>
            </li>
          ))}
        </ol>

        {/* Desktop: photo */}
        <div className="relative hidden h-[494px] overflow-hidden rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] lg:block">
          <Image
            src="/retail-commerce/desktop-journey-retail-counter.webp"
            alt="Retail associate and customer at a store counter with a laptop and card terminal"
            fill
            sizes="(min-width: 1280px) 1180px, 90vw"
            className="object-cover"
          />
        </div>

        {/* Mobile + tablet: specimen and note */}
        <div className="rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] lg:hidden">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="max-w-[160px] font-poppins text-[18px] font-bold leading-[23.4px] text-white">
              Commerce handoff contract
            </h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
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
                <dt className="text-[#9bc2c6]">{label}</dt>
                <dd className="text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="border-l-[3px] border-[#8edade] bg-white/[0.04] px-[23px] py-[19px] font-poppins text-[14px] leading-[22.4px] text-[#c6dfe1] lg:hidden">
          Catalog, checkout, POS, inventory, order management, fulfillment and loyalty remain external or adjacent
          systems unless dedicated product evidence establishes a Zoiko capability.
        </p>
      </div>
    </section>
  );
}
