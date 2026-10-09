import React from "react";

export default function CloudUnderstandingRoutes() {
  const routes = [
    {
      image: "/cloud/2.png",
      title: "Cloud foundation",
      description:
        "Understand the infrastructure foundation supporting Zoiko platforms and approved workloads.",
      linkText: "Zoiko Cloud / Architecture",
    },
    {
      image: "/cloud/3.png",
      title: "Developer integration",
      description:
        "Build through APIs, SDKs, webhooks, model interfaces and authentication.",
      linkText: "Developer Platform",
    },
    {
      image: "/cloud/4.png",
      title: "Control & evidence",
      description:
        "Understand shared control, evidence and transaction infrastructure.",
      linkText: "CoreX / Trust",
    },
    {
      image: "/cloud/5.png",
      title: "Identity & security",
      description:
        "Review authentication, access, security and governance foundations.",
      linkText: "Identity & Access / Cybersecurity",
    },
    {
      image: "/cloud/6.png",
      title: "Regulated workload context",
      description:
        "Evaluate deployment, jurisdiction, evidence and control requirements.",
      linkText: "Regulatory & Compliance / Trust",
    },
    {
      image: "/cloud/7.png",
      title: "Modernization & integration",
      description:
        "Connect existing systems and digital services without replacing every system of record.",
      linkText: "Modernization & Integration",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            What do you need to understand first?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Six routes. Pick the closest one.
          </p>
        </div>

        {/* Cards Grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between text-left transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                    {route.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {route.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                  {route.linkText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
