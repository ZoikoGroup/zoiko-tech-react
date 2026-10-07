import React from "react";
import Image from "next/image";

const developerItems = [
  {
    title: "Released implementation",
    description:
      "Code, datasets, docs, APIs and SDKs only when expressly released with rights and versioning.",
  },
  {
    title: "Developer Resources",
    description:
      "Authoritative implementation and integration guidance stays in developer destinations.",
  },
  {
    title: "No inferred capability",
    description:
      "A related paper does not establish an endpoint, SDK, sandbox or generally available feature.",
  },
];

export default function DeveloperHandoffSection() {
  return (
    <section
      id="developers"
      className="w-full bg-white text-[#102D2F] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-[#102D2F] mb-3">
            Developer handoff
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            A paper does not release a repository, dataset or API.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Items Column */}
          <dl className="lg:col-span-6 flex flex-col">
            {developerItems.map((item, idx) => (
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

          {/* Right Image Graphic */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full aspect-[659/494] max-w-[659px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/research/developer-handoff-illustration.png"
                alt="Developer Handoff Graphic"
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
