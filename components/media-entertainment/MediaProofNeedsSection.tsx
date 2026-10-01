import React from "react";
import { FileText, ExternalLink } from "lucide-react";

export default function MediaProofNeedsSection() {
  const cards = [
    {
      title: "Live-event operations",
      description:
        "Experience problem — delivery architecture — operational model — approved result.",
      link: "Discuss the architecture ↗",
    },
    {
      title: "Streaming & replay",
      description:
        "Delivery problem — integration pattern — evidenced operational outcome.",
      link: "Discuss the architecture ↗",
    },
    {
      title: "Audience & community",
      description:
        "Community objective — correctly attributed platform — approved result.",
      link: "Discuss the architecture ↗",
    },
    {
      title: "Reliability & recovery",
      description:
        "Operational risk — observability and recovery pattern — approved outcome.",
      link: "Discuss the architecture ↗",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Container */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
          Media proof needs <br />
          operational evidence and permission.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl">
          Approved customer stories, event outcomes and performance metrics were
          not supplied. Use the architecture as the starting point.
        </p>

        {/* Grid Layout: 3 Columns for Cards / Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top Cards Section (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A2528]/80 border border-teal-800/40 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-xl"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-700/40 flex items-center justify-center mb-5 shadow-inner text-teal-300">
                    <FileText className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Link */}
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Isometric Graphic Illustration (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center relative z-10 pt-8 lg:pt-0">
            <div className="w-full max-w-md aspect-square flex items-center justify-center">
              <img
                src="/media/24.png"
                alt="Media Architecture and Operational Evidence Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
