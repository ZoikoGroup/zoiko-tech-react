import Image from "next/image";

const capabilities = [
  {
    image: "/about-us/ai.png",
    title: "Artificial Intelligence & Agentic",
    description:
      "Domain-specific AI, governed agentic execution, professional intelligence and automation.",
  },
  {
    image: "/about-us/cloud.png",
    title: "Cloud & Digital Infrastructure",
    description:
      "Scalable infrastructure for Zoiko platforms, regulated workloads and future developer services.",
  },
  {
    image: "/about-us/finance.png",
    title: "Enterprise & Financial Operations",
    description:
      "Payroll, HR, billing, accounting, business operations, workforce intelligence and productivity.",
  },
  {
    image: "/about-us/media.png",
    title: "Communications & Media",
    description:
      "Messaging, calling, telecom services, streaming, live events and real-time digital experiences.",
  },
  {
    image: "/about-us/security.png",
    title: "Security, Identity & Assurance",
    description:
      "Cybersecurity, trust, regulatory evidence, identity, access, governance and auditable controls.",
  },
  {
    image: "/about-us/industry.png",
    title: "Industry Technology Solutions",
    description:
      "Telecommunications, healthcare, property, mobility, finance, government, media and other vertical systems.",
  },
];

export default function Platform() {
  return (
    <section className="w-full border-b border-gray-800 bg-teal-900/90">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-16 lg:px-28 lg:py-28">
        {/* Section Header */}
        <div className="flex w-full flex-col items-start gap-4">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              A Global Technology Company
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Built as a Platform Company
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1000px] text-base font-normal leading-7 text-slate-400 sm:text-lg">
            ZoikoTech is not organized around a single application or
            industry. We build reusable technology capabilities and apply them
            to important operating problems.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-lg sm:p-7"
            >
              {/* Card Image */}
              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 333px"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-lg font-extrabold leading-7 text-white sm:text-xl">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-sm font-normal leading-5 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Quote */}
        <div className="flex w-full items-center justify-center rounded-xl border border-cyan-700/30 bg-cyan-700/10 px-5 py-6 sm:px-6">
          <p className="text-center text-base font-semibold leading-7 text-teal-400 sm:text-lg lg:text-xl">
            &quot;Build technologies that can stand independently. Integrate
            them where integration creates leverage.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}