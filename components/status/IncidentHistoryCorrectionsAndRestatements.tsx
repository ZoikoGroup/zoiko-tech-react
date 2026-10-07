import React from "react";

export default function IncidentHistoryCorrectionsAndRestatements() {
  const cards = [
    {
      title: "Resolved incidents",
      description:
        "Source-confirmed closure only. Start, end and final public summary are kept.",
    },
    {
      title: "Date filtering",
      description:
        "Calendar, month or year filters only if history volume justifies it. URLs stay stable and shareable.",
    },
    {
      title: "Component filtering",
      description:
        "Uses the same public Status Component Registry and historical mapping.",
    },
    {
      title: "Search",
      description:
        "Indexes public title, summary and update text. Never internal or private incident metadata.",
    },
    {
      title: "Correction / restatement",
      description:
        "Shows the correction date and a concise reason when approved, preserving public auditability.",
    },
    {
      title: "Post-incident review",
      description:
        "A conditional public artifact only when approved. Not every incident has an RCA.",
    },
    {
      title: "Retention",
      description:
        "Follows the approved public history policy. Nothing is deleted just to look more reliable.",
    },
    {
      title: "Supersession",
      description:
        "If a record is merged, split or corrected, canonical links and current record mapping are preserved.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column / Top Section: Title and Subtitle */}
          <div className="lg:col-span-12 mb-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
              Incident history, corrections and restatements
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-3xl">
              Comprehensive guidelines for historical archiving, tracking status
              updates, corrections, and public accountability records.
            </p>
          </div>
        </div>

        {/* 4-Column Grid Layout (2 Rows x 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF0F", borderColor: "#7FD0D959" }}
              className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Preview Image Section */}
        <div className="w-full flex justify-center">
          <div
            className="w-full rounded-2xl overflow-hidden max-w-7xl"
          >
            <img
              src="/status/14.png"
              alt="Incident history and analytics monitoring dashboard control room"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
