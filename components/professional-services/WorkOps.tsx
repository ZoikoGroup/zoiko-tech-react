import React from "react";
import { User, Building, Database, GitBranch } from "lucide-react";

export default function WorkOps() {
  const cards = [
    {
      image: "/prof/42.png",
      icon: <User className="w-5 h-5 text-teal-700" />,
      title: "ZoikoTime / Live",
      description:
        "Workforce assurance, verification and performance intelligence. No surveillance or billable-time claim.",
    },
    {
      image: "/prof/43.png",
      icon: <Building className="w-5 h-5 text-teal-700" />,
      title: "Zoiko HR / Live",
      description:
        "Global human resources and workforce operations at approved scope.",
    },
    {
      image: "/prof/44.png",
      icon: <Database className="w-5 h-5 text-teal-700" />,
      title: "Zoiko Payroll / Live",
      description:
        "Payroll operations and workforce payments within approved country and payment scope.",
    },
    {
      image: "/prof/45.png",
      icon: <GitBranch className="w-5 h-5 text-teal-700" />,
      title: "Capacity & ownership",
      description:
        "Role, assignment and workload context only where supported.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Connect workforce context to firm <br />
            operations.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Live foundations support approved workforce, HR and payroll needs
            with privacy-respecting administration.
          </p>
        </div>

        {/* Grid Layout (3 columns on lg, asymmetrical last row or balanced grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F8F8] border border-gray-200 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-gray-50 p-4 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
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
