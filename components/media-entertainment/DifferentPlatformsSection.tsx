import React from "react";
import { ExternalLink } from "lucide-react";

export default function DifferentPlatformsSection() {
  const platforms = [
    {
      image: "/media/20.png",
      name: "ZoikoStream Live Events",
      description: "Commercial live-event broadcasting technology.",
      wireframeState: "Live",
      scopeBoundary:
        "Current live-event evidence within approved product scope.",
      currentEvidence: "Confirmation required",
      linkText: "Request platform evidence ↗",
    },
    {
      image: "/media/21.png",
      name: "ZoikoStream",
      description: "Media & Streaming platform evidence.",
      wireframeState: "Finish",
      scopeBoundary: "Direct exposure only when public-approved.",
      currentEvidence: "Confirmation required",
      linkText: "Request platform evidence ↗",
    },
    {
      image: "/media/22.png",
      name: "Zoiko Social",
      description: "Social and community experience.",
      wireframeState: "Group-attributed",
      scopeBoundary:
        "Zoiko Media Corp. platform; retain parent / operator attribution.",
      currentEvidence: "Confirmation required",
      linkText: "Request platform evidence ↗",
    },
    {
      image: "/media/29.png",
      name: "Media & Streaming",
      description:
        "Live events, streaming and programmable media infrastructure.",
      wireframeState: "Specialist solution framing",
      scopeBoundary: "Exact features require product and developer evidence.",
      currentEvidence: "Confirmation required",
      linkText: "Request platform evidence ↗",
    },
    {
      image: "/media/23.png",
      name: "Streaming Infrastructure",
      description: "Live events, delivery, replay and media services.",
      wireframeState: "Architecture framing",
      scopeBoundary: "Technical delivery capabilities require documentation.",
      currentEvidence: "Confirmation required",
      linkText: "Request platform evidence ↗",
    },
  ];

  // First 3 items go in a 3-column row
  const firstRow = platforms.slice(0, 3);
  // Last 2 items go in a 2-column row where each card takes 50% width
  const secondRow = platforms.slice(3, 5);

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Different platforms. <br />
            Explicit states and ownership.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Descriptors and states below reflect the supplied wireframe. Current
            operator, public destinations and feature scope must be confirmed.
          </p>
        </div>

        {/* First Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFCFC] border border-teal-900/10 rounded-2xl flex flex-col justify-between shadow-sm overflow-hidden"
            >
              <div>
                {/* Platform Image (No padding, flush edges) */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  {/* Platform Name & Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specs list */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-gray-100 mb-6">
                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-0.5">
                        Wireframe state / treatment
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {item.wireframeState}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-0.5">
                        Scope / ownership boundary
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {item.scopeBoundary}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-0.5">
                        Current evidence
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {item.currentEvidence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: Exactly 2 Columns (50% width each) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondRow.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFCFC] border border-teal-900/10 rounded-2xl flex flex-col justify-between shadow-sm overflow-hidden"
            >
              <div>
                {/* Platform Image (No padding, flush edges) */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  {/* Platform Name & Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specs list */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-gray-100 mb-6">
                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-0.5">
                        Wireframe state / treatment
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {item.wireframeState}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-0.5">
                        Scope / ownership boundary
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {item.scopeBoundary}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-0.5">
                        Current evidence
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {item.currentEvidence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
