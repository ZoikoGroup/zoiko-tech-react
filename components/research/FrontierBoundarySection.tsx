import React from "react";
import Image from "next/image";

const frontierItems = [
  {
    title: "Exploratory work",
    description:
      "Hypotheses, early work and prototypes remain explicitly exploratory.",
  },
  {
    title: "Formal graduation",
    description:
      "Commercial maturity requires portfolio/product governance; visibility is not graduation.",
  },
  {
    title: "Discovery",
    description:
      "Do not blend Frontier exploration into default current published research.",
  },
  {
    title: "Prototype destination",
    description:
      "No guessed Frontier route or artificial program inventory.",
  },
];

export default function FrontierBoundarySection() {
  return (
    <section
      id="frontier"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(146deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 47%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Frontier boundary
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Exploration has its own portfolio state.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-12">
          {frontierItems.map((item, idx) => (
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

        {/* Illustration Boundary */}
        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/research/frontier-boundary-illustration.png"
            alt="Frontier Boundary Illustration"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
