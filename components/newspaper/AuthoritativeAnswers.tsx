import React from "react";

export default function AuthoritativeAnswers() {
  const cards = [
    {
      title: "Technical and product implementation",
      subtitle: "Documentation / Developer Resources",
      description: "Exact behavior, version, auth and API live in the docs.",
    },
    {
      title: "Research paper or benchmark",
      subtitle: "Resources > Research",
      description:
        "Research isn't recast as news. Method, version and provenance are preserved.",
    },
    {
      title: "Customer outcome",
      subtitle: "Customer Stories / Case Studies",
      description:
        "Only approved, attributable evidence. An article can't create a customer proof record.",
    },
    {
      title: "Security, privacy and compliance assurance",
      subtitle: "Trust Center",
      description:
        "Claims stay scoped and evidence-bound. An article doesn't certify.",
    },
    {
      title: "Current availability or incident",
      subtitle: "Status",
      description:
        'Live state belongs to Status. An article never hard-codes "operational" or "down."',
    },
    {
      title: "Formal release",
      subtitle: "Press Releases",
      description: "Canonical formal release authority.",
    },
    {
      title: "Brand and media assets",
      subtitle: "Media Resources",
      description: "Rights and download authority.",
    },
    {
      title: "Corporate context",
      subtitle: "Company / later Newsroom",
      description:
        "Only approved Company routes. The relationship stays registry-controlled.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Where the authoritative answer lives
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Articles can summarize, but these destinations own the facts.
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
                <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <h4 className="text-[#DCECEE] text-xs mb-3">
                  {item.subtitle}
                </h4>
                <p className="text-[#7FD0D9] text-xs leading-relaxed">
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
