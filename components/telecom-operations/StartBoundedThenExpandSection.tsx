import {
  Compass,
  Map,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  PlayCircle,
  Activity,
} from "lucide-react";

type ExpandStep = {
  title: string;
  description: string;
  status: string;
  icon: React.ReactNode;
};

const topRowSteps: ExpandStep[] = [
  {
    title: "Define operating scope",
    description:
      "Operator type, markets, services, systems, workflows, partner dependencies, owners.",
    status: "Scope approved",
    icon: <Compass className="w-5 h-5 text-white" />,
  },
  {
    title: "Map architecture",
    description:
      "Current OSS/BSS, communications, monetization, identity, integrations, sources of truth.",
    status: "Dependency map approved",
    icon: <Map className="w-5 h-5 text-white" />,
  },
  {
    title: "Define controls",
    description:
      "Roles, change, evidence, security, risk / fraud review, market and regulatory boundaries.",
    status: "Control design approved",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    title: "Validate",
    description:
      "Bounded workflows, integrations, exceptions, service state, rollback.",
    status: "Acceptance criteria met",
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
  },
];

const bottomRowSteps: ExpandStep[] = [
  {
    title: "Pilot",
    description:
      "Limited subscriber, service or commercial scope with heightened monitoring.",
    status: "Pilot evidence reviewed",
    icon: <PlayCircle className="w-5 h-5 text-white" />,
  },
  {
    title: "Roll out",
    description: "Expand by market, service, offer or operational domain.",
    status: "Readiness confirmed",
    icon: <Rocket className="w-5 h-5 text-white" />,
  },
  {
    title: "Operate / improve",
    description:
      "Incidents, exceptions, partner health, monetization outcomes, expansion.",
    status: "Periodic review completed",
    icon: <Activity className="w-5 h-5 text-white" />,
  },
];

export default function StartBoundedThenExpandSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Start bounded, then expand
          </h2>
        </div>

        {/* First Row: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRowSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#247780] border border-[#D5E3E5] flex items-center justify-center mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              <div className="border-t border-[#D5E3E5] pt-4">
                <span className="text-xs font-semibold text-teal-800">
                  {step.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 3 Cards Grid (Centered or aligned) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bottomRowSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#247780] border border-[#D5E3E5] flex items-center justify-center mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              <div className="border-t border-[#D5E3E5] pt-4">
                <span className="text-xs font-semibold text-teal-800">
                  {step.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
