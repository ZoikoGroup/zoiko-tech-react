import Image from "next/image";

type PlatformCard = {
  title: string;
  description: string;
  imageSrc: string;
};

const platformCards: PlatformCard[] = [
  {
    title: "ZoikoNex",
    description:
      "Telecom-grade OSS/BSS and operational infrastructure; telecom OSS/BSS, monetization and operator infrastructure.",
    imageSrc: "/tel/15.png",
  },
  {
    title: "Zoiko Local",
    description:
      "Communications and local-number infrastructure: local numbers, calling, video, routing and AI-powered customer communications.",
    imageSrc: "/tel/16.png",
  },
  {
    title: "Relevant communications infrastructure",
    description:
      "Additional delivery layers only from the platform registry and current product evidence.",
    imageSrc: "/tel/17.png",
  },
  {
    title: "Developer Platform",
    description:
      "Shared APIs, SDKs, tooling and ecosystem evidence when public-ready. Not a telecom product.",
    imageSrc: "/tel/18.png",
  },
];

export default function PlatformEvidenceSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Platform evidence
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Named platforms appear only within approved scope, maturity,
            operator and market records.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {platformCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between overflow-hidden h-full"
            >
              <div className="relative w-full h-44 bg-white border-b border-[#D5E3E5]/60 flex items-center justify-center">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-[14px] bg-teal-800 text-white hover:bg-teal-900 transition-colors text-sm font-medium shadow-md"
          >
            Explore ZoikoNex
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-[14px] bg-white border border-[#D5E3E5] text-teal-800 hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm"
          >
            Explore Zoiko Local
          </button>
        </div>
      </div>
    </section>
  );
}
