import React from "react";

export default function MediaJourneyLayers() {
  const layers = [
    {
      level: "L1",
      title: "Content / event source",
      description:
        "Live event, recorded content or digital experience; authoritative source metadata.",
      question: "What is delivered?",
    },
    {
      level: "L2",
      title: "Preparation / production",
      description: "Scheduled, configured and ready states at supported scope.",
      question: "Is it ready?",
    },
    {
      level: "L3",
      title: "Publish / live control",
      description:
        "Authorized start, publish and stop controls only where supported.",
      question: "Who can put it live?",
    },
    {
      level: "L4",
      title: "Delivery / streaming",
      description: "Approved live, delivery and replay architecture.",
      question: "How is it delivered?",
    },
    {
      level: "L5",
      title: "Audience / experience",
      description:
        "Viewer, participant, community or digital destination context.",
      question: "Where is it consumed?",
    },
    {
      level: "L6",
      title: "Shared controls",
      description:
        "Identity, security, communications, interfaces and observability.",
      question: "How is it controlled?",
    },
    {
      level: "L7",
      title: "Operations / evidence",
      description:
        "Status, incidents, post-event availability and retained evidence.",
      question: "Can it be reviewed?",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            One media journey. <br />
            Seven operating layers.
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Connect source, production, delivery and experience through shared
            controls and authoritative state.
          </p>
        </div>

        {/* Layers List */}
        <div className="flex flex-col gap-4">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-[#F4F8F8] border border-teal-900/10 rounded-2xl p-5 md:px-8 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-teal-700/30 transition-all shadow-sm"
            >
              {/* Left Group: Badge & Title */}
              <div className="flex items-center gap-4 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-white border border-teal-900/10 flex items-center justify-center shrink-0 shadow-sm text-xs font-semibold text-teal-800">
                  {layer.level}
                </div>
                <h3 className="text-base font-bold text-gray-900 tracking-tight">
                  {layer.title}
                </h3>
              </div>

              {/* Middle Group: Description */}
              <div className="md:w-1/2">
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {layer.description}
                </p>
              </div>

              {/* Right Group: Question */}
              <div className="md:w-auto shrink-0">
                <span className="text-xs md:text-sm font-semibold text-teal-800">
                  {layer.question}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
