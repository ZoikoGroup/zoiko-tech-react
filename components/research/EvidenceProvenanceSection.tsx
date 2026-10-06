import React from "react";

const provenanceCards = [
  {
    title: "Canonical / owner",
    description:
      "One authoritative destination and approved public accountable owner.",
  },
  {
    title: "Version and dates",
    description:
      "Do not conflate published, updated, reviewed and effective dates.",
  },
  {
    title: "Corrections",
    description:
      "Preserve supersession and historical metadata rather than silently rewriting it.",
  },
  {
    title: "Citations",
    description:
      "Copy only supported metadata; no invented DOI, journal, volume, issue or affiliation.",
  },
  {
    title: "Downloads and rights",
    description:
      "Exact approved file and current version; honor licensing, attribution and partner restrictions.",
  },
];

export default function EvidenceProvenanceSection() {
  return (
    <section
      id="provenance"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(136deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Evidence &amp; provenance
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            One canonical source, exact dates and traceable history.
          </p>
        </div>

        {/* 2-Column Cards Grid (matching Figma's 576px wide cards) */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {provenanceCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[20px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528]/20 backdrop-blur-sm flex flex-col gap-2.5"
            >
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white">
                {card.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                {card.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
