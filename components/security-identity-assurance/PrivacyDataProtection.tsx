import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrivacyCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FFFFFF07] border border-[#87C9D0] border-t-[3px] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#62C6CA19] text-[#8ADCE0] flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-[#C4D7D9] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function PrivacyDataProtection() {
  const cards = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Purpose",
      description: "Approved use and minimum necessary data.",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Access",
      description: "Actual role, resource and external-disclosure context.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Retention / jurisdiction",
      description: "Only source-defined rules; no residency guarantee.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Privacy authority",
      description:
        "Canonical policy and request routes; no duplicate unsupported promises.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy & data protection
          </h2>
          <p className="text-[#C4D7D9] text-base">
            Privacy is a distinct control layer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <PrivacyCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/security/18.png"
              alt="Privacy and data protection team collaboration illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
