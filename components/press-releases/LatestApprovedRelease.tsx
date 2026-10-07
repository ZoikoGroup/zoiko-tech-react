import React from "react";

export default function LatestApprovedRelease() {
  const cards = [
    {
      image: "/press/2.png",
      title: "Current prototype",
      description:
        "No approved release record was supplied. The lead item is omitted rather than filled with a fake launch or headline.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/3.png",
      title: "Eligibility",
      description:
        "Current public approved release with feature flag, exact headline, approved date/entity and currentness metadata.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/4.png",
      title: "Image rule",
      description:
        "Only release-specific, rights-cleared imagery. No stock substitute can imply a real announcement.",
      footer: "Illustrative stock photo · Publication guidance",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 block">
            02 / PRESS RELEASES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Latest approved release
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            One eligible lead record, never a promotional carousel.
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
              <div className="w-full h-48 bg-gray-100 overflow-hidden border-b border-gray-200">
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
