import React from "react";

const intentItems = [
  {
    title: "Find a technical paper",
    description: "Architecture or engineering depth; keep topic context.",
  },
  {
    title: "Review a benchmark",
    description:
      "Understand what was measured, method and conditions before interpreting a result.",
  },
  {
    title: "Browse a topic",
    description: "Use approved registry facets, not a speculative topic inventory.",
  },
  {
    title: "Validate a claim",
    description: "Find the canonical artifact through public-safe metadata.",
  },
  {
    title: "Find implementation material",
    description:
      "Released code, documentation and integration guidance belong in Developer Resources.",
  },
  {
    title: "Understand ownership",
    description:
      "Zoiko Research owns corporate research identity and technical authority.",
  },
  {
    title: "Explore early work",
    description: "Frontier Technologies retains exploratory portfolio state.",
  },
  {
    title: "Discuss collaboration",
    description:
      "Preserve institutional research intent without implying a partnership.",
  },
];

export default function IntentRouterSection() {
  return (
    <section id="intent" className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Research intent router
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Choose the question you need to answer.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {intentItems.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[rgba(131,183,191,0.33)] py-6 flex flex-col gap-2"
            >
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-[#102D2F]">
                {item.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#56747A]">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
