import React from "react";

export default function RehearseTheOperatingModel() {
  const steps = [
    {
      number: "01",
      title: "Define the experience",
      description: "Audience, operator and supported platform path.",
      gate: "Scope approved",
    },
    {
      number: "02",
      title: "Map source & destination",
      description: "Event source, responsible system and ownership boundaries.",
      gate: "Architecture approved",
    },
    {
      number: "03",
      title: "Define states & controls",
      description: "Readiness, live authority, failure handling and support.",
      gate: "Control design approved",
    },
    {
      number: "04",
      title: "Integrate & rehearse",
      description: "Validate permissions, transitions and failure paths.",
      gate: "Readiness criteria met",
    },
    {
      number: "05",
      title: "Launch / go live",
      description: "Bounded event scope with accountable operators.",
      gate: "Launch authorized",
    },
    {
      number: "06",
      title: "Operate & recover",
      description: "Handle incidents and preserve operational evidence.",
      gate: "Operational close confirmed",
    },
    {
      number: "07",
      title: "Review & expand",
      description: "Check post-event behavior before broader rollout.",
      gate: "Expansion approved",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Rehearse the operating model. <br />
            Then authorize a bounded launch.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Define responsibilities and failure paths before expanding to more
            experiences.
          </p>
        </div>

        {/* Steps Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFCFC] border border-teal-900/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Step Number & Title */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-sm font-bold text-teal-800 tracking-wider">
                    {item.number}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Gate Info */}
              <div className="pt-4 border-t border-gray-100">
                <span className="block text-[11px] font-medium text-gray-400">
                  Gate: <span className="text-gray-700">{item.gate}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
