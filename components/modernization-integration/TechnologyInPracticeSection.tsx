import Image from "next/image";

type PracticeCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  status: string;
  statusType: "pending" | "available";
};

const practiceCards: PracticeCardProps[] = [
  {
    title: "Modernization case study",
    description:
      "Estate, constraint, chosen pattern, architecture, rollout, measurable result, customer approval.",
    imageSrc: "/modern/14.png",
    status: "Evidence pending",
    statusType: "pending",
  },
  {
    title: "Integration case study",
    description:
      "Systems, interface pattern, identity / data / control, operational result.",
    imageSrc: "/modern/15.png",
    status: "Evidence pending",
    statusType: "pending",
  },
  {
    title: "Migration note",
    description:
      "Scope, wave, issue / rollback / correction, stabilized state, lesson.",
    imageSrc: "/modern/16.png",
    status: "Evidence pending",
    statusType: "pending",
  },
  {
    title: "Reference architecture",
    description:
      "Context, systems, interfaces, source of truth, workflow, observability, governance.",
    imageSrc: "/modern/17.png",
    status: "Available",
    statusType: "available",
  },
];

export default function TechnologyInPracticeSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Technology in practice
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Proof appears only when approved for public use.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-44 mb-6 rounded-2xl overflow-hidden border border-[#D5E3E5]/60 bg-white">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Status Badge */}
              <div>
                {card.statusType === "pending" && (
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-medium">
                    {card.status}
                  </span>
                )}
                {card.statusType === "available" && (
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#247780] border border-white text-white text-xs font-medium">
                    {card.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
