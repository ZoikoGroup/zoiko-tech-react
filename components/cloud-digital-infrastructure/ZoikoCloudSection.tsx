import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CloudCard: React.FC<CardProps> = ({
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

export default function ZoikoCloudSection() {
  const cards = [
    {
      imageSrc: "/cloud/9.png",
      imageAlt: "Maturity and navigation open ocean water surface",
      title: "Maturity / navigation",
      description:
        "Finish. It appears in the directory only when public-approved.",
    },
    {
      imageSrc: "/cloud/10.png",
      imageAlt: "Role on this page architectural stack and documents",
      title: "Role on this page",
      description:
        "Infrastructure evidence within the architecture, not a generic public-cloud feature catalog.",
    },
    {
      imageSrc: "/cloud/11.png",
      imageAlt: "Regulated workload wording landscape with animal wildlife",
      title: "Regulated-workload wording",
      description:
        "Used only as workload context. It is never converted into a certification, regulatory approval or all-jurisdiction suitability claim.",
    },
    {
      imageSrc: "/cloud/12.png",
      imageAlt: "Public CTA boardwalk leading to serene lake and mountains",
      title: "Public CTA",
      description:
        "Only when the canonical destination, operator, maturity, availability, support model and public copy are approved.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Zoiko Cloud
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Infrastructure for Zoiko platforms and regulated workloads. It
            appears here as architecture evidence, not as a generic public-cloud
            catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <CloudCard
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
