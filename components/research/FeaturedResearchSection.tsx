import React from "react";
import Image from "next/image";

const featuredItems = [
  {
    title: "Eligibility",
    description:
      "Current, governed research artifact or major research announcement; verified publication and currentness.",
  },
  {
    title: "Required metadata",
    description:
      "Type, title, purpose, state, publication/review date, owner, source, topic and canonicalaction.",
  },
  {
    title: "Optional metadata",
    description:
      "Version, method summary, limitations and released assets only when established.",
  },
  {
    title: "Current prototype",
    description:
      "Featured research unavailable. No eligible record was supplied; no fabricated feature is displayed.",
  },
];

export default function FeaturedResearchSection() {
  return (
    <section id="featured" className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Featured research
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            One eligible artifact; no promotional carousel.
          </p>
        </div>

        {/* 2x2 Metadata Cards Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[rgba(131,183,191,0.33)] p-6 bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] flex flex-col gap-2"
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

        {/* Stock Image Banner */}
        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[408px] rounded-xl overflow-hidden shadow-[0px_12px_32px_-8px_rgba(0,0,0,0.1)]">
          <Image
            src="/research/featured-research-banner.png"
            alt="Featured Research Banner"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
