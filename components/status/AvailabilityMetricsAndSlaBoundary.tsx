import React from "react";

export default function AvailabilityMetricsAndSlaBoundary() {
  const cards = [
    {
      image: "/news/4.png",
      title: "Metric definition",
      description:
        "Numerator, denominator, excluded states and aggregation method.",
    },
    {
      image: "/news/1.png",
      title: "Scope and period",
      description:
        "Exact product, component, region or deployment, with an explicit date range and timezone.",
    },
    {
      image: "/news/2.png",
      title: "Data source",
      description: "Approved source and methodology owner.",
    },
    {
      image: "/news/3.png",
      title: "Finality",
      description: "Whether the period is final, provisional or corrected.",
    },
    {
      image: "/news/4.png",
      title: "Visualization",
      description:
        "Text value plus an accessible table. A chart is optional and must preserve exact values.",
    },
    {
      image: "/news/1.png",
      title: "Missing data",
      description:
        "Shown as unavailable or insufficient data. Never interpolated silently.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Availability metrics and the SLA boundary
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Historical availability is not a contractual SLA. Contract terms
            live in the applicable agreement.
          </p>
        </div>

        {/* Grid Layout */}
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
