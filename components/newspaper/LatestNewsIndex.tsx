import React from "react";

export default function LatestNewsIndex() {
  const topCards = [
    {
      title: "Default order",
      description:
        "Newest approved date first. Ties broken by registry sort or ID.",
    },
    {
      title: "Record eligibility",
      description:
        "Public, published and current. Release time reached, not embargoed or withdrawn, and rights-valid where media is shown.",
    },
    {
      title: "Result count",
      description: "Visible, and announced to screen readers after filters.",
    },
    {
      title: "Pagination",
      description:
        'Numbered pagination for archive discoverability. "Load more" only if URL and history state stay recoverable.',
    },
  ];

  const bottomCards = [
    {
      title: "Server rendering",
      description:
        "The first page and canonical article links render without JavaScript.",
    },
    {
      title: "Archive depth",
      description:
        "No claim of a complete historical archive unless registry coverage is complete and approved.",
    },
    {
      title: "Date display",
      description: "A readable local date plus a machine-readable ISO date.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Latest news index
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Newest approved publication date first. Never ranked by engagement.
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

        {/* Bottom 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
        <div
          style={{ borderColor: "#7FD0D959" }}
          className="w-full rounded-2xl overflow-hidden border shadow-2xl bg-[#051517]/80"
        >
          <img
            src="/news/5.png"
            alt="Latest news newsroom index review"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
