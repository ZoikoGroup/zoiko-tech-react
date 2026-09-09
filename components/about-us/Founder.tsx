import Image from "next/image";

export default function Founder() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-12 lg:px-28 lg:py-24">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              Founder-Led. Institution-Building.
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1100px] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            The institution being built is larger than any one founder or
            product
          </h2>
        </div>

        {/* Founder Content */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">

          {/* Founder Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl sm:h-[480px] lg:h-[420px] lg:w-[360px] lg:flex-shrink-0">
            <Image
              src="/about-us/founder.png"
              alt="Lennox McLeod"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          {/* Founder Information */}
          <div className="flex w-full flex-1 flex-col items-start gap-6">

            {/* Name */}
            <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Lennox McLeod
            </h3>

            {/* Role */}
            <p className="text-base font-semibold text-cyan-700">
              Founder &amp; Executive Chairman of Zoiko Group
            </p>

            {/* Description */}
            <p className="text-base font-normal leading-7 text-slate-500 sm:text-lg">
              ZoikoTech was founded by Lennox McLeod, Founder and Executive
              Chairman of Zoiko Group. His background spans accounting,
              finance, law, technology strategy and cross-border enterprise
              building.
            </p>

            <p className="text-base font-normal leading-7 text-slate-500 sm:text-lg">
              Under his direction, ZoikoTech Inc. has scaled as a fundamental
              technology core division of the wider Zoiko Group, developing
              next-gen tools for both external enterprise customers and
              complex internal group software systems.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}