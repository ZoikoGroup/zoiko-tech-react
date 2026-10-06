import React from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";

interface SpecimenRow {
  label: string;
  value: string;
}

const CONTROL_ROWS: SpecimenRow[] = [
  {
    label: "Control objective",
    value: "Quarterly levy return accurate and on time",
  },
  { label: "Task", value: "Prepare, review, submit, reconcile, retain" },
  { label: "Owner / assignee", value: "Finance compliance lead · Tax analyst" },
  {
    label: "Dependencies",
    value: "Billing data · approval · authority portal",
  },
  { label: "Rule version", value: "Levy calculation rule v3 (pinned)" },
  { label: "Due / trigger", value: "30 Apr · quarterly" },
  {
    label: "Required evidence",
    value: "Calculation file · approval · portal receipt",
  },
  {
    label: "Completion rule",
    value: "Authoritative acceptance, not UI task completion",
  },
];

const APPROVAL_ROWS: SpecimenRow[] = [
  { label: "Approver", value: "Finance compliance lead" },
  {
    label: "Authority source",
    value: "Digital Identity · entitlement current",
  },
  {
    label: "Separation of duties",
    value: "Preparer cannot approve own return",
  },
  { label: "Scope", value: "Q1 return · Market A · Entity 02" },
  { label: "Reason category", value: "Variance within approved tolerance" },
  { label: "Expiry", value: "Valid for this submission only" },
];

export default function RegulatoryControlsAndApprovalSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column (§08: Controls, Policy & Workflow) */}
        <div className="flex flex-col items-start w-full">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
            <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
              §08
            </span>
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            CONTROLS, POLICY & WORKFLOW
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Obligations become governed work
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-8">
            Workflow never rewrites the underlying rule, and completion needs
            authoritative confirmation.
          </p>

          {/* Control Specimen Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 w-full mb-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Control & workflow · CTL-RT-08
                </h3>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </div>
            </div>

            <div className="flex flex-col divide-y divide-gray-100 text-xs mb-6">
              {CONTROL_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="py-3 flex items-center justify-between"
                >
                  <span className="text-gray-500 font-medium">{row.label}</span>
                  <span className="font-bold text-[#0B132B] text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image (rounded-2xl only, no bg, border, shadow) */}
          <div className="w-full h-[220px] mb-6">
            <img
              src="/reg/17.png"
              alt="Controls mountain landscape"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Review Controls Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Review controls <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Right Column (§09: Review, Approval & Exception) */}
        <div className="flex flex-col items-start w-full">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit mb-4 shadow-sm">
            <span className="text-[#2b7a78] font-mono text-[11px] font-bold">
              §09
            </span>
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            REVIEW, APPROVAL & EXCEPTION
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            People with real authority decide
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-8">
            Permission is never inferred from a job title. Unknown authority
            blocks the action and routes review.
          </p>

          {/* Approval Specimen Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 w-full mb-6 relative">
            <div className="absolute right-6 top-6 rotate-3 bg-red-50 border border-red-200 text-red-600 font-bold text-[10px] px-2.5 py-0.5 rounded tracking-widest shadow-sm">
              PENDING
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Approval · APR-3341
                </h3>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </div>
            </div>

            <div className="flex flex-col divide-y divide-gray-100 text-xs mb-6">
              {APPROVAL_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="py-3 flex items-center justify-between"
                >
                  <span className="text-gray-500 font-medium">{row.label}</span>
                  <span className="font-bold text-[#0B132B] text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Self-approval Blocked Alert Box */}
            <div className="bg-red-50/60 border border-red-200 rounded-xl p-3.5 flex items-start space-x-2.5 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-red-800 leading-relaxed">
                <strong className="font-bold">Self-approval blocked:</strong>{" "}
                the preparer and approver must be different people.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button className="bg-[#2b7a78] hover:bg-[#236361] text-white text-xs font-semibold py-2 px-4 rounded-xl transition-colors shadow-sm">
                Approve
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-4 rounded-xl transition-colors">
                Reject
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-4 rounded-xl transition-colors">
                Request change
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-4 rounded-xl transition-colors">
                Escalate
              </button>
            </div>
          </div>

          {/* Review Approvals Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Review approvals <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
