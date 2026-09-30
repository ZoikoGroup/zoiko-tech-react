import Image from "next/image";

type OperateCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const operateCards: OperateCardProps[] = [
  {
    title: "Modernize OSS/BSS",
    description:
      "Connect and evolve subscriber, service and business operations without a risky all-at-once",
    imageSrc: "/tel/2.png",
  },
  {
    title: "Improve subscriber operations",
    description:
      "Make service state, requests, exceptions and ownership easier to operate.",
    imageSrc: "/tel/3.png",
  },
  {
    title: "Strengthen monetization",
    description:
      "Create clearer commercial controls around offers, usage, billing and recurring service",
    imageSrc: "/tel/4.png",
  },
  {
    title: "Build communications services",
    description:
      "Use approved number, calling, routing and communications infrastructure.",
    imageSrc: "/tel/5.png",
  },
  {
    title: "Connect partners / systems",
    description: "Standardize APIs, events, identity and partner integrations.",
    imageSrc: "/tel/6.png",
  },
  {
    title: "Improve operational assurance",
    description:
      "Surface service, integration, revenue-risk and exception states earlier.",
    imageSrc: "/tel/7.png",
  },
];

export default function OperateBetterSection() {
  return (
    <section className="w-full min-h-screen bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            What do you need to operate better?
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Choose the closest intent and jump to the matching part of the
            operator model.
          </p>
        </div>

        {/* Cards Grid: 2 top rows of 4/2 or custom layout, matching image structure (4 top, 2 wide bottom) */}
        <div className="space-y-6">
          {/* Top Row: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operateCards.slice(0, 4).map((card, index) => (
              <div
                key={index}
                className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-[#D5E3E5]/60 bg-white">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Wider Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {operateCards.slice(4, 6).map((card, index) => (
              <div
                key={index}
                className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-[#D5E3E5]/60 bg-white">
                    <Image
                      src={
                        card.imageSrc == "/tel/6.png"
                          ? "/tel/6.png"
                          : card.imageSrc
                      } 
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
