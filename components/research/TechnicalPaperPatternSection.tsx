import React from "react";
import Image from "next/image";

const paperItems = [
  {
    title: "Technical problem",
    description: "Plain-language architecture or engineering question.",
  },
  {
    title: "Type",
    description:
      "Registry-defined paper type; do not invent academic or peer-reviewed status.",
  },
  {
    title: "Architecture / method",
    description: "Approved summary and full authoritative artifact.",
  },
  {
    title: "Implementation",
    description:
      "Only if documented by the paper; a design proposal is not a shipping feature.",
  },
  {
    title: "Tradeoffs / currentness",
    description:
      "Visible limits and current, corrected, superseded or withdrawn state.",
  },
  {
    title: "Released assets",
    description:
      "Code, data and files only when expressly public, versioned and rights-approved.",
  },
];

export default function TechnicalPaperPatternSection() {
  return (
    <section
      id="papers"
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
            Technical paper pattern
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Keep proposals, implementation evidence and shipped functionality
            distinct.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-12">
          {paperItems.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[rgba(131,183,191,0.33)] py-6 flex flex-col gap-2"
            >
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white">
                {item.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        {/* Banner Graphic */}
        <div className="relative w-full h-[240px] sm:h-[300px] md:h-[339px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/research/papers-pattern-banner.png"
            alt="Technical Paper Pattern Banner"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
