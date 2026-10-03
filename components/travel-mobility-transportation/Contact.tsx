"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import Lines from "./Lines";
import { WRAP } from "./layout";

const POINTS = [
  { icon: "icon-orchestration", text: "Journey objective and operating model" },
  { icon: "icon-landmark", text: "Provider, market and source systems" },
  { icon: "icon-shield-check", text: "Permission, service states and evidence" },
];

const FIELD =
  "min-h-[46px] w-full rounded-[5px] border border-solid border-[#ccdedf] bg-[#f8fbfb] font-poppins text-sm font-bold text-[#20474b] outline-none focus:border-[#23757e]";
const INPUT = `${FIELD} px-[11px] py-[13px] placeholder:text-[#757575]`;
const SELECT = `${FIELD} py-[13px] pl-[15px] pr-[27px]`;
const LABEL = "flex flex-col gap-[7.19px] font-poppins text-xs font-bold leading-[19.2px] text-[#14363a]";

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <section
      id="contact"
      className="w-full py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
      style={{ backgroundImage: "linear-gradient(119.67deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col gap-[14.8px]">
          <h2 className="max-w-[820px] font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            Build mobility journeys that stay clear about provider, state and responsibility.
          </h2>
          <p className="pt-[4.5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines
              lines={[
                "Talk with Zoiko Tech about the journey, providers, markets and authoritative systems involved — and the",
                "orchestration, communication or integration layer that fits your environment.",
              ]}
            />
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="flex flex-col justify-center gap-[11.3px]">
            <h3 className="font-poppins text-[28px] font-bold leading-[36.4px] text-white">Begin with one defined journey.</h3>
            <p className="font-inter text-base leading-[25.6px] text-[#c4d7d9]">
              Identify the service owner, necessary context and supported handoff before expanding to more providers.
            </p>
            <ul className="flex flex-col gap-[15px] pb-[32.2px] pt-[23.7px]">
              {POINTS.map((p) => (
                <li key={p.icon} className="flex items-center gap-[15px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={`/travel-mobility-transportation/${p.icon}.svg`} alt="" width={25} height={25} />
                  </span>
                  <span className="font-inter text-base leading-[25.6px] text-[#c4d7d9]">{p.text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="font-poppins text-sm font-bold leading-[22.4px] text-[#9adddf]">
              Explore Mobility &amp; Transportation →
            </a>
          </div>
          <form
            id="consultation"
            onSubmit={onSubmit}
            className="flex flex-col self-start rounded-xl border border-solid border-[#dce8e8] bg-white px-6 pb-[34px] pt-[33px] shadow-[0px_15px_22.5px_rgba(21,59,62,0.04)] md:px-[34px]"
          >
            <span className="font-poppins text-xs font-bold uppercase leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              Start a conversation
            </span>
            <h3 className="pt-[16.9px] font-poppins text-xl font-bold leading-[26px] text-[#14363a]">
              Discuss your mobility architecture
            </h3>
            <p className="pt-[11.9px] font-inter text-xs leading-[19.2px] text-[#6a8285]">
              Industry: Travel, Mobility &amp; Transportation
            </p>
            <div className="grid grid-cols-1 gap-[17px] pt-[12.89px] md:grid-cols-2">
              <label className={LABEL}>
                Work email
                <input type="email" placeholder="you@company.com" className={INPUT} />
              </label>
              <label className={LABEL}>
                Organization
                <input type="text" placeholder="Company name" className={INPUT} />
              </label>
              <label className={LABEL}>
                Organization type
                <select defaultValue="" className={SELECT}>
                  <option value="">Select organization type</option>
                </select>
              </label>
              <label className={LABEL}>
                Primary objective
                <select defaultValue="" className={SELECT}>
                  <option value="">Select primary objective</option>
                </select>
              </label>
              <label className={LABEL}>
                Country / region
                <input type="text" placeholder="Your operating market" className={INPUT} />
              </label>
              <label className={LABEL}>
                Evaluation stage
                <select defaultValue="" className={SELECT}>
                  <option value="">Select evaluation stage</option>
                </select>
              </label>
            </div>
            <div className="border-b border-solid border-[rgba(121,153,157,0.33)] pt-[0.91px]">
              <div className="flex min-h-[48px] items-center pb-[15.19px] pt-[14px] font-poppins text-xs font-bold leading-[19.2px] text-[#14363a]">
                Add more context (optional)
              </div>
            </div>
            <p id="sensitive-note" className="font-inter text-xs leading-[19.2px] text-[#6a8285]">
              Do not submit passport or visa data, driver-license details, real-time location, vehicle identifiers, trip histories, payment data, credentials or confidential provider records.
            </p>
            <label className="flex items-center gap-[9px] py-[11px] pl-1 font-inter text-xs leading-[19.2px] text-[#14363a]">
              <input type="checkbox" className="size-4 shrink-0" />
              I acknowledge that this preview does not send or store my information.
            </label>
            <label className="flex items-center gap-[9px] py-[11px] pl-1 font-inter text-xs leading-[19.2px] text-[#14363a]">
              <input type="checkbox" className="size-4 shrink-0" />
              I would like to receive optional product updates.
            </label>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-solid border-transparent bg-[#23757e] px-[21px] font-poppins text-sm font-bold leading-[22.4px] text-[#cfe9ea]"
            >
              Request consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
