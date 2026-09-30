import Image from "next/image";
import { Plug, Database, Code, Cloud, Shield } from "lucide-react";

type PlatformCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const platformCards: PlatformCardProps[] = [
  {
    title: "Integration capability",
    description:
      "Approved APIs, events, webhooks, identity, connectors or architecture guides.",
    icon: <Plug className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Platform evidence",
    description:
      "Named platform only when the registry supports the modernization scenario.",
    icon: <Database className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Developer Platform",
    description:
      "Evidence for shared APIs, tooling and integration services within approved readiness.",
    icon: <Code className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Cloud / shared foundation",
    description:
      "Only at the level approved by technology and product records.",
    icon: <Cloud className="w-5 h-5 text-teal-800" />,
  },
  {
    title: "Trust / status",
    description: "Routed to the authoritative Trust Center and System Status.",
    icon: <Shield className="w-5 h-5 text-teal-800" />,
  },
];

export default function PlatformAndCapabilityEvidenceSection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Platform and capability evidence
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            This page is capability-first. Named Zoiko platforms appear only
            when the registry explicitly supports the scenario and the public
            claim.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platformCards.map((card, index) => {
            const isLast = index === 4;
            return (
              <div
                key={index}
                className={`bg-[#F3F9FA] border border-[#D5E3E5] p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-700/20 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Image Showcase */}
        <div className="relative w-full h-[300px] rounded-3xl overflow-hidden border border-[#D5E3E5] shadow-xl">
          <Image
            src="/modern/13.png"
            alt="Platform and capability monitoring control room"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
