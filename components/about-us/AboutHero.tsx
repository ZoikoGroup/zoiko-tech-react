import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-[#07111F]">
      <div className="mx-auto flex min-h-[906px] max-w-[1440px] flex-col items-center justify-center gap-12 px-6 py-20 sm:px-10 lg:flex-row lg:gap-14 lg:px-20 lg:py-28">
        
        {/* Left Content */}
        <div className="flex w-full max-w-[735px] flex-col items-start gap-8 lg:flex-1">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              About ZoikoTech
            </span>
          </div>

          {/* Heading */}
          <h1 className="w-full text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[66px]">
            INTELLIGENCE.
            <br />
            INFRASTRUCTURE.
            <br />
            IMPACT.
          </h1>

          {/* Description */}
          <p className="max-w-[700px] text-base font-normal leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl">
            ZoikoTech Inc. is a California-based global technology company
            building intelligent infrastructure, enterprise platforms and
            domain-specific AI for organizations operating across industries,
            jurisdictions and borders.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative h-[360px] w-full max-w-[456px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0px_12px_40px_0px_rgba(0,0,0,0.25)] sm:h-[430px] lg:h-[500px] lg:w-[456px] lg:flex-shrink-0">
          <Image
            src="/about-us/about-hero.png"
            alt="ZoikoTech intelligent technology infrastructure"
            fill
            priority
            className="rounded-2xl object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 456px"
          />
        </div>

      </div>
    </section>
  );
}