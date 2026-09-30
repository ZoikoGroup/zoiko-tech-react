import Image from "next/image";

type NextStepCard = {
  title: string;
  description: string;
  imageSrc: string;
};

const firstRowCards: NextStepCard[] = [
  {
    title: "ZoikoNex / OSS-BSS",
    description:
      "Zoiko Local, Cloud & Developer Infrastructure, Modernization & Integration.",
    imageSrc: "/tel/20.png",
  },
  {
    title: "Zoiko Local",
    description:
      "Communications & Collaboration, then relevant customer and commerce experiences.",
    imageSrc: "/tel/21.png",
  },
  {
    title: "Subscriber / service operations",
    description:
      "Identity & Access, Cybersecurity & Resilience, Regulatory & Compliance.",
    imageSrc: "/tel/22.png",
  },
  {
    title: "Monetization operations",
    description:
      "HR, Payroll & Revenue Operations only for broader billing context, with telecom BSS boundaries kept explicit.",
    imageSrc: "/tel/23.png",
  },
];

const secondRowCards: NextStepCard[] = [
  {
    title: "Partner / integration operations",
    description:
      "Developer Platform, Integrations, Technology & SaaS, Modernization & Integration.",
    imageSrc: "/tel/24.png",
  },
];

export default function WhereTeamsGoNextSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Where teams go next
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Routes are contextual and never interrupt an incident, activation,
            fraud review or commercial exception.
          </p>
        </div>

        {/* First Row: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between overflow-hidden h-full"
            >
              <div className="relative w-full h-36 bg-white border-b border-[#D5E3E5]/60 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 1 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {secondRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between overflow-hidden h-full"
            >
              <div className="relative w-full h-36 bg-white border-b border-[#D5E3E5]/60 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-teal-800 text-white hover:bg-teal-900 transition-colors text-sm font-medium shadow-md"
          >
            Explore adjacent solutions
          </button>
        </div>
      </div>
    </section>
  );
}
