"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import DesktopLines from "./DesktopLines";

const points = [
  { icon: "desktop-contact-users-icon.svg", text: "Users, accessibility and assisted-service needs" },
  { icon: "desktop-icon-globe.svg", text: "Agency, jurisdiction and deployment context" },
  { icon: "desktop-icon-shield-check.svg", text: "Authority, source records and review requirements" },
];

const labelCls = "flex flex-col gap-[7.19px] text-[12px] font-bold leading-[19.2px] text-[#14363a]";
const fieldCls =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] font-poppins font-bold placeholder:text-[#757575] outline-none focus:border-[#247780]";
const selectCls = `${fieldCls} appearance-none py-[13px] pl-[15px] pr-[27px] text-[10px] leading-[16px] text-[#20474b]`;
const inputCls = `${fieldCls} px-[11px] py-[14px] text-[10px]`;
const checkCls =
  "mt-[3px] size-4 shrink-0 appearance-none rounded-[2.5px] border border-[#767676] bg-white checked:border-[#247780] checked:bg-[#247780]";

export default function DesktopContact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="flex w-full flex-col items-center bg-white pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15.1px]">
          <h2 className="pb-[0.7px] text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Modernize public digital services", "without losing accessibility, authority", "or evidence."]} />
          </h2>
          <p className="pt-[4.2px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Talk with Zoiko Tech about the service or operational workflow, jurisdictions and systems involved, and the",
                "integration path that fits your environment.",
              ]}
            />
          </p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex w-[37.3%] shrink-0 flex-col justify-center gap-[11.3px] pb-[34px]">
            <h3 className="text-[28px] font-bold leading-[36.4px] text-[#102d2f]">
              <DesktopLines lines={["Begin with one clear service", "objective."]} />
            </h3>
            <p className="text-[16px] leading-[25.6px] text-[#587176]">
              <DesktopLines
                lines={["Define the responsible authority, the source systems and the", "requirements for access, identity, security and evidence."]}
              />
            </p>
            <ul className="flex flex-col gap-[15px] pb-[32.2px] pt-[23.7px]">
              {points.map((p) => (
                <li key={p.icon} className="flex items-center gap-[15px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={`/public-sector-government/${p.icon}`} alt="" width={25} height={25} />
                  </span>
                  <span className="text-[16px] leading-[25.6px] text-[#587176] xl:whitespace-nowrap">{p.text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="text-[14px] font-bold leading-[22.4px] text-[#247780]">
              Explore Public-Sector Technology →
            </a>
          </div>

          <form
            id="consultation"
            onSubmit={onSubmit}
            className="min-w-0 max-w-[705px] flex-1 rounded-[12px] border border-[#1e293b] bg-white px-[34px] pb-[34px] pt-[33px] drop-shadow-[0px_15px_22.5px_rgba(21,59,62,0.04)]"
          >
            <h3 className="pt-[16.89px] text-[20px] font-bold leading-[26px] text-[#14363a]">Discuss your public-sector architecture</h3>
            <p className="pt-[11.9px] text-[12px] leading-[19.2px] text-[#6a8285]">Industry: Public Sector &amp; Government</p>
            <div className="grid grid-cols-2 gap-[17px] pt-[12.9px]">
              <label className={labelCls}>
                Work email
                <input type="email" name="email" placeholder="you@organization.org" className={`${fieldCls} px-[11px] py-[14px] text-[14px]`} />
              </label>
              <label className={labelCls}>
                Organization / agency
                <input type="text" name="organization" placeholder="Organization name" className={inputCls} />
              </label>
              <label className={labelCls}>
                Government level / organization type
                <select name="level" defaultValue="" className={selectCls}>
                  <option value="">Select government level / organization type</option>
                  <option value="national">National / federal</option>
                  <option value="regional">State / regional</option>
                  <option value="local">Local / municipal</option>
                  <option value="agency">Agency / authority</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className={labelCls}>
                Primary objective
                <select name="objective" defaultValue="" className={selectCls}>
                  <option value="">Select primary objective</option>
                  <option value="digital-service-delivery">Digital service delivery</option>
                  <option value="identity-authority">Identity &amp; authority</option>
                  <option value="workflow-evidence">Workflow &amp; evidence</option>
                  <option value="governed-ai">Governed public-sector AI</option>
                </select>
              </label>
              <label className={labelCls}>
                Country / jurisdiction
                <input type="text" name="jurisdiction" placeholder="Your jurisdiction" className={inputCls} />
              </label>
              <label className={labelCls}>
                Evaluation stage
                <select name="stage" defaultValue="" className={selectCls}>
                  <option value="">Select evaluation stage</option>
                  <option value="exploring">Exploring</option>
                  <option value="evaluating">Evaluating</option>
                  <option value="planning">Planning a pilot</option>
                </select>
              </label>
            </div>
            <details className="border-b border-[rgba(121,153,157,0.33)] pt-[0.9px]">
              <summary className="flex min-h-[48px] cursor-pointer items-center pb-[15.2px] pt-[14px] text-[12px] font-bold leading-[19.2px] text-[#14363a]">
                Add more context (optional)
              </summary>
              <textarea
                name="context"
                rows={3}
                className="mb-4 w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] p-[11px] text-[12px] outline-none focus:border-[#247780]"
              />
            </details>
            <p className="text-[12px] leading-[19.2px] text-[#6a8285]">
              Do not submit resident personal information, case records, credentials, classified information, justice, benefit, tax or health records, or sensitive government documents.
            </p>
            <label className="flex items-start gap-[13px] py-[10px] pl-[4px] text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="acknowledge" className={checkCls} />
              <span className="max-w-[376px]">I acknowledge that this preview does not send or store my information.</span>
            </label>
            <label className="flex items-start gap-[13px] py-[10px] pl-[4px] text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="updates" className={checkCls} />
              <span className="max-w-[254px]">I would like to receive optional product updates.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-[11.7px] text-center text-[14px] font-bold leading-[22.4px] text-white"
            >
              Review consultation request ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
