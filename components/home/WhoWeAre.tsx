import Image from "next/image";

const locations = [
  {
    group: "Headquarters",
    items: [
      { name: "Sacramento HQ", type: "Global" },
      { name: "London HQ", type: "European" },
    ],
  },
  {
    group: "Global Labs",
    items: [
      { name: "Singapore", type: "Innovation / R&D Hub" },
      { name: "Shenzhen", type: "Innovation / R&D Hub" },
    ],
  },
  {
    group: "Regional Nodes",
    items: [
      { name: "Austin", type: "Operational Node" },
      { name: "Albany", type: "Operational Node" },
      { name: "Dover", type: "Operational Node" },
      { name: "Orlando", type: "Operational Node" },
    ],
  },
];

const offices = [
  {
    title: "Global HQ",
    address:
      "1401 21st Street, Suite R, Sacramento, CA 95851 United States",
  },
  {
    title: "European HQ",
    address:
      "167-169 Great Portland Street, 5th Floor, London W1W 5PF United Kingdom",
  },
  {
    title: "Global Labs & Nodes",
    address:
      "Singapore · Marina Bay Centre Shenzhen · High-Tech Hub Austin, Albany, Dover, Orlando",
  },
];

export default function WhoWeAre() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-slate-950 via-teal-700 to-cyan-900 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-16 xl:gap-20">
        
        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            WHO WE ARE
          </p>

          <h2 className="w-full max-w-[900px] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Built in California. Engineered for the world.
          </h2>

          <p className="w-full max-w-[900px] text-base font-normal leading-6 text-slate-50">
            Zoiko Tech Inc. is a California-based global technology company
            building intelligent infrastructure, enterprise platforms,
            communications systems, financial technology, industry software,
            and domain-specific artificial intelligence. Zoiko Tech also
            serves as a technology engine for companies across the wider Zoiko
            Group.
          </p>
        </div>

        {/* Global Network */}
        <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-slate-950 outline outline-1 outline-cyan-700/20 lg:flex-row">
          
          {/* Map */}
          <div className="relative min-h-[280px] w-full overflow-hidden bg-slate-950/30 sm:min-h-[360px] lg:min-h-[520px] lg:w-[55%]">
            <Image
              src="/home/global-map.png"
              alt="Zoiko Tech global technology network"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          {/* Location List */}
          <div className="flex w-full flex-col gap-5 bg-slate-950 px-6 py-7 sm:px-8 lg:w-[45%] lg:px-8 lg:py-5">
            {locations.map((section, sectionIndex) => (
              <div key={section.group}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />

                    <h3 className="text-sm font-semibold uppercase text-teal-400">
                      {section.group}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-sm bg-teal-400" />

                        <div className="flex min-w-0 flex-1 flex-col">
                          <span className="text-sm font-bold text-white">
                            {item.name}
                          </span>

                          <span className="text-xs font-medium text-gray-400">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {sectionIndex < locations.length - 1 && (
                  <div className="mt-5 h-px w-full bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Office Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.title}
              className="flex flex-col items-start gap-3 rounded-xl bg-white p-6 outline outline-1 outline-neutral-200"
            >
              <h3 className="text-lg font-bold text-teal-400">
                {office.title}
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-400">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}