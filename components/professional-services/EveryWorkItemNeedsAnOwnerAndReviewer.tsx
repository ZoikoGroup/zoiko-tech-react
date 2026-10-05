import React from "react";

export default function EveryWorkItemNeedsAnOwnerAndReviewer() {
  const cards = [
    {
      image: "/prof/38.png",
      title: "Source preparation",
      meta: "PS-101 · Needs information · Target: not established",
    },
    {
      image: "/prof/39.png",
      title: "Deliverable review",
      meta: "PS-102 · Ready for review · Target: specimen date",
    },
    {
      image: "/prof/40.png",
      title: "Client handoff",
      meta: "PS-103 · Approval pending · Target: not established",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Every work item needs an owner and <br />
            reviewer.
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            A modular operating pattern for engagements, tasks, exceptions and
            handoffs.
          </p>
        </div>

        {/* 3 Columns Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-gray-50 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-mono">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
