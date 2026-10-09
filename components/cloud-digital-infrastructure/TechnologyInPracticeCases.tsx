import React from "react";

interface PracticeCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  badgeText?: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  badgeText,
}) => {
  return (
    <div className="bg-white border border-[#d3e4e6] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#112223] tracking-tight mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>
      </div>
      {badgeText && (
        <div className="px-6 pb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-[#247780] bg-[#F1F8F9] border border-[#d3e4e6]">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
};

export default function TechnologyInPracticeCases() {
  const cards = [
    {
      imageSrc: "/cloud/42.png",
      imageAlt:
        "Architecture case study scenic mountain and water landscape view",
      title: "Architecture case study",
      description:
        "Constraint or problem, deployment architecture, interfaces and controls, measurable technical or operational result, approved evidence.",
      badgeText: "Evidence pending",
    },
    {
      imageSrc: "/cloud/43.png",
      imageAlt: "Integration case study moody cloudy sky over mountains",
      title: "Integration case study",
      description:
        "Legacy or external system, API, event and auth pattern, failure and recovery, approved outcome.",
      badgeText: "Evidence pending",
    },
    {
      imageSrc: "/cloud/44.png",
      imageAlt: "Regulated-workload case study roadway through green forest",
      title: "Regulated-workload case study",
      description:
        "Specific jurisdiction, product and deployment control need, evidence and control architecture, approved result and explicit limits.",
      badgeText: "Evidence pending",
    },
    {
      imageSrc: "/cloud/45.png",
      imageAlt: "Developer case study modern architectural dome roof pattern",
      title: "Developer case study",
      description:
        "Build, test and operate workflow, documented developer interfaces, approved technical result.",
      badgeText: "Evidence pending",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Technology in practice
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Proof appears only when approved for public use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <PracticeCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
              badgeText={card.badgeText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
