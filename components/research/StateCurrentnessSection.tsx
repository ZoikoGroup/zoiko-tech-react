import React from "react";

const stateItems = [
  {
    title: "Published / current",
    description: "Approved public current version with labeled date.",
  },
  {
    title: "Preliminary / public",
    description: "Public but not final; prominent limitations.",
  },
  {
    title: "Under review",
    description:
      "Public only when disclosure is allowed; no definitive conclusion framing.",
  },
  {
    title: "Corrected",
    description: "Visible correction and version-history route.",
  },
  {
    title: "Superseded",
    description:
      "Historical record de-emphasized; current authoritative version prominent.",
  },
  {
    title: "Withdrawn",
    description: "Not current research; no recommendation/featured placement.",
  },
  {
    title: "Exploratory",
    description:
      "Early research separate from default current-publication results.",
  },
  {
    title: "Unknown / stale",
    description: "No current badge; explain unverifiable state and recovery.",
  },
];

export default function StateCurrentnessSection() {
  return (
    <section
      id="currentness"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Research state &amp; currentness
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Every version should tell the reader how to rely on it.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {stateItems.map((item, idx) => (
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
