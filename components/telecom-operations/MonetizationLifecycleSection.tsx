type LifecycleRow = {
  stage: string;
  concept: string;
  publicationRule: string;
};

const lifecycleRows: LifecycleRow[] = [
  {
    stage: "Offer definition",
    concept: "Products, offers, bundles, commercial terms.",
    publicationRule: "No live catalog engine implied unless approved.",
  },
  {
    stage: "Entitlement / service link",
    concept: "Connect what was sold to what is active.",
    publicationRule: "Approved data model only.",
  },
  {
    stage: "Commercial event / usage",
    concept: "Recurring, one-time or usage-based event where supported.",
    publicationRule:
      "No mediation or usage ingestion specifics without evidence.",
  },
  {
    stage: "Pricing / charging decision",
    concept: "Apply approved commercial logic.",
    publicationRule: "Generic unless rating / charging is validated.",
  },
  {
    stage: "Billing / invoice outcome",
    concept: "Move approved billable results to billing operations.",
    publicationRule: "Invoice and tax behavior is product-specific.",
  },
  {
    stage: "Exception / dispute",
    concept:
      "Mismatch, missing event, configuration issue, commercial exception.",
    publicationRule: "Owner, evidence and resolution path.",
  },
  {
    stage: "Reconciliation / assurance",
    concept: "Compare expected and produced commercial outcome.",
    publicationRule: "No revenue-assurance algorithms or savings metrics.",
  },
];

type OverviewRow = {
  inputStatus: string;
  source: string;
  period: string;
  state: string;
  stateType: "accepted" | "missing" | "review";
};

const overviewRows: OverviewRow[] = [
  {
    inputStatus: "Recurring commercial events",
    source: "Service records",
    period: "Period 1",
    state: "Accepted",
    stateType: "accepted",
  },
  {
    inputStatus: "Usage inputs",
    source: "Pending source",
    period: "Period 1",
    state: "Missing / Pending",
    stateType: "missing",
  },
  {
    inputStatus: "Billing status",
    source: "Billing operations",
    period: "Period 1",
    state: "Billing review",
    stateType: "review",
  },
];

export default function MonetizationLifecycleSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Monetization lifecycle
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Commercial design is kept distinct from charging and billing
            execution. Deeper mechanics are product-specific.
          </p>
        </div>

        {/* Lifecycle Table Container */}
        <div className="border border-[#D5E3E5] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-8">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-900 text-white text-xs font-semibold tracking-wider uppercase">
                  <th className="py-4 px-6">Stage</th>
                  <th className="py-4 px-6">Concept</th>
                  <th className="py-4 px-6">Publication rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5E3E5]">
                {lifecycleRows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-100/50 transition-colors text-sm md:text-base"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-950">
                      {row.stage}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.concept}</td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.publicationRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monetization Overview Table Container */}
        <div className="border border-[#D5E3E5] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-8">
          <div className="px-6 py-4 border-b border-[#D5E3E5] bg-white/50">
            <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">
              Monetization overview (specimen data)
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-900 text-white text-xs font-semibold tracking-wider uppercase">
                  <th className="py-4 px-6">Input / status</th>
                  <th className="py-4 px-6">Source</th>
                  <th className="py-4 px-6">Period</th>
                  <th className="py-4 px-6">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5E3E5]">
                {overviewRows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-100/50 transition-colors text-sm md:text-base"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-950">
                      {row.inputStatus}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.source}</td>
                    <td className="py-4 px-6 text-slate-600">{row.period}</td>
                    <td className="py-4 px-6">
                      {row.stateType === "accepted" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-medium">
                          {row.state}
                        </span>
                      )}
                      {row.stateType === "missing" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-medium">
                          {row.state}
                        </span>
                      )}
                      {row.stateType === "review" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-medium">
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

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="px-6 py-3.5 rounded-full bg-teal-800 text-white hover:bg-teal-900 transition-colors text-sm md:text-base font-medium shadow-md"
          >
            Review monetization model
          </button>
        </div>
      </div>
    </section>
  );
}
