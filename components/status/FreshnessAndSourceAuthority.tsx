import React from "react";

export default function FreshnessAndSourceAuthority() {
  const metadataBadges = [
    "snapshot_id",
    "source_system",
    "source_updated_at",
    "received_at",
    "published_at",
    "freshness_policy_id",
  ];

  const cards = [
    {
      image: "/news/1.png",
      title: "Fresh and verified",
      description: 'Render the approved source state plus "Last updated ...".',
    },
    {
      image: "/news/2.png",
      title: "Source delayed beyond threshold",
      description:
        "Show a delayed-data banner. Last-known state only under approved policy, with explicit age.",
    },
    {
      image: "/news/3.png",
      title: "Source unavailable",
      description:
        'No current operational claim. Show "current status unavailable" with retry and support.',
    },
    {
      image: "/news/4.png",
      title: "Partial source failure",
      description:
        "Mark the affected scope unknown or unavailable. Never infer from neighboring components.",
    },
    {
      image: "/news/1.png",
      title: "Conflicting sources",
      description:
        'Show "unable to confirm" or conflicting status, with internal escalation. Never choose the reassuring value.',
    },
    {
      image: "/news/2.png",
      title: "Clock / timezone ambiguity",
      description:
        "Use an absolute timestamp with timezone. Relative time is secondary.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Freshness and source authority
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            How we decide what to show, and what to do when we can't be sure.
          </p>
        </div>

        {/* Snapshot Carries Banner Section */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-gray-700 mb-3 tracking-wide">
            Every snapshot carries
          </p>
          <div className="flex flex-wrap gap-2">
            {metadataBadges.map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-mono font-medium shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Freshness Presentation Rules Header */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Freshness presentation rules
          </h3>
        </div>

        {/* Grid Layout (Cards with identical object styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              {/* Image Container */}
              <div className="w-full h-36 bg-gray-100 overflow-hidden border-b border-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
