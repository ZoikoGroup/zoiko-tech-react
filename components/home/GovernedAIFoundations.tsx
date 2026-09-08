import Image from "next/image";

const foundations = [
  {
    title: "Responsible AI",
    description:
      "Sovereign reasoning engines aligned with rigorous global ethical guidelines and transparent bias-mitigation code.",
    icon: "/home/responsible-ai.png",
  },
  {
    title: "Water-Tight Security",
    description:
      "Zero-trust model endpoints guarded by hardware security modules (HSM) and private cloud instances.",
    icon: "/home/water-tight-security.png",
  },
  {
    title: "Rigorous Privacy",
    description:
      "Our platform models never learn from your telemetry or private enterprise data. Your data is and remains yours alone.",
    icon: "/home/rigorous-privacy.png",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Pre-aligned to CCPA, GDPR, EU AI Act, and major global operational privacy frameworks from day one.",
    icon: "/home/regulatory-compliance.png",
  },
  {
    title: "Military-Grade Reliability",
    description:
      "Designed for distributed zero-single-point-of-failure deployment, ensuring uptime when it matters most.",
    icon: "/home/military-grade-reliability.png",
  },
  {
    title: "Empathetic Accessibility",
    description:
      "Engineered to satisfy WCAG standards, bringing next-gen computing tools to everyone universally.",
    icon: "/home/empathetic-accessibility.png",
  },
];

export default function GovernedAIFoundations() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-[600px] -translate-x-1/2 rounded-full bg-teal-400/5 blur-[50px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1296px] flex-col items-start gap-12 sm:gap-16 lg:gap-20">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
            GOVERNED AI FOUNDATIONS
          </span>

          <h2 className="w-full max-w-[1000px] text-3xl font-extrabold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Intelligence is valuable only when it can be trusted
          </h2>

          <p className="max-w-[900px] text-base font-normal leading-7 text-slate-400 sm:text-lg">
            We build transparency, reliability, and human accountability
            directly into the root code of our artificial intelligence
            architectures.
          </p>
        </div>

        {/* Foundation Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foundations.map((foundation) => (
            <article
              key={foundation.title}
              className="flex min-h-[260px] flex-col items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 backdrop-blur-[6px] sm:p-8"
            >
              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <Image
                  src={foundation.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col items-start gap-2">
                <h3 className="text-2xl font-extrabold leading-9 text-zinc-900 sm:text-3xl">
                  {foundation.title}
                </h3>

                <p className="text-sm font-normal leading-5 text-slate-400">
                  {foundation.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}