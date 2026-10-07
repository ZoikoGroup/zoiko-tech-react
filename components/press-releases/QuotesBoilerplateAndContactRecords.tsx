import React from "react";

export default function QuotesBoilerplateAndContactRecords() {
  const cards = [
    {
      image: "/press/20.png",
      title: "Quote",
      description:
        "Exact approved wording, speaker/title, source, owner and release scope; no paraphrase styled as a quote.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/12.png",
      title: "Boilerplate",
      description:
        "Approved corporate scope, version, effective/review dates and owner. Stale mandatory text blocks new publication.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/13.png",
      title: "Media contact",
      description:
        "Only approved public route/channel. No guessed person, email, phone or interview promise.",
      footer: "Illustrative stock photo · Publication guidance",
    },
    {
      image: "/press/14.png",
      title: "Assets",
      description:
        "Rights, credit, purpose and expiry; asset catalog remains in Media Resources.",
      footer: "Illustrative stock photo · Publication guidance",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Quotes, boilerplate and contact have their own approval
            records
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            No invented executive title, spokesperson or media channel.
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
