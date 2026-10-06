import React from "react";
import { Check, X, HelpCircle, AlertTriangle } from "lucide-react";

interface DecisionRow {
  label: string;
  value: string;
  status: "valid" | "invalid" | "neutral";
}

const DECISION_ROWS: DecisionRow[] = [
  {
    label: "Subject",
    value: "S-0991 · Workforce directory · current",
    status: "valid",
  },
  { label: "Authentication", value: "Authenticated 10:14", status: "valid" },
  {
    label: "Entitlement",
    value: "Payment approver · expired 30 Sep",
    status: "invalid",
  },
  { label: "Delegation", value: "None", status: "neutral" },
  {
    label: "Resource / action",
    value: "Approve payment PAY-5521",
    status: "valid",
  },
  { label: "Policy", value: "Payments policy v4", status: "valid" },
];

export default function AccessDecisionSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Step Info, Header & Photo */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Step Indicator */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase">
              STEP 6 OF 7 · DECISION
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-6 h-2 rounded-full bg-[#2b7a78]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Policy meets context, and the decision explains itself
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Allow, deny, review-required, step-up-required or unknown, each with
            a safe reason and an owner who can resolve it.
          </p>

          {/* Access Decision Image Thumbnail Card */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div className="relative w-full h-[220px]">
              <img
                src="/digital/19.png"
                alt="Access decision architecture"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Access Decision Details Card & Integrity Rule */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#0B132B]">
                Access decision · DEC-3310
              </h3>
              <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Decision Rows Table */}
            <div className="divide-y divide-gray-100">
              {DECISION_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 py-3.5 items-center text-xs md:text-sm"
                >
                  <div className="col-span-1 flex items-center">
                    {row.status === "valid" && (
                      <span className="w-5 h-5 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#2b7a78]" />
                      </span>
                    )}
                    {row.status === "invalid" && (
                      <span className="w-5 h-5 rounded-full bg-[#FDE8E8] flex items-center justify-center">
                        <X className="w-3.5 h-3.5 text-[#E02424]" />
                      </span>
                    )}
                    {row.status === "neutral" && (
                      <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                        <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
                      </span>
                    )}
                  </div>
                  <div className="col-span-3 text-gray-500 font-medium">
                    {row.label}
                  </div>
                  <div className="col-span-8 text-[#0B132B] font-semibold">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Decision Banner: Denied */}
            <div className="mt-6 bg-[#FDE8E8] border border-[#F8B4B4] rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-[#9B1C1C]">
              <div>
                <span className="font-bold text-[#9B1C1C] mr-2">
                  Decision: Denied
                </span>
                <span className="text-gray-600">
                  Review route: Treasury access owner · Recorded 10:14 with
                  policy v4
                </span>
              </div>
              <div className="font-semibold text-[#9B1C1C] shrink-0">
                · Reason: entitlement expired
              </div>
            </div>
          </div>

          {/* Decision Integrity Rule Footer Box */}
          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4 flex items-start space-x-3 text-xs text-[#92400E]">
            <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">
              Decision integrity rule. Never show &ldquo;authorized&rdquo; when
              source, authentication, entitlement, delegation or policy is
              missing, expired, revoked, stale or unknown.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
