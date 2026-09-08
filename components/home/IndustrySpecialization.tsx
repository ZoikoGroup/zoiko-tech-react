const industries = [
  {
    title: "Telecommunications",
    description: "Sovereign telecom OSS/BSS & eSIM rails.",
  },
  {
    title: "Fintech & Banking",
    description: "Compliant remittance, payments, and risk ledgers.",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant, highly secure datastores.",
  },
  {
    title: "Retail & Commerce",
    description:
      "Omnichannel inventory orchestration & payout tools.",
  },
  {
    title: "Professional Services",
    description:
      "Marketplace intelligence & client invoicing networks.",
  },
  {
    title: "Government",
    description:
      "Sovereign clouds, public registries & zero-trust compliance.",
  },
  {
    title: "Media & Entertainment",
    description:
      "Global streaming CDNs, secure DRM & digital rights.",
  },
  {
    title: "Real Estate & Property",
    description:
      "Tokenized deeds, secure lease compliance & escrows.",
  },
  {
    title: "Mobility & Travel",
    description:
      "Autonomous vehicle mapping & fleet routing rails.",
  },
  {
    title: "Technology Companies",
    description:
      "Developer tools, SDK frameworks & high-velocity APIs.",
  },
];

export default function IndustrySpecialization() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-950/70 via-teal-700/70 to-cyan-900/70 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-center gap-12 sm:gap-16 lg:gap-20">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wide text-white">
            DEEP SPECIALIZATION
          </span>

          <h2 className="w-full text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Technology built around how industries actually operate
          </h2>

          <p className="max-w-4xl text-base font-normal leading-7 text-slate-50 sm:text-lg">
            Generic tech doesn&apos;t solve regulated problems. We build
            bespoke platform modules explicitly customized for different
            market verticals.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="flex min-h-[120px] flex-col items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5"
            >
              <h3 className="text-base font-bold leading-5 text-gray-800">
                {industry.title}
              </h3>

              <p className="text-xs font-normal leading-4 text-slate-500">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}