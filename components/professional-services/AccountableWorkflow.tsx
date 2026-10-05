import React from "react";

export default function AccountableWorkflow() {
  const steps = [
    {
      number: "01",
      title: "Define service / workflow",
      description: "Service line, engagement, authority and objective.",
      gate: "Gate: Scope approved",
      bgClass: "bg-white",
    },
    {
      number: "02",
      title: "Map sources / systems",
      description: "Knowledge, work, communications and operating systems.",
      gate: "Gate: Architecture map approved",
      bgClass: "bg-white",
    },
    {
      number: "03",
      title: "Define trust",
      description: "Roles, confidentiality, AI and retained evidence.",
      gate: "Gate: Control design approved",
      bgClass: "bg-white",
    },
    {
      number: "04",
      title: "Define review / release",
      description: "Draft, review, approval, issue and supersession.",
      gate: "Gate: Professional workflow approved",
      bgClass: "bg-white",
    },
    {
      number: "05",
      title: "Validate exceptions",
      description:
        "Source gaps, conflicts, restricted access and jurisdiction.",
      gate: "Gate: Acceptance criteria met",
      bgClass: "bg-white",
    },
    {
      number: "06",
      title: "Pilot",
      description: "Bounded team or workflow with controlled data.",
      gate: "Gate: Pilot reviewed",
      bgClass: "bg-[$E8FCF4]",
    },
    {
      number: "07",
      title: "Operate / expand",
      description: "Professional, security, product and support readiness.",
      gate: "Gate: Expansion approved",
      bgClass: "bg-[$CFFFEC]",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Start with one accountable workflow.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Expand after reviewed evidence and approved readiness.
          </p>
        </div>

        {/* Workflow Table / Rows */}
        <div className="flex flex-col gap-4">
          {steps.map((item, index) => {
            // Determine custom background style based on row index
            let customBg = "bg-white";
            if (index === 5) customBg = "bg-[#E8FCF4]";
            if (index === 6) customBg = "bg-[#CFFFEC]";

            return (
              <div
                key={index}
                className={`${customBg} border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:shadow-md`}
              >
                {/* Number & Title */}
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="text-[#247780] font-medium text-lg w-8">
                    {item.number}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-1/3">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Gate Badge */}
                <div className="md:w-1/3 flex justify-start md:justify-end">
                  <span className="inline-flex items-center text-xs font-semibold text-[#236D75] px-3 py-1.5">
                    {item.gate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
