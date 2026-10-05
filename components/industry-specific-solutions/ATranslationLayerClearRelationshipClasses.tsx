import React from "react";

export default function ATranslationLayerClearRelationshipClasses() {
  const cards = [
    {
      image: "/industry/23.png",
      title: "Direct specialist",
      description:
        "The source explicitly defines a named industry-outcome solution.",
    },
    {
      image: "/industry/24.png",
      title: "Contextual outcome",
      description:
        "Documented operating needs overlap a solution proposition. This is routing logic, not an official product mapping.",
    },
    {
      image: "/industry/25.png",
      title: "Shared foundation",
      description:
        "Cross-cutting technology and trust support the use case without becoming a sector-specific product.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
            A translation layer. <br />
            Clear relationship classes.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
            Industries answer &ldquo;Does Zoiko understand my sector?&rdquo;
            Solutions answer &ldquo;What problem can Zoiko help me solve?&rdquo;
            Product evidence belongs on the destination.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A2528] border border-teal-800/40 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md shadow-xl transition-colors hover:border-teal-700/60"
            >
              <div>
                {/* Image Container */}
                <div className="w-full h-36 mb-6 flex items-center justify-center rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
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
