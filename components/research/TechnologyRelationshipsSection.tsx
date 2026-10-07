import React from "react";
import Image from "next/image";

const relationshipItems = [
  {
    title: "Technology",
    description:
      "Related research only when artifact metadata supports the association.",
  },
  {
    title: "Product / platform",
    description: "Exact current public names and maturity-aware copy.",
  },
  {
    title: "Industry",
    description:
      "Optional approved relevance; no inferred deployment or market support.",
  },
  {
    title: "Relationship language",
    description:
      "Use related research, related technology or relevant to. Avoid powers, proves, validates or available in without joint artifact/product evidence.",
  },
];

export default function TechnologyRelationshipsSection() {
  return (
    <section
      id="relationships"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(141deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Technology / product relationships
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Research relevance does not establish product availability.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Metadata List */}
          <dl className="lg:col-span-6 flex flex-col">
            {relationshipItems.map((item, idx) => (
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

          {/* Right Image Graphic */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full aspect-[573/524] max-w-[573px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/research/relationships-illustration.png"
                alt="Technology Product Relationships"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
