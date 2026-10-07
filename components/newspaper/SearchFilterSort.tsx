import React from "react";

export default function SearchFilterSort() {
  const firstRow = [
    {
      image: "/news/1.png",
      title: "Search",
      description:
        "Approved public headline, summary, body text and tags only.",
    },
    {
      image: "/news/2.png",
      title: "Type filter",
      description:
        "Values come only from the approved content taxonomy. No labels are published until the registry approves them.",
    },
    {
      image: "/news/3.png",
      title: "Topic filter",
      description: "Approved taxonomy only, rendered once it exists.",
    },
    {
      image: "/news/4.png",
      title: "Product / technology filter",
      description:
        "Canonical registry entities only. Relationships aren't inferred from article text.",
    },
  ];

  const secondRow = [
    {
      image: "/news/1.png",
      title: "Date filter",
      description: "Year or date range. No future or scheduled item leaks.",
    },
    {
      image: "/news/2.png",
      title: "Sort",
      description:
        'Newest first by default, oldest first optionally. No "Most Popular" without approved rationale.',
    },
    {
      image: "/news/3.png",
      title: "Clear filters",
      description: "One control returns to the canonical all-current index.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Search, filter and sort
          </h2>
        </div>

        {/* First Row (4 Columns, Full Width) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRow.map((item, index) => (
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

        {/* Second Row (3 Columns, Full Width spanning layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondRow.map((item, index) => (
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
