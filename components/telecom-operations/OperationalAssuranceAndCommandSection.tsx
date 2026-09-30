import {
  Activity,
  Shield,
  AlertTriangle,
  GitFork,
  Flag,
  Eye,
  Mic,
} from "lucide-react";

type AssuranceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const topRowCards: AssuranceCard[] = [
  {
    title: "Service state",
    description: "Current status with source and timestamp where supported.",
    icon: <Activity className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Integration health",
    description: "Partner, API, event and downstream dependency status.",
    icon: <Shield className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Incidents",
    description:
      "Linked to affected services without duplicating stale public status.",
    icon: <AlertTriangle className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Changes",
    description:
      "Scheduled, in progress, completed or failed, with ownership and evidence.",
    icon: <GitFork className="w-5 h-5 text-teal-800" />,
  },
];

const bottomRowCards: AssuranceCard[] = [
  {
    title: "Exceptions",
    description:
      "Cross-domain queue for service, subscriber, commercial, partner and risk issues.",
    icon: <Flag className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Observability",
    description:
      "Logs, events, metrics and traces at the level the product exposes. No fake NOC metrics.",
    icon: <Eye className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Status communication",
    description:
      "Public availability belongs to the authoritative System Status.",
    icon: <Mic className="w-5 h-5 text-teal-800" />,
  },
];

export default function OperationalAssuranceAndCommandSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Operational assurance and command
          </h2>
        </div>

        {/* First Row: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col items-center justify-between h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D5E3E5] flex items-center justify-center mb-6 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 3 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {bottomRowCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D5E3E5] flex items-center justify-center mb-6 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-teal-800 text-white hover:bg-teal-900 transition-colors text-sm font-medium shadow-md"
          >
            System Status
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-white border border-[#D5E3E5] text-slate-800 hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm"
          >
            Support
          </button>
        </div>
      </div>
    </section>
  );
}
