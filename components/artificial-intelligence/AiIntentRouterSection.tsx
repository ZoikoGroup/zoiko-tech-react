import React from "react";
import { ArrowRight } from "lucide-react";

interface IntentCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  badge?: string;
  large?: boolean;
}

const INTENT_CARDS: IntentCard[] = [
  {
    imageSrc: "/ai/2.png",
    imageAlt: "AI architecture abstract structure",
    title: "AI architecture",
    description:
      "Understand how AI fits into our systems, data and operating model.",
    large: true,
  },
  {
    imageSrc: "/ai/3.png",
    imageAlt: "Domain-specific AI working setup",
    title: "Domain-specific AI",
    description: "Apply intelligence to a real business or industry domain.",
  },
  {
    imageSrc: "/ai/4.png",
    imageAlt: "Build and integrate futuristic sculpture",
    title: "Build & integrate",
    description: "Connect AI to products, systems and developer workflows.",
  },
  {
    imageSrc: "/ai/5.png",
    imageAlt: "Agent execution collaborative team",
    title: "Agent execution",
    description: "Move from assistance to controlled actions and agents.",
  },
  {
    imageSrc: "/ai/6.png",
    imageAlt: "Workflow orchestration team",
    title: "Workflow orchestration",
    description: "Coordinate multi-step governed work across systems.",
  },
  {
    imageSrc: "/ai/7.png",
    imageAlt: "Safety and governance team discussion",
    title: "Safety & governance",
    description:
      "Evaluate, govern and monitor AI risk and responsible deployment.",
  },
  {
    imageSrc: "/ai/8.png",
    imageAlt: "Research and technical proof books",
    title: "Research & technical proof",
    description: "Review technical papers, benchmarks or research outputs.",
  },
];

const BUILT_FOR_TAGS = [
  "CIO / CTO",
  "AI & product leaders",
  "Enterprise architects",
  "Developers",
  "Security, privacy & legal",
  "Risk & governance",
  "Operations leaders",
];

export default function AiIntentRouterSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full mb-16 gap-6">
          <div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
              AI INTENT ROUTER
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
              Where are you on your AI journey?
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs text-gray-600 leading-relaxed">
              Pick the question you are trying to answer. Each pathway goes to
              the right layer or to its own specialist technology page.
            </p>
          </div>
        </div>

        {/* Bento Grid layout with text overlaid on images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {/* Card 1: Large featured card (spans 2 rows) */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative flex flex-col justify-between md:row-span-2 min-h-[460px]">
            <div className="absolute inset-0 z-0">
              <img
                src={INTENT_CARDS[0].imageSrc}
                alt={INTENT_CARDS[0].imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00191EE8] via-[#00191E88] to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-extrabold mb-3">
                {INTENT_CARDS[0].title}
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed mb-6">
                {INTENT_CARDS[0].description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
              >
                Explore <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Cards 2 to 7 with text overlaid on images */}
          {INTENT_CARDS.slice(1).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative flex flex-col justify-between h-[240px]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00191EE8] via-[#00191E88] to-transparent"></div>
              </div>
              <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                <h3 className="text-sm font-extrabold mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed mb-3">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
                >
                  Explore <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Built For Footer Bar */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 flex flex-wrap items-center gap-4">
          <span className="text-xs font-bold text-[#0B132B] mr-2">
            Built for:
          </span>
          
          <div className="flex flex-wrap gap-2">
            {BUILT_FOR_TAGS.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
