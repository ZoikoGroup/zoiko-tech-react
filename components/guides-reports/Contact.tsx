"use client";

import { WRAP } from "./layout";

const FIELD =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[rgba(128,168,175,0.4)] px-[15px] font-poppins text-[14px] text-white outline-none focus:border-[#9adddf]";
const LABEL = "flex flex-col gap-[7.19px] font-poppins text-[12px] font-bold leading-[19.2px] text-white";
const SELECT = `${FIELD} font-bold text-[#20474b]`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(122.3deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)] py-14 lg:pb-[75px] lg:pt-[74px]"
    >
      <div className={WRAP}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col items-start gap-[11.3px] lg:max-w-[448px] lg:pb-[406.81px]">
            <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:max-w-[443px] lg:text-[45px] lg:leading-[51.75px]">
              Continue with a qualified question.
            </h2>
            <p className="pt-[4px] font-poppins text-[16px] leading-[25.6px] text-white lg:max-w-[443px]">
              Connect learning to your evaluation, implementation or procurement context.
            </p>
            <h3 className="font-poppins text-[28px] font-bold leading-[36.4px] text-white">
              Reading value first.
            </h3>
            <p className="pb-[13.19px] font-poppins text-[16px] leading-[25.6px] text-white">
              No resource identifier is passed because the approved catalog was not supplied. Describe your
              objective at a high level.
            </p>
            <a
              href="/customer-stories"
              className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]"
            >
              Explore Customer Stories preview →
            </a>
          </div>
          <form
            id="consultation"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-[9px] self-start rounded-[12px] border border-[#dce8e8] bg-[rgba(255,255,255,0.2)] p-6 shadow-[0px_15px_45px_0px_rgba(21,59,62,0.04)] md:p-[34px]"
          >
            <h3 className="font-poppins text-[20px] font-bold leading-[26px] text-white">
              Discuss your evaluation
            </h3>
            <div className="grid grid-cols-1 gap-[17px] pt-[13px] md:grid-cols-2">
              <label className={LABEL}>
                Work email
                <input type="email" name="email" className={`${FIELD} h-[46.39px]`} />
              </label>
              <label className={LABEL}>
                Organization
                <input type="text" name="organization" className={`${FIELD} h-[46.39px]`} />
              </label>
              <label className={LABEL}>
                Intent
                <select name="intent" defaultValue="" className={SELECT}>
                  <option value="">Choose one</option>
                  <option value="evaluation">Evaluation</option>
                  <option value="implementation">Implementation</option>
                  <option value="procurement">Procurement</option>
                </select>
              </label>
              <label className={LABEL}>
                Stage
                <select name="stage" defaultValue="" className={SELECT}>
                  <option value="">Choose one</option>
                  <option value="exploring">Exploring</option>
                  <option value="comparing">Comparing options</option>
                  <option value="deciding">Ready to decide</option>
                </select>
              </label>
            </div>
            <label className={`${LABEL} pb-[6.19px]`}>
              High-level context (optional)
              <textarea name="context" className={`${FIELD} h-[91.17px] py-3`} />
            </label>
            <p id="safe-data" className="font-poppins text-[12px] leading-[19.2px] text-[#b7d2d5]">
              Do not submit credentials, secrets, personal data, customer records, private documents or
              restricted material.
            </p>
            <label className="flex items-center gap-[13px] py-[10px] pl-1 font-poppins text-[12px] leading-[19.2px] text-white">
              <input type="checkbox" name="ack" className="size-4 shrink-0 rounded-[2.5px]" />
              <span className="max-w-[333px]">I acknowledge this preview does not send or store information.</span>
            </label>
            <label className="flex items-center gap-[13px] py-[10px] pl-1 font-poppins text-[12px] leading-[19.2px] text-white">
              <input type="checkbox" name="updates" className="size-4 shrink-0 rounded-[2.5px]" />
              <span className="max-w-[330px]">Optional updates when an approved live service is connected.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-[11.5px] font-poppins text-[14px] font-bold leading-[22.4px] text-[#cfe9ea]"
            >
              Review inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
