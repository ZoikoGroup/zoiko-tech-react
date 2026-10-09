import React from "react";

interface TrustCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const TrustCard: React.FC<TrustCardProps> = ({
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

export default function EvidenceAndTrustSection() {
  const cards = [
    {
      imageSrc: "/cloud/35.png",
      imageAlt: "Security and privacy aerial water coastline view",
      title: "Security / privacy",
      description:
        "Links to authoritative Trust, Security and Privacy pages. No duplicate unsourced badges.",
    },
    {
      imageSrc: "/cloud/36.png",
      imageAlt:
        "Certification and attestation textured surface with water droplets",
      title: "Certification / attestation",
      description:
        "Exact scope, entity or operator, product or deployment, issuing body, validity or expiry and evidence link, where legally approved.",
    },
    {
      imageSrc: "/cloud/37.png",
      imageAlt: "Regulatory and compliance scenic overlook landscape",
      title: "Regulatory / compliance",
      description:
        "Approved wording and jurisdictions only. No global blanket claim.",
    },
    {
      imageSrc: "/cloud/38.png",
      imageAlt: "Reliability and availability misty mountain peak",
      title: "Reliability / availability",
      description:
        "Status and approved operational evidence. No unsourced uptime metrics.",
    },
    {
      imageSrc: "/cloud/39.png",
      imageAlt: "Customer evidence misty forest trees background",
      title: "Customer evidence",
      description: "Case studies only when legally approved and attributable.",
    },
    {
      imageSrc: "/cloud/40.png",
      imageAlt: "Architecture evidence water droplets on textured surface",
      title: "Architecture evidence",
      description:
        "Approved diagrams, documentation and implementation patterns, marked as reference or specimen if not a customer deployment.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#247780] block mb-2">
            12 · EVIDENCE & TRUST
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
            Evidence and trust
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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

        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#247780] hover:bg-[#1a5b62] text-white font-semibold text-sm transition-all duration-200 shadow-sm"
          >
            Trust Center
          </a>
        </div>
      </div>
    </section>
  );
}
