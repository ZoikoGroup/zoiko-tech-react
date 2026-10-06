import React from "react";
import { Check, ArrowRight } from "lucide-react";

interface FeaturePoint {
  title: string;
  description: string;
}

const FEATURE_POINTS: FeaturePoint[] = [
  {
    title: "Domain context",
    description: "Real terminology, policies and systems, not generic prompts.",
  },
  {
    title: "Task boundary",
    description:
      "Classify, extract, summarize, compare, draft or recommend, where supported.",
  },
  {
    title: "Source scope",
    description:
      "Which approved sources the AI may use, and what is out of scope.",
  },
  {
    title: "Human authority",
    description:
      "Material judgment stays with the authorized person or system.",
  },
  {
    title: "Feedback",
    description:
      "Reviewed corrections under governance rules. No implied automatic training.",
  },
  {
    title: "Evidence",
    description: "Source, output state, reviewer, handoff and limitations.",
  },
];

interface LeftImageCard {
  src: string;
  alt: string;
  label: string;
}

const LEFT_COLUMN_IMAGES: LeftImageCard[] = [
  {
    src: "/ai/10.png",
    alt: "Finance sector visual",
    label: "Finance",
  },
  {
    src: "/ai/15.png",
    alt: "Healthcare access sector visual",
    label: "Healthcare access",
  },
];

const RIGHT_COLUMN_IMAGES: LeftImageCard[] = [
  {
    src: "/ai/11.png",
    alt: "Workforce sector visual",
    label: "Workforce",
  },
  {
    src: "/ai/12.png",
    alt: "Telecom and communications visual",
    label: "Telecom & communications",
  },
  {
    src: "/ai/12.png",
    alt: "Commerce visual",
    label: "Commerce",
  },
  {
    src: "/ai/14.png",
    alt: "Mobility visual",
    label: "Mobility",
  },
];

export default function DomainSpecificAiSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Two image columns */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {/* Column 1: 2 tall items */}
          <div className="flex flex-col space-y-4">
            {LEFT_COLUMN_IMAGES.map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-xl h-[280px] bg-white border border-gray-100"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-xs">
                    {item.label}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: 4 smaller items */}
          <div className="flex flex-col space-y-4">
            {RIGHT_COLUMN_IMAGES.map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-xl h-[130px] bg-white border border-gray-100"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-xs">
                    {item.label}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content & Feature Check List */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            DOMAIN-SPECIFIC AI
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Specialized intelligence for the domain you actually run
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-8">
            Intelligence designed around real operating domains: their language,
            sources, policies and the people accountable for decisions.
          </p>

          {/* Feature List with Checkmarks */}
          <div className="w-full space-y-4 mb-8 border-t border-b border-gray-200/60 py-6">
            {FEATURE_POINTS.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#2b7a78]/10 text-[#2b7a78] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-[#0B132B] text-xs mr-1.5">
                    {point.title}:
                  </span>
                  
                  <span className="text-gray-600 text-xs">
                    {point.description}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-500 italic mb-6 leading-relaxed">
            "Domain-specific" never implies legal, medical, financial, tax,
            employment or security decision authority.
          </p>

          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
            >
              Explore domain AI <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
