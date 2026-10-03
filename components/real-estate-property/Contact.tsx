"use client";

import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const POINTS = [
  { icon: "icon-building-columns", text: "Property and accommodation model" },
  { icon: "icon-sitemap-outline", text: "Authoritative systems and provider handoffs" },
  { icon: "icon-shield-check-outline", text: "Jurisdiction, privacy and evidence" },
];

const LABEL = "font-poppins text-[12px] font-bold leading-[19.2px] text-[#14363a]";
const FIELD =
  "h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] font-poppins text-[14px] font-bold text-[#20474b] placeholder:text-[#757575] outline-none focus:border-[#46b6c1]";
const INPUT = `${FIELD} px-[11px]`;
const SELECT = `${FIELD} appearance-none pl-[15px] pr-[27px]`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]"
      style={{ backgroundImage: "linear-gradient(120deg, rgb(0,0,0) 0%, rgb(10,37,40) 48%, rgb(36,119,128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.1px] xl:max-w-none">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            18 / YOUR NEXT STEP
          </p>
          <h2 className="pb-[0.685px] font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines
              lines={[
                "Build property and accommodation",
                "journeys that keep ownership, status and",
                "compliance boundaries clear.",
              ]}
            />
          </h2>
          <p className="max-w-[760px] pt-[4.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9] xl:max-w-none">
            <Lines
              lines={[
                "Talk with Zoiko Tech about the providers and systems involved, the boundaries that matter and the",
                "integration path that fits your operating model.",
              ]}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="flex flex-col justify-center gap-[11.3px] lg:pb-[34px]">
            <h3 className="font-poppins text-[24px] font-bold leading-[1.3] text-white md:text-[28px] md:leading-[36.4px]">
              Begin with one defined journey.
            </h3>
            <p className="font-inter text-base leading-[25.6px] text-[#c4d7d9]">
              <Lines
                lines={[
                  "Identify the property source, service provider, transaction",
                  "owner and financial system before expanding.",
                ]}
              />
            </p>
            <ul className="flex flex-col gap-[15px] pb-[32.2px] pt-[23.7px]">
              {POINTS.map((p) => (
                <li key={p.icon} className="flex items-center gap-[19px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={`/real-estate-property/${p.icon}.svg`} alt="" width={25} height={25} />
                  </span>
                  <span className="font-inter text-base leading-[25.6px] text-[#c4d7d9]">{p.text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
              Explore Property &amp; Accommodation →
            </a>
          </div>

          <form
            id="consultation"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col self-start rounded-xl border border-[#dce8e8] bg-white px-5 pb-[34px] pt-[33px] shadow-[0_15px_22.5px_rgba(21,59,62,0.04)] md:px-[34px]"
          >
            <span className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              START A CONVERSATION
            </span>
            <h3 className="pt-[16.9px] font-poppins text-[20px] font-bold leading-[26px] text-[#14363a]">
              Discuss your property architecture
            </h3>
            <p className="pt-[11.9px] font-inter text-[12px] leading-[19.2px] text-[#6a8285]">
              Industry: Real Estate &amp; Property
            </p>
            <div className="grid grid-cols-1 gap-[17px] pt-[12.89px] md:grid-cols-2">
              <label className="flex flex-col gap-[7.19px]">
                <span className={LABEL}>Work email</span>
                <input type="email" name="email" placeholder="you@company.com" className={INPUT} />
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={LABEL}>Organization</span>
                <input type="text" name="organization" placeholder="Company name" className={INPUT} />
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={LABEL}>Business model</span>
                <select name="businessModel" defaultValue="" className={SELECT}>
                  <option value="">Select business model</option>
                </select>
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={LABEL}>Primary objective</span>
                <select name="objective" defaultValue="" className={SELECT}>
                  <option value="">Select primary objective</option>
                </select>
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={LABEL}>Country / region</span>
                <input type="text" name="country" placeholder="Your market" className={INPUT} />
              </label>
              <label className="flex flex-col gap-[7.19px]">
                <span className={LABEL}>Evaluation stage</span>
                <select name="stage" defaultValue="" className={SELECT}>
                  <option value="">Select evaluation stage</option>
                </select>
              </label>
            </div>
            <details className="border-b border-[rgba(121,153,157,0.33)] pt-[0.91px]">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center pb-[15.19px] pt-[14px] font-poppins text-[12px] font-bold leading-[19.2px] text-[#14363a] [&::-webkit-details-marker]:hidden">
                Add more context (optional)
              </summary>
              <textarea
                name="context"
                rows={3}
                className="mb-4 w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] p-[11px] font-inter text-[14px] outline-none"
              />
            </details>
            <p className="font-inter text-[12px] leading-[19.2px] text-[#6a8285]">
              Do not submit tenant or guest personal information, identity documents, bank data, contracts, leases, legal
              records, access credentials or confidential transaction details.
            </p>
            <label className="flex items-start gap-[13px] py-[9px] pl-1 font-inter text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="ack" className="mt-[1.5px] size-4 shrink-0 accent-[#46b6c1]" />
              <span>I acknowledge that this preview does not send or store information.</span>
            </label>
            <label className="flex items-start gap-[13px] py-[9px] pl-1 font-inter text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="updates" className="mt-[1.5px] size-4 shrink-0 accent-[#46b6c1]" />
              <span>I would like optional product updates.</span>
            </label>
            <button
              type="submit"
              className="mt-3 flex h-[44px] w-full items-center justify-center rounded-[10px] border border-transparent bg-[#46b6c1] px-[21px] font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639] sm:w-[231px]"
            >
              Request consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
