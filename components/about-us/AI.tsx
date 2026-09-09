import Image from "next/image";

const aiDomains = [
  "Logistics & Supply Chain",
  "Telecommunications",
  "Financial Services",
  "Healthcare",
  "Regulatory Compliance",
  "Media & Streaming",
  "Government Infrastructures",
];

const aiCapabilities = [
  {
    title: "Governed AI",
    description:
      "Reliable intelligence that can be explained, governed and used responsibly. Human oversight, evidence, permissions and auditability are product requirements.",
  },
  {
    title: "Agentic Systems",
    description:
      "ZoikoVertex represents the company's commercial entry into governed agentic execution, mapping complex operational decisions seamlessly.",
  },
];

export default function AI() {
  return (
    <section className="w-full overflow-hidden border-b border-gray-800 bg-[#0F3440]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-24">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Artificial Intelligence
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Intelligence with Domain Depth
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1100px] text-base font-normal leading-7 text-slate-100 sm:text-lg">
            ZoikoTech&apos;s AI strategy is not based on attaching a chatbot to
            every application. We build domain intelligence around the actual
            decision structures, data, workflows and regulatory constraints of
            the industries we serve.
          </p>
        </div>

        {/* AI Domains + Capabilities */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Domain Stacks */}
          <div className="flex w-full flex-col gap-5">
            <h3 className="text-xl font-extrabold text-teal-400">
              7 Key AI Domain Stacks
            </h3>

            <div className="flex w-full flex-col gap-3">
              {aiDomains.map((domain, index) => (
                <div
                  key={domain}
                  className="flex w-full items-center gap-3 border-b border-white/10 pb-2"
                >
                  <span className="w-7 text-base font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-base font-normal text-slate-300">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="flex w-full flex-col gap-6">
            {aiCapabilities.map((item) => (
              <article
                key={item.title}
                className="flex w-full flex-col gap-3 rounded-xl border border-slate-700/50 bg-[#172238] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-lg"
              >
                <h3 className="text-xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-5 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ZoikoLogia Core */}
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-teal-700/30 bg-[#172238] p-6 sm:p-8 lg:flex-row lg:items-center">
          {/* Content */}
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="text-2xl font-extrabold text-teal-400 sm:text-3xl">
              ZoikoLogia Core
            </h3>

            <p className="text-base font-normal leading-6 text-slate-400">
              A specialist LLM environment for accounting, finance and
              public-markets professionals.{" "}
              <strong className="font-bold text-white">Kriton</strong> is its
              conversational AI interface;{" "}
              <strong className="font-bold text-white">Massarius</strong> is
              its professional platform.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-28 w-full overflow-hidden rounded-lg sm:h-36 lg:w-44 lg:flex-shrink-0">
            <Image
              src="/about-us/logia.png"
              alt="ZoikoLogia Core"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 176px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}