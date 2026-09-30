import Image from "next/image";

type TechCard = {
  title: string;
  description: string;
  status: string;
  statusType: "pending" | "available";
};

const leftCards: TechCard[] = [
  {
    title: "Operator modernization",
    description:
      "Initial stack, operating problem, architecture and rollout, approved result.",
    status: "Evidence pending",
    statusType: "pending",
  },
  {
    title: "Subscriber operations",
    description:
      "Request or service problem, workflow and exception model, result.",
    status: "Evidence pending",
    statusType: "pending",
  },
  {
    title: "Monetization operations",
    description:
      "Commercial process, controls and integration, outcome metric only if evidence exists.",
    status: "Evidence pending",
    statusType: "pending",
  },
  {
    title: "Partner integration",
    description:
      "Partner dependency, interface, status and exception model, operational outcome.",
    status: "Evidence pending",
    statusType: "pending",
  },
];

export default function TechnologyInPracticeSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Technology in practice
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Proof appears only when approved for public use.
          </p>
        </div>

        {/* Main Grid: Cards/List on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          {/* Left Side: 4 Top Cards + 1 Wide Bottom Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 2x2 Grid for first 4 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {leftCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between h-full shadow-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-slate-300 text-xs font-medium">
                      {card.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Full-Width Card (Reference architecture) */}
            <div className="bg-[#FFFFFF0F] border border-[#7FD0D959] p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between shadow-lg">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  Reference architecture
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Subscriber, service, commercial and communications layers with
                  APIs, identity, observability and governance.
                </p>
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-teal-400/40 bg-teal-900/30 text-teal-200 text-xs font-medium">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Architecture Stack Graphic */}
          <div className="lg:col-span-5 flex justify-center sticky top-24">
            <div className="relative w-full h-[450px] sm:h-[500px] max-w-md">
              <Image
                src="/tel/19.png"
                alt="Technology in practice architecture stack"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 transition-colors text-sm font-medium shadow-md"
          >
            Read evidence
          </button>
        </div>
      </div>
    </section>
  );
}
