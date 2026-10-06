import React from "react";
import { GitBranch, ShieldCheck, Code2 } from "lucide-react";

export default function FromDiscoveryToAFocusedEvaluation() {
  const cards = [
    {
      image: "/industry/26.png",
      icon: <GitBranch className="w-5 h-5 text-teal-700" />,
      title: "Scope one workflow",
      description:
        "Identify current systems, responsible owners and the desired operating outcome.",
    },
    {
      image: "/industry/27.png",
      icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
      title: "Validate the boundaries",
      description:
        "Confirm product readiness, operator, geography, professional authority and evidence.",
    },
    {
      image: "/industry/28.png",
      icon: <Code2 className="w-5 h-5 text-teal-700" />,
      title: "Expand after review",
      description:
        "Evaluate integration, support and operational acceptance before increasing scope.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            From discovery to a focused <br />
            evaluation.
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-500 tracking-wide">
            Choose sector &rarr; identify need &rarr; review rationale &rarr;
            validate destination &rarr; scope one workflow.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full h-52 bg-gray-50 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
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
