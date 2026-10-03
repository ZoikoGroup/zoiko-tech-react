"use client";

import { useState } from "react";
import TabletLines from "./TabletLines";

const requests = [
  { ref: "PS-001", service: "Sample information request", state: "Under review", owner: "Service team", next: "Review source information" },
  { ref: "PS-002", service: "Sample document request", state: "Needs information", owner: "Operations owner", next: "Request missing item" },
  { ref: "PS-003", service: "Sample service handoff", state: "Blocked", owner: "Integration team", next: "Confirm receiving-system status" },
];

const states = ["All states", ...requests.map((r) => r.state)];

export default function TabletWorkflows() {
  const [filter, setFilter] = useState("All states");
  const visible = filter === "All states" ? requests : requests.filter((r) => r.state === filter);

  return (
    <section
      id="workflows-t"
      className="w-full overflow-hidden pb-[108px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(119.4deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            06 / PUBLIC-SERVICE WORKFLOWS
          </span>
          <h2 className="pb-[0.52px] text-[clamp(24px,5vw,29px)] font-bold leading-[33.35px] tracking-[-1.3px] text-white">
            <TabletLines lines={["Every request needs an owner.", "Every handoff needs a next step."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.095px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <TabletLines
              lines={[
                "Coordinate generic service requests, tasks and reviews across teams while preserving source",
                "records and decision boundaries.",
              ]}
            />
          </p>
        </div>

        <div className="flex flex-col gap-[20px] rounded-[12px] border border-[#d4e5e6] bg-white px-[28px] pb-[28px] pt-[38px]">
          <div className="flex flex-wrap items-start justify-between gap-x-[12px] gap-y-[10px] border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-[#102d2f]">Public-service operations queue</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#247780]">
              Synthetic specimen
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-x-[20px] gap-y-[10px]">
            <label className="flex w-full max-w-[260px] flex-col gap-[7px]">
              <span className="text-[12px] font-bold leading-[19.2px] text-[#102d2f]">Filter by state</span>
              <select
                id="state-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] py-[13px] pl-[15px] pr-[27px] text-[14px] font-bold text-[#20474b]"
              >
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <p id="queue-count" className="pb-[13px] text-[13px] leading-[20.8px] text-[#587176]">
              {visible.length} specimen request{visible.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-[#247780]">
                  {["Reference", "Service", "State", "Owner", "Next action"].map((h) => (
                    <th key={h} scope="col" className="p-[14px] text-[13px] font-bold leading-[20.8px] text-white">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((r) => (
                  <tr key={r.ref} className="border-b border-[#e0eaea]">
                    <td className="p-[14px] align-middle text-[13px] leading-[20.8px] text-[#102d2f]">{r.ref}</td>
                    <td className="p-[14px] align-middle text-[13px] leading-[20.8px] text-[#102d2f]">{r.service}</td>
                    <td className="p-[14px] align-middle">
                      <span className="inline-block whitespace-nowrap rounded-[20px] bg-[#e7f3f3] px-[10px] py-[2px] text-[13px] leading-[20.8px] text-[#205e65]">
                        {r.state}
                      </span>
                    </td>
                    <td className="p-[14px] align-middle text-[13px] leading-[20.8px] text-[#102d2f]">{r.owner}</td>
                    <td className="p-[14px] align-middle text-[13px] leading-[20.8px] text-[#102d2f]">{r.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="border-l-[3px] border-[#8edade] bg-white/[0.04] px-[23px] py-[18.5px] text-[14px] leading-[22.4px] text-[#c6dfe1]">
          Workflow completion does not establish eligibility, entitlement, a permit or any other official determination.
        </p>
      </div>
    </section>
  );
}
