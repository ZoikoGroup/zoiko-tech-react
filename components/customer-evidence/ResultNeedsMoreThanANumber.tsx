import React from "react";

export default function ResultNeedsMoreThanANumber() {
  const cards = [
    {
      image: "/customer/5.png",
      title: "Value & unit",
      description:
        "Exact approved number, range or qualitative result. Preserve qualifiers such as approximately or pilot.",
    },
    {
      image: "/customer/6.png",
      title: "Baseline & period",
      description: "Comparison basis and measurement dates when material.",
    },
    {
      image: "/customer/7.png",
      title: "Population & scope",
      description: "Business unit, geography, workload or pilot population.",
    },
    {
      image: "/customer/8.png",
      title: "Method & source",
      description:
        "Customer measurement, instrumentation, joint analysis or approved third-party method.",
    },
    {
      image: "/customer/9.png",
      title: "Attribution & approval",
      description:
        "Do not imply causality beyond the evidence. Responsible approval and review control publication.",
    },
    {
      image: "/customer/10.png",
      title: "Freshness",
      description:
        "Overdue, disputed or withdrawn metrics stop rendering until re-approved.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            A result needs more than a number.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl">
            Do not promote performance without sufficient context to interpret
            it.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="border bg-[#FFFFFF09] border-teal-800/40 rounded-2xl flex flex-col justify-between backdrop-blur-sm shadow-xl overflow-hidden"
            >
              <div>
                {/* Image (Flush edges, no padding) */}
                <div className="w-full p-5 h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-100 rounded-2xl"
                  />
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
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
