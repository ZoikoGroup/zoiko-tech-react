import React from "react";

export default function ConnectObligations() {
  const row1 = [
    {
      image: "/prof/49.png",
      title: "Authoritative source",
      description:
        "Regulation, tax rule, policy or professional standard where approved.",
    },
    {
      image: "/prof/50.png",
      title: "Applicability",
      description:
        "Jurisdiction and engagement scope with professional review.",
    },
    {
      image: "/prof/51.png",
      title: "Evidence",
      description: "Source, period, owner, freshness and review state.",
    },
  ];

  const row2 = [
    {
      image: "/prof/52.png",
      title: "Professional interpretation",
      description: "Accountable reviewer owns the judgment.",
    },
    {
      image: "/prof/53.png",
      title: "Claims hierarchy",
      description:
        "Certification or compliance language requires legally verified evidence.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Connect obligations to sources and <br />
            review.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Interpretation and sign-off remain with authorized professionals.
          </p>
        </div>

        {/* First Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {row1.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F8F8] border border-[#DAE8E8] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              <div className="w-full h-48 bg-gray-50 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
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

        {/* Second Row: 2 Columns centered or balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {row2.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F8F8] border border-[#DAE8E8] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              <div className="w-full h-48 bg-gray-50 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 max-w-80 text-xs md:text-sm leading-relaxed">
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
