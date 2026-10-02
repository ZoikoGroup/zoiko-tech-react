import React from "react";
import { User, ShieldCheck } from "lucide-react";

export default function ConnectAudienceExperiences() {
  const specRows = [
    { label: "Platform", value: "Zoiko Social" },
    { label: "Parent attribution", value: "Zoiko Media Corp." },
    { label: "Role", value: "Social and community experience" },
    {
      label: "Public scope / maturity",
      value: "Requires current confirmation",
    },
    { label: "Audience data", value: "No real individual audience records" },
    { label: "Destination", value: "Approved platform route required" },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Connect audience experiences <br />
            with explicit ownership.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Zoiko Social is identified as a Zoiko Media Corp. platform for
            social and community experience.
          </p>
        </div>

        {/* Main Grid: Left Cards vs Right Spec Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Two Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F4F8F8] border border-teal-900/10 rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-6 shadow-sm">
                <User className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Experience-level <br />
                context
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Use aggregate audience context unless approved individual
                functionality is established.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F4F8F8] border border-teal-900/10 rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Privacy & purpose
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Cross-product audience data use requires an approved purpose and
                permission.
              </p>
            </div>
          </div>

          {/* Right Column: Audience / Community Evidence Card Spec Panel */}
          <div className="lg:col-span-7 bg-[#FAFCFC] border border-teal-900/10 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-900 tracking-tight">
                Audience / community evidence <br />
                card
              </h3>
              <span className="text-[10px] font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-600 bg-white">
                Synthetic specimen
              </span>
            </div>

            {/* Spec Rows */}
            <div className="flex flex-col gap-6">
              {specRows.map((row, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${
                    index !== specRows.length - 1
                      ? "pb-5 border-b border-gray-100"
                      : ""
                  }`}
                >
                  <span className="text-xs md:text-sm text-gray-500 font-medium">
                    {row.label}
                  </span>
                  <span className="text-xs md:text-sm text-gray-900 font-medium sm:text-right">
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
