import {
  Users,
  Key,
  Database,
  History,
  Shield,
  Link2,
  FileText,
  Cpu,
} from "lucide-react";

type SecurityCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const securityCards: SecurityCardProps[] = [
  {
    title: "Identity / access",
    description:
      "Review existing and target access; avoid broad privilege expansion during migration.",
    icon: <Users className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Secrets / credentials",
    description:
      "Rotate or re-scope credentials during integration changes. Never expose secrets in UI.",
    icon: <Key className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Data movement",
    description:
      "Map sensitive data, residency and jurisdiction needs, and minimization controls.",
    icon: <Database className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Change control",
    description:
      "Approver, implementation window, evidence and rollback authority.",
    icon: <History className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Business continuity",
    description:
      "Preserve critical service paths with clear fallback and containment.",
    icon: <Shield className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Third-party dependencies",
    description:
      "Track external providers, contractual windows and incident coordination.",
    icon: <Link2 className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Audit / evidence",
    description:
      "Record configuration, approval, migration and cutover events where required.",
    icon: <FileText className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Responsible AI",
    description:
      "If AI is introduced, route to governed AI and assurance requirements rather than treating it as a generic accelerator.",
    icon: <Cpu className="w-5 h-5 text-teal-800" />,
  },
];

export default function SecurityRiskSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Security, risk and continuity
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Controls travel with every change, not just the final state.
          </p>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-700/20 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
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
