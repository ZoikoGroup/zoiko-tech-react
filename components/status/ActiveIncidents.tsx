import React from "react";
import {
  FileText,
  CheckCircle2,
  Layers,
  Eye,
  Clock,
  Calendar,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export default function ActiveIncidents() {
  const cards = [
    {
      icon: <FileText className="w-6 h-6 text-teal-300" />,
      title: "Public title",
      description: "Approved plain-language title. No internal ticket title.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-teal-300" />,
      title: "Source state",
      description:
        "Exact approved lifecycle label. The renderer never invents severity or state.",
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-300" />,
      title: "Affected scope",
      description:
        "Public component, service or region only if the source provides it and disclosure is approved.",
    },
    {
      icon: <Eye className="w-6 h-6 text-teal-300" />,
      title: "Impact summary",
      description:
        "What users may observe, bounded to approved facts. No speculative root cause.",
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-300" />,
      title: "Started / detected",
      description: "Authoritative incident timestamp with timezone.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-teal-300" />,
      title: "Next update",
      description:
        "Only if the source explicitly commits to one. Otherwise omitted.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-300" />,
      title: "ETA",
      description:
        "Only when supplied by the authoritative incident source. Never estimated by the frontend.",
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-teal-300" />,
      title: "Support action",
      description:
        "Contextual Help & Support when useful. Incident content is never hidden behind support.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Active incidents
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl">
            Only verified, approved active records appear here, ordered by the
            source's own priority field, never by marketing importance.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows x 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF0F", borderColor: "#7FD0D959" }}
              className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center justify-center sm:justify-start">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight text-center sm:text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed text-center sm:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
