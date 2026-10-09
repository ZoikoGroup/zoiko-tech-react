import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResilienceCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FFFFFF07] border border-[#87C9D0] border-t-[3px] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#62C6CA19] text-[#8ADCE0] flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-[#C4D7D9] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function CybersecurityResilience() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Protection",
      description: "Approved corporate/product control scope.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Operations",
      description: "Signals, responsible owner and source-governed state.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Recovery",
      description: "Documented containment, restoration and dependencies.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Limits",
      description:
        "No SOC/SIEM/XDR/MDR, staffing, scanning, threat coverage or response SLA inferred.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cybersecurity & resilience
          </h2>
          <p className="text-[#C4D7D9]">
            Architecture scope does not establish a complete security suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <ResilienceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src="/security/9.png"
                alt="Cybersecurity and resilience network infrastructure illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
