"use client";

import { useState } from "react";
import DesktopLines from "./DesktopLines";

const requests = [
  { ref: "PS-001", service: "Sample information request", state: "Under review", owner: "Service team", next: "Review source information" },
  { ref: "PS-002", service: "Sample document request", state: "Needs information", owner: "Operations owner", next: "Request missing item" },
  { ref: "PS-003", service: "Sample service handoff", state: "Blocked", owner: "Integration team", next: "Confirm receiving-system status" },
];

const states = ["Under review", "Needs information", "Blocked"];

export default function DesktopWorkflows() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? requests : requests.filter((r) => r.state === filter);

  return (
    <section
      id="workflows"
      className="w-full pb-[108px] pt-[93px] px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(123.71539996864101deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Every request needs an owner.", "Every handoff needs a next step."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.495px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "Coordinate generic service requests, tasks and reviews across teams while preserving source records and",
                "decision boundaries.",
              ]}
            />
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-[12px] bg-[#102d2f] px-7 pb-7 pt-[38px]">
          <div className="flex items-center justify-between gap-6 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="font-poppins text-[18px] font-bold leading-[23.4px] text-white">Public-service operations queue</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="flex w-full max-w-[260px] flex-col gap-[7px]">
              <label htmlFor="state-filter" className="font-poppins text-[12px] font-bold leading-[19.2px] text-white">
                Filter by state
              </label>
              <select
                id="state-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="min-h-[46px] w-full rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] py-[13px] pl-[15px] pr-[27px] font-poppins text-[14px] font-bold leading-[16px] text-[#20474b]"
              >
                <option value="all">All states</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <p id="queue-count" aria-live="polite" className="pb-[13px] font-poppins text-[13px] leading-[20.8px] text-[#c4d7d9]">
              {visible.length} specimen request{visible.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="w-full overflow-auto">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="bg-[#247780]">
                  {[["Reference", "11.7%"], ["Service", "24.1%"], ["State", "19.8%"], ["Owner", "16.8%"], ["Next action", "27.6%"]].map(([h, w]) => (
                    <th key={h} style={{ width: w }} className="p-[14px] font-poppins text-[13px] font-bold leading-[20.8px] text-white">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((r) => (
                  <tr key={r.ref} className="border-b border-[#e0eaea]">
                    <td className="px-[14px] py-[18px] font-poppins text-[13px] leading-[20.8px] text-white">{r.ref}</td>
                    <td className="px-[14px] py-[18px] font-poppins text-[13px] leading-[20.8px] text-white">{r.service}</td>
                    <td className="px-[14px] py-[15px]">
                      <span className="inline-block rounded-[20px] bg-[#e7f3f3] px-[10px] py-[2px] font-poppins text-[13px] leading-[20.8px] text-[#205e65]">
                        {r.state}
                      </span>
                    </td>
                    <td className="px-[14px] py-[18px] font-poppins text-[13px] leading-[20.8px] text-white">{r.owner}</td>
                    <td className="px-[14px] py-[18px] font-poppins text-[13px] leading-[20.8px] text-white">{r.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
