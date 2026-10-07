import React from "react";

export default function CorrectionsBelongToThePublicRecord() {
  const items = [
    {
      title: "Draft / scheduled / embargoed",
      description:
        "Not public, searchable or indexed before authorized atomic publication.",
    },
    {
      title: "Published / corrected",
      description:
        "Canonical public release; material corrections retain dates and version linkage.",
    },
    {
      title: "Superseded / withdrawn",
      description:
        "Prominent approved history or notice. No silent redirect to unrelated promotional content.",
    },
    {
      title: "Metadata parity",
      description:
        "Search, caches, sitemaps and dateModified must reflect approved changes.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Corrections belong to the public record
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Historical truth must not silently become current marketing.
          </p>
        </div>

        {/* List Grid / Rows with left border accent matching visual */}
        <div className="relative pl-4 sm:pl-6 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#7FD0D959]">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-4">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
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
