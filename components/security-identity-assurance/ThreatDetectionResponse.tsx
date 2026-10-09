import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ThreatCard: React.FC<CardProps> = ({
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
          <div className="w-10 h-10 rounded-lg bg-[#DEEFEF] flex items-center justify-center text-[#247780] shadow-sm flex-shrink-0">
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

export default function ThreatDetectionResponse() {
  const cards = [
    {
      imageSrc: "/security/14.png",
      imageAlt: "Signal source-backed security observation",
      icon: <Network className="w-5 h-5" />,
      title: "Signal",
      description: "Source-backed security-relevant observation.",
    },
    {
      imageSrc: "/security/15.png",
      imageAlt: "Triage context and accountable assessment",
      icon: <User className="w-5 h-5" />,
      title: "Triage",
      description: "Context and accountable assessment.",
    },
    {
      imageSrc: "/security/16.png",
      imageAlt: "Response approved owner action and explicit authority",
      icon: <FileText className="w-5 h-5" />,
      title: "Response",
      description: "Approved owner/action and explicit authority.",
    },
    {
      imageSrc: "/security/17.png",
      imageAlt: "Outcome investigation containment and recovery states",
      icon: <Database className="w-5 h-5" />,
      title: "Outcome",
      description:
        "Investigation, containment and recovery retain distinct definitive states.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112223] tracking-tight mb-3">
            Threat detection & response
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A signal is not a resolved incident.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <ThreatCard
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
