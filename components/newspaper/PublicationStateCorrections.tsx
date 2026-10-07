import React from "react";

export default function PublicationStateCorrections() {
  const cards = [
    {
      image: "/news/15.png",
      title: "Draft",
      description: "Never public. Never indexed or searchable.",
    },
    {
      image: "/news/16.png",
      title: "Scheduled",
      description:
        "Not visible before release time. Scheduled metadata never leaks.",
    },
    {
      image: "/news/17.png",
      title: "Embargoed",
      description:
        "Not public. An embargo can't be inferred from public HTML, API or autocomplete.",
    },
    {
      image: "/news/18.png",
      title: "Published / Current",
      description: "Visible, canonical and indexable per policy.",
    },
    {
      image: "/news/19.png",
      title: "Updated",
      description:
        "The current article stays canonical, with the updated date shown when the change is material.",
    },
    {
      image: "/news/20.png",
      title: "Corrected",
      description:
        "A correction notice and correction timestamp are shown for transparency.",
    },
    {
      image: "/news/21.png",
      title: "Superseded",
      description:
        "Retained only if archive policy requires, with a prominent link to the current record.",
    },
    {
      image: "/news/22.png",
      title: "Withdrawn",
      description:
        "Removed from discovery and current lists. A stable URL may show a withdrawn notice if policy requires.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Publication state and corrections
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            What the public sees at each stage of a record's life.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows of 4 Cards) */}
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
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
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
