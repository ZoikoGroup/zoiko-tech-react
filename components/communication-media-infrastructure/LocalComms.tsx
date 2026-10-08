import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function LocalComms() {
  const cards = [
    {
      image: "/comm/11.png",
      icon: Network,
      title: "Service scope",
      description:
        "Numbers, calling, video, routing and customer communication only as product-approved.",
    },
    {
      image: "/comm/12.png",
      icon: User,
      title: "Market / operator",
      description: "Actual jurisdiction and responsible provider.",
    },
    {
      image: "/comm/13.png",
      icon: FileText,
      title: "Availability",
      description: "No universal regulated telecom or emergency-calling claim.",
    },
    {
      image: "/comm/14.png",
      icon: Database,
      title: "Delivery",
      description:
        "Routing accepted is not proof of connection or final communication outcome.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Centered) */}
        <div className="text-start mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Local communications boundary
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Market, provider and number availability remain explicit.
          </p>
        </div>

        {/* 4-Column Grid Layout with Centered Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{ backgroundColor: "#F1F8F9" }}
                className="border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between text-center transition-all hover:shadow-md"
              >
                {/* Image Container */}
                <div className="w-full bg-gray-100 overflow-hidden border-b border-gray-200/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container (Centered alignment) */}
                <div className="p-6 flex flex-col flex-grow items-center justify-between">
                  <div className="w-full flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-teal-700 mb-4 shadow-sm">
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
