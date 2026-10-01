"use client";

import Link from "next/link";

const labelCls = "font-inter text-[14.4px] font-semibold leading-[23px] text-[#0a1416]";
const fieldCls =
  "h-12 min-h-[48px] w-full rounded-[10px] border border-solid border-[#9bb5b8] bg-[#5f8387] px-3 font-inter text-[14.4px] font-semibold text-[#e6f5f1] placeholder:text-[#757575] outline-none focus-visible:ring-2 focus-visible:ring-[#247780]";
const selectCls = `${fieldCls} pl-4 pr-7`;

function Field({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex min-w-0 flex-col gap-[5.55px] ${className}`}>
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );
}

export default function FinalCta() {
  return (
    <section className="w-full bg-white px-[130px] pb-[96px] pt-[95.47px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.2px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Build technology-company foundations <br className="hidden xl:block" />
          that scale without hiding ownership, <br className="hidden xl:block" />
          maturity or operational control.
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          Talk with Zoiko Tech about the product, platform or operating system you need to modernize,{" "}
          <br className="hidden xl:block" />
          the APIs and authoritative systems involved, the identity, security and AI-governance{" "}
          <br className="hidden xl:block" />
          requirements that matter, and the integration path that fits your environment.
        </p>
        <form className="grid grid-cols-4 gap-[14px] pt-[3.8px]" onSubmit={(e) => e.preventDefault()}>
          <Field label="Work email">
            <input type="email" name="email" autoComplete="email" className={fieldCls} />
          </Field>
          <Field label="Organization">
            <input type="text" name="organization" autoComplete="organization" className={fieldCls} />
          </Field>
          <Field label="Company model">
            <select name="companyModel" defaultValue="Other / unsure" className={selectCls}>
              <option>Other / unsure</option>
            </select>
          </Field>
          <Field label="Role / function (optional)">
            <input type="text" name="role" className={fieldCls} />
          </Field>
          <Field label="Country / region">
            <input type="text" name="country" autoComplete="country-name" className={fieldCls} />
          </Field>
          <Field label="Primary objective">
            <select name="objective" defaultValue="AI / agents" className={selectCls}>
              <option>AI / agents</option>
            </select>
          </Field>
          <Field label="Technical context (optional)">
            <input type="text" name="context" placeholder="High-level only, no secrets" className={fieldCls} />
          </Field>
          <Field label="Evaluation stage">
            <select name="stage" defaultValue="Exploring" className={selectCls}>
              <option>Exploring</option>
            </select>
          </Field>
          <div className="col-span-4 flex flex-col gap-[5px]">
            <label className="flex flex-col gap-[5px]">
              <span className={labelCls}>Message (optional)</span>
              <textarea
                name="message"
                className="h-[91.69px] w-full resize-y rounded-[10px] border border-solid border-[#9bb5b8] bg-[#5f8387] px-3 py-3 font-inter text-[14.4px] font-semibold text-[#e6f5f1] outline-none focus-visible:ring-2 focus-visible:ring-[#247780]"
              />
            </label>
            <span className="font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#4d6468]">
              Please don’t submit credentials, secrets, customer data or confidential architecture details.
            </span>
          </div>
          <label className="col-span-4 flex items-end gap-[13px] pb-[3px] pl-1">
            <input
              type="checkbox"
              name="privacy"
              className="size-[22px] shrink-0 rounded-[2.5px] border border-solid border-[#767676] bg-white"
            />
            <span className="font-inter text-[14.4px] leading-[23px] text-[#0a1416]">
              I acknowledge the Privacy Notice.
            </span>
          </label>
          <label className="col-span-4 flex items-end gap-[13px] pb-[3px] pl-1">
            <input
              type="checkbox"
              name="updates"
              className="size-[22px] shrink-0 rounded-[2.5px] border border-solid border-[#767676] bg-white"
            />
            <span className="font-inter text-[14.4px] leading-[23px] text-[#0a1416]">
              Send me optional Zoiko Tech updates.
            </span>
          </label>
          <div className="col-span-4 flex flex-wrap items-stretch pt-3">
            <div className="flex min-h-[60px] pb-3 pr-3">
              <button
                type="submit"
                className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-solid border-[#5f8387] bg-[#5f8387] px-6 py-3 font-inter text-[16px] font-semibold text-white"
              >
                Contact Sales
              </button>
            </div>
            <div className="flex min-h-[60px] pb-3 pr-3">
              <Link
                href="/technology-saas"
                className="flex min-h-[48px] items-center rounded-[10px] border-2 border-solid border-[#247780] px-6 font-inter text-[16px] font-semibold text-[#247780]"
              >
                Explore Technology &amp; SaaS Solutions
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="/developer-portal"
                className="px-3 py-3 font-inter text-[16px] font-semibold leading-[25.6px] text-[#247780] underline"
              >
                Developer Resources →
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
