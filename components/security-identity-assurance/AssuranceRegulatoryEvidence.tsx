import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EvidenceCard: React.FC<CardProps> = ({ icon, title, description }) => {
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

export default function AssuranceRegulatoryEvidence() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Governance",
      description: "Approved control objectives and owners.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Evidence",
      description: "Source, period, applicability, freshness and limitations.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Review",
      description: "Reviewer, decision, exception and supersession.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Claims",
      description:
        "No guaranteed compliance, regulator approval or attestation without exact current evidence.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Assurance & regulatory evidence
          </h2>
          <p className="text-[#C4D7D9]">
            Controls, review and certification are different claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <EvidenceCard
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
