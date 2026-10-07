import React from "react";

export default function SearchApprovedPublicationMetadata() {
  const cards = [
    {
      image: "/press/6.png",
      title: "Search and filters",
      description:
        "Approved headline, summary/body, year, controlled topic and referenced current product/company metadata.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/7.png",
      title: "Behavior",
      description:
        "Minimum two characters when search is connected; debounce, preserve filters and announce results without stealing focus.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/8.png",
      title: "Zero results",
      description:
        "Explain no approved match; clear filters or return to full archive. No inferred or synthesized release.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/9.png",
      title: "Current prototype",
      description:
        "No fake search field, result count or unused filters over an invented archive.",
      footer: "Illustrative stock photo · Publication guidance",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Search approved publication metadata
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Discovery controls require actual public records.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md"
            >
              {/* Image Container */}
              <div className="w-full h-full bg-gray-100 overflow-hidden border-b border-gray-200">
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
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium">
                    {item.footer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
