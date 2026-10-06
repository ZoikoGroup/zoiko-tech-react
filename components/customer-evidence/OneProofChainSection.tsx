import React from "react";

export default function OneProofChainSection() {
  const steps = [
    {
      number: "01",
      title: "Operating problem",
      description:
        "Concrete pre-deployment issue, without exaggerated before claims.",
    },
    {
      number: "02",
      title: "Deployment",
      description: "Actual approved scope, environment and operating context.",
    },
    {
      number: "03",
      title: "Technology",
      description: "Approved platform, integration and operator facts.",
    },
    {
      number: "04",
      title: "Result",
      description: "Measured or qualitative outcome with limitations.",
    },
    {
      number: "05",
      title: "Evidence / permission",
      description: "Source, approved identity and current review state.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
            One proof chain. <br />
            Context at every step.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl">
            Canonical long-form stories belong in Resources. Industry discovery
            summarizes and routes approved evidence.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF2E] rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between backdrop-blur-sm shadow-xl transition-colors hover:border-teal-700/60"
            >
              <div className="flex items-center gap-4 mb-3 sm:mb-0">
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-xl border border-[#6FD0F6] flex items-center justify-center text-[#6FD0F6] font-mono text-xs md:text-sm font-bold shrink-0 shadow-inner">
                  {step.number}
                </div>
                {/* Title */}
                <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="text-xs md:text-sm text-[#6FD0F6] sm:text-right max-w-md pl-14 sm:pl-0">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
