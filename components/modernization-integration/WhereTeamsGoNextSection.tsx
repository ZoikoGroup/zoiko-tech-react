type NextTeamCardProps = {
  title: string;
  description: string;
};

const nextTeamCards: NextTeamCardProps[] = [
  {
    title: "Legacy integration foundation",
    description:
      "Cloud & Developer Infrastructure, Identity & Access, Cybersecurity & Resilience.",
  },
  {
    title: "Workflow modernization",
    description:
      "Technology & SaaS, then AI & Agentic Automation where appropriate and governed.",
  },
  {
    title: "Operational consolidation",
    description:
      "Workforce & Productivity, or HR, Payroll & Revenue Operations, by business domain.",
  },
  {
    title: "Regulated modernization",
    description:
      "Regulatory & Compliance, AI Governance & Assurance, relevant industry solutions.",
  },
  {
    title: "Developer / API modernization",
    description:
      "Developer Platform, Integrations, relevant platform workloads.",
  },
];

export default function WhereTeamsGoNextSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Where teams go next
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Adjacent routes reuse shared foundations and reduce rework, without
            intrusive cross-sell.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nextTeamCards.map((card, index) => {
            const isLast = index === 4;
            return (
              <div
                key={index}
                className={`bg-[#FFFFFF0F] border border-[#7FD0D959] p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between h-full shadow-lg ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <h3 className="text-base font-semibold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
