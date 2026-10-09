import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResilienceCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#F1F8F9] border border-[#d3e4e6] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#DEEFEF] text-[#247780] flex items-center justify-center mb-6">
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

export default function OperationalResilienceStatus() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Dependencies",
      description: "Actual supported provider/system states.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Degradation",
      description: "Explicit degraded, incident or unavailable state.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Status authority",
      description: "Current service-health source; no hard-coded uptime.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Recovery",
      description:
        "Approved action and escalation, with evidence retained under policy.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Operational resilience & status
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Unknown must not default to healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <ResilienceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/security/23.png"
              alt="Operational resilience and status meeting team collaboration illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
