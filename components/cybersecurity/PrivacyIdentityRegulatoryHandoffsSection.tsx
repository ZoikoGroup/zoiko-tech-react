import React from "react";
import { ArrowRight } from "lucide-react";

interface NeighborColumn {
  title: string;
  imageSrc: string;
  items: {
    heading: string;
    lines: string[];
  }[];
  linkText: string;
}

const NEIGHBOR_COLUMNS: NeighborColumn[] = [
  {
    title: "Privacy",
    imageSrc: "/cyber/22.png",
    items: [
      {
        heading: "Security telemetry",
        lines: [
          "Cybersecurity: Minimum public abstraction, redacted",
          "Privacy: Purpose, notice, retention, request rights",
        ],
      },
      {
        heading: "Incident data",
        lines: [
          "Cybersecurity: No personal data or restricted evidence published",
          "Privacy: Breach and notification handling",
        ],
      },
    ],
    linkText: "Review privacy",
  },
  {
    title: "Digital Identity",
    imageSrc: "/cyber/23.png",
    items: [
      {
        heading: "Authentication",
        lines: [
          "Cybersecurity: Consumes trusted state; no methods invented",
          "Digital Identity: Owns authentication state and source",
        ],
      },
      {
        heading: "Security incident",
        lines: [
          "Cybersecurity: Owns security and resilience state",
          "Digital Identity: Identity compromise is an input, kept separate",
        ],
      },
    ],
    linkText: "Explore identity",
  },
  {
    title: "Regulatory Technology",
    imageSrc: "/cyber/24.png",
    items: [
      {
        heading: "Compliance",
        lines: [
          "Cybersecurity: Never inferred from security posture or brand",
          "Regulatory Technology: Owns regulated workflow and evidence",
        ],
      },
      {
        heading: "Retention",
        lines: [
          "Cybersecurity: No invented obligations or periods",
          "Regulatory Technology: Legal sources control requirements",
        ],
      },
    ],
    linkText: "Explore regulatory technology",
  },
];

export default function PrivacyIdentityRegulatoryHandoffsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            PRIVACY, IDENTITY & REGULATORY HANDOFFS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Three neighbors, three clear seams
          </h2>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
          {NEIGHBOR_COLUMNS.map((col, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Top Image */}
              <div className="relative w-full h-[180px]">
                <img
                  src={col.imageSrc}
                  alt={`${col.title} illustration`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <h3 className="text-white font-bold text-lg">{col.title}</h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col space-y-6 flex-grow">
                {col.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1.5">
                    <h4 className="text-xs font-bold text-[#0B132B] uppercase tracking-wide">
                      {item.heading}
                    </h4>
                    {item.lines.map((line, lineIdx) => (
                      <p
                        key={lineIdx}
                        className="text-xs text-gray-500 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 mt-auto">
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  {col.linkText} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
