import Image from "next/image";

type WorkflowCardProps = {
  title: string;
  description: string;
};

const workflowCards: WorkflowCardProps[] = [
  {
    title: "Trigger",
    description:
      "Human action, schedule, event, system state or external request.",
  },
  {
    title: "Current path",
    description:
      "Existing steps, handoffs, systems, approvals and pain points.",
  },
  {
    title: "Target path",
    description:
      "New digital steps, reused interfaces, approvals and evidence.",
  },
  {
    title: "Exception path",
    description:
      "Incomplete input, policy blocks, integration failure or review needed.",
  },
  {
    title: "Ownership",
    description: "Named business owner, technical owner and support role.",
  },
  {
    title: "Evidence & measurement",
    description:
      "Key actions and outcomes recorded. Only approved measures, no invented productivity claims.",
  },
];

export default function WorkflowModernizationSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Workflow modernization
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Work keeps moving without losing accountability. Some steps stay,
            some are wrapped, some are replaced and some are retired.
          </p>
        </div>

        {/* Content Grid: Left Cards, Right Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Cards Grid (3x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workflowCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F3F9FA] border border-[#D5E3E5] p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col h-full"
              >
                <h3 className="text-lg font-semibold text-slate-950 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Illustration Area */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full h-[350px] sm:h-[450px]">
            <div className="relative w-full h-full max-w-[550px] max-h-[550px]">
              <Image
                src="/modern/7.png"
                alt="Workflow modernization process and automation architecture"
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
