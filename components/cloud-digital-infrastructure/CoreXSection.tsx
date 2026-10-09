import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CoreXCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="bg-white border border-[#d3e4e6] rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all duration-300">
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#112223] tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function CoreXSection() {
  const cards = [
    {
      imageSrc: "/cloud/14.png",
      imageAlt: "Role dark coffee beans texture and pattern background",
      title: "Role",
      description:
        "An architecture-level control and evidence layer, not a standalone public product by default.",
    },
    {
      imageSrc: "/cloud/15.png",
      imageAlt: "Control concepts forest bridge with lush greenery",
      title: "Control concepts",
      description:
        "Policy and permission context, evidence, and transaction or workflow state, only at a generic architecture level.",
    },
    {
      imageSrc: "/cloud/16.png",
      imageAlt: "Public naming stone formations and landscape view",
      title: "Public naming",
      description:
        "CoreX is a named CTA or product only if customer-facing status, descriptor, operator, URL and claims are approved.",
    },
    {
      imageSrc: "/cloud/17.png",
      imageAlt: "Maturity misty forest and mountain landscape",
      title: "Maturity",
      description: "Build. Public only if customer-facing.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            CoreX
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Shared control, evidence and transaction infrastructure where
            customer-facing. Current state: Build, an architecture-level control
            and evidence layer rather than a standalone public product by
            default.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <CoreXCard
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
