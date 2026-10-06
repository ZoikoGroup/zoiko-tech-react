"use client";

// Get started CTA + Contact Sales form
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const field =
  "font-poppins min-h-[44px] w-full rounded-[6px] border border-solid border-[#cbd5e1] bg-[#f8fafc] text-[14px] text-[#0f172a] placeholder:text-[#757575] outline-none focus:border-[#247780]";
const input = `${field} px-[12px] py-[10px]`;
const select = `${field} appearance-none pl-[16px] pr-[28px] py-[10px] leading-[20px]`;
const label = "font-poppins text-[12px] font-medium leading-[16px] text-[#0f172a]";

function Select({ id, name, children }: { id: string; name: string; children: string[] }) {
  return (
    <select id={id} name={name} defaultValue="" className={select}>
      <option value="">Select</option>
      {children.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default function DesktopSection12() {
  return (
    <section id="s12" className="relative hidden w-full overflow-hidden bg-[#001315] px-[112px] py-[88px] lg:block">
      <Image
        src="/cybersecurity-protection/desktop-get-started-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(0,19,21,0.94)] via-[rgba(0,19,21,0.76)] via-[55%] to-[rgba(0,19,21,0.5)]" />
      <div className="relative flex items-center justify-center gap-[56px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[11.3px]">
          <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
            Get started
          </p>
          <h2 className="font-plus-jakarta max-w-[860px] text-[48px] font-bold leading-[56.16px] tracking-[-1.44px] text-white">
            <DesktopLines
              lines={[
                "Create a clearer",
                "protection architecture",
                "across the systems,",
                "identities and services",
                "you",
                "operate.",
              ]}
            />
          </h2>
          <p className="font-poppins max-w-[560px] pt-[4.7px] text-[18px] leading-[28px] text-[#e2e8f0]">
            <DesktopLines
              lines={[
                "Talk with Zoiko Tech about the digital operations you need to",
                "protect, the identity and access boundaries that matter, the",
                "security and resilience controls you want to improve, and the",
                "evidence your stakeholders require.",
              ]}
            />
          </p>
          <div className="flex flex-wrap items-start gap-x-[12px] pt-[16.7px]">
            <a
              href="/contact-us"
              className="font-poppins flex min-h-[44px] items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[12.5px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Contact Sales
              <Image src="/cybersecurity-protection/desktop-arrow-white.svg" alt="" width={16} height={16} />
            </a>
            <a
              href="/cybersecurity-resilience"
              className="font-poppins flex min-h-[44px] items-center rounded-[6px] border border-solid border-white px-[20px] py-[11.5px] text-[15px] font-semibold leading-[20px] text-white"
            >
              Explore Security Solutions
            </a>
          </div>
          <a
            href="/cybersecurity-resilience"
            className="font-poppins flex min-h-[44px] w-fit items-center gap-[6px] py-[12px] text-[14px] font-semibold leading-[20px] text-[#4ddcad]"
          >
            Explore Cybersecurity &amp; Resilience
            <Image src="/cybersecurity-protection/desktop-arrow-green.svg" alt="" width={16} height={16} />
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex min-w-0 flex-1 flex-col gap-[14px] rounded-[16px] bg-white p-[28px] drop-shadow-[0px_12px_16px_rgba(15,23,42,0.24)]"
        >
          <div className="flex flex-col gap-[4px]">
            <h3 className="font-plus-jakarta text-[22px] font-bold leading-[28px] text-[#0f172a]">Contact Sales</h3>
            <p className="font-poppins text-[13px] leading-[20px] text-[#64748b]">
              Solution: Cybersecurity &amp; Protection
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[14px]">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cp-email" className={label}>Work email*</label>
              <input id="cp-email" name="email" type="email" required placeholder="you@company.com" className={input} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cp-company" className={label}>Company*</label>
              <input id="cp-company" name="company" type="text" required placeholder="Enterprise Inc." className={input} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cp-objective" className={label}>Primary security objective</label>
              <Select id="cp-objective" name="objective">
                {["Identity & access", "Resilience", "Compliance evidence", "AI governance", "Other"]}
              </Select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cp-environment" className={label}>Environment</label>
              <Select id="cp-environment" name="environment">
                {["Cloud", "Hybrid", "On-premises", "Multi-cloud"]}
              </Select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cp-stage" className={label}>Evaluation stage</label>
              <Select id="cp-stage" name="stage">
                {["Exploring", "Evaluating", "Ready to buy"]}
              </Select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cp-country" className={label}>Country / region</label>
              <input id="cp-country" name="country" type="text" placeholder="United States" className={input} />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="cp-message" className={label}>Message</label>
            <textarea
              id="cp-message"
              name="message"
              rows={1}
              placeholder="The systems and services you need to protect"
              className={`${input} h-[44px] resize-none leading-[20px]`}
            />
            <p className="font-poppins text-[12px] leading-[18px] text-[#64748b]">
              <DesktopLines
                lines={[
                  "Please don’t include passwords, secrets, exploit details, production logs, vulnerability",
                  "proof, regulated personal data or confidential incident information. To report a",
                  "vulnerability, use Responsible Disclosure.",
                ]}
              />
            </p>
          </div>
          <label className="font-poppins flex min-h-[44px] items-start gap-[10px] pb-[24px] text-[13px] leading-[20px] text-[#334155]">
            <input type="checkbox" name="privacy" required className="size-[20px] shrink-0 rounded-[2.5px] border border-[#767676]" />
            <span>
              I acknowledge the{" "}
              <a href="/privacy-policy" className="text-[#247780] underline">
                Privacy Notice
              </a>
              .*
            </span>
          </label>
          <label className="font-poppins flex min-h-[44px] items-start gap-[10px] pb-[24px] text-[13px] leading-[20px] text-[#334155]">
            <input type="checkbox" name="updates" className="size-[20px] shrink-0 rounded-[2.5px] border border-[#767676]" />
            <span>Send me occasional updates from Zoiko Tech (optional).</span>
          </label>
          <button
            type="submit"
            className="font-poppins min-h-[48px] w-full rounded-[6px] bg-[#247780] px-[20px] py-[14px] text-center text-[15px] font-semibold leading-[20px] text-white"
          >
            Contact Sales
          </button>
        </form>
      </div>
    </section>
  );
}
