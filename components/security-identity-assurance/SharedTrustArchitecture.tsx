import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const TrustCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="bg-[#F1F8F9] border border-[#d3e4e6] rounded-xl overflow-hidden flex flex-col p-6 shadow-sm transition-all duration-300">
      <div className="w-full h-40 sm:h-48 overflow-hidden rounded-lg mb-6">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#112223] tracking-tight mb-2.5">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function SharedTrustArchitecture() {
  const cards = [
    {
      imageSrc: "/security/5.png",
      imageAlt: "Context and identity representation",
      title: "Context & identity",
      description:
        "Actor, resource, operating entity and authenticated context.",
    },
    {
      imageSrc: "/security/6.png",
      imageAlt: "Authority and policy document",
      title: "Authority & policy",
      description: "Entitlement/delegation and actual allowed action.",
    },
    {
      imageSrc: "/security/7.png",
      imageAlt: "Protected action and signal meeting",
      title: "Protected action & signal",
      description: "Responsible system owns execution and observed state.",
    },
    {
      imageSrc: "/security/8.png",
      imageAlt: "Evidence and recovery records",
      title: "Evidence & recovery",
      description:
        "Source, scope, freshness, accountable owner and next action.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112223] tracking-tight mb-3">
            Shared trust architecture
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Context $\rightarrow$ identity $\rightarrow$ authority $\rightarrow$
            policy $\rightarrow$ action $\rightarrow$ signal $\rightarrow$
            evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <TrustCard
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
