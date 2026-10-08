import React from "react";
import { MessageSquare, PhoneCall, Users, ShieldCheck } from "lucide-react";

export default function RealTimeComms() {
  const cards = [
    {
      image: "/comm/7.png",
      icon: MessageSquare,
      title: "Messaging",
      description:
        "Accepted, sent and delivered remain distinct source-owned states.",
    },
    {
      image: "/comm/8.png",
      icon: PhoneCall,
      title: "Calling",
      description:
        "Initiated, connected, ended and failed require authoritative session data.",
    },
    {
      image: "/comm/9.png",
      icon: Users,
      title: "Meetings",
      description:
        "Participant access and session lifecycle only where documented.",
    },
    {
      image: "/comm/10.png",
      icon: ShieldCheck,
      title: "Enterprise controls",
      description:
        "Product-specific permissions, privacy and evidence; do not generalize Sema administration.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Centered) */}
        <div className="text-start mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Real-Time Communications
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Messaging, calling and meetings at supported scope.
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
                <div className="w-full h-44 bg-gray-100 overflow-hidden border-b border-gray-200/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container (Centered alignment) */}
                <div className="p-6 flex flex-col flex-grow items-center justify-between">
                  <div className="w-full flex flex-col items-center">
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
