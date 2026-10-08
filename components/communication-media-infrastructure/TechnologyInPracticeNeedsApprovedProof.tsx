import React from "react";

export default function TechnologyInPracticeNeedsApprovedProof() {
  const cards = [
    {
      title: "Operator pattern",
      description:
        "Service problem ⇀ operational architecture ⇀ approved result.",
    },
    {
      title: "Interaction pattern",
      description:
        "Communication context ⇀ controls ⇀ authoritative session outcome.",
    },
    {
      title: "Media pattern",
      description:
        "Event/delivery problem ⇀ provider pipeline ⇀ approved evidence.",
    },
    {
      title: "Evidence pending",
      description:
        "No invented customers, volumes, quality gains, footprint or rights.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Technology in practice needs approved proof
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            No deployment records or outcome metrics were supplied.
          </p>
        </div>

        {/* Content Layout: 2x2 Grid + Isometric Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between text-left transition-all hover:bg-white/[0.15]"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Isometric Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden">
              <img
                src="/comm/21.png"
                alt="Technology in practice architecture and system verification diagram"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
