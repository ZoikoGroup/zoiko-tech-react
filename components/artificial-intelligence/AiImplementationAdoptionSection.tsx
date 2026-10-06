import React from "react";
import { ArrowRight, Clock } from "lucide-react";

interface GateStep {
  step: number;
  title: string;
  status: string;
}

const GATES: GateStep[] = [
  { step: 1, title: "Define use case", status: "Scope approved" },
  {
    step: 2,
    title: "Map sources & systems",
    status: "Architecture map approved",
  },
  {
    step: 3,
    title: "Define policy & access",
    status: "Control model approved",
  },
  {
    step: 4,
    title: "Define authority states",
    status: "State contract approved",
  },
  { step: 5, title: "Define evaluation", status: "Evaluation plan approved" },
  { step: 6, title: "Prototype", status: "Prototype reviewed" },
  { step: 7, title: "Pilot", status: "Pilot reviewed" },
  { step: 8, title: "Expand", status: "Expansion approved" },
];

interface PracticeCard {
  imageSrc: string;
  title: string;
}

const PRACTICE_CARDS: PracticeCard[] = [
  { imageSrc: "/ai/25.png", title: "Domain intelligence" },
  { imageSrc: "/ai/26.png", title: "Knowledge & research" },
  { imageSrc: "/ai/27.png", title: "Developer integration" },
  { imageSrc: "/ai/28.png", title: "Agentic handoff" },
  { imageSrc: "/ai/29.png", title: "Governance" },
];

export default function AiImplementationAdoptionSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            IMPLEMENTATION & ADOPTION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-8">
            Eight gates from use case to expansion
          </h2>

          {/* Gates Progress Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full mb-12 relative">
            {GATES.map((gate) => (
              <div
                key={gate.step}
                className="flex flex-col items-start relative"
              >
                <div className="w-7 h-7 rounded-full bg-[#2b7a78] text-white font-mono font-bold text-xs flex items-center justify-center mb-3 shadow-md z-10">
                  {gate.step}
                </div>
                <h4 className="text-xs font-extrabold text-[#0B132B] mb-1">
                  {gate.title}
                </h4>
                <div className="flex items-center text-[10px] text-gray-500 font-medium">
                  <span className="text-[#2b7a78] font-bold mr-1">P</span>{" "}
                  {gate.status}
                </div>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Discuss rollout <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200/80 my-16"></div>

        {/* Bottom Technology in Practice Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full mb-12 gap-6">
          <div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
              TECHNOLOGY IN PRACTICE
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B132B] tracking-tight">
              Evidence first, and only approved evidence
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-xs text-gray-600 leading-relaxed">
              Case studies are in review. No accuracy, productivity,
              cost-saving, benchmark, adoption or automation-rate claims until
              approved. See Zoiko Research for public papers.
            </p>
          </div>
        </div>

        {/* 5 Cards Grid with Images (/ai/25.png to /ai/29.png) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {PRACTICE_CARDS.map((card, index) => {
            // Map image indexes dynamically starting from 25
            const imageIndex = 25 + index;
            const imgSrc = `/ai/${imageIndex}.png`;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden flex flex-col justify-between h-[320px] relative group"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={imgSrc}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
                </div>

                <div className="relative z-10 p-4">
                  <span className="bg-amber-100/90 text-amber-900 border border-amber-300/50 text-[9px] font-semibold px-2 py-0.5 rounded-full inline-flex items-center space-x-1">
                    <Clock className="w-2.5 h-2.5 mr-1" /> Evidence
                    pending
                  </span>
                </div>

                <div className="relative z-10 p-4">
                  <div className="text-[9px] font-mono tracking-wider text-gray-300 uppercase mb-1">
                    CASE STUDY · IN REVIEW
                  </div>
                  <h4 className="text-sm font-extrabold text-white">
                    {card.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
