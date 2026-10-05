import React from "react";

export default function PublishGovernedProofSection() {
  const steps = [
    {
      number: "01",
      title: "Evidence intake",
      description: "Create structured source records.",
      status: "No public endering",
    },
    {
      number: "02",
      title: "Validate facts",
      description: "Verify method, scope and entity relationships.",
      status: "Evidence owner approval",
    },
    {
      number: "03",
      title: "Customer permission",
      description: "Identity, logo, quote, results and imagery.",
      status: "Permission recorded",
    },
    {
      number: "04",
      title: "Product / operator review",
      description: "Names, maturity and deployment scope.",
      status: "Product owner approval",
    },
    {
      number: "05",
      title: "Legal / compliance",
      description: "Claims, comparisons and endorsement wording.",
      status: "Legal approval",
    },
    {
      number: "06",
      title: "Security / privacy",
      description: "Public-safe architecture and data context.",
      status: "Applicable review complete",
    },
    {
      number: "07",
      title: "Editorial readiness",
      description: "Canonical story, semantics and accessibility.",
      status: "Publishing readiness",
    },
    {
      number: "08",
      title: "Publish",
      description: "Only approved public fields.",
      status: "Published record",
    },
    {
      number: "09",
      title: "Review / expiry",
      description: "Revalidate changes and current claims.",
      status: "Reapprove or suppress",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
            Publish governed proof.
            Keep it current.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl">
            Approval roles prevent narrative, metrics and customer permission
            from drifting apart.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF08] border border-[#80A6AC44] rounded-xl px-6 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between backdrop-blur-sm shadow-lg transition-colors hover:border-teal-700/60"
            >
              {/* Number Badge */}
              <div className="w-12 text-[#24B7C9] font-mono text-sm md:text-base font-bold shrink-0">
                {step.number}
              </div>

              {/* Title */}
              <div className="w-full md:w-64 shrink-0 text-sm md:text-base font-bold text-[#6FD0F6] tracking-tight my-1 md:my-0">
                {step.title}
              </div>

              {/* Description */}
              <div className="flex-1 text-xs md:text-sm text-gray-300 my-1 md:my-0 md:px-6">
                {step.description}
              </div>

              {/* Status */}
              <div className="text-xs md:text-sm text-[#24B7C9] font-mono shrink-0 mt-2 md:mt-0">
                {step.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
