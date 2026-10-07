import React from "react";

const contractItems = [
  {
    title: "Identity",
    description: "Approved title, type and public-safe owner/author.",
  },
  {
    title: "Purpose",
    description:
      "Approved abstract or summary, preserving original claim strength.",
  },
  {
    title: "State and dates",
    description:
      "Research state, exactly labeled publication/review date and version where applicable.",
  },
  {
    title: "Context",
    description:
      "Approved topic/technology relationships; source and limitations preview.",
  },
  {
    title: "Actions",
    description:
      "Canonical artifact, citation or download only when exact approved metadata and asset exist.",
  },
  {
    title: "Required fields missing",
    description:
      "Suppress the card; never guess title, source, state or publication status.",
  },
];

export default function CardContractSection() {
  return (
    <section
      id="card-contract"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Research card contract
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Enough public metadata to assess relevance and currentness.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {contractItems.map((item, idx) => (
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
