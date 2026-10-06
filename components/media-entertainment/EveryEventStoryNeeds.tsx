import React from "react";
import { Building, FileText, BarChart2 } from "lucide-react";

export default function EveryEventStoryNeeds() {
  const cards = [
    {
      image: "/media/25.png",
      icon: <Building className="w-5 h-5 text-teal-700" />,
      title: "Customer & event identity",
      description:
        "Legal, customer and rights-holder permissions before publication.",
    },
    {
      image: "/media/26.png",
      icon: <FileText className="w-5 h-5 text-teal-700" />,
      title: "Media assets & deployment",
      description:
        "Cleared imagery with actual platform, operator and integration scope.",
    },
    {
      image: "/media/27.png",
      icon: <BarChart2 className="w-5 h-5 text-teal-700" />,
      title: "Measured outcomes",
      description:
        "Evidence-backed results; no placeholder audience or performance metrics.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Every event story needs <br />
            cleared rights and traceable results.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Customer identity, media assets and measured outcomes require
            explicit approval.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFCFC] border border-teal-900/10 rounded-2xl flex flex-col justify-between shadow-sm overflow-hidden"
            >
              <div>
                {/* Image (Flush edges, no padding) */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-5 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
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
