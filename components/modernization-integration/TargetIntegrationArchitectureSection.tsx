type ArchitectureRow = {
  title: string;
  description: string;
  question: string;
  variant: "light" | "dark";
};

const architectureData: ArchitectureRow[] = [
  {
    title: "Governance",
    description:
      "Security, privacy, compliance, lifecycle, change and evidence.",
    question: "How is the integration controlled?",
    variant: "light",
  },
  {
    title: "Observability",
    description:
      "Logs, events, health, tracing / telemetry where supported, audit evidence.",
    question: "How do we know what happened?",
    variant: "light",
  },
  {
    title: "Workflow / orchestration",
    description: "Routing, task state, approvals, retries, exception handling.",
    question: "How is multi-system work coordinated?",
    variant: "light",
  },
  {
    title: "Data & state",
    description:
      "System of record, synchronization, mapping, transformations, provenance.",
    question: "Which data is authoritative?",
    variant: "light",
  },
  {
    title: "Identity & authority",
    description:
      "Authentication, delegated access, service identity, roles and policy.",
    question: "Who or what is allowed to act?",
    variant: "dark",
  },
  {
    title: "Interface layer",
    description:
      "APIs, SDKs, webhooks, events, adapters / connectors where approved.",
    question: "How do systems expose capability?",
    variant: "dark",
  },
  {
    title: "Experience / workflow",
    description: "Users, channels, applications, operational workflows.",
    question: "Where does the work happen?",
    variant: "dark",
  },
];

export default function TargetIntegrationArchitectureSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Target integration architecture
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Integration as an operating architecture, not a connector list. Read
            from the bottom layer up.
          </p>
        </div>

        {/* Stacked Rows Container */}
        <div className="flex flex-col gap-4">
          {architectureData.map((row, index) => {
            const isDark = row.variant === "dark";
            return (
              <div
                key={index}
                className={`w-full p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all ${
                  isDark
                    ? "bg-gradient-to-r from-[#000000] to-[#1C5C62] text-white shadow-xl"
                    : "bg-[#F3F9FA] border border-[#D5E3E5] text-slate-950 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                }`}
              >
                {/* Left Title */}
                <div className="w-full md:w-1/4">
                  <h3
                    className={`text-lg md:text-xl font-semibold tracking-tight ${isDark ? "text-white" : "text-slate-950"}`}
                  >
                    {row.title}
                  </h3>
                </div>

                {/* Middle Description */}
                <div className="w-full md:w-5/12">
                  <p
                    className={`text-sm md:text-base leading-relaxed ${isDark ? "text-slate-200" : "text-slate-600"}`}
                  >
                    {row.description}
                  </p>
                </div>

                {/* Right Question */}
                <div className="w-full md:w-5/12 text-left md:text-right">
                  <span
                    className={`text-sm md:text-base font-medium ${isDark ? "text-teal-300" : "text-teal-900"}`}
                  >
                    {row.question}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
