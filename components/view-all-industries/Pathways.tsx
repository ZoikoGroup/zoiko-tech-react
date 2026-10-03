"use client";

import Lines from "./Lines";
import { WRAP } from "./layout";

const label = "font-poppins text-[12px] font-bold leading-[19.2px] text-[#102d2f]";
const field =
  "min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] font-poppins text-[14px] font-bold";

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white pb-14 pt-14 md:pb-20 md:pt-16 lg:pb-[110px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[44px] lg:leading-[50.6px]">
            Find your industry.
          </h2>
          <p className="max-w-[760px] pt-[4.3px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            <Lines
              lines={[
                "Search the canonical names and approved descriptors. Core and Connected are taxonomy groups, not",
                "rankings.",
              ]}
            />
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 items-end gap-[18px] pt-9 md:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_121.05px]"
        >
          <label className="flex flex-col gap-[7.19px] md:col-span-2 lg:col-span-1">
            <span className={label}>Search industries</span>
            <input
              id="industry-search"
              type="search"
              placeholder="Try finance, research or mobility"
              className={`${field} h-[46.39px] px-[11px] text-[#102d2f] placeholder:text-[#757575]`}
            />
          </label>
          <label className="flex flex-col gap-[7.19px]">
            <span className={label}>Group</span>
            <select id="industry-group" defaultValue="all" className={`${field} py-[13px] pl-[15px] pr-[27px] text-[#20474b]`}>
              <option value="all">All industries</option>
              <option value="core">Core Industries</option>
              <option value="connected">Connected Industries</option>
            </select>
          </label>
          <label className="flex flex-col gap-[7.19px]">
            <span className={label}>Sort</span>
            <select id="industry-sort" defaultValue="taxonomy" className={`${field} py-[13px] pl-[15px] pr-[27px] text-[#20474b]`}>
              <option value="taxonomy">Taxonomy order</option>
              <option value="az">A to Z</option>
            </select>
          </label>
          <button
            id="clear-finder"
            type="reset"
            className="min-h-[49px] justify-self-start rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-3 font-poppins text-[14px] font-bold leading-[22.4px] text-white max-md:w-full md:col-span-2 lg:col-span-1"
          >
            Clear filters
          </button>
        </form>
        <p id="result-count" className="pt-3 font-poppins text-[16px] leading-[25.6px] text-[#587176] lg:pt-0">
          10 industries shown
        </p>
      </div>
    </section>
  );
}
