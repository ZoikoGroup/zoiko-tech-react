import React from "react";
import {
  Sparkles,
  ShieldCheck,
  User,
  GitBranch,
  FileText,
  Code,
} from "lucide-react";

export default function ExtendSupported() {
  const cards = [
    {
      icon: <Sparkles className="w-5 h-5 text-teal-300" />,
      title: "Knowledge & AI",
      description: "Intelligent automation and AI governance.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
      title: "Tax & evidence",
      description:
        "Regulatory and compliance architecture; specialist destinations when ready.",
    },
    {
      icon: <User className="w-5 h-5 text-teal-300" />,
      title: "Workforce operations",
      description: "HR, payroll and business operations.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-teal-300" />,
      title: "Client communications",
      description: "Collaboration, privacy and confidentiality.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-300" />,
      title: "Billing operations",
      description: "Financial controls and authoritative financial states.",
    },
    {
      icon: <Code className="w-5 h-5 text-teal-300" />,
      title: "Modernization",
      description:
        "Cloud, developer infrastructure and documented integration.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Extend what is supported.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Adjacent foundations follow the operating need and product
            readiness.
          </p>
        </div>

        {/* Feature Cards Grid (Asymmetrical Layout matching Figma) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF09] rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#62C6CA19] border border-teal-700/40 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
