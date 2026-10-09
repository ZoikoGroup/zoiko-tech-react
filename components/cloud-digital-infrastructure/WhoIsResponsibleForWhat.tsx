import React from "react";

interface ResponsibilityCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  zoikoText: string;
  customerText: string;
}

const ResponsibilityCard: React.FC<ResponsibilityCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  zoikoText,
  customerText,
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
        <h3 className="text-xl font-bold text-[#112223] tracking-tight mb-4">
          {title}
        </h3>
        <div className="space-y-3 text-sm">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-[#112223] font-semibold">
              Zoiko / operator:
            </strong>{" "}
            {zoikoText}
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-[#112223] font-semibold">
              Customer / external:
            </strong>{" "}
            {customerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function WhoIsResponsibleForWhat() {
  const cards = [
    {
      imageSrc: "/cloud/19.png",
      imageAlt: "Infrastructure operation misty horizon landscape view",
      title: "Infrastructure operation",
      zoikoText: "only as contract and product evidence support.",
      customerText:
        "customer-owned systems and third-party infrastructure may remain authoritative.",
    },
    {
      imageSrc: "/cloud/20.png",
      imageAlt: "Identity pine cones on rustic wooden surface",
      title: "Identity",
      zoikoText: "platform auth and access controls where supported.",
      customerText:
        "the customer identity source, user lifecycle or delegated authority may be external.",
    },
    {
      imageSrc: "/cloud/21.png",
      imageAlt: "Data laptop and notebook setup on wooden table",
      title: "Data",
      zoikoText: "platform processing and storage only at approved scope.",
      customerText:
        "the customer controls data classification, source quality and lawful basis where applicable.",
    },
    {
      imageSrc: "/cloud/22.png",
      imageAlt: "Networking and connectivity workspace with smartphone",
      title: "Networking / connectivity",
      zoikoText: "only supported interfaces and endpoints.",
      customerText:
        "customer and partner networks and external connectivity may remain separate.",
    },
    {
      imageSrc: "/cloud/23.png",
      imageAlt: "Compliance silhouette against soft lit background",
      title: "Compliance",
      zoikoText: "Zoiko evidence for its actual product and deployment scope.",
      customerText:
        "the customer remains responsible for its own legal and applicability obligations unless a contract says otherwise.",
    },
    {
      imageSrc: "/cloud/24.png",
      imageAlt: "Business outcome moody misty mountain forest landscape",
      title: "Business outcome",
      zoikoText: "technology transmits and records events at supported scope.",
      customerText:
        "the authoritative downstream business system may own the final result.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Who is responsible for what
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Zoiko never implies it operates every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ResponsibilityCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              zoikoText={card.zoikoText}
              customerText={card.customerText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
