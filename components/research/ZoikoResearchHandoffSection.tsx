import React from "react";
import Image from "next/image";

const handoffCards = [
  {
    title: "Resources > Research",
    description: "Discovery, filtering and artifact routing.",
    image: "/research/zoiko-research-resources.png",
  },
  {
    title: "Technology > Zoiko Research",
    description:
      "Corporate research identity, publication/benchmark contracts and technical authority.",
    image: "/research/zoiko-research-technology.png",
  },
  {
    title: "Collaboration",
    description:
      "Route institutional inquiries with research intent; no named university endorsement or partnership inferred.",
    image: "/research/zoiko-research-collaboration.png",
  },
  {
    title: "Prototype destination",
    description:
      "Canonical production URL was not supplied. Discuss context below rather than guess a public route.",
    image: "/research/zoiko-research-prototype.png",
  },
];

export default function ZoikoResearchHandoffSection() {
  return (
    <section
      id="zoiko-research"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Zoiko Research handoff
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Corporate research identity remains a separate destination.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {handoffCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[16px] border border-[rgba(131,183,191,0.33)] p-6 bg-white shadow-[0px_8px_24px_0px_rgba(16,45,47,0.08)] flex flex-col gap-4"
            >
              <div className="relative w-full h-[176px] rounded-[12px] overflow-hidden">
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
