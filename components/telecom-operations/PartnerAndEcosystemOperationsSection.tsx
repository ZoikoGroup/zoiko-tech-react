import Image from "next/image";

type EcosystemCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const firstRowCards: EcosystemCardProps[] = [
  {
    title: "Partner identity",
    description: "Partner, provider or integration owner, type and status.",
    imageSrc: "/tel/8.png",
  },
  {
    title: "Interface / connection",
    description: "API, event, file, webhook or other approved method.",
    imageSrc: "/tel/9.png",
  },
  {
    title: "Service dependency",
    description:
      "Which subscriber, service or commercial workflow depends on the partner.",
    imageSrc: "/tel/10.png",
  },
  {
    title: "Operational status",
    description:
      "Healthy, degraded, unavailable, setup required, review required.",
    imageSrc: "/tel/11.png",
  },
];

const secondRowCards: EcosystemCardProps[] = [
  {
    title: "Exception ownership",
    description:
      "Who investigates when partner input is late, invalid or failed.",
    imageSrc: "/tel/12.png",
  },
  {
    title: "Commercial dependency & SLA",
    description: "High-level only. Settlement and SLA data are evidence-gated.",
    imageSrc: "/tel/13.png",
  },
];

export default function PartnerAndEcosystemOperationsSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Partner and ecosystem operations
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Partner integrations are part of telecom industry scope. Ecosystem
            handoffs are made visible without inventing wholesale, roaming or
            settlement products.
          </p>
        </div>

        {/* First Row: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-[#D5E3E5]/60 bg-white">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-[#D5E3E5]/60 bg-white">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
