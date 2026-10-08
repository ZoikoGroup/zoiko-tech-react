import React from "react";
import { FileText, Database, ShieldCheck } from "lucide-react";

export default function ControlsAlignmentAndAssurance() {
  const cards = [
    {
      image: "/trust/9.png",
      icon: FileText,
      title: "Control architecture",
      description: "Approved controls, sources and review state.",
    },
    {
      image: "/trust/10.png",
      icon: Database,
      title: "Framework mapping",
      description:
        "Documented method, owner, version and scope; not certification.",
    },
    {
      image: "/trust/11.png",
      icon: ShieldCheck,
      title: "Independent assurance",
      description:
        "Exact issuer, period, applicability and evidence access only when verified.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Controls, alignment and assurance are different forms of evidence.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            No badge wall or universal compliance promise.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                {/* Image Container */}
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-teal-700 mb-4">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
