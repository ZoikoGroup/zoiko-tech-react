import React from "react";

const stateEdgeCases = [
  {
    title: "Default / no matches",
    description:
      "Eligible current results versus no public research matching selected filters.",
  },
  {
    title: "Empty / unavailable",
    description:
      "Verified empty catalog versus registry failure. This prototype is registry-unavailable.",
  },
  {
    title: "Stale / partial",
    description:
      "Visible freshness caution; suppress current/featured labels and incomplete required records.",
  },
  {
    title: "Historical / restricted",
    description:
      "Superseded and withdrawn banners; public-safe restricted metadata only.",
  },
  {
    title: "Broken route",
    description:
      "Explain unavailable artifact; never silently redirect to a generic homepage.",
  },
  {
    title: "Mobile / no JavaScript",
    description:
      "Accessible apply/clear filters where real metadata exists; core listings remain readable.",
  },
];

export default function StatesEdgeCasesSection() {
  return (
    <section
      id="recovery"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            States &amp; edge cases
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            Recover clearly; fail closed on missing evidence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {stateEdgeCases.map((item, idx) => (
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
