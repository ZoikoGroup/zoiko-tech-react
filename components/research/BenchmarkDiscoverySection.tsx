import React from "react";
import Image from "next/image";

const benchmarkCards = [
  {
    title: "Question / task",
    description: "Exact scope of the evaluation.",
    image: "/research/benchmark-question-task.png",
  },
  {
    title: "Method / conditions",
    description: "Required preview before result prominence.",
    image: "/research/benchmark-method-conditions.png",
  },
  {
    title: "Metric",
    description: "Approved name and definition; exact units and context.",
    image: "/research/benchmark-metric.png",
  },
  {
    title: "Comparison / baseline",
    description: "Only a comparator actually defined by the artifact.",
    image: "/research/benchmark-comparison-baseline.png",
  },
  {
    title: "Result",
    description:
      "Optional, never a naked score. Preserve date, version, conditions and limitations.",
    image: "/research/benchmark-result.png",
  },
  {
    title: "Safety",
    description:
      "No generated #1, best, leading or state-of-the-art claims. No unrelated benchmark leaderboard.",
    image: "/research/benchmark-safety.png",
  },
];

export default function BenchmarkDiscoverySection() {
  return (
    <section
      id="benchmarks"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Benchmark discovery
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            A score needs method, conditions and limits.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benchmarkCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-5 bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col gap-4"
            >
              <div className="relative w-full h-[180px] rounded-[12px] overflow-hidden">
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
