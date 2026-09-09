import Image from "next/image";

export default function Proof() {
  return (
    <section className="w-full border-b border-gray-800 bg-cyan-900/90">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-16 lg:px-28 lg:py-28">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Execution, Not Adjectives
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1100px] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Technology credibility is earned in production
          </h2>
        </div>

        {/* Proof Cards */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">

          {/* MVNO Card */}
          <article className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="text-3xl font-extrabold text-teal-400">
              30 Days
            </div>

            <h3 className="text-xl font-extrabold text-white">
              MVNO Onboarding
            </h3>

            <p className="text-sm font-normal leading-5 text-slate-400">
              A fast-growing mobile virtual network operator was fully
              onboarded onto ZoikoNex, bypassing legacy telco complexity to
              activate real-time billing and native partner routing in record
              time.
            </p>
          </article>

          {/* NGO Card */}
          <article className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="text-3xl font-extrabold text-teal-400">
              6 Weeks
            </div>

            <h3 className="text-xl font-extrabold text-white">
              Accessible Multilingual Platform
            </h3>

            <p className="text-sm font-normal leading-5 text-slate-400">
              An international NGO deployed a WCAG-aligned multilingual portal
              powered by Zoiko Tech, complete with integrated e-signatures,
              private document vaults, and auditable data dashboards.
            </p>
          </article>

        </div>

        {/* Engineering Scale */}
        <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-cyan-700/30 bg-cyan-700/60 p-6 sm:flex-row sm:items-center sm:gap-5 sm:p-7">

          {/* CPU Icon */}
          <div className="relative h-6 w-6 flex-shrink-0">
            <Image
              src="/about-us/cpu.png"
              alt="Engineering"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <p className="flex-1 text-base font-normal leading-6 text-slate-50">
            <strong className="font-bold text-white">
              Engineering Scale:
            </strong>{" "}
            Backed by a high-velocity development framework of over 100+
            specialized core software engineers in India, working alongside
            international product, design, legal, compliance and operations
            leadership.
          </p>

        </div>

      </div>
    </section>
  );
}