import React from "react";

export default function BrowseByYearAndTopic() {
  const items = [
    {
      title: "Year and topic",
      description:
        "Years with public records and controlled topics only. No empty-year links or speculative categories.",
    },
    {
      title: "Product and company area",
      description:
        "Optional maintained registry relationships; no internal codenames or unapproved labels.",
    },
    {
      title: "Stable discovery",
      description:
        "Shareable state under canonical SEO rules; server-rendered browse remains usable without JavaScript.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Browse by year and topic
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Only populated, approved archive facets.
          </p>
        </div>

        {/* 3-Column Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF0F", borderColor: "#7FD0D959" }}
              className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Width Image Container */}
        <div className="w-full rounded-2xl overflow-hidden border border-[#7FD0D959] shadow-2xl bg-black/40">
          <img
            src="/press/10.png"
            alt="Browse by year and topic library and workspace view"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
