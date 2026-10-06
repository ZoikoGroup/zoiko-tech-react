import React from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertCircle,
  Activity,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";

interface RouteCard {
  title: string;
  description: string;
  icon: React.ElementType;
  hasBackground: boolean;
}

const ROUTE_CARDS: RouteCard[] = [
  {
    title: "Trust Center",
    description:
      "Security, privacy, accessibility, assurance and operational evidence hub.",
    icon: Shield,
    hasBackground: true,
  },
  {
    title: "Security",
    description: "Corporate security posture and approved practices.",
    icon: Lock,
    hasBackground: false,
  },
  {
    title: "Privacy",
    description: "Privacy architecture, notices and requests.",
    icon: Eye,
    hasBackground: false,
  },
  {
    title: "Responsible Disclosure",
    description: "Canonical route for reporting security issues.",
    icon: AlertCircle,
    hasBackground: true,
  },
  {
    title: "System Status",
    description: "Current availability and incident communications.",
    icon: Activity,
    hasBackground: true,
  },
  {
    title: "Responsible AI",
    description: "Where security and AI governance intersect.",
    icon: Sparkles,
    hasBackground: false,
  },
  {
    title: "Compliance & certifications",
    description:
      "Exact evidence: certification, attestation, alignment, target, policy.",
    icon: FileText,
    hasBackground: false,
  },
];

export default function AuthoritativeRoutesSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cyber/25.jpg"
          alt="Authoritative routes and disclosure background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00191EB8]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4">
            TRUST CENTER, DISCLOSURE & STATUS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Authoritative routes, linked, never duplicated
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            This page keeps no parallel status feed and lists no certification
            badges of its own.
          </p>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {ROUTE_CARDS.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 flex flex-col justify-between shadow-lg backdrop-blur-sm border border-[#34D4CA73] ${
                  card.hasBackground ? "bg-[#2477808C]" : "bg-transparent"
                }`}
              >
                {/* Top Row with Icon */}
                <div className="mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#34D4CA] mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Open Link */}
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
                  >
                    Open <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
