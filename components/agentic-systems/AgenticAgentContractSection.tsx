import React from "react";

interface ContractRow {
  label: string;
  value: string;
  isRed?: boolean;
}

const CONTRACT_ROWS: ContractRow[] = [
  { label: "Agent identity", value: "INV-EXC-01 · invoice exception agent" },
  { label: "Owner", value: "Accounts Payable Lead" },
  {
    label: "Objective",
    value: "Prepare supplier queries for invoice mismatches",
  },
  { label: "Allowed actions", value: "Read · analyze · draft · prepare" },
  {
    label: "Disallowed",
    value: "Payments · bank details · vendor master changes",
    isRed: true,
  },
  {
    label: "Tool allowlist",
    value: "ERP read · contract search · email draft",
  },
  { label: "Authority mode", value: "Prepare for review" },
  { label: "Reviewer", value: "AP Specialist on duty" },
  { label: "Boundary", value: "Supplier invoices · US entity · per task" },
  {
    label: "Evidence",
    value: "Plan, sources, draft, reviewer decision, result",
  },
];

export default function AgenticAgentContractSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            AGENT DEFINITION & SCOPE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Every agent starts with a contract, not a prompt
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            A named owner, a specific objective, allowed and disallowed actions,
            an authority mode and an evidence requirement, agreed before
            anything runs.
          </p>
        </div>

        {/* Main Grid: Left Image Specimen with Overlay Box, Right Agent Contract Table Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Image with Floating Note Box */}
          <div className="lg:col-span-5 relative">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#00191E] border border-gray-200/60 h-[420px]">
              <img
                src="/age/11.png"
                alt="Engineers collaborating in a control room"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
            {/* Floating Note Box */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-200/80 flex items-center space-x-3">
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                A clear destination, and a road with edges. No open-ended "do
                anything" agents.
              </p>
            </div>
          </div>

          {/* Right Column: Agent Contract White Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-2xl border border-gray-200/60 p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <h3 className="text-sm font-extrabold text-[#0B132B]">
                Agent contract
              </h3>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            <div className="divide-y divide-gray-100 text-xs">
              {CONTRACT_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                >
                  <span className="text-gray-500 font-medium w-36 shrink-0">
                    {row.label}
                  </span>
                  <span
                    className={`font-semibold sm:text-right ${row.isRed ? "text-rose-600" : "text-[#0B132B]"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
