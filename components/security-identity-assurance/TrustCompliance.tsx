import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#F1F8F9] border border-[#247780] border-t-3 border-t-[#247780] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#DEEFEF] text-[#247780] flex items-center justify-center mb-6 shadow-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#112223] tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function TrustCompliance() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Trust Center",
      description: "Authoritative diligence and proof routing.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Security / Privacy",
      description: "Source-owned practices and legal notices.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Disclosure / Status",
      description:
        "Separate vulnerability reporting and live operational state.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Compliance boundary",
      description:
        "Readiness, alignment, implemented controls and certification remain distinct.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Trust & compliance
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Architecture summaries do not outrank their source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <TrustCard
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
