import Image from "next/image";

const solutions = [
  {
    title: "Deploy Enterprise AI",
    description:
      "Build agentic, secure reasoning layers on top of governed corporate datastores without privacy leaks.",
    icon: "/home/enterprise-ai.png",
  },
  {
    title: "Run Global Operations",
    description:
      "Consolidate business workflows, HR, and compliance across dozens of international jurisdictions seamlessly.",
    icon: "/home/global-operations1.png",
  },
  {
    title: "Build Telecom Businesses",
    description:
      "Launch MVNO networks, manage eSIM profiles, and run high-volume billing logic in days rather than months.",
    icon: "/home/telecom-businesses.png",
  },
  {
    title: "Modernize Financial Operations",
    description:
      "Incorporate fast payments, secure billing structures, automated taxes, and local payout remittance logic.",
    icon: "/home/financial-operations.png",
  },
  {
    title: "Secure Digital Operations",
    description:
      "Defend core cloud infrastructure with continuous zero-trust architectures and automated compliance auditing.",
    icon: "/home/secure-digital-operations.png",
  },
  {
    title: "Build Customer Experiences",
    description:
      "Deliver highly contextual, hyper-local digital marketplaces, mobile apps, and customer portals.",
    icon: "/home/customer-experiences.png",
  },
];

export default function SolutionsByOutcome() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-start gap-10 sm:gap-12 lg:gap-14">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
            HOW WE HELP
          </span>

          <h2 className="w-full text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Solutions by Outcome
          </h2>

          <p className="max-w-4xl text-base font-normal leading-7 text-slate-500 sm:text-lg">
            Empowering modern enterprises with modular blocks built to speed
            up innovation, enforce compliance, and solve operational
            bottlenecks.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="flex min-h-[310px] flex-col items-start rounded-2xl border border-neutral-200 bg-slate-50 p-6 sm:p-8"
            >
              {/* Icon */}
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-700/20">
                <Image
                  src={solution.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
              </div>

              {/* Content */}
              <div className="mt-5 flex w-full flex-col items-start gap-2">
                <h3 className="text-2xl font-extrabold leading-9 text-slate-900 sm:text-3xl">
                  {solution.title}
                </h3>

                <p className="text-sm font-normal leading-5 text-slate-500">
                  {solution.description}
                </p>
              </div>

              {/* Link */}
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-cyan-700 transition hover:text-teal-700"
              >
                Get the solution blueprint
                <span aria-hidden="true" className="text-sm">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}