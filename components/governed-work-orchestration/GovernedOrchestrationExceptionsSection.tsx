import React from "react";
import { ArrowRight } from "lucide-react";

interface ExceptionCard {
  title: string;
  description: string;
  badgeColor: string;
  dotColor: string;
}

const EXCEPTION_CARDS: ExceptionCard[] = [
  {
    title: "Validation failure",
    description: "Block the unit; show the missing requirement.",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    dotColor: "bg-red-600",
  },
  {
    title: "Authority denied",
    description: "No automatic retry with broader authority.",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    dotColor: "bg-red-600",
  },
  {
    title: "Approval denied / expired",
    description: "Block gated work; keep the decision evidence.",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    dotColor: "bg-amber-600",
  },
  {
    title: "External timeout",
    description: "Waiting, failed or unknown. No claimed outcome.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-600",
  },
  {
    title: "Partial completion",
    description: "Completed versus incomplete units, and committed effects.",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    dotColor: "bg-amber-600",
  },
  {
    title: "Duplicate / conflict",
    description: "Surface competing work and route resolution.",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    dotColor: "bg-amber-600",
  },
  {
    title: "Compensating action",
    description: "Only where supported; recorded separately.",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    dotColor: "bg-purple-600",
  },
  {
    title: "Manual resolution",
    description: "An authorized person records the outcome.",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    dotColor: "bg-emerald-600",
  },
  {
    title: "Cancel / revoke",
    description: "Stop future work; keep committed effects and evidence.",
    badgeColor: "bg-gray-100 text-gray-700 border-gray-200",
    dotColor: "bg-gray-500",
  },
  {
    title: "Unknown / stale",
    description: "Fail visibly; refresh, reconcile or escalate.",
    badgeColor: "bg-gray-100 text-gray-700 border-gray-200",
    dotColor: "bg-gray-500",
  },
];

export default function GovernedOrchestrationExceptionsSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="mb-16">
          <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            10
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            EXCEPTIONS, COMPENSATION & RECOVERY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-[#0B132B]">
            When work fails halfway, the page tells the truth
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Ten exception patterns, each with a safe, visible behavior.
            Compensation is recorded alongside the original action, never in
            place of it.
          </p>
        </div>

        {/* Main Grid: Left Image /gov/26.png, Right Exception Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-12">
          {/* Left Column: Image /gov/26.png with overlay badge */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-[#00191E] h-[400px] md:h-[480px]">
            <img
              src="/gov/26.png"
              alt="Exception recovery review workflow visual"
              className="w-full h-full object-cover block m-0 p-0"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-200/80">
              <p className="text-xs font-bold text-[#0B132B]">
                Loops back safely, with every turn on the record.
              </p>
            </div>
          </div>

          {/* Right Column: 2-Column Grid of Exception Patterns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {EXCEPTION_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border mb-2 ${card.badgeColor}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`}
                    ></span>
                    <span>{card.title}</span>
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review recovery <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
