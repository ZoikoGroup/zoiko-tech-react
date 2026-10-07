import React from "react";

export default function StatusEmbedsAndWidgets() {
  const cards = [
    {
      image: "/status/15.png",
      title: "Trust Center",
      description:
        "Security, privacy, compliance, accessibility and resilience evidence.",
    },
    {
      image: "/status/16.png",
      title: "Responsible Disclosure / Security",
      description:
        "Route vulnerability and security reporting, and approved security disclosures.",
    },
    {
      image: "/status/17.png",
      title: "Help & Support",
      description: "Account and workflow troubleshooting and case creation.",
    },
    {
      image: "/status/18.png",
      title: "Documentation",
      description:
        "Product behavior, recovery instructions and known workflows where approved.",
    },
    {
      image: "/status/19.png",
      title: "Developer Resources",
      description:
        "APIs, SDKs, integration status context and developer support.",
    },
    {
      image: "/status/20.png",
      title: "Release notes / changelog",
      description: "Explains shipped product changes.",
    },
    {
      image: "/status/21.png",
      title: "Product / Technology pages",
      description: "May link to Status for availability concerns.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Trust, support, documentation and developer boundaries
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Where Status ends and the next destination begins.
          </p>
        </div>

        {/* Grid Layout (4 columns for optimal display) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              {/* Image Container */}
              <div className="w-full h-36 bg-gray-100 overflow-hidden border-b border-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
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
