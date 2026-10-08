import React from "react";
import { Database, FileText, Network, User } from "lucide-react";

export default function MediaRightsAndEntitlement() {
  const cards = [
    {
      icon: Database,
      title: "Limits",
      description:
        "No invented DRM, licensing, rights platform or global distribution promise.",
    },
    {
      icon: FileText,
      title: "Provider",
      description:
        "Delivery capability is separate from permission to distribute.",
    },
    {
      icon: Network,
      title: "Access",
      description: "Approved participant/media access rules.",
    },
    {
      icon: User,
      title: "Rights ownership",
      description:
        "Content and broadcast rights remain with responsible rights holder.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Media rights & entitlement
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Infrastructure does not create distribution rights.
          </p>
        </div>

        {/* Content Layout: Isometric Graphic + 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Isometric Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden">
              <img
                src="/comm/15.png"
                alt="Media rights and entitlement architecture diagram illustrating context, authority, intent, state, and commercial boundaries"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{ backgroundColor: "#F1F8F9" }}
                  className="border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
                >
                  <div>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
