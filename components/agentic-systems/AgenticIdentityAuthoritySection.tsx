import React from "react";
import { ArrowRight, User, Key, Users, Check } from "lucide-react";

interface AuthorityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AUTHORITY_CARDS: AuthorityCard[] = [
  {
    icon: <User className="w-4 h-4 text-[#34D4CA]" />,
    title: "Principal",
    description: "AP Lead · accountable for the delegated work",
  },
  {
    icon: <Key className="w-4 h-4 text-[#34D4CA]" />,
    title: "Agent identity",
    description: "INV-EXC-01 · a distinct actor, never a shared user",
  },
  {
    icon: <Users className="w-4 h-4 text-[#34D4CA]" />,
    title: "Delegated subject",
    description: "Acting for: Accounts Payable, US entity",
  },
];

interface FeatureRow {
  title: string;
  description: string;
}

const FEATURE_ROWS: FeatureRow[] = [
  {
    title: "Scope",
    description:
      "Resources, actions, tenant and jurisdiction at approved granularity.",
  },
  {
    title: "Duration",
    description: "Task, session or time-limited. Never permanent by default.",
  },
  {
    title: "Step-up",
    description: "Higher assurance or human approval for sensitive actions.",
  },
  {
    title: "Revocation",
    description: "Revoked or expired authority blocks new actions immediately.",
  },
  {
    title: "Credentials",
    description: "Never exposed in UI, logs or analytics.",
  },
  {
    title: "Evidence",
    description: "Who granted what, when, for which scope and action.",
  },
];

export default function AgenticIdentityAuthoritySection() {
  return (
    <section className="w-full bg-[#00191E] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            IDENTITY & DELEGATED AUTHORITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-4">
            Always clear who is acting, and for whom
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl">
            Every agent acts as itself, on behalf of someone accountable, within
            a scope that expires.
          </p>
        </div>

        {/* 3 Authority Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16 relative">
          {AUTHORITY_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#2477802E] border border-[#34D4CA73] rounded-3xl p-6 relative flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1F7A6C] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-sm font-extrabold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower Split: Images Specimen (/age/14.png) & Feature Rows Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Image Specimens */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#112D32] border border-[#34D4CA33] h-[280px]">
              <img
                src="/age/14.png"
                alt="Engineer collaborating in operations center"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#112D32] border border-[#34D4CA33] h-[280px]">
              <img
                src="/age/15.png"
                alt="Operational analytics dashboard monitor"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
          </div>

          {/* Right Column: Feature List Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {FEATURE_ROWS.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 md:p-5 flex items-start space-x-4 shadow-md"
              >
                <div className="w-6 h-6 text-[#34D4CA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-white mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-16">
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#34D4CA] hover:underline"
          >
            Review authority <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
