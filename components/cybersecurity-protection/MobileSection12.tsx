"use client";

// Get started CTA + Contact Sales form
import Image from "next/image";
import MobileLines from "./MobileLines";

const inputClass =
  "h-[44px] w-full rounded-[6px] border border-[#cbd5e1] bg-[#f8fafc] px-[12px] text-[14px] text-[#0f172a] placeholder:text-[#757575] outline-none focus:border-[#247780]";
const selectClass =
  "h-[44px] w-full rounded-[6px] border border-[#cbd5e1] bg-[#f8fafc] pl-[16px] pr-[28px] text-[14px] text-[#0f172a] outline-none focus:border-[#247780]";
const labelClass = "text-[12px] font-medium leading-[16px] text-[#0f172a]";

export default function MobileSection12() {
  return (
    <section id="s12-m" className="relative w-full overflow-hidden bg-[#001315] px-[32px] py-[88px] font-poppins">
      <Image
        src="/cybersecurity-protection/mobile-get-started-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,19,21,0.94)] via-[rgba(0,19,21,0.76)] via-[55%] to-[rgba(0,19,21,0.5)]" />
      <div className="relative mx-auto flex w-full max-w-[720px] flex-col gap-[56px]">
        <div className="flex w-full flex-col gap-[11.2px]">
          <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">Get started</p>
          <h2 className="max-w-[860px] font-plus-jakarta text-[30px] font-bold leading-[35.1px] tracking-[-0.9px] text-white">
            <MobileLines
              lines={[
                "Create a clearer",
                "protection architecture",
                "across the systems,",
                "identities and services",
                "you operate.",
              ]}
            />
          </h2>
          <p className="max-w-[560px] pt-[4.8px] text-[18px] leading-[28px] text-[#e2e8f0]">
            <MobileLines
              lines={[
                "Talk with Zoiko Tech about the digital",
                "operations you need to protect, the",
                "identity and access boundaries that",
                "matter, the security and resilience",
                "controls you want to improve, and the",
                "evidence your stakeholders require.",
              ]}
            />
          </p>
          <div className="flex w-full flex-col items-start justify-center gap-[12px] pt-[16.8px]">
            <a
              href="/contact-us"
              className="flex h-[44px] min-h-[44px] items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Contact Sales
              <Image src="/cybersecurity-protection/mobile-icon-arrow-right-white.svg" alt="" width={16} height={16} />
            </a>
            <a
              href="/cybersecurity-resilience"
              className="flex h-[46px] min-h-[44px] items-center rounded-[6px] border border-white px-[20px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Explore Security Solutions
            </a>
          </div>
          <div className="flex w-full flex-col pt-[0.8px]">
            <a
              href="/cybersecurity-resilience"
              className="flex min-h-[44px] w-fit items-center gap-[6px] py-[12px] text-[14px] font-semibold leading-[20px] text-[#4ddcad]"
            >
              Explore Cybersecurity &amp; Resilience
              <Image src="/cybersecurity-protection/mobile-icon-arrow-right-green.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col gap-[14px] rounded-[16px] bg-white p-[28px] drop-shadow-[0px_12px_16px_rgba(15,23,42,0.24)]"
        >
          <div className="flex w-full flex-col gap-[4px]">
            <h3 className="font-plus-jakarta text-[22px] font-bold leading-[28px] text-[#0f172a]">Contact Sales</h3>
            <p className="text-[13px] leading-[20px] text-[#64748b]">Solution: Cybersecurity &amp; Protection</p>
          </div>

          <div className="flex w-full flex-col gap-[14px]">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="m-cp-email" className={labelClass}>Work email*</label>
              <input id="m-cp-email" type="email" required placeholder="you@company.com" className={inputClass} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="m-cp-company" className={labelClass}>Company*</label>
              <input id="m-cp-company" type="text" required placeholder="Enterprise Inc." className={inputClass} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="m-cp-objective" className={labelClass}>Primary security objective</label>
              <select id="m-cp-objective" defaultValue="" className={selectClass}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="m-cp-environment" className={labelClass}>Environment</label>
              <select id="m-cp-environment" defaultValue="" className={selectClass}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="m-cp-stage" className={labelClass}>Evaluation stage</label>
              <select id="m-cp-stage" defaultValue="" className={selectClass}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="m-cp-country" className={labelClass}>Country / region</label>
              <input id="m-cp-country" type="text" placeholder="United States" className={inputClass} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-[6px]">
            <label htmlFor="m-cp-message" className={labelClass}>Message</label>
            <textarea
              id="m-cp-message"
              rows={2}
              placeholder="The systems and services you need to protect"
              className="w-full resize-none rounded-[6px] border border-[#cbd5e1] bg-[#f8fafc] px-[12px] py-[10px] text-[14px] leading-[20px] text-[#0f172a] placeholder:text-[#757575] outline-none focus:border-[#247780]"
            />
            <p className="text-[12px] leading-[18px] text-[#64748b]">
              <MobileLines
                lines={[
                  "Please don’t include passwords, secrets, exploit",
                  "details, production logs, vulnerability proof,",
                  "regulated personal data or confidential incident",
                  "information. To report a vulnerability, use",
                ]}
              />{" "}
              <a href="#" className="text-[#247780] underline decoration-solid">
                Responsible Disclosure
              </a>
              .
            </p>
          </div>

          <label className="flex min-h-[44px] w-full items-start gap-[10px] pb-[24px] text-[13px] leading-[20px] text-[#334155]">
            <input
              type="checkbox"
              required
              className="size-[20px] shrink-0 rounded-[2.5px] border border-[#767676] bg-white accent-[#247780]"
            />
            <span>I acknowledge the</span>
            <a href="/privacy-policy" className="text-[#247780] underline decoration-solid">
              Privacy Notice
            </a>
            <span>.*</span>
          </label>

          <label className="flex min-h-[44px] w-full items-start gap-[10px] pb-[4.5px] text-[13px] leading-[20px] text-[#334155]">
            <input
              type="checkbox"
              className="size-[20px] shrink-0 rounded-[2.5px] border border-[#767676] bg-white accent-[#247780]"
            />
            <span>
              <MobileLines lines={["Send me occasional updates from Zoiko", "Tech (optional)."]} />
            </span>
          </label>

          <button
            type="submit"
            className="flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-[6px] bg-[#247780] px-[20px] text-center text-[15px] font-semibold leading-[20px] text-white"
          >
            Contact Sales
          </button>
        </form>
      </div>
    </section>
  );
}
