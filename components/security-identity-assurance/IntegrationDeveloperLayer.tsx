import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IntegrationCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FFFFFF07] border border-[#87C9D0] border-t-[3px] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#62C6CA19] text-[#8ADCE0] flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-[#C4D7D9] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function IntegrationDeveloperLayer() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Interfaces",
      description: "Approved APIs, SDKs and event definitions.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Authentication",
      description: "Only documented protocol/scopes and permission semantics.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Evidence integration",
      description: "Source-owned records and permitted metadata.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Readiness",
      description:
        "No invented endpoints, identity network or technical guarantees.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Integration & developer layer
          </h2>
          <p className="text-[#C4D7D9] text-base sm:text-lg">
            Only actual public contracts support implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <IntegrationCard
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
