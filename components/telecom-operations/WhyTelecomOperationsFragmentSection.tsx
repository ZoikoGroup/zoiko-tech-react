type FragmentCardProps = {
  title: string;
  description: string;
};

const firstRowCards: FragmentCardProps[] = [
  {
    title: "States diverge",
    description:
      "Subscriber, service and billing states drift apart. Show the entity and state relationship, not isolated records.",
  },
  {
    title: "Point integrations multiply",
    description:
      "Legacy OSS/BSS links grow. Shared APIs, events and integration patterns replace them.",
  },
  {
    title: "Rules and state disconnected",
    description:
      "Connect offer, service and monetization context without claiming a single universal engine.",
  },
  {
    title: "Hidden partner dependencies",
    description:
      "External, wholesale and partner integration ownership and status become visible.",
  },
];

const secondRowCards: FragmentCardProps[] = [
  {
    title: "Exceptions in many tools",
    description: "One cross-domain operator exception model.",
  },
  {
    title: "Late risk signals",
    description:
      "A case, review and evidence pattern, without invented analytics.",
  },
  {
    title: "Unclear status and change ownership",
    description:
      "Operational command, incident and change state made explicit.",
  },
];

export default function WhyTelecomOperationsFragmentSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why telecom operations fragment
          </h2>
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

        {/* Second Row: 3 Cards Grid (Centered or aligned matching visual balance) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto lg:grid-cols-3 gap-6">
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
