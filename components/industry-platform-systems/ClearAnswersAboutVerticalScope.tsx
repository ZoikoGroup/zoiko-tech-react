import React from "react";

export default function ClearAnswersAboutVerticalScope() {
  const cards = [
    {
      title: "Is this an Industries directory?",
      description:
        "No. This Technology page explains vertical-system architecture; industry pages retain sector buyer context.",
    },
    {
      title: "Are all pathways public products?",
      description:
        "No. Industrial, utility and other labels do not establish shipped capabilities or market availability.",
    },
    {
      title: "Who owns Group platform evidence?",
      description:
        "ZoikoMeds and Zoiko Rooms retain exact Group attribution. Contracting/operator details require approved source records.",
    },
    {
      title: "Does this imply regulatory approval?",
      description:
        "No. Jurisdiction, regulated scope and evidence remain source-controlled.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Clear answers about vertical scope.
          </h2>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#F1F8F9" }}
              className="border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-left"
            >
              <div className="w-full flex flex-col items-start">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
