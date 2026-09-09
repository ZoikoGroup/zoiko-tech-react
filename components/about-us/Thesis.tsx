export default function Thesis() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-28 lg:py-24">
        
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              Our Thesis
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1200px] text-3xl font-extrabold leading-[1.35] tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
            The next generation of technology companies will not be defined
            by software alone.
          </h2>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col gap-6">
          
          <p className="text-base font-normal leading-7 text-slate-500 sm:text-lg">
            They will be defined by the intelligence, infrastructure, trust
            and operating systems on which businesses and institutions
            increasingly depend. ZoikoTech is being built for that role.
          </p>

          <p className="text-base font-normal leading-7 text-slate-500 sm:text-lg">
            Headquartered in Sacramento, California, ZoikoTech develops
            technology across telecommunications, enterprise software,
            financial operations, cybersecurity, communications, media,
            healthcare, regulatory intelligence, cloud infrastructure and
            artificial intelligence. It also serves as a technology engine for
            companies across the wider Zoiko Group.
          </p>

          <p className="text-base font-normal leading-7 text-cyan-700 sm:text-lg">
            Our objective is straightforward: make complex systems easier to
            operate, regulated environments easier to navigate, and digital
            infrastructure more intelligent, auditable and resilient.
          </p>

        </div>
      </div>
    </section>
  );
}