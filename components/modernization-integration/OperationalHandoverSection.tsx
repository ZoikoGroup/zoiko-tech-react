type HandoverCardProps = {
  title: string;
  description: string;
};

const topCards: HandoverCardProps[] = [
  {
    title: "Ownership",
    description: "Business, technical and support owners identified.",
  },
  {
    title: "Monitoring",
    description:
      "Health and integration / workflow signals defined at the supported level.",
  },
  {
    title: "Runbook",
    description:
      "Known issues, restart / retry, containment, escalation and support routes.",
  },
  {
    title: "Change model",
    description: "Future changes, versioning, deprecation and approval paths.",
  },
  {
    title: "Access review",
    description: "Temporary migration access removed or re-scoped.",
  },
  {
    title: "Documentation",
    description:
      "Architecture and dependency records updated to current state.",
  },
  {
    title: "Evidence",
    description:
      "Cutover, validation, closure and residual risk evidence stored.",
  },
  {
    title: "Review",
    description: "Post-implementation review and next-wave decision.",
  },
];

type HypercareRow = {
  signal: string;
  owner: string;
  stabilityCriterion: string;
  state: string;
  stateType: "met" | "stabilizing";
};

const hypercareRows: HypercareRow[] = [
  {
    signal: "Integration health",
    owner: "Operator A",
    stabilityCriterion: "No open critical issues",
    state: "Met",
    stateType: "met",
  },
  {
    signal: "Exception queue",
    owner: "Support B",
    stabilityCriterion: "Backlog cleared",
    state: "Stabilizing",
    stateType: "stabilizing",
  },
];

export default function OperationalHandoverSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Operational handover
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            A project isn't done at go-live. It's done when it can be run,
            supported and changed.
          </p>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col h-full shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hypercare Dashboard Table Container */}
        <div className="border border-[#7FD0D959] rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="px-6 py-4 border-b border-[#7FD0D959]">
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
              Hypercare dashboard (specimen data)
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-black border-[#7FD0D959] text-slate-300 text-xs font-semibold tracking-wider uppercase">
                  <th className="py-4 px-6">Signal</th>
                  <th className="py-4 px-6">Owner</th>
                  <th className="py-4 px-6">Stability criterion</th>
                  <th className="py-4 px-6">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7FD0D959]">
                {hypercareRows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/[0.02] transition-colors text-sm md:text-base"
                  >
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.signal}
                    </td>
                    <td className="py-4 px-6 text-slate-300">{row.owner}</td>
                    <td className="py-4 px-6 text-slate-300">
                      {row.stabilityCriterion}
                    </td>
                    <td className="py-4 px-6">
                      {row.stateType === "met" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
                          {row.state}
                        </span>
                      )}
                      {row.stateType === "stabilizing" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-medium">
                          {row.state}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
