import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EvidenceCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[#F1F8F9] border border-[#d3e4e6] rounded-xl overflow-hidden flex flex-col transition-all duration-300">
      <div className="w-full h-56 sm:h-64 overflow-hidden relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#DEEFEF] text-[#247780] flex items-center justify-center shadow-sm">
            {icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#112223] tracking-tight">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ReadinessGatedPlatformEvidence() {
  const cards = [
    {
      imageSrc: "/security/18.png",
      imageAlt: "Zoiko Shield readiness and public-approved directory control",
      icon: <Network className="w-5 h-5" />,
      title: "Zoiko Shield",
      description: "Finish / directory only when public-approved.",
    },
    {
      imageSrc: "/security/19.png",
      imageAlt: "Zoiko iD and Zoiko Access source-gated launch scope",
      icon: <User className="w-5 h-5" />,
      title: "Zoiko iD / Zoiko Access",
      description: "Build; exact methods and launch scope source-gated.",
    },
    {
      imageSrc: "/security/20.png",
      imageAlt:
        "Zoiko Assure and ZoikoTax build status with no filing coverage inferred",
      icon: <FileText className="w-5 h-5" />,
      title: "Zoiko Assure / ZoikoTax",
      description:
        "Build; no filing coverage or compliance guarantee inferred.",
    },
    {
      imageSrc: "/security/21.png",
      imageAlt:
        "Public exposure current maturity owner source and destination approval",
      icon: <Database className="w-5 h-5" />,
      title: "Public exposure",
      description:
        "Current maturity, owner, source and destination approval required.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112223] tracking-tight mb-3">
            Readiness-gated platform evidence
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            No named candidate is promoted as generally available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <EvidenceCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
