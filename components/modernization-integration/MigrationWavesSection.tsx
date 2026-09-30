import Image from "next/image";
import {
  Layers,
  Database,
  CheckCircle2,
  Rocket,
  RefreshCw,
} from "lucide-react";

type WaveCard = {
  title: string;
  description: string;
  subText: string;
  icon: React.ReactNode;
};

const waveCards: WaveCard[] = [
  {
    title: "Scope wave",
    description: "Bounded users, data, interfaces and workflow slice.",
    subText: "Owner, scope, dependencies approved",
    icon: <Layers className="w-5 h-5 text-[#1C5C62]" />,
  },
  {
    title: "Prepare",
    description: "Map data, configure interfaces, access, monitoring, support.",
    subText: "Readiness checklist complete",
    icon: <Database className="w-5 h-5 text-[#1C5C62]" />,
  },
  {
    title: "Validate",
    description:
      "Functional, integration, data, security, operational and rollback tests.",
    subText: "Acceptance criteria met",
    icon: <CheckCircle2 className="w-5 h-5 text-[#1C5C62]" />,
  },
  {
    title: "Pilot",
    description: "Limited production or controlled workload.",
    subText: "Evidence reviewed; critical issues closed",
    icon: <Rocket className="w-5 h-5 text-[#1C5C62]" />,
  },
  {
    title: "Cut over",
    description:
      "Move traffic, users or workload with explicit go / no-go authority.",
    subText: "Go-live approval recorded",
    icon: <RefreshCw className="w-5 h-5 text-[#1C5C62]" />,
  },
];

type CutoverRow = {
  state: string;
  behavior: string;
};

const cutoverRows: CutoverRow[] = [
  { state: "Planned", behavior: "Scope defined but no production change." },
  { state: "Ready", behavior: "Prerequisites and approvals complete." },
  { state: "Pilot", behavior: "Limited scope; heightened monitoring." },
  {
    state: "Cutover in progress",
    behavior:
      "Visible owner, start time, status, issue path and rollback authority.",
  },
  {
    state: "Stabilizing",
    behavior: "Hypercare and elevated monitoring after cutover.",
  },
  { state: "Completed", behavior: "Acceptance and handover complete." },
  {
    state: "Rolled back",
    behavior: "Previous state restored or contained; issue evidence retained.",
  },
  {
    state: "Blocked",
    behavior:
      "A critical dependency, validation or policy issue prevents progression.",
  },
];

export default function MigrationWavesSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Migration waves and cutover
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Move in bounded waves with an explicit gate at each step.
          </p>
        </div>

        {/* Top 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {waveCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-5 rounded-3xl backdrop-blur-md flex flex-col justify-between h-full shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-full bg-white border border-teal-500/30">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#7FD0D959]/50">
                <span className="text-[11px] font-medium text-teal-300 leading-snug block">
                  {card.subText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Table & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table Container (7 cols) */}
          <div className="lg:col-span-7 border border-[#7FD0D959] rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="px-6 py-4 border-b border-[#7FD0D959]">
              <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
                Cutover state model
              </span>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b bg-black border-[#7FD0D959] text-slate-300 text-xs font-semibold tracking-wider uppercase">
                    <th className="py-4 px-6 w-2/5">State</th>
                    <th className="py-4 px-6 w-3/5">Required behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#7FD0D959]">
                  {cutoverRows.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white/[0.02] transition-colors text-xs md:text-sm"
                    >
                      <td className="py-3.5 px-6 font-semibold text-white">
                        {row.state}
                      </td>
                      <td className="py-3.5 px-6 text-slate-300 leading-relaxed">
                        {row.behavior}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Image Container (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-[#7FD0D959] shadow-2xl">
            <Image
              src="/modern/8.png"
              alt="Migration control center and team monitoring cutover"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
