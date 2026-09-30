type InfrastructureCard = {
  title: string;
  description: string;
};

const firstRowCards: InfrastructureCard[] = [
  {
    title: "Numbers / local presence",
    description:
      "Local-number infrastructure only within approved markets and regulatory scope.",
  },
  {
    title: "Calling",
    description:
      "Approved business or customer calling scope and availability.",
  },
  {
    title: "Routing",
    description: "A product capability only where validated.",
  },
  {
    title: "Video / communications",
    description: "Source-approved descriptor. No universal real-time claim.",
  },
];

const secondRowCards: InfrastructureCard[] = [
  {
    title: "AI-powered communications",
    description:
      "Approved product behavior and responsible-AI boundaries only.",
  },
  {
    title: "Integration",
    description:
      "Connect communications events to subscriber, service and operational workflows where supported.",
  },
];

export default function CommunicationsInfrastructureSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Communications infrastructure
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Zoiko Local is described as communications and local-number
            infrastructure covering local numbers, calling, video, routing and
            AI-powered customer communications.
          </p>
        </div>

        {/* First Row: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between h-full shadow-lg"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-xl mx-auto gap-6">
          {secondRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between h-full shadow-lg"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
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
