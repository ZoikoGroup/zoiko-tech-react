import React from "react";

export default function ExternalCoverageReferences() {
  const topCards = [
    {
      title: "Eligibility",
      description:
        "Only approved external references relevant to Zoiko Tech and permitted by editorial policy.",
    },
    {
      title: "Outlet name",
      description:
        "The exact publisher or outlet name. A logo only if licensed.",
    },
    {
      title: "Headline",
      description:
        "The original headline or an approved faithful reference. Never rewritten into a stronger claim.",
    },
    {
      title: "Date",
      description: "The publisher's date when known.",
    },
  ];

  const bottomCards = [
    {
      title: "Summary",
      description:
        "Optional original Zoiko Tech wording, kept clearly separate. It doesn't substitute for a paywalled or copyrighted article.",
    },
    {
      title: "Outbound link",
      description: '"Read on {publisher}", opening the original source.',
    },
    {
      title: "Body copy",
      description:
        "No article body, substantial excerpts, images or paywalled content is reproduced.",
    },
    {
      title: "Endorsement",
      description:
        'Coverage doesn\'t imply endorsement. No "trusted by" labeling.',
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            External coverage and references
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Approved external references only, always attributed and linked out.
          </p>
        </div>

        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topCards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF0F", borderColor: "#7FD0D959" }}
              className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight text-center sm:text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed text-center sm:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bottomCards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF0F", borderColor: "#7FD0D959" }}
              className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight text-center sm:text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed text-center sm:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Width Image Container */}
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/news/23.png"
            alt="External coverage and references overview"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
