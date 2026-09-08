import Image from "next/image";

const values = [
  {
    title: "Governed AI",
    description:
      "Enterprise-grade safety, privacy, and compliance first.",
    icon: "/home/governed-ai.png",
  },
  {
    title: "Enterprise Infrastructure",
    description:
      "Designed for mission-critical scale and global uptime.",
    icon: "/home/enterprise-infrastructure.png",
  },
  {
    title: "Global Operations",
    description:
      "Seamless compliance across borders and jurisdictions.",
    icon: "/home/global-operations.png",
  },
  {
    title: "Human-Centered Systems",
    description:
      "Designed to simplify the most complex user journeys.",
    icon: "/home/human-systems.png",
  },
];

export default function TechValues() {
  return (
    <section className="w-full bg-neutral-100 px-6 py-10 sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto grid w-full max-w-[1296px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {values.map((value) => (
          <div
            key={value.title}
            className="flex w-full items-center gap-4"
          >
            {/* Icon */}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-cyan-700/30 bg-cyan-700/20">
              <Image
                src={value.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <h3 className="text-base font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="text-xs font-normal leading-4 text-slate-500">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}