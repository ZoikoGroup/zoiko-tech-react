import Image from "next/image";

type PatternRow = {
  pattern: string;
  whenItFits: string;
  whatItInvolves: string;
};

const patternsData: PatternRow[] = [
  {
    pattern: "Coexist",
    whenItFits:
      "A critical system must remain while new capabilities are introduced around it.",
    whatItInvolves:
      "Wrap with controlled interfaces, identity and observability; define the boundary and source of truth.",
  },
  {
    pattern: "Integrate",
    whenItFits: "Systems remain but need reliable exchange or orchestration.",
    whatItInvolves: "APIs, events, webhooks, identity and reference patterns.",
  },
  {
    pattern: "Modernize in place",
    whenItFits: "A workflow or component can improve without full replacement.",
    whatItInvolves:
      "Replace brittle steps, add interfaces and controls, preserve proven core behavior.",
  },
  {
    pattern: "Migrate",
    whenItFits: "A bounded workload can move to a new service or platform.",
    whatItInvolves:
      "Wave plan, data mapping, validation, cutover, rollback and hypercare.",
  },
  {
    pattern: "Consolidate",
    whenItFits: "Multiple tools duplicate capability or control layers.",
    whatItInvolves:
      "Rationalize features, users, data, interfaces and contracts before decommission.",
  },
  {
    pattern: "Decommission",
    whenItFits:
      "A system can be retired after replacement and dependency closure.",
    whatItInvolves:
      "Archive or retain required data, close interfaces, revoke access, update routing, preserve evidence.",
  },
];

export default function SixModernizationPatternsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Six modernization patterns
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Different situations call for different moves. The right answer is
            often not migration.
          </p>
        </div>

        {/* Table Container */}
        <div className="border border-[#7FD0D959] rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl mb-10">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black border-b border-[#7FD0D959] text-slate-300 text-xs font-semibold tracking-wider uppercase">
                  <th className="py-4 px-6 w-1/4">Pattern</th>
                  <th className="py-4 px-6 w-2/5">When it fits</th>
                  <th className="py-4 px-6 w-11/24">What it involves</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7FD0D959]">
                {patternsData.map((row, index) => (
                  <tr
                    key={index}
                    className="transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-white text-sm md:text-base">
                      {row.pattern}
                    </td>
                    <td className="py-4 px-6 text-slate-300 text-sm md:text-base leading-relaxed">
                      {row.whenItFits}
                    </td>
                    <td className="py-4 px-6 text-slate-300 text-sm md:text-base leading-relaxed">
                      {row.whatItInvolves}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Image Showcase */}
        <div className="relative w-full h-[300px] rounded-3xl overflow-hidden border border-[#7FD0D959] shadow-2xl">
          <Image
            src="/modern/6.png"
            alt="Modernization patterns teamwork and control room"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
