import React from "react";

export default function EditorialBoundariesAndNewsroomDistinction() {
  const sections = [
    {
      heading: "Newspaper owns broader editorial discovery",
      subtitle:
        "Press Releases owns formal first-party release archive and detail.",
      cards: [
        {
          title: "Typed handoff",
          description:
            "Newspaper may reference a formal release as an explicitly typed record.",
        },
        {
          title: "No route inference",
          description:
            "Canonical Newspaper URL was not supplied. No guessed production link is displayed.",
        },
      ],
    },
    {
      heading: "Media Resources owns approved assets",
      subtitle: "The release archive is not a press-kit catalog.",
      cards: [
        {
          title: "Approved reuse",
          description:
            "Logos, media assets, credits and usage terms come from Media Resources and rights records.",
        },
        {
          title: "Destination readiness",
          description:
            "Link only once the canonical destination is approved/live. No inferred kit, asset library or download.",
        },
      ],
    },
    {
      heading: "Company Newsroom remains distinct",
      subtitle:
        "A future corporate umbrella cannot be inferred from this page.",
      cards: [
        {
          title: "Separate authority",
          description:
            "Do not rename Press Releases to Newsroom, News, Media Center or Press.",
        },
        {
          title: "Governed relationship",
          description: "Canonical route and ownership remain approval-gated.",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 space-y-20">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {sections.map((section, secIndex) => (
          <div key={secIndex} className="space-y-6">
            {/* Section Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-2 leading-[1.1]">
                {section.heading}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                {section.subtitle}
              </p>
            </div>

            {/* 2-Column Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-[#F7FBFB] border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
                >
                  <div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
