import React from "react";
import { ArrowRight, Check, ArrowRight as ArrowRightIcon } from "lucide-react";

interface DependencyFeature {
  title: string;
  description: string;
}

const DEPENDENCY_FEATURES: DependencyFeature[] = [
  {
    title: "Prerequisite",
    description: "Explicit condition, unit, decision or source required first.",
  },
  {
    title: "Hard dependency",
    description: "Blocks progress until satisfied.",
  },
  {
    title: "Soft dependency",
    description: "May warn, defer or branch.",
  },
  {
    title: "Parallel branch",
    description: "Concurrent units, each with its own state and evidence.",
  },
  {
    title: "Conditional branch",
    description: "Routed by current policy or decision, with evidence.",
  },
  {
    title: "External wait",
    description: "Waiting source and freshness shown.",
  },
  {
    title: "Replan",
    description: "A material change creates a new version record.",
  },
];

export default function GovernedOrchestrationDependenciesSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Grid with Images /gov/12.png and /gov/13.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-16">
          {/* Left Column: Heading & Number */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
              06
            </div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
              TASKS, DEPENDENCIES & CONCURRENCY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] text-[#0B132B]">
              See what is blocked, waiting or safe to run in parallel
            </h2>
          </div>

          {/* Right Column: Two Image Cards (/gov/12.png and /gov/13.png) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#00191E] h-[160px]">
              <img
                src="/gov/12.png"
                alt="Stacked rocks balanced infrastructure visual"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#00191E] h-[160px]">
              <img
                src="/gov/13.png"
                alt="Chain link security boundary visual"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
          </div>
        </div>

        {/* Dependency Graph Component Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 mb-12">
          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-2">
            <span className="text-xs font-extrabold font-mono text-[#0B132B]">
              Dependency graph · WK-4471
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md self-start md:self-auto">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          {/* Graph Layout Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 overflow-x-auto py-4">
            {/* Step 1: Intake complete */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 w-full lg:w-[220px] shrink-0">
              <span className="text-[10px] font-mono text-gray-400 block mb-1">
                Intake complete
              </span>
              <h4 className="text-xs font-bold text-[#0B132B] mb-3">
                Intake complete
              </h4>
              <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Completed</span>
              </span>
            </div>

            <ArrowRightIcon className="w-5 h-5 text-gray-400 hidden lg:block shrink-0" />

            {/* Step 2: Parallel Branches Column */}
            <div className="bg-gray-50/70 rounded-2xl p-4 border border-gray-200/80 space-y-3 w-full lg:w-[280px] shrink-0">
              <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                PARALLEL BRANCHES
              </div>

              <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                <div className="text-xs font-bold text-[#0B132B] mb-1">
                  Document check
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>Completed</span>
                </span>
              </div>

              <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                <div className="text-xs font-bold text-[#0B132B] mb-1">
                  Sanctions check
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                  <span>Waiting external</span>
                </span>
              </div>

              <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                <div className="text-xs font-bold text-[#0B132B] mb-1">
                  Credit sign-off
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span>Review required</span>
                </span>
              </div>
            </div>

            <ArrowRightIcon className="w-5 h-5 text-gray-400 hidden lg:block shrink-0" />

            {/* Step 3: JOIN Card */}
            <div className="bg-teal-50/50 rounded-2xl p-4 shadow-sm border border-[#34D4CA]/40 w-full lg:w-[220px] shrink-0">
              <span className="text-[10px] font-mono font-bold text-[#2b7a78] block mb-1">
                JOIN
              </span>
              <h4 className="text-xs font-bold text-[#0B132B] mb-2">
                Waits for 2 of 3 branches still outstanding
              </h4>
              <span className="inline-flex items-center space-x-1.5 bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                <span>Waiting</span>
              </span>
            </div>

            <ArrowRightIcon className="w-5 h-5 text-gray-400 hidden lg:block shrink-0" />

            {/* Step 4: Create account */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 w-full lg:w-[200px] shrink-0">
              <span className="text-[10px] font-mono text-gray-400 block mb-1">
                Create account
              </span>
              <h4 className="text-xs font-bold text-[#0B132B] mb-3">
                Create account
              </h4>
              <span className="inline-flex items-center space-x-1.5 bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>Not eligible yet</span>
              </span>
            </div>
          </div>
        </div>

        {/* Feature Check Grid (Bottom Info Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {DEPENDENCY_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex items-start space-x-3"
            >
              <div className="w-5 h-5 rounded-full bg-[#2b7a78]/10 text-[#2b7a78] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0B132B] mb-1">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
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
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review dependencies <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
