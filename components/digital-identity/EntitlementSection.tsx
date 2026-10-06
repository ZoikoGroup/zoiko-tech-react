import React from "react";
import { Check, AlertCircle, Clock, HelpCircle } from "lucide-react";

interface EntitlementRow {
  entitlement: string;
  resourceScope: string;
  source: string;
  effectivePeriod: string;
  state: "Active" | "Exception" | "Expired" | "Unknown";
}

const ENTITLEMENT_ROWS: EntitlementRow[] = [
  {
    entitlement: "Invoice reader",
    resourceScope: "AP workspace · invoices",
    source: "Role assignment · Finance IAM",
    effectivePeriod: "01 Jan → 31 Dec",
    state: "Active",
  },
  {
    entitlement: "Batch poster",
    resourceScope: "Billing service · posting API",
    source: "Service grant · Billing team",
    effectivePeriod: "Until 30 Nov",
    state: "Active",
  },
  {
    entitlement: "Vendor master editor",
    resourceScope: "Vendor records",
    source: "Exception · CFO approval",
    effectivePeriod: "24 h · expires 18:00",
    state: "Exception",
  },
  {
    entitlement: "Payment approver",
    resourceScope: "Payments < $10k",
    source: "Role assignment · Treasury",
    effectivePeriod: "Ended 30 Sep",
    state: "Expired",
  },
  {
    entitlement: "Legacy report export",
    resourceScope: "Finance data mart",
    source: "Unknown source",
    effectivePeriod: "—",
    state: "Unknown",
  },
];

const STATE_BADGES: Record<
  string,
  { bg: string; text: string; icon: React.ReactNode }
> = {
  Active: {
    bg: "bg-[#E6F4F1]",
    text: "text-[#2b7a78]",
    icon: <Check className="w-3 h-3 text-[#2b7a78]" />,
  },
  Exception: {
    bg: "bg-[#F3E8FF]",
    text: "text-[#9333EA]",
    icon: <AlertCircle className="w-3 h-3 text-[#9333EA]" />,
  },
  Expired: {
    bg: "bg-[#FEF3C7]",
    text: "text-[#D97706]",
    icon: <Clock className="w-3 h-3 text-[#D97706]" />,
  },
  Unknown: {
    bg: "bg-[#EDF2F7]",
    text: "text-[#4A5568]",
    icon: <HelpCircle className="w-3 h-3 text-[#4A5568]" />,
  },
};

export default function EntitlementSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Step Info, Header & Photo */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Step Indicator */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase">
              STEP 3 OF 7 · ENTITLEMENT
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-6 h-2 rounded-full bg-[#2b7a78]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            What access exists, where it came from, when it ends
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Roles appear only where the source defines them. Exceptional access
            is explicit, scoped, time-bounded and reviewable.
          </p>

          {/* Entitlement Image Thumbnail Card */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div className="relative w-full h-[220px]">
              <img
                src="/digital/17.png"
                alt="Entitlements architecture"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Effective Entitlements Table Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#0B132B]">
              Effective entitlements · S-1042
            </h3>
            <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          {/* Table Header Columns */}
          <div className="grid grid-cols-12 pb-3 text-[10px] tracking-wider uppercase font-bold text-gray-400 border-b border-gray-100">
            <div className="col-span-3">ENTITLEMENT</div>
            <div className="col-span-3">RESOURCE SCOPE</div>
            <div className="col-span-3">SOURCE</div>
            <div className="col-span-2">EFFECTIVE PERIOD</div>
            <div className="col-span-1 text-right">STATE</div>
          </div>

          {/* Table Rows (Mapped) */}
          <div className="divide-y divide-gray-100">
            {ENTITLEMENT_ROWS.map((row, index) => {
              const badge = STATE_BADGES[row.state];
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 py-3.5 items-center text-xs"
                >
                  <div className="col-span-3 font-bold text-[#0B132B]">
                    {row.entitlement}
                  </div>
                  <div className="col-span-3 text-[#4A5568]">
                    {row.resourceScope}
                  </div>
                  <div className="col-span-3 text-[#4A5568]">{row.source}</div>
                  <div className="col-span-2 text-[#4A5568]">
                    {row.effectivePeriod}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${badge.bg} ${badge.text}`}
                    >
                      <span className="mr-1 shrink-0">{badge.icon}</span>
                      {row.state}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
            An entitlement contributes to authorization; it is never the final
            access decision on its own.
          </div>
        </div>
      </div>
    </section>
  );
}
