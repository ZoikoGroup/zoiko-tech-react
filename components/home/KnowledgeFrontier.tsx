import Image from "next/image";

const researchCards = [
  {
    image: "/home/research.png",
    category: "ZOIKO RESEARCH",
    title:
      "Formal Verification of Multi-Agent AI Workflows in Regulated Operations",
    description:
      "A mathematically rigorous analysis of transaction integrity, verification safety boundaries, and compliance automation.",
  },
  {
    image: "/home/frontier.png",
    category: "FRONTIER LABS",
    title:
      "The Future of Serverless Telecom Routing Over Distributed eSIM Fabrics",
    description:
      "Exploratory system architecture proposals for dynamic telco provisioning using micro-second cold-starts.",
  },
  {
    image: "/home/insights.png",
    category: "INSIGHTS & AUDITS",
    title:
      "Building Zero-Trust Enterprise Saas Without Performance Penalty",
    description:
      "Engineering team insights into cryptographic hardware acceleration and low-latency API proxy strategies.",
  },
];

export default function KnowledgeFrontier() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-14">
        
        {/* Section Heading */}
        <div className="flex w-full flex-col items-start gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
            KNOWLEDGE FRONTIER
          </p>

          <h2 className="w-full text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Bespoke research &amp; frontier insights
          </h2>

          <p className="w-full max-w-[800px] text-base font-normal leading-6 text-slate-500 sm:text-lg sm:leading-7">
            Advancing the mathematical models, regulatory schemas, and
            physical computing parameters powering tomorrow&apos;s system
            orchestration.
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchCards.map((card) => (
            <article
              key={card.title}
              className="group flex h-full flex-col justify-between rounded-xl bg-white p-6 outline outline-1 outline-neutral-200 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-start gap-4">

                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-500 group-hover:bg-slate-950/10" />
                </div>

                {/* Category */}
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {card.category}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold leading-6 text-slate-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="line-clamp-3 text-sm font-normal leading-5 text-slate-500">
                  {card.description}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 transition-colors duration-300 hover:text-cyan-900"
                >
                  <span>Read technical paper</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
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