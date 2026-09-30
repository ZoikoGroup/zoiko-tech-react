import Image from "next/image";

type FailureCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const failureData: FailureCardProps[] = [
  {
    title: "Hidden dependencies",
    description:
      "Application lists aren't enough. Relationships, interfaces, users, data and downstream jobs must be mapped.",
    imageSrc: "/modern/2.png",
  },
  {
    title: "Big-bang replacement",
    description: "Contrast with staged coexistence and migration waves.",
    imageSrc: "/modern/3.png",
  },
  {
    title: "Point-to-point sprawl",
    description: "Ad hoc integrations multiply operational and change cost.",
    imageSrc: "/modern/4.png",
  },
  {
    title: "Unclear data ownership",
    description:
      "System of record and synchronization decisions must be explicit.",
    imageSrc: "/modern/5.png",
  },
];

export default function WhyModernizationFailsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why modernization fails
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Legacy replacement is rarely one migration, and disconnected point
            integrations add long-term operating cost. These are the seven
            places it usually breaks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {failureData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
