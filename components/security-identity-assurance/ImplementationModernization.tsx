import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ImplementationCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[#F1F8F9] border border-[#247780] border-t-3 border-t-[#247780] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-10 h-10 rounded-xl bg-[#DEEFEF] text-[#247780] flex items-center justify-center mb-6 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#112223] tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ImplementationModernization() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Map",
      description: "Actors, resources, sources and definitive states.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Define",
      description: "Policy, evidence and approved exceptions.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Validate / pilot",
      description: "Denied, missing, stale, failed and partial states.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Expand",
      description:
        "Only after security, capability, evidence and support readiness approval.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Implementation & modernization
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Scope and verify control authority before expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <ImplementationCard
              key={index}
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
