import Image from "next/image";

const ITEMS = [
  {
    number: "01",
    title: "No universal coverage",
    text: "Countries, industries, obligations and integrations need confirmation.",
  },
  {
    number: "02",
    title: "No evidence guarantee",
    text: "Immutability, audit readiness, exports and retention remain unverified.",
  },
  {
    number: "03",
    title: "Sensitive records",
    text: "No actual organization records, raw evidence or personal data in the public page.",
  },
  {
    number: "04",
    title: "No automated assurance",
    text: "Tracking and internal review never imply continuous compliance or certified standing.",
  },
] as const;

export default function GovernanceClarity() {
  return (
    <section className="w-full bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557] py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12">
          Governance clarity without overclaim.
        </h2>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-6">
          {ITEMS.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF06] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm"
            >
              <span className="text-[#F0596B] font-mono text-xs font-semibold tracking-widest mb-4">
                {item.number}
              </span>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 4th Card and Image Side by Side with items-start */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 bg-[#FFFFFF06] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm">
            <span className="text-[#F0596B] font-mono text-xs font-semibold tracking-widest mb-4">
              {ITEMS[3].number}
            </span>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {ITEMS[3].title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {ITEMS[3].text}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex items-center justify-end">
            <div className="relative w-full h-[440px]">
              <Image
                src="/comp/2.png"
                alt="Governance progression illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
