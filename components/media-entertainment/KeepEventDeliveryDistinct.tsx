import React from "react";
import { User, FileText, Network } from "lucide-react";

export default function KeepEventDeliveryDistinct() {
  const cards = [
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Operator collaboration",
      description: "Approved communications tools at relevant business scope.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Audience communication",
      description:
        "Supported customer or participant channels with appropriate permissions.",
    },
    {
      icon: <Network className="w-5 h-5 text-teal-300" />,
      title: "Incident communication",
      description:
        "Responsible service status and support routes for customer-impacting states.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          Keep event delivery and <br />
          operating communications distinct.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl">
          Use supported channels for production teams, audiences and service
          updates.
        </p>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 md:p-8 flex flex-col justify-start backdrop-blur-sm shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Control Room Image Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/media/18.png"
            alt="Event Delivery and Operating Communications Control Room"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
