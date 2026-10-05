import React from "react";

export default function KnowTheProblemFirstSection() {
  const steps = [
    {
      number: "01",
      title: "Modernize enterprise systems",
    },
    {
      number: "02",
      title: "Apply governed AI",
    },
    {
      number: "03",
      title: "Run recurring operations",
    },
    {
      number: "04",
      title: "Operate communications",
    },
    {
      number: "05",
      title: "Manage regulated workflows",
    },
    {
      number: "06",
      title: "Build and integrate",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Know the problem first? <br />
            Start with the operating need.
          </h2>
          <p className="text-gray-600 text-xs md:text-sm max-w-2xl">
            Sector examples are discovery aids, not claims of deployment,
            certification or support for every scenario.
          </p>
        </div>

        {/* Two-Column Layout: Left Numbered List vs Right Flush Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Numbered List & CTA (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col border-t border-gray-200 mb-8">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-5 border-b border-gray-200 group transition-colors hover:bg-gray-50/50 px-2 rounded-lg"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs md:text-sm font-mono text-gray-400 font-semibold w-6">
                      {item.number}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-teal-800 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button className="bg-[#247780] hover:bg-[#1d636b] text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-md">
                Discuss your operating need
              </button>
            </div>
          </div>

          {/* Right Column: Flush Image (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="/industry/22.png"
                alt="Team presenting operational needs on a digital interactive screen"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
