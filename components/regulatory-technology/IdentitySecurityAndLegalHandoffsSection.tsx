import React from "react";
import { ArrowRight } from "lucide-react";

interface NeighborCard {
  badge: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  items: {
    label: string;
    description: string;
  }[];
  linkText: string;
}

const NEIGHBOR_CARDS: NeighborCard[] = [
  {
    badge: "§15 · HANDOFF",
    imageSrc: "/reg/22.png",
    imageAlt: "Digital Identity portrait",
    title: "Digital Identity",
    items: [
      {
        label: "Authority",
        description:
          "Requires approved role, entitlement or delegation before sensitive action",
      },
      {
        label: "Unknown / revoked authority",
        description: "Blocks or reviews the regulated action",
      },
    ],
    linkText: "Explore Digital Identity",
  },
  {
    badge: "§16 · HANDOFF",
    imageSrc: "/reg/23.png",
    imageAlt: "Cybersecurity and Privacy boats",
    title: "Cybersecurity & Privacy",
    items: [
      {
        label: "Sensitive data",
        description: "Minimized, classified, restricted from analytics",
      },
      {
        label: "Incidents & vulnerabilities",
        description:
          "Routed to Cybersecurity, System Status and Responsible Disclosure",
      },
    ],
    linkText: "Explore Cybersecurity",
  },
  {
    badge: "§17 · HANDOFF",
    imageSrc: "/reg/24.png",
    imageAlt: "Trust, Compliance and Legal architecture",
    title: "Trust, Compliance & Legal",
    items: [
      {
        label: "Corporate proof",
        description:
          "Trust Center and compliance statements, from exact evidence only",
      },
      {
        label: "Legal advice boundary",
        description: "This page is informational, not legal advice",
      },
    ],
    linkText: "Open Trust Center",
  },
];

export default function IdentitySecurityAndLegalHandoffsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            IDENTITY, SECURITY, TRUST & LEGAL HANDOFFS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
            Three neighbors that keep their own authority
          </h2>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {NEIGHBOR_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Top with Badge overlay */}
                <div className="relative w-full h-[200px]">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-full px-3 py-1 shadow-sm">
                    <span className="text-[#2b7a78] font-mono text-[10px] font-bold tracking-wider">
                      {card.badge}
                    </span>
                  </div>
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-extrabold text-[#0B132B] mb-6">
                    {card.title}
                  </h3>
                  <div className="flex flex-col space-y-5 mb-8">
                    {card.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col space-y-1">
                        <span className="text-xs font-bold text-[#0B132B]">
                          {item.label}
                        </span>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 md:px-8 pb-8 pt-0">
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  {card.linkText} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
