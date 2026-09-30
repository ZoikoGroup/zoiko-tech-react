import Link from "next/link";

type IntentCardProps = {
  title: string;
  description: string;
  linkText: string;
};

const intentData: IntentCardProps[] = [
  {
    title: "Connect legacy systems",
    description: "Create governed interfaces around systems that must remain.",
    linkText: "Coexist / Integrate",
  },
  {
    title: "Modernize workflows",
    description:
      "Move manual or brittle workflows onto more consistent digital patterns.",
    linkText: "Workflow Modernization",
  },
  {
    title: "Migrate a workload",
    description: "Move a defined capability in controlled waves.",
    linkText: "Migration Waves",
  },
  {
    title: "Consolidate duplicated tools",
    description: "Reduce overlapping applications and operating layers.",
    linkText: "Consolidate",
  },
  {
    title: "Expose capabilities through APIs",
    description: "Turn hard-to-access functions into reusable interfaces.",
    linkText: "Target Integration Architecture",
  },
  {
    title: "Retire technical debt",
    description:
      "Decommission only after dependencies, data and replacement behavior are verified.",
    linkText: "Decommission",
  },
];

function IntentCard({ title, description, linkText }: IntentCardProps) {
  return (
    <div className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col h-full">
      <h3 className="text-base font-semibold text-slate-950 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-600 text-[15px] leading-relaxed mb-2 flex-grow">
        {description}
      </p>
      <div className="">
        <Link
          href="#"
          className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#247780] text-[#247780] hover:bg-white transition-colors text-sm font-medium"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default function ChangeIntentSection() {
  return (
    <section className="w-full min-h-screen bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tighter mb-5">
            What change do you need?
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Choose the closest intent and jump to the matching pattern.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Top Row - 4 Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {intentData.slice(0, 4).map((intent, index) => (
              <div key={index} className="md:col-span-1 lg:col-span-1">
                <IntentCard {...intent} />
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            <div className="hidden md:block md:col-span-2"></div> {/* Spacer */}
            <div className="md:col-span-4 h-full">
              <IntentCard {...intentData[4]} />
            </div>
            <div className="md:col-span-4 h-full">
              <IntentCard {...intentData[5]} />
            </div>
            <div className="hidden md:block md:col-span-2"></div> {/* Spacer */}
          </div>
        </div>
      </div>
    </section>
  );
}
