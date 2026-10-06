import React from "react";
import { AlertTriangle, Info } from "lucide-react";

interface SubjectDetail {
  label: string;
  value: string | React.ReactNode;
}

const SUBJECT_DETAILS: SubjectDetail[] = [
  { label: "Subject ID", value: "S-1042 (synthetic)" },
  { label: "Subject type", value: "Person" },
  { label: "Display label", value: "A. Rivera" },
  { label: "Authoritative source", value: "Workforce directory" },
  { label: "Source owner", value: "IT Identity team" },
  {
    label: "Source status",
    value: (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E6F4F1] text-[#2b7a78]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2b7a78] mr-1.5"></span>
        Current
      </span>
    ),
  },
  { label: "Linked references", value: "HR system ref · approved" },
  { label: "Last confirmed", value: "Today 08:00 sync" },
];

export default function IdentitySubjectSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Step Info & Subject Photo */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Step Indicator */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase">
              STEP 1 OF 7 · SOURCE
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mb-6">
            <span className="w-6 h-2 rounded-full bg-[#2b7a78]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            The identity points back to the system that owns it
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            A stable subject reference, its type, its authoritative source and
            owner, and how fresh that source is.
          </p>

          {/* Subject Image Thumbnail Card */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div className="relative w-full h-[220px]">
              <img
                src="/digital/15.png"
                alt="Subject profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Identity Subject Details Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#0B132B]">
              Identity subject
            </h3>
            <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          {/* Details Table Rows */}
          <div className="divide-y divide-gray-100">
            {SUBJECT_DETAILS.map((detail, index) => (
              <div
                key={index}
                className="grid grid-cols-12 py-3.5 items-center text-xs md:text-sm"
              >
                <div className="col-span-4 text-gray-500 font-medium">
                  {detail.label}
                </div>
                <div className="col-span-8 text-[#0B132B] font-semibold">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>

          {/* Conflict Warning Box */}
          <div className="mt-6 bg-[#FDE8E8] border border-[#F8B4B4] rounded-xl p-3.5 flex items-start space-x-3 text-xs text-[#9B1C1C]">
            <AlertTriangle className="w-4 h-4 text-[#E02424] shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              Conflict: CRM lists a different department. Shown as review
              required, never silently merged.
            </span>
          </div>

          {/* Rule Footer Info Box */}
          <div className="mt-4 bg-[#E6F4F1] border border-[#B2DFDB] rounded-xl p-3.5 flex items-start space-x-3 text-xs text-[#2b7a78]">
            <Info className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              Identity source rule. A display name or email address is not, by
              itself, an authoritative identity record.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
