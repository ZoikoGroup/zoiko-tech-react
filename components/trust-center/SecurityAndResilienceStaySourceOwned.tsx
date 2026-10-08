import React from "react";

export default function SecurityAndResilienceStaySourceOwned() {
  const cards = [
    {
      image: "/trust/5.png",
      title: "Security posture",
      description:
        "Only approved corporate/product practices; no invented SOC, security staffing or threat coverage.",
    },
    {
      image: "/trust/6.png",
      title: "Identity & testing",
      description: "No inferred protocols, penetration tests or audit results.",
    },
    {
      image: "/trust/7.png",
      title: "Resilience",
      description:
        "No fabricated uptime, RTO/RPO, topology or SLA. Status owns current incidents.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Security and resilience stay source-owned.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Summaries do not establish guarantees.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#F2F8F9] border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              {/* Image Container */}
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full p-6 rounded-2xl object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
