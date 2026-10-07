import React from "react";

export default function PressReleasesBoundary() {
  const cards = [
    {
      image: "/news/3.png",
      title: "Discovery",
      description:
        "A labeled Press Release card or link only if cross-indexing is approved.",
      subtext:
        "Press Releases owns: the formal archive and release-specific discovery.",
    },
    {
      image: "/news/4.png",
      title: "Detail",
      description:
        "Links to the canonical Press Release record. No competing copy.",
      subtext:
        "Press Releases owns: formal release detail, approved boilerplate and statement structure.",
    },
    {
      image: "/news/1.png",
      title: "PDF",
      description:
        "Never primary. If provided, it is supplementary to canonical HTML and version-matched.",
      subtext: "Press Releases owns: PDF handling for releases.",
    },
    {
      image: "/news/2.png",
      title: "Legal review",
      description: "Approval isn't inferred from Newspaper publication.",
      subtext: "Press Releases owns: the formal review and approval workflow.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Press Releases boundary
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Press Releases is its own destination and stays blocked until
            approved. This page defines only the handoff.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
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
                  <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                {item.subtext && (
                  <p className="text-teal-800 text-[11px] leading-relaxed font-medium pt-3 border-t border-gray-100">
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
