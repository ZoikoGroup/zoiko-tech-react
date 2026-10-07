import React from "react";
import Image from "next/image";

const row1Cards = [
  {
    title: "Search scope",
    description:
      "Public title, abstract, approved topics, public author or owner, stable identifier and related technology. Never controlled manuscript text.",
    image: "/research/pathways-search-scope.png",
  },
  {
    title: "Content type",
    description: "Technical paper; Benchmark; Other approved research output.",
    image: "/research/pathways-content-type.png",
  },
  {
    title: "Research state",
    description:
      "Current published, preliminary/public, corrected, superseded, withdrawn or exploratory only when public metadata defines the state.",
    image: "/research/pathways-research-state.png",
  },
  {
    title: "Topics and relationships",
    description:
      "Approved topics, related technology and optional industry relevance; no product-availability inference.",
    image: "/research/pathways-topics-relationships.png",
  },
];

const row2Cards = [
  {
    title: "Prototype state",
    description:
      "Research catalog unavailable: registry not connected. Search/filter controls are omitted until real public metadata exists.",
    image: "/research/pathways-prototype-state.png",
  },
  {
    title: "Dates and sort",
    description:
      "Exact publication/review metadata. Relevance, newest, recently reviewed or title A–Z. No unsupported popularity or citation sorting.",
    image: "/research/pathways-dates-sort.png",
  },
  {
    title: "Apply / clear",
    description:
      "Preserve focus; announce results; clear filters without creating duplicate indexable landing pages.",
    image: "/research/pathways-apply-clear.png",
  },
];

export default function PathwaysSection() {
  return (
    <section
      id="pathways"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(126deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Search, filter &amp; sort
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Discovery controls come from eligible public catalog records.
          </p>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[25px]">
          {row1Cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-[25px] bg-[#0A2528]/20 backdrop-blur-sm flex flex-col h-full"
            >
              <div className="relative w-full h-[140px] rounded-[8px] overflow-hidden mb-5 flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white mb-2.5">
                {card.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0] mt-auto">
                {card.description}
              </dd>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          {row2Cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-[25px] bg-[#0A2528]/20 backdrop-blur-sm flex flex-col h-full"
            >
              <div className="relative w-full h-[140px] rounded-[8px] overflow-hidden mb-5 flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white mb-2.5">
                {card.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0] mt-auto">
                {card.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
