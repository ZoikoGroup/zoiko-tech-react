type ProtectionCard = {
  title: string;
  description: string;
};

const topRowCards: ProtectionCard[] = [
  {
    title: "Signal / alert",
    description:
      "Source, type, affected object, time. Confidence shown only if validated.",
  },
  {
    title: "Triage",
    description: "Operational priority, owner, current state, related events.",
  },
  {
    title: "Evidence",
    description:
      "Service, account, commercial or integration context. No unnecessary personal data.",
  },
  {
    title: "Action",
    description:
      "Review, request data, restrict, hold or escalate only if product workflows support it.",
  },
];

const bottomRowCards: ProtectionCard[] = [
  {
    title: "Resolution",
    description:
      "Confirmed issue, false positive, operational exception or unresolved.",
  },
  {
    title: "Audit",
    description: "Material decisions and changes preserved where required.",
  },
];

export default function FraudRiskAndRevenueProtectionSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Fraud, risk and revenue protection
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Fraud is a source-supported telecom domain. Here it appears as a
            governed investigation pattern, not as detection algorithms.
          </p>
        </div>

        {/* First Row: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRowCards.map((card, index) => (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-xl lg:grid-cols-2 mx-auto gap-6">
          {bottomRowCards.map((card, index) => (
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
