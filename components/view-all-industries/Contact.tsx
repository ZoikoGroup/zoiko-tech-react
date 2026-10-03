"use client";

import type { FormEvent } from "react";
import Lines from "./Lines";
import { WRAP } from "./layout";

const FIELD =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[rgba(127,208,217,0.2)] px-[15px] font-poppins text-sm font-bold text-white outline-none focus:border-white";
const LABEL = "flex flex-col gap-[7.19px] font-poppins text-xs font-bold leading-[19.2px] text-white";
const CHECK =
  "mt-[2px] size-4 shrink-0 appearance-none rounded-[2.5px] border border-[#cfe9ea] bg-[#2a8b96] checked:bg-[#cfe9ea]";

function Select({ name }: { name: string }) {
  return (
    <select name={name} defaultValue="" className={`${FIELD} py-[13px] pr-[27px]`}>
      <option value="" className="text-black">Choose one</option>
    </select>
  );
}

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <span aria-hidden="true" className="hidden h-5 lg:block" />
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Not sure where your organization fits?", "Start with the operating problem."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines lines={["Tell Zoiko Tech about your sector, operating model and the systems or workflows you need to modernize."]} />
          </p>
        </div>
        <form
          id="consultation"
          onSubmit={onSubmit}
          className="flex w-full flex-col rounded-xl border border-[#dce8e8] bg-[rgba(129,212,206,0.24)] px-5 pb-[34px] pt-[33px] shadow-[0px_15px_45px_0px_rgba(21,59,62,0.04)] md:px-[34px]"
        >
          <span className="font-poppins text-xs font-bold leading-[19.2px] tracking-[2px] text-white">
            CONTACT SALES / LOCAL PREVIEW
          </span>
          <h3 className="pt-[17px] font-poppins text-xl font-bold leading-[26px] text-white">Describe your operating need</h3>
          <p className="pt-[13px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">Source: Industries Directory</p>
          <div className="grid grid-cols-1 gap-[17px] pt-[17px] md:grid-cols-2">
            <label className={LABEL}>
              Work email
              <input type="email" name="email" className={`${FIELD} h-[46.39px]`} />
            </label>
            <label className={LABEL}>
              Organization
              <input type="text" name="organization" className={`${FIELD} h-[46.39px]`} />
            </label>
            <label className={LABEL}>
              Industry
              <Select name="industry" />
            </label>
            <label className={LABEL}>
              Country / region
              <input type="text" name="country" className={`${FIELD} h-[46.39px]`} />
            </label>
            <label className={LABEL}>
              Operating need
              <Select name="need" />
            </label>
            <label className={LABEL}>
              Evaluation stage
              <Select name="stage" />
            </label>
          </div>
          <label className={`${LABEL} pb-[6.19px] pt-[17px] lg:pt-0`}>
            Operating model or workflow (optional)
            <textarea name="workflow" className={`${FIELD} h-[113.56px] py-3`} />
          </label>
          <p className="font-poppins text-xs leading-[19.2px] text-white lg:max-w-[460px]">
            Use high-level business context. Do not include sensitive personal information, credentials or confidential records.
          </p>
          <label className="flex items-start gap-3 py-3 pl-1 font-poppins text-xs leading-[19.2px] text-white">
            <input type="checkbox" name="acknowledge" className={CHECK} />
            <span className="max-w-[356px]">I acknowledge that this preview does not send or store information.</span>
          </label>
          <label className="flex items-start gap-3 pb-3 pl-1 font-poppins text-xs leading-[19.2px] text-white">
            <input type="checkbox" name="updates" className={CHECK} />
            <span className="max-w-[314px]">Optional product updates when a live service is connected.</span>
          </label>
          <button
            type="submit"
            className="min-h-[48px] w-full rounded-[5px] border border-transparent bg-[#2a8b96] px-[21px] py-3 text-center font-poppins text-sm font-bold leading-[22.4px] text-[#cfe9ea]"
          >
            Review consultation request ↗
          </button>
        </form>
      </div>
    </section>
  );
}
