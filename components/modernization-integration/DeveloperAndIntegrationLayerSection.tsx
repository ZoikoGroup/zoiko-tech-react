import Image from "next/image";
import Link from "next/link";

type DeveloperCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const developerCards: DeveloperCardProps[] = [
  {
    title: "Build",
    description:
      "APIs, SDKs, model interfaces where approved, webhooks, authentication.",
    imageSrc: "/modern/9.png",
  },
  {
    title: "Learn",
    description:
      "Documentation, API reference, quickstarts, tutorials, architecture guides.",
    imageSrc: "/modern/10.png",
  },
  {
    title: "Test",
    description:
      "Sandbox, sample apps and reference implementations, only where externally available.",
    imageSrc: "/modern/11.png",
  },
  {
    title: "Operate",
    description:
      "Usage and metering where available, observability, changelog, developer...",
    imageSrc: "/modern/12.png",
  },
];

export default function DeveloperAndIntegrationLayerSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Developer and integration layer
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Shared technical primitives: APIs, SDKs, events, webhooks, identity
            and observability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {developerCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col h-full shadow-lg"
            >
              {/* Image Container */}
              <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-slate-400 text-xs md:text-sm mb-8">
          Sandbox and Developer Console stay hidden until live and externally
          supported.
        </p>

        {/* Action Button */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3.5 rounded-full bg-white text-black hover:bg-slate-100 transition-colors text-sm md:text-base font-medium shadow-lg"
          >
            Explore Developer Platform
          </Link>
        </div>
      </div>
    </section>
  );
}
