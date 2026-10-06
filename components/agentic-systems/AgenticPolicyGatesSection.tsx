import React from "react";
import { ArrowRight } from "lucide-react";

interface PolicyCard {
  title: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
}

const POLICY_CARDS: PolicyCard[] = [
  {
    title: "Allow",
    description: "Proceed only within the exact granted scope.",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    dotColor: "bg-emerald-600",
  },
  {
    title: "Deny",
    description: "Do not execute; show a safe reason category.",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
    dotColor: "bg-rose-600",
  },
  {
    title: "Review required",
    description: "Pause before action; route to an authorized reviewer.",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    dotColor: "bg-amber-600",
  },
  {
    title: "Step-up required",
    description: "Stronger identity, authority or evidence first.",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
    dotColor: "bg-purple-600",
  },
  {
    title: "Conditional allow",
    description:
      "Proceed under explicit amount, record, environment or time limits.",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dotColor: "bg-sky-600",
  },
  {
    title: "Stale / unknown policy",
    description: "Fail closed or require review. Prior approval never assumed.",
    badgeBg: "bg-slate-200",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
  },
  {
    title: "Policy change mid-run",
    description:
      "Pending actions re-evaluated when policy or authority changes.",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dotColor: "bg-sky-600",
  },
  {
    title: "Multi-party approval",
    description: "Shown only where actual product policy supports it.",
    badgeBg: "bg-slate-200",
    badgeText: "text-slate-800",
    dotColor: "bg-slate-600",
  },
];

export default function AgenticPolicyGatesSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            POLICY & APPROVAL GATES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Every action meets a gate before it runs
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
            Policy is checked at the current version for each task, action,
            resource, actor and context.
          </p>
        </div>

        {/* Cards Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {POLICY_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Badge Header with Dot */}
                <div
                  className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText} text-xs font-semibold mb-6`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${card.dotColor}`}
                  ></span>
                  <span>{card.title}</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review controls <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
