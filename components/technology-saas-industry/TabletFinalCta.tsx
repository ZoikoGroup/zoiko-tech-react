"use client";

const field =
  "h-[48px] w-full rounded-[10px] border border-[#9bb5b8] bg-white px-[16px] font-inter text-[14.4px] font-semibold text-[#0a1416] outline-none focus:border-[#247780]";
const label = "flex flex-col gap-[5.55px] font-inter text-[14.4px] font-semibold leading-[23px] text-[#0a1416]";
const check =
  "flex items-end gap-[13px] pb-[3px] pl-[4px] font-inter text-[14.4px] font-normal leading-[23px] text-[#0a1416] sm:col-span-2";

export default function FinalCta() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.5px]">
        <h2 className="font-sora text-[clamp(22px,5vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Build technology-company foundations <br className="hidden md:block" />
          that scale without hiding ownership, <br className="hidden md:block" />
          maturity or operational control.
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          Talk with Zoiko Tech about the product, platform or operating system you need to <br className="hidden md:block" />
          modernize, the APIs and authoritative systems involved, the identity, security and AI- <br className="hidden md:block" />
          governance requirements that matter, and the integration path that fits your environment.
        </p>
        <form className="grid grid-cols-1 gap-[14px] pt-[9.5px] sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <label className={label}>
            Work email
            <input type="email" className={field} />
          </label>
          <label className={label}>
            Organization
            <input type="text" className={field} />
          </label>
          <label className={label}>
            Company model
            <select className={`${field} pr-[28px]`} defaultValue="Other / unsure">
              <option>Other / unsure</option>
            </select>
          </label>
          <label className={label}>
            Role / function (optional)
            <input type="text" className={field} />
          </label>
          <label className={label}>
            Country / region
            <input type="text" className={field} />
          </label>
          <label className={label}>
            Primary objective
            <select className={`${field} pr-[28px]`} defaultValue="AI / agents">
              <option>AI / agents</option>
            </select>
          </label>
          <label className={label}>
            Technical context (optional)
            <input
              type="text"
              placeholder="High-level only, no secrets"
              className={`${field} px-[12px] placeholder:text-[#757575]`}
            />
          </label>
          <label className={label}>
            Evaluation stage
            <select className={`${field} pr-[28px]`} defaultValue="Exploring">
              <option>Exploring</option>
            </select>
          </label>
          <label className={`${label} gap-[5px] sm:col-span-2`}>
            Message (optional)
            <textarea className="h-[91.69px] w-full rounded-[10px] border border-[#9bb5b8] bg-white p-[12px] font-inter text-[14.4px] font-normal outline-none focus:border-[#247780]" />
            <span className="text-[12.8px] font-semibold leading-[20.48px] text-[#4d6468]">
              Please don’t submit credentials, secrets, customer data or confidential architecture details.
            </span>
          </label>
          <label className={check}>
            <input type="checkbox" className="size-[22px] shrink-0 rounded-[2.5px] border border-[#767676] accent-[#247780]" />
            I acknowledge the Privacy Notice.
          </label>
          <label className={check}>
            <input type="checkbox" className="size-[22px] shrink-0 rounded-[2.5px] border border-[#767676] accent-[#247780]" />
            Send me optional Zoiko Tech updates.
          </label>
          <div className="flex flex-col items-start gap-[12px] pt-[12px] sm:col-span-2">
            <div className="flex w-full flex-wrap gap-[12px]">
              <button
                type="submit"
                className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#247780] bg-[#247780] px-[24px] py-[12px] font-inter text-[16px] font-semibold text-white sm:w-auto"
              >
                Contact Sales
              </button>
              <a
                href="#"
                className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#247780] px-[24px] text-center font-inter text-[16px] font-semibold text-[#247780] sm:w-auto"
              >
                Explore Technology &amp; SaaS Solutions
              </a>
            </div>
            <a href="/developer-portal" className="px-[12px] font-inter text-[16px] font-semibold leading-[25.6px] text-[#247780] underline">
              Developer Resources →
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
