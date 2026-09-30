type ModernizationRow = {
  pattern: string;
  whenItFits: string;
  requiredTreatment: string;
};

const modernizationRows: ModernizationRow[] = [
  {
    pattern: "Wrap / coexist",
    whenItFits: "Legacy OSS/BSS remains system of record for a bounded area.",
    requiredTreatment:
      "Expose approved APIs and events around it; define ownership and source of truth.",
  },
  {
    pattern: "Integrate",
    whenItFits: "Multiple operator systems remain but need coordination.",
    requiredTreatment:
      "Shared identity, APIs, events, observability and evidence.",
  },
  {
    pattern: "Modernize a domain",
    whenItFits:
      "Move a bounded subscriber, service, communications or monetization workflow.",
    requiredTreatment: "Dependencies, acceptance, pilot and fallback.",
  },
  {
    pattern: "Migrate in waves",
    whenItFits: "Replace a component or workflow gradually.",
    requiredTreatment:
      "Wave scope, state sync, validation, cutover and hypercare.",
  },
  {
    pattern: "Consolidate",
    whenItFits: "Reduce duplicated operator systems or interfaces.",
    requiredTreatment:
      "Map capability, data, contracts, partner dependencies and retirement criteria.",
  },
  {
    pattern: "Decommission",
    whenItFits:
      "Retire a legacy component after downstream dependency closure.",
    requiredTreatment:
      "Archive or retain required evidence; update operational routing.",
  },
];

export default function ModernizationAndCoexistenceSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Modernization and coexistence
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Legacy OSS/BSS doesn't have to go all at once. Six patterns, each
            with explicit ownership and source of truth.
          </p>
        </div>

        {/* Table Container */}
        <div className="border border-[#7FD0D959] rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl mb-8">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-[#00000066] border-white/10 text-teal-300 text-xs font-semibold tracking-wider uppercase">
                  <th className="py-5 px-6">Pattern</th>
                  <th className="py-5 px-6">When it fits</th>
                  <th className="py-5 px-6">Required treatment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {modernizationRows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/5 transition-colors text-sm md:text-base"
                  >
                    <td className="py-5 px-6 font-semibold text-white">
                      {row.pattern}
                    </td>
                    <td className="py-5 px-6 text-slate-300">
                      {row.whenItFits}
                    </td>
                    <td className="py-5 px-6 text-slate-300">
                      {row.requiredTreatment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 transition-colors text-sm md:text-base font-medium shadow-md"
          >
            Discuss your telecom architecture
          </button>
        </div>
      </div>
    </section>
  );
}
