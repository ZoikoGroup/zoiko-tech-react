import React from "react";
import {
  Users,
  Database,
  Check,
  Key,
  Link2,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface ChainLink {
  level: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CHAIN_LINKS: ChainLink[] = [
  {
    level: "L1",
    title: "Subject",
    description: "Who or what is acting?",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    level: "L2",
    title: "Identity source",
    description: "Which system owns identity truth?",
    icon: <Database className="w-5 h-5 text-white" />,
  },
  {
    level: "L3",
    title: "Authentication",
    description: "Has authentication been established?",
    icon: <Check className="w-5 h-5 text-white" />,
  },
  {
    level: "L4",
    title: "Entitlement",
    description: "What access is currently granted?",
    icon: <Key className="w-5 h-5 text-white" />,
  },
  {
    level: "L5",
    title: "Delegation",
    description: "Is the actor acting under delegation?",
    icon: <Link2 className="w-5 h-5 text-white" />,
  },
  {
    level: "L6",
    title: "Policy & context",
    description: "What policy and context apply?",
    icon: <FileText className="w-5 h-5 text-white" />,
  },
  {
    level: "L7",
    title: "Decision & evidence",
    description: "What is the decision, and can it be explained?",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
];

export default function AuthorityChainSection() {
  return (
    <section className="relative w-full bg-[#00191E] py-24 px-6 md:px-12 lg:px-20 font-sans text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/digital/14.png"
          alt="Control architecture background"
          className="w-full h-full object-cover opacity-20 object-center"
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        {/* Section Header */}
        <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
          DIGITAL IDENTITY CONTROL ARCHITECTURE
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-[1.1]">
          One authority chain. Seven links. Any link can break.
        </h2>
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
          Each link is kept separate on purpose, because each one can fail,
          expire or be unknown on its own.
        </p>

        {/* Chain Flow Container */}
        <div className="w-full relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 my-8">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#2b7a78]/50 to-transparent z-0"></div>

          {CHAIN_LINKS.map((link) => (
            <div
              key={link.level}
              className="relative z-10 flex flex-col items-center max-w-[160px]"
            >
              {/* Circular Icon Node */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#1F7A6C] border border-[#1A2E3B] flex items-center justify-center shadow-xl mb-4 relative group hover:border-[#2b7a78] transition-colors">
                <div className="absolute inset-0 rounded-full bg-[#2b7a78]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {link.icon}
              </div>

              {/* Level Tag */}
              <span className="text-[10px] font-bold tracking-widest text-[#2b7a78] uppercase mb-1">
                {link.level}
              </span>

              {/* Title */}
              <h3 className="text-sm font-bold text-white mb-2">
                {link.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {link.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-16">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-[#4DDCAD] hover:text-[#359694] font-semibold text-sm transition-colors group"
          >
            <span>Follow one request through the chain</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
