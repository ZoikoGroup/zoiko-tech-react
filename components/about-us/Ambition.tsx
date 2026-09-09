export default function Ambition() {
  return (
    <section className="w-full border-b border-gray-800 bg-[#0A0F1A9E]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-28">

        {/* Header */}
        <div className="flex w-full flex-col items-center gap-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Our Ambition
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Build Technology People Depend On
          </h2>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-center gap-6">

          {/* Description */}
          <p className="w-full max-w-[800px] text-center text-base font-normal leading-7 text-slate-400 sm:text-lg">
            We are not trying to become the company with the longest product
            list. We are building a smaller number of technologies deeply
            enough that businesses run on them, developers build on them,
            institutions trust them and users choose them because they make
            difficult systems work better.
          </p>

          {/* Statement */}
          <div className="w-full pt-3 text-center">
            <p className="text-xl font-extrabold tracking-tight text-teal-400 sm:text-2xl lg:text-3xl">
              INTELLIGENCE. INFRASTRUCTURE. IMPACT.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}