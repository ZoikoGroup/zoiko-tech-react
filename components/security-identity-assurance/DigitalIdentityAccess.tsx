import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const IdentityCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
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

export default function DigitalIdentityAccess() {
  const cards = [
    {
      imageSrc: "/security/10.png",
      imageAlt: "Subject person and service identity representation",
      title: "Subject",
      description: "Person/service identity at documented scope.",
    },
    {
      imageSrc: "/security/11.png",
      imageAlt: "Authentication methods discussion",
      title: "Authentication",
      description:
        "Only approved actual method, no assumed SSO/MFA/biometrics.",
    },
    {
      imageSrc: "/security/12.png",
      imageAlt: "Entitlement and delegation review",
      title: "Entitlement / delegation",
      description: "Who may act, on whose behalf, within which scope.",
    },
    {
      imageSrc: "/security/13.png",
      imageAlt: "Decision policy permit or deny state analysis",
      title: "Decision",
      description:
        "Policy permit/deny/review state is separate from identity verification.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112223] tracking-tight mb-3">
            Digital Identity & Access
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Authentication is not permission to perform every action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <IdentityCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
