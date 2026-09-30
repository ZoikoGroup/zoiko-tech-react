import Image from "next/image";

type DevLayerCard = {
  title: string;
  description: string;
};

const devLayerCards: DevLayerCard[] = [
  {
    title: "Build",
    description:
      "APIs, SDKs, model interfaces where approved, webhooks, authentication.",
  },
  {
    title: "Learn",
    description:
      "Documentation, API reference, quickstarts, tutorials, telecom architecture guides.",
  },
  {
    title: "Test",
    description:
      "Sandbox, sample apps and reference implementations only where externally live.",
  },
  {
    title: "Operate",
    description:
      "Usage and metering where available, observability, status, changelog, developer support.",
  },
];

export default function ApiIntegrationAndDeveloperLayerSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Area */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            API, integration and developer layer
          </h2>
        </div>

        {/* Main Content Grid: Cards on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Side: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {devLayerCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between h-full shadow-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Architectural Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full h-72 sm:h-80 max-w-md">
              <Image
                src="/tel/14.png"
                alt="API, integration and developer layer architecture"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Footer Note and Action Button */}
        <div className="max-w-3xl">
          <p className="text-slate-300 text-xs sm:text-sm mb-6">
            No protocol or connector claims without authoritative technical
            documentation.
          </p>
          <div>
            <button
              type="button"
              className="px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 transition-colors text-sm font-medium shadow-md"
            >
              Explore Developer Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
