"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import TabletLines from "./TabletLines";

const points = [
  { icon: "building", lines: ["Institution and operator", "context"] },
  { icon: "adjacent-network", lines: ["Priority workflow and", "authoritative systems"] },
  { icon: "adjacent-shield", lines: ["Market, evidence and", "approval requirements"] },
];

const fieldCls =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] px-[11px] py-[13px] text-[14px] font-bold text-[#20474b] placeholder:text-[#757575]";
const labelCls = "flex flex-col gap-[7.2px] text-[12px] font-bold leading-[19.2px] text-[#14363a]";

export default function TabletContact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact-t"
      className="w-full overflow-hidden px-[5%] pb-[94px] pt-[93px] font-poppins"
      style={{ backgroundImage: "linear-gradient(119.23deg, rgb(0,0,0) 0%, rgb(10,37,40) 48%, rgb(36,119,128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">18 / YOUR NEXT STEP</span>
          <h2 className="pb-[0.5px] text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines
              lines={[
                "Modernize financial technology without losing control of",
                "authority, evidence or operator boundaries.",
              ]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <TabletLines
              lines={[
                "Talk with Zoiko Tech about the workflow, systems, entities and markets involved — and the",
                "integration path that fits your operating model.",
              ]}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col items-start gap-[11.4px]">
            <h3 className="text-[28px] font-bold leading-[36.4px] text-white">
              <TabletLines lines={["A focused starting", "point."]} />
            </h3>
            <p className="text-[16px] leading-[25.6px] text-[#c4d7d9]">
              <TabletLines
                lines={[
                  "Bring one priority workflow and your",
                  "current architecture. Define the",
                  "sources, control requirements and",
                  "evaluation scope together.",
                ]}
              />
            </p>
            <ul className="flex w-full flex-col gap-[15px] pb-8 pt-6">
              {points.map((p) => (
                <li key={p.icon} className="flex items-center gap-[19px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={`/financial-services/tablet-${p.icon.includes("adjacent") ? p.icon : "contact-" + p.icon}-icon.svg`} alt="" width={25} height={25} />
                  </span>
                  <span className="text-[16px] leading-[25.6px] text-[#c4d7d9]">
                    <TabletLines lines={p.lines} />
                  </span>
                </li>
              ))}
            </ul>
            <a href="/fintech" className="text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
              Explore Financial Services Technology <br />
              →
            </a>
          </div>

          <form
            id="consultation-t"
            onSubmit={onSubmit}
            className="flex flex-col self-start rounded-[12px] border border-[#dce8e8] bg-white px-[34px] pb-[34px] pt-[33px] shadow-[0_15px_22.5px_rgba(21,59,62,0.04)]"
          >
            <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">START A CONVERSATION</span>
            <h3 className="pt-[16.9px] text-[20px] font-bold leading-[26px] text-[#14363a]">Discuss your financial architecture</h3>
            <p className="pt-[11.9px] text-[12px] leading-[19.2px] text-[#6a8285]">Industry: Financial Services</p>
            <div className="grid grid-cols-1 gap-[17px] pt-[12.9px] sm:grid-cols-2">
              <label className={labelCls}>
                Work email
                <input type="email" name="email" placeholder="you@company.com" className={fieldCls} />
              </label>
              <label className={labelCls}>
                Organization
                <input type="text" name="organization" placeholder="Company name" className={fieldCls} />
              </label>
              <label className={labelCls}>
                Institution type
                <select name="institution" defaultValue="" className={fieldCls}>
                  <option value="">Select institution type</option>
                </select>
              </label>
              <label className={labelCls}>
                Priority workflow
                <select name="workflow" defaultValue="" className={fieldCls}>
                  <option value="">Select priority workflow</option>
                </select>
              </label>
              <label className={labelCls}>
                Country / region
                <input type="text" name="country" placeholder="Your operating market" className={fieldCls} />
              </label>
              <label className={labelCls}>
                Evaluation stage
                <select name="stage" defaultValue="" className={fieldCls}>
                  <option value="">Select evaluation stage</option>
                </select>
              </label>
            </div>
            <div className="border-b border-[rgba(121,153,157,0.33)] pt-[0.9px]">
              <div className="flex min-h-12 items-center pb-[15.2px] pt-[14px] text-[12px] font-bold leading-[19.2px] text-[#14363a]">
                Add more context (optional)
              </div>
            </div>
            <p className="pt-3 text-[12px] leading-[19.2px] text-[#6a8285]">
              <TabletLines
                lines={[
                  "Please do not include bank or card details, account numbers,",
                  "credentials, customer financial data or confidential records.",
                ]}
              />
            </p>
            <label className="flex items-center gap-[13px] py-[14px] pl-1 text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" className="size-[13.4px] shrink-0" />
              <span>I acknowledge that this preview does not send or store my information.</span>
            </label>
            <label className="flex items-center gap-[13px] py-[14px] pl-1 text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" className="size-4 shrink-0" />
              <span>I would like to receive optional product updates.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
            >
              Review consultation request ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
