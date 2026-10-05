"use client";

import type { FormEvent } from "react";
import Lines from "./Lines";
import { WRAP } from "./layout";

const labelCls = "flex flex-col gap-[7.18px]";
const labelTextCls = "font-poppins text-xs font-bold leading-[19.2px] text-[#14363a]";
const fieldCls =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#bddfe2] px-[15px] py-[13px] font-poppins text-sm font-bold text-[#20474b] outline-none focus:border-[#247780]";

function Select({ label, name }: { label: string; name: string }) {
  return (
    <label className={labelCls}>
      <span className={labelTextCls}>{label}</span>
      <select name={name} defaultValue="" className={`${fieldCls} pr-[27px]`}>
        <option value="" disabled>
          Choose one
        </option>
      </select>
    </label>
  );
}

function Input({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className={labelCls}>
      <span className={labelTextCls}>{label}</span>
      <input name={name} type={type} className={`${fieldCls} h-[46.39px]`} />
    </label>
  );
}

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <section id="contact" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[1230px] flex-col gap-[15.1px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines
              lines={[
                "Build research and learning technology that keeps",
                "source, evidence and human judgment visible.",
              ]}
            />
          </h2>
          <p className="pt-[4.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            <Lines
              lines={[
                "Talk with Zoiko Tech about the workflow, sources, institutional systems and governance boundaries",
                "involved.",
              ]}
            />
          </p>
        </div>
        <form
          id="consultation"
          onSubmit={onSubmit}
          className="flex w-full flex-col rounded-xl border border-[#97d7dd] bg-white px-5 py-7 shadow-[0px_15px_22.5px_rgba(21,59,62,0.04)] md:px-[34px] md:pb-[34px] md:pt-[33px]"
        >
          <span className="font-poppins text-xs font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            CONTACT SALES / LOCAL PREVIEW
          </span>
          <h3 className="pt-[16.9px] font-poppins text-xl font-bold leading-[26px] text-[#14363a]">
            Discuss your research architecture
          </h3>
          <p className="pt-[12.9px] font-inter text-base leading-[25.6px] text-[#587176]">
            Industry: Education &amp; Research
          </p>
          <div className="grid grid-cols-1 gap-[17px] pt-[16.91px] md:grid-cols-2">
            <Input label="Work email" name="email" type="email" />
            <Input label="Organization" name="organization" />
            <Select label="Institution type" name="institutionType" />
            <Select label="Primary objective" name="objective" />
            <Input label="Country / region" name="region" />
            <Select label="Evaluation stage" name="stage" />
          </div>
          <details className="mt-[17px] border-b border-[rgba(121,153,157,0.33)] pt-[0.9px]">
            <summary className="flex min-h-[48px] cursor-pointer items-center pb-[15.19px] pt-3.5 font-poppins text-xs font-bold leading-[19.2px] text-[#14363a]">
              Add context (optional)
            </summary>
            <textarea
              name="context"
              rows={4}
              className="mb-4 w-full rounded-[5px] border border-[#ccdedf] bg-[#bddfe2] px-[15px] py-[13px] font-inter text-sm text-[#20474b] outline-none"
            />
          </details>
          <p id="sensitive-note" className="font-inter text-xs leading-[19.2px] text-[#6a8285]">
            Do not submit student records, participant data, unpublished confidential research, restricted
            datasets, credentials, exam materials or personal academic information.
          </p>
          <label className="flex items-start gap-[13px] pl-1 pt-[10px] font-inter text-xs leading-[19.2px] text-[#14363a]">
            <input
              type="checkbox"
              name="ack"
              className="mt-[1.5px] size-4 shrink-0 rounded-[2.5px] border border-[#767676] bg-white"
            />
            <span className="max-w-[384px]">
              I acknowledge that this local preview does not send or store information.
            </span>
          </label>
          <label className="flex items-start gap-[13px] pl-1 pt-[10px] font-inter text-xs leading-[19.2px] text-[#14363a]">
            <input
              type="checkbox"
              name="updates"
              className="mt-[1.5px] size-4 shrink-0 rounded-[2.5px] border border-[#767676] bg-white"
            />
            <span className="max-w-[314px]">Optional product updates when a live service is connected.</span>
          </label>
          <button
            type="submit"
            className="mt-9 flex min-h-[48px] w-full items-center justify-center rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-3 font-poppins text-sm font-bold leading-[22.4px] text-white md:w-[277px]"
          >
            Request consultation
          </button>
        </form>
      </div>
    </section>
  );
}
