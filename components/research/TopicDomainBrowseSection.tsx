import React from "react";
import Image from "next/image";

const topicCards = [
  {
    title: "Topic facets",
    description:
      "Published registry topic taxonomy only. No SEO-seeded speculative inventory.",
    image: "/research/topics-facets.png",
  },
  {
    title: "Cross-filtering",
    description:
      "Visible selected facets, matching count and stable shareable state where approved.",
    image: "/research/topics-cross-filtering.png",
  },
  {
    title: "No matches",
    description:
      "No public research matches the selected filters; clear/reset and recovery routes.",
    image: "/research/topics-no-matches.png",
  },
  {
    title: "Current prototype",
    description:
      "No public topic registry was supplied, so no invented topic catalog or empty filter values are displayed.",
    image: "/research/topics-prototype.png",
  },
];

export default function TopicDomainBrowseSection() {
  return (
    <section
      id="topics"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Topic &amp; domain browse
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Topics are governed discovery metadata.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topicCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-4 sm:p-5 bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col gap-4"
            >
              <div className="relative w-full h-[160px] rounded-[8px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-[#102D2F]">
                {card.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#56747A]">
                {card.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
