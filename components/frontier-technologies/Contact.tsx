"use client";

import { WRAP } from "./layout";
import Lines from "./Lines";

const LABEL = "font-poppins text-[12px] font-bold leading-[19.2px] text-[#a0d5dc]";
const FIELD =
  "w-full min-h-[46px] rounded-[5px] border border-solid border-[#ccdedf] bg-[#f8fbfb] font-poppins text-[14px] text-[#20474b] outline-none focus:border-[#247780]";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(117.06deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 lg:py-[70px]"
    >
      <div className={`${WRAP} grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20`}>
        <div className="flex flex-col gap-[15.1px] lg:pb-[229.42px]">
          <h2 className="pb-[0.685px] font-poppins text-[34px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[44px] md:leading-[50.6px]">
            <Lines lines={["Bring a question.", "Keep the method", "visible."]} />
          </h2>
          <p className="pb-[9.4px] pt-[4.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9] lg:max-w-[448px]">
            Discuss collaboration or technical evaluation without implying
            <br className="hidden xl:block" /> an approved institutional relationship.
          </p>
          <a href="/developer-portal" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
            Developer Resources preview →
          </a>
        </div>
        <form
          id="consultation"
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-[14px] self-start rounded-[12px] bg-[rgba(255,255,255,0.2)] p-6 shadow-[0px_15px_45px_0px_rgba(21,59,62,0.04)] md:p-[34px]"
        >
          <h3 className="font-poppins text-[20px] font-bold leading-[26px] text-[#a0d5dc]">Discuss research context</h3>
          <div className="grid grid-cols-1 gap-[17px] pt-[13px] md:grid-cols-2">
            <label className="flex flex-col gap-[7.19px]">
              <span className={LABEL}>Work email</span>
              <input type="email" name="email" className={`${FIELD} h-[46.39px] px-[15px]`} />
            </label>
            <label className="flex flex-col gap-[7.19px]">
              <span className={LABEL}>Organization</span>
              <input type="text" name="organization" className={`${FIELD} h-[46.39px] px-[15px]`} />
            </label>
            <label className="flex flex-col gap-[7.19px]">
              <span className={LABEL}>Intent</span>
              <select name="intent" defaultValue="" className={`${FIELD} h-[46.39px] pl-[15px] pr-[27px] font-bold`}>
                <option value="">Choose one</option>
                <option value="collaboration">Collaboration</option>
                <option value="evaluation">Technical evaluation</option>
                <option value="research">Research</option>
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-[7.19px] pb-[6.19px]">
            <span className={LABEL}>High-level context</span>
            <textarea name="context" className={`${FIELD} h-[91.17px] resize-none px-[15px] py-3`} />
          </label>
          <p className="font-poppins text-[12px] leading-[19.2px] text-white">
            No unpublished findings, restricted datasets, private manuscripts, personal data, credentials or confidential partner information.
          </p>
          <label className="flex min-h-[56.99px] items-center gap-[13px] pl-1 font-poppins text-[12px] leading-[19.2px] text-[#a0d5dc]">
            <input type="checkbox" name="ack" className="size-4 shrink-0 rounded-[2.5px] border border-[#767676] bg-white" />
            <span className="max-w-[298px]">I acknowledge this preview sends/stores no information.</span>
          </label>
          <button
            type="submit"
            className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-solid border-transparent bg-[#247780] px-[21px] py-3 font-poppins text-[14px] font-bold leading-[22.4px] text-white"
          >
            Review inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
