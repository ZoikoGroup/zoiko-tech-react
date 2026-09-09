const locations = [
  {
    title: "Global HQ",
    description:
      "1401 21st Street, Suite R, Sacramento, CA 95851 United States",
  },
  {
    title: "European HQ",
    description:
      "167-169 Great Portland Street, 5th Floor, London W1W 5PF United Kingdom",
  },
  {
    title: "Labs & Regional Nodes",
    description:
      "Singapore (Marina Bay), Shenzhen (High-Tech Hub), Austin, Albany, Dover, Orlando, Springfield",
  },
];

export default function Global() {
  return (
    <section className="w-full border-b border-gray-800 bg-[#0F3440]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-28">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Global From the Architecture Up
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1100px] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Built in California. Engineered for the world.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1100px] text-base font-normal leading-7 text-slate-100 sm:text-lg">
            Headquartered in Sacramento, California with regional presence in
            London, Singapore and Shenzhen, plus U.S. coordination locations
            including Austin, Albany, Dover, Orlando and Springfield.
          </p>
        </div>

        {/* Locations */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.title}
              className="flex min-h-[150px] flex-col gap-3 rounded-xl border border-slate-700/40 bg-[#172238] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-teal-400">
                {location.title}
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-400">
                {location.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}