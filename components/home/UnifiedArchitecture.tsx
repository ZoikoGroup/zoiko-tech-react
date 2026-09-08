const architectureLayers = [
  {
    title: "APPLICATION LAYER",
    description:
      "Industry Applications, Telecom, Enterprise SaaS Solutions",
  },
  {
    title: "PLATFORM INTEGRATION SERVICES",
    description:
      "Zoiko Remit, Zoiko Payroll, Local Commerce Engine",
  },
  {
    title: "DEVELOPER LAYER & ROBUST APIS",
    description:
      "Zoiko Arc APIs, Serverless Orchestration, SDK Pipelines",
  },
  {
    title: "IDENTITY, COMPLIANCE & FINANCIAL STACK",
    description:
      "Zoiko Pay, ZoikoAssure, Decentralized Identity Ledger",
  },
  {
    title: "CORE INFRASTRUCTURE & FOUNDATIONAL AI",
    description:
      "Zoiko AI Reasoning Layer, Governed Datastores, Global Edge Cloud",
  },
];

export default function UnifiedArchitecture() {
  return (
    <section className="relative w-full overflow-hidden bg-teal-900/80 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-20">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl sm:size-96"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1296px] flex-col items-center gap-12 sm:gap-16 lg:gap-20">
        {/* Header */}
        <div className="flex w-full max-w-[920px] flex-col items-center gap-4">
          <span className="text-center text-[10px] font-bold uppercase tracking-wide text-white">
            UNIFIED ARCHITECTURE
          </span>

          <h2 className="w-full text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Platforms should work together, not become another collection of silos.
          </h2>

          <p className="w-full text-center text-base font-normal leading-7 text-slate-50 sm:text-lg">
            We run our entire product matrix on a single, standardized tech
            stack built for governed enterprise execution, security
            compliance, and planetary-scale data workloads.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3">
          {architectureLayers.map((layer) => (
            <div
              key={layer.title}
              className="flex w-full flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_10px_24px_-10px_rgba(0,0,0,0.20),0px_2px_6px_-2px_rgba(0,0,0,0.10)]"
            >
              <h3 className="text-center text-xs font-bold tracking-wide text-teal-400">
                {layer.title}
              </h3>

              <p className="w-full text-center text-sm font-normal leading-5 text-gray-500">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}