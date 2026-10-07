import React from "react";

export default function UnavailableInformationFailsClosed() {
  const cards = [
    {
      image: "/press/16.png",
      title: "No public records / source error",
      description:
        "Clear archive state, no fabricated featured record or counts.",
    },
    {
      image: "/press/17.png",
      title: "Embargo / withdrawal",
      description:
        "Public search, previews, cache, sitemap and metadata respect publication controls.",
    },
    {
      image: "/press/18.png",
      title: "Broken route / distribution copy",
      description:
        "Canonical source remains primary. Third-party mirrors cannot replace approval or correction history.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Unavailable information fails closed
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            No visual completeness at the expense of official-source truth.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              {/* Image Container */}
              <div className="w-full h-44 bg-gray-100 overflow-hidden border-b border-gray-200">
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
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
