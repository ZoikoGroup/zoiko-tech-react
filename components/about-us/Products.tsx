import Image from "next/image";

const products = [
  {
    image: "/about-us/nex.png",
    name: "ZoikoNex",
    description:
      "Telecom-grade OSS/BSS, billing, monetization and operator infrastructure",
  },
  {
    image: "/about-us/vertex.png",
    name: "ZoikoVertex",
    description:
      "Governed agentic execution for marketing, scheduling and digital workflows",
  },
  {
    image: "/about-us/time.png",
    name: "ZoikoTime",
    description:
      "Governed workforce-time and productivity intelligence",
  },
  {
    image: "/about-us/hr.png",
    name: "Zoiko HR",
    description:
      "Human-capital and workforce management",
  },
  {
    image: "/about-us/payroll.png",
    name: "Zoiko Payroll",
    description:
      "Payroll operations, controls, reporting and multinational payroll workflows",
  },
  {
    image: "/about-us/billing.png",
    name: "Zoiko Billing",
    description:
      "Billing, invoicing, collections and revenue operations",
  },
  {
    image: "/about-us/local.png",
    name: "Zoiko Local",
    description:
      "Communications and local-number infrastructure",
  },
  {
    image: "/about-us/sema.png",
    name: "Zoiko Sema",
    description:
      "Meetings, messaging and calling",
  },
  {
    image: "/about-us/stream.png",
    name: "ZoikoStream Live",
    description:
      "Commercial live-event broadcasting and digital event delivery",
  },
  {
    image: "/about-us/meds.png",
    name: "ZoikoMeds",
    description:
      "Medication search and pharmacy-availability intelligence",
  },
  {
    image: "/about-us/social.png",
    name: "ZoikoSocial",
    description:
      "Values-based consumer social platform",
  },
  {
    image: "/about-us/rooms.png",
    name: "Zoiko Rooms",
    description:
      "Technology-enabled property and room marketplace",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-24">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              A Platform Estate Already in Market
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Commercial Platforms &amp; Active Development
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1000px] text-base font-normal leading-7 text-slate-500 sm:text-lg">
            ZoikoTech&apos;s current technology estate includes commercially
            launched platforms as well as major systems under active
            development.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col gap-3 rounded-xl border border-neutral-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-28 w-full overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 249px"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-bold leading-7 text-slate-900">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-xs font-normal leading-5 text-slate-500">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        {/* Active Development */}
        <div className="flex w-full flex-col items-start gap-2 rounded-xl bg-slate-100 p-5 sm:p-6">
          <p className="text-xs font-bold tracking-wide text-cyan-700">
            ACTIVE DEVELOPMENT PIPELINE
          </p>

          <p className="w-full text-sm font-normal leading-5 text-slate-500">
            ZoikoSuite, Zoiko Mail, Zoiko Cloud, the wider ZoikoStream
            platform, Zoiko Rides, ZoikoShield, Zoiko Loop, and remaining
            Zoiko AI domain stacks.
          </p>
        </div>

      </div>
    </section>
  );
}