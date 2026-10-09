import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const TrustCard: React.FC<TrustCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
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

export default function TrustQuestionSection() {
  const cards = [
    {
      icon: <Network className="w-5 h-5" />,
      title: "Protection / resilience",
      description: "Security posture, responsible owner and recovery.",
      imageSrc: "/security/2.png",
      imageAlt: "Protection and resilience team working",
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Identity / access",
      description: "Subject, entitlement, delegation and policy decision.",
      imageSrc: "/security/3.png",
      imageAlt: "Identity and access management discussion",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Assurance / privacy",
      description: "Source, scope, currentness and permitted data use.",
      imageSrc: "/security/4.png",
      imageAlt: "Assurance and privacy data review on laptop",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Integration / diligence",
      description:
        "Approved technical contracts and authoritative Trust routes.",
      imageSrc: "/security/25.png",
      imageAlt: "Integration and diligence meeting collaboration",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112223] tracking-tight mb-3">
            Choose the trust question
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Protection, access and proof require different authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <TrustCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
