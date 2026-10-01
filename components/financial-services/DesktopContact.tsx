"use client";

import Image from "next/image";
import DesktopLines from "./DesktopLines";

const points = [
  { icon: "landmark", text: "Institution and operator context" },
  { icon: "network", text: "Priority workflow and authoritative systems" },
  { icon: "shield-check", text: "Market, evidence and approval requirements" },
];

const labelCls = "font-poppins text-[12px] font-bold leading-[19.2px] text-[#14363a]";
const inputCls =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] px-[11px] py-[13px] font-poppins text-[14px] font-bold text-[#20474b] outline-none placeholder:text-[#757575] focus:border-[#247780]";
const selectCls =
  "min-h-[46px] w-full appearance-none rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] py-[13px] pl-[15px] pr-[27px] font-poppins text-[14px] font-bold text-[#20474b] outline-none focus:border-[#247780]";
const checkCls =
  "mt-[11.4px] size-[16px] shrink-0 appearance-none rounded-[2.5px] border border-[#767676] bg-white checked:border-[#247780] checked:bg-[#247780]";

export default function DesktopContact() {
  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(120.79deg,#000_0%,#0a2528_48%,#247780_100%)] px-10 pb-[94px] pt-[93px] xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15.1px]">
          <h2 className="pb-[0.685px] font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines
              lines={[
                "Modernize financial technology",
                "without losing control of authority,",
                "evidence or operator boundaries.",
              ]}
            />
          </h2>
          <p className="max-w-[760px] pt-[4.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "Talk with Zoiko Tech about the workflow, systems, entities and markets involved — and the integration path",
                "that fits your operating model.",
              ]}
            />
          </p>
        </div>
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-x-20">
          <div className="flex min-w-0 flex-col items-start gap-3">
            <h3 className="font-poppins text-[28px] font-bold leading-[36.4px] text-white">A focused starting point.</h3>
            <p className="font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              <DesktopLines
                lines={[
                  "Bring one priority workflow and your current",
                  "architecture.",
                  "Define the sources, control requirements and",
                  "evaluation scope",
                  "together.",
                ]}
              />
            </p>
            <ul className="grid w-full grid-cols-[50px_1fr] gap-[15px] pb-[31.5px] pt-[23px]">
              {points.map((p) => (
                <li key={p.icon} className="col-span-2 grid grid-cols-subgrid items-center">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={`/financial-services/desktop-icon-${p.icon}.svg`} alt="" width={25} height={25} />
                  </span>
                  <span className="font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">{p.text}</span>
                </li>
              ))}
            </ul>
            <a href="/fintech" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
              Explore Financial Services Technology →
            </a>
          </div>
          <form
            id="consultation"
            onSubmit={(e) => e.preventDefault()}
            className="flex min-w-0 flex-col self-start rounded-[12px] border border-[#dce8e8] bg-white px-[34px] pb-[34px] pt-[33px] drop-shadow-[0px_15px_22.5px_rgba(21,59,62,0.04)]"
          >
            <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">START A CONVERSATION</p>
            <h3 className="pt-[16.9px] font-poppins text-[20px] font-bold leading-[26px] text-[#14363a]">Discuss your financial architecture</h3>
            <p className="pt-[11.9px] font-poppins text-[12px] leading-[19.2px] text-[#6a8285]">Industry: Financial Services</p>
            <div className="grid grid-cols-2 gap-[17px] pt-[12.9px]">
              <label className="flex flex-col gap-[7.18px]">
                <span className={labelCls}>Work email</span>
                <input type="email" name="email" placeholder="you@company.com" className={inputCls} />
              </label>
              <label className="flex flex-col gap-[7.18px]">
                <span className={labelCls}>Organization</span>
                <input type="text" name="organization" placeholder="Company name" className={inputCls} />
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={labelCls}>Institution type</span>
                <select name="institutionType" defaultValue="" className={selectCls}>
                  <option value="" disabled>Select institution type</option>
                </select>
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={labelCls}>Priority workflow</span>
                <select name="priorityWorkflow" defaultValue="" className={selectCls}>
                  <option value="" disabled>Select priority workflow</option>
                </select>
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={labelCls}>Country / region</span>
                <input type="text" name="country" placeholder="Your operating market" className={inputCls} />
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={labelCls}>Evaluation stage</span>
                <select name="evaluationStage" defaultValue="" className={selectCls}>
                  <option value="" disabled>Select evaluation stage</option>
                </select>
              </label>
            </div>
            <details className="border-b border-[rgba(121,153,157,0.33)] pt-[0.9px]">
              <summary className="flex min-h-[48px] cursor-pointer items-center pb-[15.19px] pt-[14px] font-poppins text-[12px] font-bold leading-[19.2px] text-[#14363a]">
                Add more context (optional)
              </summary>
              <textarea name="context" rows={3} className="mb-4 w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] p-[11px] font-poppins text-[14px] outline-none" />
            </details>
            <p className="font-poppins text-[12px] leading-[19.2px] text-[#6a8285]">
              <DesktopLines
                lines={[
                  "Please do not include bank or card details, account numbers, credentials, customer financial data",
                  "or confidential",
                  "records.",
                ]}
              />
            </p>
            <label className="flex h-[38.89px] items-start gap-[13px] pl-1 pt-[8.2px] font-poppins text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="acknowledge" className={checkCls} />
              <span>
                <DesktopLines lines={["I acknowledge that this preview does not send or store my", "information."]} />
              </span>
            </label>
            <label className="flex h-[56.8px] items-start gap-[13px] pl-1 pt-[8.2px] font-poppins text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="updates" className={checkCls} />
              <span>
                <DesktopLines lines={["I would like to receive optional product", "updates."]} />
              </span>
            </label>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
            >
              Review consultation request ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
