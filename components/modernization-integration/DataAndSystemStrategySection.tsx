import Link from "next/link";

type StrategyCardProps = {
  title: string;
  description: string;
};

const topCards: StrategyCardProps[] = [
  {
    title: "Authoritative source",
    description:
      "Every material data object has a source of truth in each phase.",
  },
  {
    title: "Synchronization",
    description:
      "Direction, cadence or trigger, ownership, failure handling and reconciliation.",
  },
  {
    title: "Duplication",
    description:
      "Temporary duplicate stores need a purpose, retention window and closure criteria.",
  },
  {
    title: "Mapping",
    description: "Identifiers, field mapping, transformations and validation.",
  },
  {
    title: "Provenance",
    description:
      "Where critical data originated and how it changed, where evidence matters.",
  },
  {
    title: "Sensitive data",
    description:
      "Minimize movement and access; apply jurisdiction and privacy controls.",
  },
  {
    title: "Historical data",
    description:
      "What must migrate, be archived, or stay in the legacy system.",
  },
  {
    title: "Cutover state",
    description:
      "Freeze, sync, delta and final validation behavior where relevant.",
  },
];

type TableRow = {
  object: string;
  sourceOfTruth: string;
  mapping: string;
  reconciliation: string;
  reconciliationType: "matched" | "review" | "mismatch";
  owner: string;
};

const tableData: TableRow[] = [
  {
    object: "Customer record",
    sourceOfTruth: "Legacy system (phase 1)",
    mapping: "Identifier + 12 fields",
    reconciliation: "Matched",
    reconciliationType: "matched",
    owner: "Data owner A",
  },
  {
    object: "Order history",
    sourceOfTruth: "Archive",
    mapping: "Read-only",
    reconciliation: "Review",
    reconciliationType: "review",
    owner: "Data owner B",
  },
  {
    object: "Account balance",
    sourceOfTruth: "Pending decision",
    mapping: "Not mapped",
    reconciliation: "Mismatch • Blocks cutover",
    reconciliationType: "mismatch",
    owner: "Data owner C",
  },
];

export default function DataAndSystemStrategySection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Data and system-of-record strategy
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Duplicated data can undermine modernization. Every phase needs a
            clear answer on what is authoritative.
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

        {/* Data Mapping Table Container */}
        <div className="border border-[#7FD0D959] rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl mb-10">
          <div className="px-6 py-4 border-b border-[#7FD0D959]">
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
              Data mapping view (specimen data)
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-black border-[#7FD0D959] text-slate-300 text-xs font-semibold tracking-wider uppercase">
                  <th className="py-4 px-6">Object</th>
                  <th className="py-4 px-6">Source of truth</th>
                  <th className="py-4 px-6">Mapping</th>
                  <th className="py-4 px-6">Reconciliation</th>
                  <th className="py-4 px-6">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7FD0D959]">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/[0.02] transition-colors text-sm md:text-base"
                  >
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.object}
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      {row.sourceOfTruth}
                    </td>
                    <td className="py-4 px-6 text-slate-300">{row.mapping}</td>
                    <td className="py-4 px-6">
                      {row.reconciliationType === "matched" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
                          {row.reconciliation}
                        </span>
                      )}
                      {row.reconciliationType === "review" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-medium">
                          {row.reconciliation}
                        </span>
                      )}
                      {row.reconciliationType === "mismatch" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-medium">
                          {row.reconciliation}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-slate-300">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3.5 rounded-full bg-white text-black hover:bg-slate-100 transition-colors text-sm md:text-base font-medium shadow-lg"
          >
            Review data model
          </Link>
        </div>
      </div>
    </section>
  );
}
