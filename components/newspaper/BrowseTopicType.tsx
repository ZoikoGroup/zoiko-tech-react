import React from "react";

export default function BrowseTopicType() {
  const cards = [
    {
      title: "Topic chips / cards",
      description:
        "Driven by the approved taxonomy: label, a short neutral description, and a current public count only if the count is reliable.",
    },
    {
      title: "Type cards",
      description:
        "Only content types with at least one public record, or a useful empty-state explanation.",
    },
    {
      title: "Press Releases",
      description:
        "A dedicated handoff card once that route is approved. No duplicate taxonomy ownership.",
    },
    {
      title: "Media Resources",
      description: "A dedicated handoff card once that route is approved.",
    },
    {
      title: "Research",
      description:
        "Papers and benchmarks link to Resources > Research rather than being recategorized as news.",
    },
    {
      title: "Status",
      description:
        "Incidents and maintenance stay in Status. A post-incident announcement can be linked only if it was separately published.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Cards Grid (3 rows x 2 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
                Browse by topic and type
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF0F] border border-[#7FD0D959] rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Technical Graphic Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src="/news/6.png"
                alt="Browse by topic and type ecosystem overview"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
