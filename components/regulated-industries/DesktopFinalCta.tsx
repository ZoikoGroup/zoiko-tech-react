"use client";

import DesktopLines from "./DesktopLines";

const inputCls =
  "h-[48px] min-h-[48px] w-full rounded-[10px] border border-[#9bb5b8] bg-[#5f8387] px-[12px] font-inter text-[14.4px] font-semibold text-[#f3f9fa] outline-none placeholder:text-[#f3f9fa]";
const selectCls =
  "h-[48px] min-h-[48px] w-full rounded-[10px] border border-[#9bb5b8] bg-[#5f8387] pl-[16px] pr-[28px] font-inter text-[14.4px] font-semibold text-[#e6f5f1] outline-none";
const labelCls = "flex flex-col gap-[5.55px] font-inter text-[14.4px] font-semibold leading-[23px] text-[#0a1416]";
const checkRowCls =
  "col-span-4 flex items-center gap-[13px] pl-[4px] font-inter text-[14.4px] leading-[23px] text-[#0a1416]";
const checkCls = "size-[22px] shrink-0 rounded-[2.5px] border border-[#767676] bg-white";

export default function DesktopFinalCta() {
  return (
    <section className="w-full bg-white px-[130px] pb-[96px] pt-[95.47px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.2px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          <DesktopLines
            lines={[
              "Modernize regulated operations without",
              "hiding jurisdiction, authority or evidence",
              "boundaries.",
            ]}
          />
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          <DesktopLines
            lines={[
              "Talk with Zoiko Tech about the sector, jurisdictions, regulated activities, systems and control",
              "or evidence requirements you need to support. We’ll route the discussion to the relevant",
              "industry, solution, technology and trust context.",
            ]}
          />
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-4 gap-[14px] pt-[3.8px]">
          <label className={labelCls}>
            Work email
            <input type="email" className={inputCls} />
          </label>
          <label className={labelCls}>
            Organization
            <input type="text" className={inputCls} />
          </label>
          <label className={labelCls}>
            Canonical industry
            <input type="text" placeholder="From the approved Industries taxonomy" className={inputCls} />
          </label>
          <label className={labelCls}>
            Country / jurisdiction
            <input type="text" className={inputCls} />
          </label>
          <label className={labelCls}>
            Regulated activity / context
            <input type="text" placeholder="High-level, not a compliance determination" className={inputCls} />
          </label>
          <label className={labelCls}>
            Primary requirement
            <select className={selectCls} defaultValue="Regulatory obligations / controls">
              <option>Regulatory obligations / controls</option>
            </select>
          </label>
          <label className={labelCls}>
            Deployment context
            <select className={selectCls} defaultValue="Unknown">
              <option>Unknown</option>
            </select>
          </label>
          <label className={labelCls}>
            Evaluation stage
            <select className={selectCls} defaultValue="Exploring">
              <option>Exploring</option>
            </select>
          </label>
          <label className={`${labelCls} col-span-4 gap-[5px]`}>
            Message (optional)
            <textarea className="h-[91.69px] min-h-[48px] w-full resize-none rounded-[10px] border border-[#9bb5b8] bg-[#5f8387] outline-none" />
            <span className="text-[12.8px] leading-[20.48px] text-[#4d6468]">
              Please don’t submit credentials, regulated personal data, supervisory correspondence or confidential architecture details.
            </span>
          </label>
          <label className={checkRowCls}>
            <input type="checkbox" className={checkCls} />
            I acknowledge the Privacy Notice.
          </label>
          <label className={checkRowCls}>
            <input type="checkbox" className={checkCls} />
            Send me optional Zoiko Tech updates.
          </label>
          <div className="col-span-4 flex flex-wrap items-center pt-[12px]">
            <button
              type="submit"
              className="mb-[12px] mr-[12px] flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-[10px] border-2 border-[#5f8387] bg-[#5f8387] px-[24px] py-[12px] font-inter text-[16px] font-semibold text-white"
            >
              Contact Sales
            </button>
            <a
              href="#"
              className="mb-[12px] mr-[12px] flex min-h-[48px] items-center whitespace-nowrap rounded-[10px] border-2 border-[#5f8387] px-[24px] font-inter text-[16px] font-semibold text-[#5f8387]"
            >
              Explore Regulatory &amp; Compliance
            </a>
            <a
              href="#"
              className="mb-[12px] px-[12px] font-inter text-[16px] font-semibold leading-[25.6px] text-[#5f8387] underline"
            >
              Explore Trust Center →
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
