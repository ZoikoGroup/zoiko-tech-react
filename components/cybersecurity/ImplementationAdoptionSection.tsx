import React from "react";
import { ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  isHighlighted: boolean;
}

interface PracticeCard {
  title: string;
  imageSrc: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Define scope",
    subtitle: "Architecture scope approved",
    isHighlighted: true,
  },
  {
    number: "02",
    title: "Map sources",
    subtitle: "Source map approved",
    isHighlighted: false,
  },
  {
    number: "03",
    title: "Define states",
    subtitle: "State model approved",
    isHighlighted: true,
  },
  {
    number: "04",
    title: "Define ownership",
    subtitle: "Responsibility model approved",
    isHighlighted: false,
  },
  {
    number: "05",
    title: "Integrate",
    subtitle: "Integration validated",
    isHighlighted: true,
  },
  {
    number: "06",
    title: "Exercise failures",
    subtitle: "Failure criteria met",
    isHighlighted: false,
  },
  {
    number: "07",
    title: "Pilot",
    subtitle: "Pilot reviewed",
    isHighlighted: true,
  },
  {
    number: "08",
    title: "Expand",
    subtitle: "Controlled expansion",
    isHighlighted: false,
  },
];

const PRACTICE_CARDS: PracticeCard[] = [
  {
    title: "Architecture example",
    imageSrc: "/cyber/27.png",
  },
  {
    title: "Operational example",
    imageSrc: "/cyber/28.png",
  },
  {
    title: "Customer evidence",
    imageSrc: "/cyber/29.png",
  },
  {
    title: "Security assessment",
    imageSrc: "/cyber/30.png",
  },
  {
    title: "Trust evidence",
    imageSrc: "/cyber/31.png",
  },
];

export default function ImplementationAdoptionSection() {
  return (
    <div className="w-full bg-white font-sans">
      {/* Top Section: Implementation & Adoption */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
              IMPLEMENTATION & ADOPTION
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
              Scope, integrate, validate, pilot, operate
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Stale signals, dependency outages, partial recovery and status
              mismatches are exercised before any pilot.
            </p>
          </div>

          {/* Steps Sequence Grid/Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 w-full mb-10">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 flex flex-col justify-between border transition-all shadow-sm ${
                  step.isHighlighted
                    ? "bg-[#D6F0EE] border-[#2b7a78]/30 shadow-md"
                    : "bg-white border-gray-100"
                }`}
              >
                <div>
                  <span className="text-xs font-bold font-mono text-[#2b7a78] block mb-1">
                    {step.number}
                  </span>
                  <h3 className="text-xs font-bold text-[#0B132B] mb-1">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[10px] text-gray-500 font-medium leading-tight mt-3">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Discuss Rollout Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
            >
              Discuss rollout <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Section: Technology in Practice */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          {/* Section Header & Disclaimer */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
                TECHNOLOGY IN PRACTICE
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
                Approved proof only
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xs text-gray-500 leading-relaxed">
                No fabricated breach or attack metrics, placeholder logos,
                "Fortune 100" claims, badge-only proof or "fully compliant"
                language.
              </p>
            </div>
          </div>

          {/* Practice Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {PRACTICE_CARDS.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container with Badge */}
                <div className="relative w-full h-[180px]">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-[#00191EB8] backdrop-blur-sm border border-[#34D4CA73] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D4CA]"></span>
                    <span>Evidence pending</span>
                  </div>
                </div>

                {/* Card Footer Title */}
                <div className="p-4 bg-white">
                  <h3 className="text-xs font-bold text-[#0B132B]">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
