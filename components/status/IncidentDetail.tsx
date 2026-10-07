import React from "react";

export default function IncidentDetail() {
  const cards = [
    {
      image: "/status/10.png",
      title: "Header",
      description:
        "Incident title, source state, affected scope, start time and latest update time.",
    },
    {
      image: "/status/11.png",
      title: "Current impact",
      description:
        "Latest approved user-impact summary, distinguishing confirmed from unknown where the source supports it.",
    },
    {
      image: "/status/12.png",
      title: "Timeline",
      description:
        "Chronological public updates with timestamp, source state and a sanitized message.",
    },
    {
      image: "/status/13.png",
      title: "Affected components",
      description:
        "Links to public component rows. The internal dependency graph is never exposed.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Incident detail
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            What every incident page contains.
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
