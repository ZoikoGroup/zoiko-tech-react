import React from "react";

export default function PlannedMaintenance() {
  const cards = [
    {
      title: "State",
      description:
        "Scheduled, active, completed or canceled, only if the source vocabulary defines them.",
    },
    {
      title: "Window",
      description:
        "Absolute start and end timestamps with timezone. Local display can supplement but not replace.",
    },
    {
      title: "Affected scope",
      description:
        "Only the source-defined public component, region or service.",
    },
    {
      title: "Expected impact",
      description: "Only a source-approved statement. No inferred downtime.",
    },
    {
      title: "Actual impact",
      description:
        "If the source publishes it, kept separate from expected impact.",
    },
    {
      title: "Updates",
      description:
        "Schedule changes, cancellation or extension stay timestamped.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title, Subtitle, and Grid Cards */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Header Section */}
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
                Planned maintenance
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                Upcoming maintenance is not an outage unless the source says
                impact is active.
              </p>
            </div>

            {/* 3x2 Grid of Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {cards.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#FFFFFF0F",
                    borderColor: "#7FD0D959",
                  }}
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

          {/* Right Column: 3D Calendar and Maintenance Graphic Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="w-full rounded-2xl overflow-hidden"
            >
              <img
                src="/status/9.png"
                alt="Planned maintenance schedule calendar and status interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
