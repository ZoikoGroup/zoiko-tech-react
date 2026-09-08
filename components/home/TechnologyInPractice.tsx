import Image from "next/image";

const caseStudies = [
  {
    image: "/home/telecom-case.png",
    category: "TELECOMMUNICATIONS",
    result: "GO-LIVE IN 60 DAYS",
    title: "Sovereign Telecom OSS/BSS Infrastructure",
    context:
      "A fast-growing MVNO needed to accelerate launch and bypass complex legacy telco integrations.",
    builtWith:
      "ZoikoNex, Sovereign billing engine, eSIM profiles",
  },
  {
    image: "/home/communications-case.png",
    category: "NGO & ENTERPRISE",
    result: "6-WEEK DEPLOYMENT",
    title: "Multilingual Accessible Communications Platform",
    context:
      "A global NGO required a distributed, WCAG-compliant interface serving multi-border citizen populations.",
    builtWith:
      "Zoiko Sema messaging, Decentralized identity ledgers",
  },
  {
    image: "/home/treasury-case.png",
    category: "FINANCIAL TECH",
    result: "99.99% RESILIENCE",
    title: "Cross-Border Treasury & Compliance Remittance",
    context:
      "A multijurisdictional financial institution required zero-single-point-of-failure routing under strict compliance.",
    builtWith:
      "ZoikoPay, Zoiko Remit core, ZoikoAssure",
  },
];

export default function TechnologyInPractice() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-start gap-12 sm:gap-14">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
            EVIDENCE-FIRST CASES
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Technology in practice
          </h2>

          <p className="max-w-[800px] text-base font-normal leading-7 text-slate-500 sm:text-lg">
            How global organizations leverage Zoiko Tech modules to overcome
            engineering and regulatory constraints.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0px_4px_12px_0px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_30px_0px_rgba(15,23,42,0.10)]"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">

                {/* Category + Result */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-700/10 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                    {caseStudy.category}
                  </span>

                  <span className="text-xs font-bold text-emerald-500">
                    {caseStudy.result}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                  {caseStudy.title}
                </h3>

                {/* Context */}
                <p className="mt-4 text-sm leading-5 text-slate-500">
                  <span className="font-semibold text-slate-900">
                    Context:{" "}
                  </span>
                  {caseStudy.context}
                </p>

                {/* Built With */}
                <p className="mt-4 text-xs font-normal leading-5 text-slate-400">
                  Built with: {caseStudy.builtWith}
                </p>
              </div>

              {/* Link */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors duration-200 hover:text-cyan-800"
                >
                  Read case study
                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}