"use client";

import TabletLines from "./TabletLines";

const points = [
  { icon: "tablet-icon-user", text: "Users, accessibility and assisted-service needs" },
  { icon: "tablet-icon-globe", text: "Agency, jurisdiction and deployment context" },
  { icon: "tablet-icon-shield-check", text: "Authority, source records and review requirements" },
];

const labelCls = "flex flex-col gap-[7.2px] text-[12px] font-bold leading-[19.2px] text-[#14363a]";
const fieldCls =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] px-[11px] py-[13px] text-[14px] font-bold text-[#20474b] placeholder:font-bold placeholder:text-[#757575]";

export default function TabletContact() {
  return (
    <section id="contact-t" className="w-full overflow-hidden bg-white py-[70px] font-poppins sm:py-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">19 / YOUR NEXT STEP</p>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["Modernize public digital services without losing", "accessibility, authority or evidence."]} />
          </h2>
          <p className="max-w-[760px] pt-1 text-[16px] leading-[25.6px] text-[#587176]">
            Talk with Zoiko Tech about the service or operational workflow, jurisdictions and systems involved, and the integration path that fits your environment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-w-0 flex-col gap-[11.4px] self-start">
            <h3 className="text-[28px] font-bold leading-[36.4px] text-[#102d2f]">Begin with one clear service objective.</h3>
            <p className="text-[16px] leading-[25.6px] text-[#587176]">
              Define the responsible authority, the source systems and the requirements for access, identity, security and evidence.
            </p>
            <ul className="flex flex-col gap-[15px] pb-8 pt-[23.6px]">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-[15px]">
                  <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/public-sector-government/${p.icon}.svg`} alt="" width={25} height={25} className="size-[25px]" />
                  </span>
                  <span className="text-[16px] leading-[25.6px] text-[#587176]">{p.text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="text-[14px] font-bold leading-[22.4px] text-[#247780]">
              Explore Public-Sector Technology →
            </a>
          </div>
          <form
            id="consultation-t"
            onSubmit={(e) => e.preventDefault()}
            className="flex min-w-0 flex-col self-start rounded-[12px] border border-[#dce8e8] bg-white px-[34px] pb-[34px] pt-[33px] shadow-[0px_15px_22.5px_rgba(21,59,62,0.04)]"
          >
            <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">START A CONVERSATION</p>
            <h3 className="pt-[16.8px] text-[20px] font-bold leading-[26px] text-[#14363a]">
              Discuss your public-sector architecture
            </h3>
            <p className="pt-[11.8px] text-[12px] leading-[19.2px] text-[#6a8285]">Industry: Public Sector &amp; Government</p>
            <div className="grid grid-cols-1 gap-[17px] pt-[12.8px] sm:grid-cols-2">
              <label className={labelCls}>
                Work email
                <input type="email" name="email" placeholder="you@organization.org" className={fieldCls} />
              </label>
              <label className={labelCls}>
                Organization / agency
                <input type="text" name="organization" placeholder="Organization name" className={fieldCls} />
              </label>
              <label className={labelCls}>
                <span>Government level / organization type</span>
                <select name="orgType" defaultValue="" className={fieldCls}>
                  <option value="">Select government level / organization type</option>
                </select>
              </label>
              <label className={labelCls}>
                Primary objective
                <select name="objective" defaultValue="" className={fieldCls}>
                  <option value="">Select primary objective</option>
                </select>
              </label>
              <label className={labelCls}>
                Country / jurisdiction
                <input type="text" name="jurisdiction" placeholder="Your jurisdiction" className={fieldCls} />
              </label>
              <label className={labelCls}>
                Evaluation stage
                <select name="stage" defaultValue="" className={fieldCls}>
                  <option value="">Select evaluation stage</option>
                </select>
              </label>
            </div>
            <details className="mt-[17px] border-b border-[rgba(121,153,157,0.33)]">
              <summary className="flex min-h-12 cursor-pointer items-center text-[12px] font-bold leading-[19.2px] text-[#14363a]">
                Add more context (optional)
              </summary>
              <textarea
                name="context"
                rows={4}
                aria-label="Additional context"
                className="mb-4 w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] px-[11px] py-[13px] text-[14px] text-[#20474b]"
              />
            </details>
            <p className="pt-4 text-[12px] leading-[19.2px] text-[#6a8285]">
              Do not submit resident personal information, case records, credentials, classified information, justice, benefit, tax or health records, or sensitive government documents.
            </p>
            <label className="flex items-start gap-[10px] py-4 text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="ack" className="mt-[3px] size-[14px] shrink-0" />
              I acknowledge that this preview does not send or store my information.
            </label>
            <label className="flex items-start gap-[10px] pb-4 text-[12px] leading-[19.2px] text-[#14363a]">
              <input type="checkbox" name="updates" className="mt-[3px] size-4 shrink-0" />
              I would like to receive optional product updates.
            </label>
            <button
              type="submit"
              className="min-h-12 w-full rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-[11.5px] text-center text-[14px] font-bold leading-[22.4px] text-white"
            >
              Review consultation request ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
