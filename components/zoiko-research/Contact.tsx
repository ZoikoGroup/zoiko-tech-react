"use client";

import type { FormEvent } from "react";
import Lines from "./Lines";
import { WRAP } from "./layout";

const field =
  "w-full rounded-[5px] border border-solid border-[#ccdedf] bg-[#f8fbfb] font-poppins text-[14px] text-[#20474b] outline-none focus:border-[#247780]";

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(117.09deg,#000000_0%,#0a2528_48%,#247780_100%)] pb-14 pt-14 lg:pb-[86px] lg:pt-[86px]"
    >
      <div className={WRAP}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="flex flex-col gap-[15.1px]">
            <h2 className="pb-[0.69px] font-poppins text-[34px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[44px] md:leading-[50.6px]">
              <Lines lines={["Bring a question.", "Keep the method", "visible."]} />
            </h2>
            <p className="pb-[9.4px] pt-[4.195px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Discuss collaboration or technical evaluation without implying an approved institutional relationship.
            </p>
            <a href="/developer-portal" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
              Developer Resources preview →
            </a>
          </div>

          <form
            id="consultation"
            onSubmit={onSubmit}
            className="flex flex-col gap-[13px] self-start rounded-[12px] bg-[rgba(255,255,255,0.2)] p-6 shadow-[0px_15px_45px_0px_rgba(21,59,62,0.04)] md:p-[34px]"
          >
            <h3 className="font-poppins text-[20px] font-bold leading-[26px] text-white">Discuss research context</h3>
            <div className="grid grid-cols-1 gap-[17px] pt-[13px] md:grid-cols-2">
              <label className="flex flex-col gap-[7.19px]">
                <span className="font-poppins text-[12px] font-bold leading-[19.2px] text-white">Work email</span>
                <input type="email" name="email" className={`${field} h-[46.39px] min-h-[46px] px-[15px]`} />
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className="font-poppins text-[12px] font-bold leading-[19.2px] text-white">Organization</span>
                <input type="text" name="organization" className={`${field} h-[46.39px] min-h-[46px] px-[15px]`} />
              </label>
              <label className="flex flex-col gap-[7.18px]">
                <span className="font-poppins text-[12px] font-bold leading-[19.2px] text-white">Intent</span>
                <select
                  name="intent"
                  defaultValue=""
                  className={`${field} min-h-[46px] appearance-none py-[13px] pl-[15px] pr-[27px] font-bold`}
                >
                  <option value="">Choose one</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="technical-evaluation">Technical evaluation</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-[7.19px] pb-[6.19px]">
              <span className="font-poppins text-[12px] font-bold leading-[19.2px] text-white">High-level context</span>
              <textarea name="context" className={`${field} h-[91.17px] min-h-[46px] resize-none p-[15px]`} />
            </label>
            <p className="font-poppins text-[12px] leading-[19.2px] text-[#b8d6dc]">
              No unpublished findings, restricted datasets, private manuscripts, personal data, credentials or
              confidential partner information.
            </p>
            <label className="flex min-h-[57px] items-center gap-[13px] pl-1">
              <input
                type="checkbox"
                name="ack"
                className="size-4 shrink-0 rounded-[2.5px] border border-solid border-[#767676] bg-white"
              />
              <span className="max-w-[298px] font-poppins text-[12px] leading-[19.2px] text-white">
                I acknowledge this preview sends/stores no information.
              </span>
            </label>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-solid border-transparent bg-[#247780] px-[21px] pb-[11.89px] pt-[11.5px] font-poppins text-[14px] font-bold leading-[22.4px] text-[#f3f9fa]"
            >
              Review inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
