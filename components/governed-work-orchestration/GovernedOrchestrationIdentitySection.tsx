import React from "react";
import { ArrowRight, Check } from "lucide-react";

interface IdentityFeature {
  title: string;
  description: string;
}

const IDENTITY_FEATURES: IdentityFeature[] = [
  {
    title: "Human identity",
    description: "Reviewer and approver identity and role, minimum display.",
  },
  {
    title: "Service identity",
    description: "System actors at approved technical scope.",
  },
  {
    title: "Agent identity",
    description: "Routed to Agentic Systems; never human-equivalent.",
  },
  {
    title: "Delegated authority",
    description: "Principal, scope, expiry and revocation where supported.",
  },
  {
    title: "Least privilege",
    description: "People see only the work their role requires.",
  },
  {
    title: "Access denied",
    description: "Explicit denied state; no silent fallback.",
  },
  {
    title: "Role change",
    description: "Active work may need reassignment or reapproval.",
  },
  {
    title: "Audit",
    description: "Assignment, authority and approval changes recorded.",
  },
];

export default function GovernedOrchestrationIdentitySection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 font-sans text-white overflow-hidden bg-[#00191E]">
      {/* Background Image /gov/29.png with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gov/29.jpg"
          alt="Skyscraper architectural background"
          className="w-full h-full object-cover block m-0 p-0"
        />
        <div className="absolute inset-0 bg-[#00191E]/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="mb-16">
          <div className="text-[#34D4CA] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            12
          </div>
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            IDENTITY, ACCESS & DELEGATED AUTHORITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-white">
            The right participant, with the right authority, at the right step
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-2xl">
            Identity follows every work unit, and authority is re-checked when
            roles change.
          </p>
        </div>

        {/* Feature Grid: 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {IDENTITY_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 border border-[#34D4CA]/20 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#34D4CA]/20 text-[#34D4CA] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div>
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
