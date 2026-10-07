import React from "react";
import Image from "next/image";

const trustCards = [
  {
    title: "Trust questions",
    description:
      "Security, privacy, compliance, accessibility and operational assurance follow authoritative Trust sources.",
  },
  {
    title: "Responsible AI",
    description:
      "Approved disclosures, evaluation and accountable research use; no invented model claims.",
  },
  {
    title: "Procurement",
    description:
      "Research does not create certification, contractual commitments or current product availability.",
  },
];

export default function TrustResponsibleAiSection() {
  return (
    <section
      id="trust"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(144deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 47%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Trust &amp; Responsible AI
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Research evidence and assurance commitments stay distinct.
          </p>
        </div>

        {/* 3 Cards Row */}
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[10px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528]/40 backdrop-blur-sm flex flex-col gap-2"
            >
              <dt className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white">
                {card.title}
              </dt>
              <dd className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                {card.description}
              </dd>
            </div>
          ))}
        </dl>

        {/* Illustration Banner */}
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-[10px] overflow-hidden shadow-2xl">
          <Image
            src="/research/trust-responsible-ai-illustration.png"
            alt="Trust and Responsible AI Illustration"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
