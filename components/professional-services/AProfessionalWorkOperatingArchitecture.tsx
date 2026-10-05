import React from "react";

export default function AProfessionalWorkOperatingArchitecture() {
  const rows = [
    {
      level: "L1",
      title: "Client / engagement context",
      description:
        "Client, organization, service line and jurisdiction at minimum necessary scope.",
      question: "What work is being performed and for whom?",
      bg: "bg-[#F4F9F9]",
    },
    {
      level: "L2",
      title: "Authoritative sources",
      description:
        "Documents, systems, regulations and facts with version and effective state.",
      question: "What is the work based on?",
      bg: "bg-[#F4F9F9]",
    },
    {
      level: "L3",
      title: "Work package / task",
      description:
        "Research, analysis, preparation, review or operational work.",
      question: "What work is underway?",
      bg: "bg-[#F4F9F9]",
    },
    {
      level: "L4",
      title: "Intelligence / automation",
      description:
        "Supported retrieval, summary, recommendation or preparation.",
      question: "How is technology assisting?",
      bg: "bg-[#F4F9F9]",
    },
    {
      level: "L5",
      title: "Professional review / authority",
      description:
        "Authorized reviewer and separate approval / release boundary.",
      question: "Who owns professional judgment?",
      bg: "bg-[#F4F9F9]",
    },
    {
      level: "L6",
      title: "Client / operational delivery",
      description: "Communication, release, billing and workforce handoffs.",
      question: "How is the work delivered?",
      bg: "bg-[#ECFFFF]",
    },
    {
      level: "L7",
      title: "Evidence / security / integration",
      description:
        "History, confidentiality, identity, interfaces and observability.",
      question: "Can it be trusted and reviewed?",
      bg: "bg-[#D7FFFF]",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            A professional-work operating <br />
            architecture.
          </h2>
          <p className="text-gray-600 text-xs md:text-sm">
            Seven layers connect knowledge to delivery while preserving
            authority.
          </p>
        </div>

        {/* Table/List Container */}
        <div className="flex flex-col gap-3">
          {rows.map((row, index) => (
            <div
              key={index}
              className={`${row.bg} border border-gray-200/80 rounded-2xl p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center shadow-sm`}
            >
              {/* Level & Title (Col 4) */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xs font-mono font-bold text-gray-700 shadow-sm shrink-0">
                  {row.level}
                </span>
                <h3 className="text-base font-bold text-gray-900 tracking-tight">
                  {row.title}
                </h3>
              </div>

              {/* Description (Col 5) */}
              <div className="lg:col-span-5">
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {row.description}
                </p>
              </div>

              {/* Question (Col 3) */}
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <span className="text-xs md:text-sm font-medium text-teal-900/80">
                  {row.question}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
