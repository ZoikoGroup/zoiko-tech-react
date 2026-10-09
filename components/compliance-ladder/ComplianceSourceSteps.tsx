import React from "react";

export default function ComplianceSourceSteps() {
  const items = [
    { code: "CL-01", title: "Define Scope & Applicability" },
    { code: "CL-02", title: "Assign Owners & Accountability" },
    { code: "CL-03", title: "Review Controls & Policies" },
    { code: "CL-04", title: "Manage Exceptions & Remediation" },
    { code: "CL-05", title: "Preserve Evidence & Review History" },
    { code: "CL-06", title: "Report Oversight & Escalation" },
  ];

  return (
    <div id="six-steps" className="w-full bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557] py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Keep the source <br />
            beside the step.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
            Public examples are read-only concepts. Real <br />
            administrative actions require verified product <br />
            support and named authority.
          </p>
        </div>

        {/* Right Column: List of Items */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center py-5 border-b border-white/10 group"
            >
              {/* Dot indicator */}
              <div className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-white opacity-80" />

              {/* Code */}
              <span className="text-[#FFB3BF] font-mono text-sm tracking-wider w-20">
                {item.code}
              </span>

              {/* Title */}
              <span className="text-white font-semibold text-base md:text-lg tracking-wide">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
