import Image from "next/image";

const industries = [
  {
    image: "/about-us/telecom.png",
    title: "Telecommunications",
    description:
      "ZoikoNex, communications infrastructure, billing, eSIM, and operator integrations.",
  },
  {
    image: "/about-us/finance1.png",
    title: "Financial & Business",
    description:
      "Comprehensive payroll, billing, accounting, financial logic, and professional intelligence.",
  },
  {
    image: "/about-us/security1.png",
    title: "Cybersecurity & Trust",
    description:
      "Protected by ZoikoShield, identity access management, risk matrix, and automated auditing.",
  },
  {
    image: "/about-us/healthcare.png",
    title: "Healthcare Operations",
    description:
      "Medication access through ZoikoMeds and sovereign compliant healthcare administrative systems.",
  },
  {
    image: "/about-us/media1.png",
    title: "Media & Communications",
    description:
      "ZoikoStream platform integrations, Live Events delivery, Sema, and local telecom routing.",
  },
  {
    image: "/about-us/government.png",
    title: "Government & Enterprise",
    description:
      "Highly accessible sovereign digital services and continuous regulatory compliance engines.",
  },
  {
    image: "/about-us/mobility.png",
    title: "Mobility & Property",
    description:
      "Logistics, transport integrations through Zoiko Rides, and property management on Zoiko Rooms.",
  },
  {
    image: "/about-us/agriculture.png",
    title: "Agriculture & Foods",
    description:
      "Smart farming solutions, food supply chain management, agricultural analytics, and sustainable food production systems.",
  },
];

export default function Industries() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-24">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              Technology for Complex Industries
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1100px] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Strongest where software must do more than present information
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group flex min-h-[320px] flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden rounded-lg">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 241px"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold leading-7 text-slate-900">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-500">
                {industry.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}