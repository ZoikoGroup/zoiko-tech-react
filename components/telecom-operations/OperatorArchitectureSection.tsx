type LayerItem = {
  layer: string;
  description: string;
  question: string;
  isDark?: boolean;
};

const layers: LayerItem[] = [
  {
    layer: "L7 Shared foundations",
    description:
      "Identity, APIs, events, data, observability, security, governance, evidence.",
    question: "How is the stack connected and controlled?",
  },
  {
    layer: "L6 Communications infrastructure",
    description:
      "Numbers, calling, routing, messaging / meetings where approved.",
    question: "How is communication delivered?",
  },
  {
    layer: "L5 Monetization / BSS",
    description:
      "Commercial event, pricing / charging / billing / invoice concepts only where evidence supports them.",
    question: "How is value monetized?",
  },
  {
    layer: "L4 Service operations / OSS",
    description:
      "Service state, activation / change / suspension / assurance. Network orchestration is evidence-gated.",
    question: "What service is operating?",
  },
  {
    layer: "L3 Product / offer / entitlement",
    description:
      "Commercial offer, bundle / entitlement and lifecycle concepts as approved.",
    question: "What has been sold or entitled?",
  },
  {
    layer: "L2 Subscriber / account context",
    description:
      "Subscriber, account / organization, relationship and status at the approved level.",
    question: "Who is the service for?",
    isDark: true,
  },
  {
    layer: "L1 Channels / experiences",
    description:
      "Subscriber, care, digital, partner and operator-facing experiences where approved.",
    question: "Where does demand enter?",
    isDark: true,
  },
];

export default function OperatorArchitectureSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Operator architecture
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Seven layers from demand to shared foundations. Read from the bottom
            layer up, with the full text alternative below the diagram.
          </p>
        </div>

        {/* Layers Stack */}
        <div className="space-y-4 mb-10">
          {layers.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 shadow-sm ${
                item.isDark
                  ? "bg-gradient-to-r from-[#000000] to-[#1C5C62] text-white border-transparent"
                  : "bg-[#F3F9FA] text-slate-900 border-[#D5E3E5]"
              }`}
            >
              {/* Layer Title (Left) */}
              <div className="lg:w-1/4 font-semibold text-base md:text-lg tracking-tight">
                {item.layer}
              </div>

              {/* Description (Middle) */}
              <div
                className={`lg:w-2/5 text-sm md:text-base leading-relaxed ${item.isDark ? "text-slate-200" : "text-slate-600"}`}
              >
                {item.description}
              </div>

              {/* Question (Right) */}
              <div
                className={`lg:w-1/3 font-medium text-sm md:text-base ${item.isDark ? "text-teal-200" : "text-teal-900"}`}
              >
                {item.question}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-teal-800 text-white hover:bg-teal-900 transition-colors text-sm font-medium shadow-md"
          >
            View architecture
          </button>
        </div>
      </div>
    </section>
  );
}
