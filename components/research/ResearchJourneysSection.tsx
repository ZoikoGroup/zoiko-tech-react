import React from "react";
import Image from "next/image";

const journeyCards = [
  {
    title: "Technical evaluator",
    description:
      "Discover → state/method/limits → canonical artifact → related technology.",
    image: "/research/journey-technical-evaluator.png",
  },
  {
    title: "Benchmark reviewer",
    description:
      "Question → conditions → limitations/version → approved canonical link.",
    image: "/research/journey-benchmark-reviewer.png",
  },
  {
    title: "Developer",
    description: "Artifact → actual released assets → Developer Resources.",
    image: "/research/journey-developer.png",
  },
  {
    title: "Procurement / risk",
    description:
      "Currentness/provenance → Zoiko Research authority → relevant Trust evidence.",
    image: "/research/journey-procurement-risk.png",
  },
  {
    title: "Analyst / media",
    description:
      "Exact source → correction/current state → supported citation/link.",
    image: "/research/journey-analyst-media.png",
  },
  {
    title: "Institutional collaborator",
    description:
      "Research context → Zoiko Research → inquiry without implied partnership.",
    image: "/research/journey-institutional-collaborator.png",
  },
];

export default function ResearchJourneysSection() {
  return (
    <section
      id="journeys"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(137deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Research journey patterns
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Different readers need different evidence paths.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {journeyCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[16px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528] flex flex-col gap-4"
            >
              <div className="relative w-full h-[180px] rounded-[12px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white">
                {card.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                {card.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
