import Image from "next/image";

const principles = [
  {
    icon: "/about-us/security2.png",
    title: "Zero-Trust Security",
    description:
      "Security and privacy by design, with strict zero-trust network principles built natively at every microservices endpoint.",
  },
  {
    icon: "/about-us/jurisdiction.png",
    title: "Jurisdiction Aware",
    description:
      "Active policy routing and sovereign database segregation designed around local operational compliance guidelines.",
  },
  {
    icon: "/about-us/audit.png",
    title: "Immutable Audit Trails",
    description:
      "Continuous auditable logging, data provenance tracking, and regulatory evidence generation for critical enterprise workloads.",
  },
  {
    icon: "/about-us/oversight.png",
    title: "Human Oversight Controls",
    description:
      "Granular role-based access management with explicit human verification triggers on high-impact agentic actions.",
  },
  {
    icon: "/about-us/accessibility.png",
    title: "WCAG Accessibility First",
    description:
      "Empathetic accessibility treated as a non-negotiable engineering mandate across every customer-facing application interface.",
  },
  {
    icon: "/about-us/ai-governance.png",
    title: "Accountable AI Framework",
    description:
      "Clear model explainability, strictly governed training boundaries, and absolute model execution logging.",
  },
];

export default function Governance() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-24">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              Trust Is Part of the Architecture
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1100px] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Governance cannot sit outside the product lifecycle
          </h2>
        </div>

        {/* Governance Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[280px] flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-700/30 hover:shadow-lg sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-700/30 bg-cyan-700/10">
                <div className="relative h-5 w-5">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="20px"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold leading-7 text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}