import Image from "next/image";

export default function ZoikoTech() {
  return (
    <section className="w-full bg-slate-950 px-6 py-16 sm:px-8 lg:px-12 xl:px-[72px]">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left Content */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-8 lg:flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-700/30 bg-cyan-700/20 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              ZOIKO TECH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-extrabold leading-6 text-white sm:text-2xl">
            INTELLIGENCE.
            <br />
            INFRASTRUCTURE.
            <br />
            IMPACT.
          </h2>

          {/* Main Description */}
          <p className="text-base font-normal leading-7 text-slate-400 sm:text-lg">
            Zoiko Tech is a global technology company building cloud and
            digital infrastructure, artificial intelligence, communications,
            enterprise software, financial technology, and industry platforms
            for organizations and people worldwide.
          </p>

          {/* Secondary Description */}
          <p className="text-sm font-normal leading-5 text-slate-500 sm:text-base">
            We make complex systems easier to operate, regulated environments
            easier to navigate, and digital infrastructure more intelligent,
            auditable, and resilient.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#platforms"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-600 sm:text-base"
            >
              Explore our platforms
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950 sm:text-base"
            >
              Talk to Zoiko Tech
            </a>
          </div>

          {/* Secondary Link */}
          <a
            href="#ai-infrastructure"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 transition hover:text-teal-300 sm:text-base"
          >
            Explore AI &amp; infrastructure
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:flex-1">
          <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/home/zoiko-tech.png"
              alt="Zoiko Tech"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}