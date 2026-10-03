"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { WRAP } from "./layout";
import Lines from "./Lines";

const POINTS = [
  {
    icon: "/retail-commerce/desktop-icon-user.svg",
    lines: ["Customer intent and", "approved channels"],
  },
  {
    icon: "/retail-commerce/desktop-contact-icon-network.svg",
    lines: ["Systems, handoffs and", "responsible owners"],
  },
  {
    icon: "/retail-commerce/desktop-adjacent-icon-shield.svg",
    lines: ["Permission, market context", "and evidence"],
  },
];

const labelCls = "flex flex-col items-start gap-[7.19px] self-start";
const labelText = "font-poppins text-[12px] font-bold leading-[19.2px] text-[#14363a]";
const fieldCls =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] font-poppins text-[14px] font-bold";
const inputCls = `${fieldCls} px-[11px] py-[14px] text-[#14363a] placeholder:text-[#757575] outline-none focus:border-[#247780]`;
const selectCls = `${fieldCls} appearance-none py-[13px] pl-[15px] pr-[27px] text-[#20474b] outline-none focus:border-[#247780]`;
const checkCls =
  "mt-0.5 size-4 shrink-0 appearance-none rounded-[2.5px] border border-[#767676] bg-white checked:border-[#0f4248] checked:bg-[#0f4248]";

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:pt-[93px] md:pb-[94px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.2px] xl:gap-[15.1px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            18 / YOUR NEXT STEP
          </p>
          <h2 className="pb-[0.5px] font-poppins text-[26px] font-bold leading-[30px] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={[
                "Build retail journeys that stay",
                "connected from customer intent to",
                "authoritative outcome.",
              ]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <Lines
              desktop={[
                "Talk with Zoiko Tech about the journeys, channels, markets and systems involved — and the",
                "communication, marketing or integration layer that fits your environment.",
              ]}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-[30px] lg:items-stretch lg:gap-10 xl:gap-20">
          <div className="flex flex-col items-start gap-[11.4px] md:pb-[100px] lg:justify-center lg:gap-3 lg:pb-[42px]">
            <h3 className="font-poppins text-[24px] font-bold leading-[32px] text-white md:text-[28px] md:leading-[36.4px]">
              <Lines
                desktop={["Begin with one defined", "journey."]}
                tablet={["Begin with one", "defined journey."]}
              />
            </h3>
            <p className="font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              <Lines
                tablet={[
                  "Identify the responsible commerce,",
                  "payment and service systems. Map",
                  "the context, consent and operating",
                  "handoffs before expanding.",
                ]}
              />
            </p>
            <ul className="flex w-full flex-col gap-[15px] pb-[31.5px] pt-[23px]">
              {POINTS.map((p) => (
                <li key={p.icon} className="flex items-center gap-[15px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#62c6ca]/10">
                    <Image src={p.icon} alt="" width={25} height={25} />
                  </span>
                  <span className="font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
                    <Lines tablet={p.lines} />
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="/customer-and-local-commerce"
              className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]"
            >
              Explore Customer &amp; Local Commerce →
            </a>
          </div>

          <form
            id="consultation"
            onSubmit={onSubmit}
            className="flex flex-col rounded-xl border border-[#dce8e8] bg-white px-5 pb-[34px] pt-[33px] shadow-[0_15px_22.5px_rgba(21,59,62,0.04)] sm:px-[34px] lg:self-start"
          >
            <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              START A CONVERSATION
            </p>
            <h3 className="pt-[16.9px] font-poppins text-[20px] font-bold leading-[26px] text-[#14363a]">
              <Lines tablet={["Discuss your commerce", "architecture"]} />
            </h3>
            <p className="pt-[11.9px] font-poppins text-[12px] leading-[19.2px] text-[#6a8285]">
              Industry: Retail &amp; Commerce
            </p>

            <div className="grid grid-cols-1 gap-[17px] pt-[12.9px] sm:grid-cols-2">
              <label className={labelCls}>
                <span className={labelText}>Work email</span>
                <input type="email" name="email" placeholder="you@company.com" className={inputCls} />
              </label>
              <label className={labelCls}>
                <span className={labelText}>Organization</span>
                <input type="text" name="organization" placeholder="Company name" className={inputCls} />
              </label>
              <label className={labelCls}>
                <span className={labelText}>Retail / commerce model</span>
                <select name="model" defaultValue="" className={selectCls}>
                  <option value="">Select retail / commerce model</option>
                  <option>Retail store network</option>
                  <option>Ecommerce</option>
                  <option>Marketplace</option>
                  <option>Omnichannel</option>
                </select>
              </label>
              <label className={labelCls}>
                <span className={labelText}>Primary objective</span>
                <select name="objective" defaultValue="" className={selectCls}>
                  <option value="">Select primary objective</option>
                  <option>Customer communications</option>
                  <option>Marketing operations</option>
                  <option>Payments and billing</option>
                  <option>Integration</option>
                </select>
              </label>
              <label className={labelCls}>
                <span className={labelText}>Country / region</span>
                <input type="text" name="region" placeholder="Your market" className={inputCls} />
              </label>
              <label className={labelCls}>
                <span className={labelText}>Evaluation stage</span>
                <select name="stage" defaultValue="" className={selectCls}>
                  <option value="">Select evaluation stage</option>
                  <option>Exploring</option>
                  <option>Evaluating</option>
                  <option>Ready to plan</option>
                </select>
              </label>
            </div>

            <details className="mt-[0.9px] border-b border-[#79999d]/[0.33]">
              <summary className="flex min-h-[48px] cursor-pointer items-center pb-[15.19px] pt-[14px] font-poppins text-[12px] font-bold leading-[19.2px] text-[#14363a]">
                Add more context (optional)
              </summary>
              <textarea
                name="context"
                rows={3}
                className="mb-4 w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] p-[11px] font-poppins text-[14px] text-[#14363a] outline-none"
              />
            </details>

            <p
              id="sensitive-note"
              className="font-poppins text-[12px] leading-[19.2px] text-[#6a8285]"
            >
              <Lines
                tablet={[
                  "Do not submit customer personal information, payment or bank",
                  "data, order histories, credentials, private communications,",
                  "confidential pricing or commercially sensitive records.",
                ]}
              />
            </p>

            <label className="flex items-start gap-[13px] px-1 py-[17px] font-poppins text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="acknowledge" className={checkCls} />
              <span>I acknowledge that this preview does not send or store my information.</span>
            </label>
            <label className="flex items-start gap-[13px] px-1 pb-[17px] font-poppins text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="updates" className={checkCls} />
              <span>I would like to receive optional product updates.</span>
            </label>

            <button
              type="submit"
              className="min-h-[48px] w-full rounded-[5px] border border-transparent bg-[#0f4248] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#cfe9ea]"
            >
              Review consultation request <span className="lg:hidden">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
