import React from "react";

export default function LiveFoundations() {
  const cards = [
    {
      image: "/prof/54.png",
      title: "ZoikoTime · Live",
      description:
        "Workforce assurance, verification and performance intelligence.",
    },
    {
      image: "/prof/55.png",
      title: "Zoiko HR · Live",
      description: "Global human resources and workforce operations.",
    },
    {
      image: "/prof/56.png",
      title: "Zoiko Payroll · Live",
      description: "Approved payroll operations and workforce payments.",
    },
    {
      image: "/prof/57.png",
      title: "Zoiko Billing · Live",
      description: "Billing, invoicing, usage and revenue operations.",
    },
    {
      image: "/prof/58.png",
      title: "Zoiko Sema · Live",
      description: "Governed communications at approved product scope.",
    },
    {
      image: "/prof/59.png",
      title: "Zoikologia · Finish",
      description:
        "Professional Intelligence evidence candidate; directory only when public-approved.",
    },
    {
      image: "/prof/60.png",
      title: "ZoikoTax / Zoikorum / Assure Build",
      description:
        "Specialist evidence candidates; public exposure depends on approved readiness.",
    },
    {
      image: "/prof/61.png",
      title: "Kriton / Massarius",
      description:
        "Architecture references; exact capability and maturity details were not supplied.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Live foundations. <br />
            Readiness-gated specialist evidence.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Product state and professional authority remain visible.
          </p>
        </div>

        {/* Grid Layout (3 columns on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F8F8] border border-[#DAE8E8] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-gray-50 overflow-hidden p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
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
