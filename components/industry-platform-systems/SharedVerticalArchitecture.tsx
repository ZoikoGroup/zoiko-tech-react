import React from "react";

export default function SharedVerticalArchitecture() {
  const cards = [
    {
      title: "Actor / jurisdiction",
      description: "Approved role, operating entity and policy scope.",
    },
    {
      title: "Domain records / system",
      description: "Actual source of definitive business state.",
    },
    {
      title: "Control / integration",
      description:
        "Identity, approval, supported interfaces and system handoffs.",
    },
    {
      title: "Evidence / operation",
      description: "Trace, unknown/partial state and accountable recovery.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Shared vertical architecture
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Reusable foundations preserve domain-specific authoritative states.
          </p>
        </div>

        {/* Content Grid: Left 2x2 Cards, Right Graphic (/ind/2.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          {/* Left: 2x2 Grid of Cards (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cards.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#F1F8F9" }}
                className="border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-left transition-all hover:shadow-md"
              >
                <div className="w-full flex flex-col items-start">
                  <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Isometric Architecture Illustration (5 Columns) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src="/ind/2.png"
                alt="Shared vertical architecture isometric nodes showing actor jurisdiction, domain records, control integration and evidence operation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
