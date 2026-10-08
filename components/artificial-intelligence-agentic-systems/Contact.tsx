"use client";

import type { FormEvent } from "react";
import Lines from "./Lines";
import { WRAP } from "./layout";

const label = "flex flex-col gap-[7.19px]";
const labelText = "font-poppins text-xs font-bold leading-[19.2px] text-[#aecdd3]";
const field = "w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb]";
const select = `${field} min-h-[46px] py-[13px] pl-[15px] pr-[27px] font-poppins text-sm font-bold text-[#20474b]`;

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="w-full py-14 lg:pb-[70px] lg:pt-[2px]"
      style={{
        backgroundImage:
          "linear-gradient(121.25710453235422deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={WRAP}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="flex flex-col justify-center gap-[27px] lg:h-[554px] lg:pb-[18px]">
            <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
              <Lines lines={["Build an accountable", "AI operating model."]} />
            </h2>
            <p className="max-w-[473px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
              Start with intent, sources, authority and the systems that own definitive results.
            </p>
            <h3 className="font-poppins text-2xl font-bold leading-[1.3] text-white lg:text-[28px] lg:leading-[36.4px]">
              Bound the workflow first.
            </h3>
            <p className="pb-[13.2px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
              Product naming, public routes, capability, operator and support scope require approved current records.
            </p>
            <a href="/developer-portal" className="font-poppins text-sm font-bold leading-[22.4px] text-[#9adddf]">
              Developer Resources preview →
            </a>
          </div>

          <form
            id="consultation"
            onSubmit={onSubmit}
            className="flex flex-col gap-[15px] rounded-xl bg-[rgba(255,255,255,0.1)] p-6 shadow-[0px_15px_45px_0px_rgba(21,59,62,0.04)] md:p-[34px]"
          >
            <h3 className="font-poppins text-xl font-bold leading-[26px] text-[#aecdd3]">
              Discuss your AI architecture
            </h3>
            <div className="grid grid-cols-1 gap-[17px] pt-[13px] md:grid-cols-2">
              <label className={label}>
                <span className={labelText}>Work email</span>
                <input type="email" name="email" className={`${field} h-[46.39px] min-h-[46px] px-[15px]`} />
              </label>
              <label className={label}>
                <span className={labelText}>Organization</span>
                <input type="text" name="organization" className={`${field} h-[46.39px] min-h-[46px] px-[15px]`} />
              </label>
              <label className={label}>
                <span className={labelText}>Priority</span>
                <select name="priority" className={select} defaultValue="">
                  <option value="">Choose one</option>
                </select>
              </label>
              <label className={label}>
                <span className={labelText}>Stage</span>
                <select name="stage" className={select} defaultValue="">
                  <option value="">Choose one</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-[7.18px] pb-[6.2px]">
              <span className={labelText}>High-level context</span>
              <textarea name="context" className={`${field} h-[91.17px] min-h-[46px] resize-none p-[15px]`} />
            </label>
            <p className="font-poppins text-xs leading-[19.2px] text-white">
              Do not submit personal/customer data, credentials, private prompts, production payloads or confidential
              evidence.
            </p>
            <label className="flex items-center gap-[13px] py-[20px] pl-1 font-poppins text-xs leading-[19.2px] text-[#aecdd3]">
              <input type="checkbox" name="ack" className="size-4 shrink-0 rounded-[2.5px] border border-[#cfe9ea] bg-white" />
              <span className="max-w-[298px]">I acknowledge this preview sends/stores no information.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-transparent bg-[#08827e] px-[21px] py-3 font-poppins text-sm font-bold leading-[22.4px] text-white"
            >
              Review inquiry ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
