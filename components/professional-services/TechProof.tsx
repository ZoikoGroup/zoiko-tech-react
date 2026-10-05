import React from "react";

export default function TechProof() {
  const cards = [
    {
      image: "/prof/62.png",
      title: "Professional workflows",
      description:
        "Source -> work -> review -> approved operating result. Evidence pending.",
    },
    {
      image: "/prof/63.png",
      title: "Knowledge & AI",
      description:
        "Source-aware assistance, review and limitations. Evidence pending.",
    },
    {
      image: "/prof/64.png",
      title: "Firm operations",
      description:
        "Connected workforce, communications and billing. Evidence pending.",
    },
    {
      image: "/prof/65.png",
      title: "Regulatory evidence",
      description: "Controlled interpretation and review. Evidence pending.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Technology in practice needs <br />
            approved proof.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Customer stories and measured professional-services results were not
            supplied.
          </p>
        </div>

        {/* 3-Column Layout with Asymmetrical Last Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="w-full h-48 sm:h-56 bg-teal-950/40 overflow-hidden border-b border-teal-900/60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#21748B] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
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
