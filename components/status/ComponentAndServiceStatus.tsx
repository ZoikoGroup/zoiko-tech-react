import React from "react";

export default function ComponentAndServiceStatus() {
  const cards = [
    {
      image: "/status/first.png",
      title: "public_label",
      description: "Approved customer-facing component or service name.",
    },
    {
      image: "/status/2.png",
      title: "group_label",
      description:
        "Optional source-defined grouping. No designer-created architecture categories.",
    },
    {
      image: "/status/3.png",
      title: "current_state",
      description: "Exact source state or an approved normalized mapping.",
    },
    {
      image: "/status/4.png",
      title: "status_text",
      description: "Plain-language explanation where the source supports it.",
    },
    {
      image: "/status/5.png",
      title: "source_updated_at",
      description: "Last authoritative update time for this component.",
    },
    {
      image: "/status/6.png",
      title: "active_incident_ids",
      description: "Links to incident records affecting the component.",
    },
    {
      image: "/status/7.png",
      title: "maintenance_ids",
      description:
        "Links to current or upcoming maintenance, where the source supports association.",
    },
    {
      image: "/status/8.png",
      title: "region / market",
      description:
        "Only when the status is legitimately scoped by the source and safe to disclose.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Component and service status
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            The Status Component Registry owns the public grouping. Product
            marketing cards are never a substitute.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows x 4 Columns) */}
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
