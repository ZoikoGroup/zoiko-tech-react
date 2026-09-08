import Image from "next/image";

const developerSections = [
  {
    number: "01",
    title: "Build",
    items: [
      "REST & gRPC APIs",
      "Python, Go & Node.js SDKs",
      "Zoiko AI Model APIs",
      "Real-time Event Webhooks",
    ],
  },
  {
    number: "02",
    title: "Test",
    items: [
      "Isolated Sandbox Mode",
      "Interactive API Playground",
      "Language-specific Quickstarts",
      "Production-grade Blueprints",
    ],
  },
  {
    number: "03",
    title: "Operate",
    items: [
      "Token-based Authentication",
      "Granular Access Controls",
      "Usage Metering Pipelines",
      "Distributed Observability",
    ],
  },
  {
    number: "04",
    title: "Ecosystem",
    items: [
      "SaaS Connectors",
      "Certified Technology Partners",
      "Zoiko Marketplace Listings",
      "Governance Frameworks",
    ],
  },
];

export default function DeveloperPlatform() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-slate-950/70 via-teal-700/70 to-cyan-900/70 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-center gap-12 sm:gap-16 lg:gap-20">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            ZOIKO FOR DEVELOPERS
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Build on Zoiko technology
          </h2>

          <p className="max-w-[900px] text-base font-normal leading-7 text-slate-50 sm:text-lg">
            APIs, SDKs, model interfaces, webhooks, sandbox environments,
            identity, observability, usage controls, documentation and
            integrations form the common developer layer across the Zoiko
            ecosystem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {developerSections.map((section) => (
            <article
              key={section.number}
              className="flex min-h-[330px] flex-col rounded-xl border border-neutral-200 bg-white p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4">

                {/* Card Header */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
                    {section.title}
                  </h3>

                  <span className="text-xs font-bold tracking-wide text-teal-400/40">
                    {section.number}
                  </span>
                </div>

                <div className="h-px w-full bg-cyan-700/10" />

                {/* Card Items */}
                <div className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="/home/code.png"
                        alt=""
                        width={16}
                        height={16}
                        className="size-4 shrink-0 object-contain"
                      />

                      <span className="min-w-0 text-sm font-normal text-slate-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-teal-900 transition hover:bg-slate-100"
          >
            Explore Developer Platform
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>

          <a
            href="#"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Read documentation
          </a>
        </div>

      </div>
    </section>
  );
}