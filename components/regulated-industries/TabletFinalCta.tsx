"use client";

import type { FormEvent } from "react";
import TabletLines from "./TabletLines";

const label = "flex flex-col gap-[5.55px] font-inter text-[14.4px] font-semibold leading-[23px] text-[#0a1416]";
const field =
  "min-h-[48px] w-full rounded-[10px] border border-[#9bb5b8] bg-white px-[12px] font-inter text-[14.4px] font-semibold text-[#0a1416] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#247780]";
const select = field + " h-[48px] appearance-none pl-[16px] pr-[28px]";
const check =
  "size-[22px] shrink-0 cursor-pointer appearance-none rounded-[2.5px] border border-[#767676] bg-white checked:border-[#247780] checked:bg-[#247780]";

export default function TabletFinalCta() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.44px] pt-[60.36px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(21px,3.33vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          <TabletLines
            lines={[
              "Modernize regulated operations without",
              "hiding jurisdiction, authority or evidence",
              "boundaries.",
            ]}
          />
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <TabletLines
            lines={[
              "Talk with Zoiko Tech about the sector, jurisdictions, regulated activities, systems and",
              "control or evidence requirements you need to support. We’ll route the discussion to the",
              "relevant industry, solution, technology and trust context.",
            ]}
          />
        </p>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-[14px] pt-[9.6px] sm:grid-cols-2">
          <label className={label}>
            Work email
            <input type="email" name="email" className={field} />
          </label>
          <label className={label}>
            Organization
            <input type="text" name="organization" className={field} />
          </label>
          <label className={label}>
            Canonical industry
            <input type="text" name="industry" placeholder="From the approved Industries taxonomy" className={field} />
          </label>
          <label className={label}>
            Country / jurisdiction
            <input type="text" name="jurisdiction" className={field} />
          </label>
          <label className={label}>
            Regulated activity / context
            <input type="text" name="activity" placeholder="High-level, not a compliance determination" className={field} />
          </label>
          <label className={label}>
            Primary requirement
            <select name="requirement" className={select} defaultValue="Regulatory obligations / controls">
              <option>Regulatory obligations / controls</option>
            </select>
          </label>
          <label className={label}>
            Deployment context
            <select name="deployment" className={select} defaultValue="Unknown">
              <option>Unknown</option>
            </select>
          </label>
          <label className={label}>
            Evaluation stage
            <select name="stage" className={select} defaultValue="Exploring">
              <option>Exploring</option>
            </select>
          </label>
          <label className={label + " sm:col-span-2"}>
            Message (optional)
            <textarea name="message" className={field + " h-[91.14px] py-[12px]"} />
            <span className="font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#4d6468]">
              <TabletLines
                lines={[
                  "Please don’t submit credentials, regulated personal data, supervisory correspondence or confidential",
                  "architecture details.",
                ]}
              />
            </span>
          </label>
          <label className="flex items-end gap-[13px] pb-[3px] pl-[4px] font-inter text-[14.4px] font-normal leading-[23px] text-[#0a1416] sm:col-span-2">
            <input type="checkbox" name="privacy" className={check} />
            I acknowledge the Privacy Notice.
          </label>
          <label className="flex items-end gap-[13px] pb-[3px] pl-[4px] font-inter text-[14.4px] font-normal leading-[23px] text-[#0a1416] sm:col-span-2">
            <input type="checkbox" name="updates" className={check} />
            Send me optional Zoiko Tech updates.
          </label>
          <div className="flex flex-col gap-[12px] pt-[12px] sm:col-span-2">
            <div className="flex flex-wrap gap-[12px]">
              <button
                type="submit"
                className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-[#247780] bg-[#247780] px-[24px] py-[12px] font-inter text-[16px] font-semibold text-white max-sm:w-full"
              >
                Contact Sales
              </button>
              <a
                href="/solution-zoiko-regulatory-compliance"
                className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-[#247780] px-[24px] font-inter text-[16px] font-semibold text-[#247780] max-sm:w-full"
              >
                Explore Regulatory &amp; Compliance
              </a>
            </div>
            <a href="#" className="pl-[12px] font-inter text-[16px] font-semibold leading-[25.6px] text-[#247780] underline">
              Explore Trust Center →
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
