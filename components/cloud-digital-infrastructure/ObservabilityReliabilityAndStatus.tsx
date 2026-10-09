import React from "react";

interface ObservabilityCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ObservabilityCard: React.FC<ObservabilityCardProps> = ({
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

export default function ObservabilityReliabilityAndStatus() {
  const cards = [
    {
      imageSrc: "/cloud/26.png",
      imageAlt: "Observability dark tunnel silhouette view",
      title: "Observability",
      description:
        "Logs, metrics and traces, or generic telemetry, only when product evidence supports them. Corporate language may say observable operations.",
    },
    {
      imageSrc: "/cloud/27.png",
      imageAlt: "Usage and metering green forest pathway",
      title: "Usage / metering",
      description:
        "Recognized in the developer architecture where available. No invented billing units or quotas.",
    },
    {
      imageSrc: "/cloud/28.png",
      imageAlt: "Reliability lush green canopy and mountain ridge",
      title: "Reliability",
      description:
        "Resilience, observability, status communication and operational controls.",
    },
    {
      imageSrc: "/cloud/29.png",
      imageAlt: "System Status serene lake and forest landscape",
      title: "System Status",
      description:
        "Current availability and incident communication belongs to the authoritative Status system.",
    },
    {
      imageSrc: "/cloud/30.png",
      imageAlt: "Incident state snowy mountain landscape with tents",
      title: "Incident state",
      description:
        "Investigating · Identified · Monitoring · Resolved, only if the status system uses and returns them.",
    },
    {
      imageSrc: "/cloud/31.png",
      imageAlt: "Maintenance weathered wooden log texture with leaves",
      title: "Maintenance",
      description: "Only authoritative planned-maintenance information.",
    },
    {
      imageSrc: "/cloud/32.png",
      imageAlt: "Historical metrics wooden bridge extending over water",
      title: "Historical metrics",
      description:
        "No invented uptime percentages, MTTR, latency or capacity benchmarks.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight mb-4">
              Observability, reliability and status
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              Framed as resilience, observability, status communication and
              operational controls. It is not an SLA.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#247780] hover:bg-[#1a5b62] text-white font-semibold text-sm transition-all duration-200 shadow-sm"
            >
              System Status
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <ObservabilityCard
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
