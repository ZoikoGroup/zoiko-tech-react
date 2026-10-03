import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const specimen = [
  ["Journey reference", "RC-002 — synthetic"],
  ["Payment operator", "Requires confirmation"],
  ["Payment state", "Pending authoritative response"],
  ["Commerce state", "Pending confirmation"],
  ["Exception", "Payment and order state reviewed separately"],
  ["Next action", "Responsible owner to confirm both sources"],
];

export default function Payments() {
  return (
    <section id="payments" className="w-full bg-white py-14 md:pb-[94px] md:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-8 md:gap-[30px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            07 / PAYMENTS &amp; FINANCIAL HANDOFFS
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:text-[38px] lg:leading-[44px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Payment success and", "commerce success are different", "states."]}
              tablet={["Payment success and", "commerce success are different states."]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 font-poppins text-[15px] leading-6 text-[#587176] md:text-[16px] md:leading-[25.6px]">
            <Lines
              desktop={[
                "ZoikoPay is described as payments and embedded financial infrastructure, with Zoiko Financial Group",
                "ownership attribution where relevant.",
              ]}
              tablet={[
                "ZoikoPay is described as payments and embedded financial infrastructure, with Zoiko Financial",
                "Group ownership attribution where relevant.",
              ]}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 pt-[6px] md:grid-cols-2 md:items-start md:gap-x-11 md:gap-y-[26px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-y-[10px] xl:grid-cols-[551px_minmax(0,1fr)]">
          {/* Operator explanation */}
          <div className="flex flex-col gap-3 overflow-hidden lg:rounded-[10px] lg:bg-[#ecfdfe] lg:p-[10px]">
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
              <Image src="/retail-commerce/desktop-icon-shield-check.svg" alt="" width={25} height={25} />
            </span>
            <h3 className="pt-[10px] font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">
              Keep the operator explicit.
            </h3>
            <p className="pb-[14px] font-poppins text-[15px] leading-6 text-[#587176] md:text-[16px] md:leading-[25.6px]">
              Confirm the actual contracting or regulated entity, approved market scope and source of payment state.
              Billing and recurring revenue workflows remain within approved Zoiko Billing scope.
            </p>
            <p className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[18.5px] font-poppins text-[14px] leading-[22.4px] text-[#48666a] lg:hidden">
              Technology involvement does not establish that Zoiko Tech is the regulated payment provider.
            </p>
          </div>

          {/* Specimen */}
          <div className="min-w-0 rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] drop-shadow-[0px_18px_25px_rgba(0,30,37,0.06)] md:col-start-2 md:row-start-1 lg:row-span-2 lg:self-center">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[160px] font-poppins text-[18px] font-bold leading-[23.4px] text-[#102d2f] lg:max-w-[317px]">
                Payment / commerce-state specimen
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

          {/* State explorer */}
          <div className="flex flex-col gap-[7px] rounded-[10px] border border-[rgba(140,184,189,0.4)] bg-white/[0.03] px-7 pb-10 pt-[27px] md:col-span-2 md:row-start-2 lg:col-span-1 lg:col-start-1">
            <label htmlFor="state-case" className="font-poppins text-[12px] font-bold leading-[19.2px] text-[#102d2f]">
              Explore a specimen handoff outcome
            </label>
            <select
              id="state-case"
              defaultValue="both-pending"
              className="min-h-[46px] w-full max-w-[420px] rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] py-[13px] pl-[15px] pr-[27px] font-poppins text-[14px] leading-4 text-[#20474b]"
            >
              <option value="both-pending">Both pending</option>
            </select>
            <p id="case-description" className="pt-[13px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
              Neither system has returned a definitive outcome. Show pending confirmation.
            </p>
            <p className="pt-3 font-poppins text-[12px] leading-[19.2px] text-[#6a8285]">
              Illustrative states only; no live transaction or financial data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
