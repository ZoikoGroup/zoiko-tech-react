import React from "react";

export default function BillingBoundary() {
  const cards = [
    {
      image: "/prof/46.png",
      title: "Necessary reference",
      description: "Connect minimum client or service context.",
    },
    {
      image: "/prof/47.png",
      title: "Authorized approval",
      description: "Billing and release controls only where supported.",
    },
    {
      image: "/prof/48.png",
      title: "Accounting boundary",
      description:
        "No implied general ledger, client funds, trust accounting or audit advice.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Billing is a separate operating <br />
            boundary.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Zoiko Billing supports billing, invoicing, usage and revenue
            operations at approved scope.
          </p>
        </div>

        {/* 3-Column Layout with Flush Image Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF09] border border-[#FFFFFF30] rounded-2xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="w-full h-48 sm:h-56 overflow-hidden p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
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
