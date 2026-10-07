import React from "react";

export default function CurrentnessErrorAndEdgeStates() {
  const cards = [
    {
      title: "Fresh / normal source",
      description: "Source-backed state and last updated time.",
    },
    {
      title: "Active incident",
      description:
        "Incident summary sits above the component list, with the current update prominent.",
    },
    {
      title: "Maintenance active",
      description:
        "A separate maintenance indicator and approved impact. Not labeled an incident unless the source does.",
    },
    {
      title: "No active incidents verified",
      description: "Said only when the source is reachable and confirms zero.",
    },
    {
      title: "Source delayed",
      description:
        'A visible delayed-data banner with the last successful confirmation. No silent "current" label.',
    },
    {
      title: "Source unavailable",
      description:
        '"Current status unavailable," with retry and support. No default operational state.',
    },
    {
      title: "Conflicting source data",
      description:
        '"Unable to confirm" with internal escalation. No automatic resolution.',
    },
    {
      title: "Incident record unavailable",
      description:
        "A safe error, list and navigation kept. We never infer the incident is resolved.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Currentness, error and edge states
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            What the page does when something isn't perfect, and it never
            defaults to green.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows x 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
