import React from "react";
import {
  ArrowRight,
  Check,
  Clock,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";

interface TaskItem {
  step: number;
  title: string;
  tool: string;
  tag1: string;
  tag1Type: "green" | "amber" | "red";
  tag2: string;
  tag2Type: "green" | "amber" | "red";
}

const TASKS: TaskItem[] = [
  {
    step: 1,
    title: "Read invoice INV-7781",
    tool: "Tool: ERP read",
    tag1: "No side effect",
    tag1Type: "green",
    tag2: "Ready",
    tag2Type: "green",
  },
  {
    step: 2,
    title: "Compare to contract v4",
    tool: "Tool: Contract search",
    tag1: "No side effect",
    tag1Type: "green",
    tag2: "Ready",
    tag2Type: "green",
  },
  {
    step: 3,
    title: "Draft supplier query",
    tool: "Tool: Email draft",
    tag1: "Draft",
    tag1Type: "amber",
    tag2: "Ready",
    tag2Type: "green",
  },
  {
    step: 4,
    title: "Send supplier query",
    tool: "Tool: Email send",
    tag1: "External communication",
    tag1Type: "amber",
    tag2: "Awaiting approval",
    tag2Type: "amber",
  },
  {
    step: 5,
    title: "Hold payment",
    tool: "Tool: Payments",
    tag1: "High-impact",
    tag1Type: "red",
    tag2: "Not eligible",
    tag2Type: "red",
  },
];

interface FeatureItem {
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: "Plan",
    description: "Proposed sequence, non-authoritative until accepted.",
  },
  {
    title: "Task",
    description: "One bounded unit with tool, input, output and authority.",
  },
  {
    title: "Dependency",
    description: "Prerequisite state, source, approval or prior task.",
  },
  {
    title: "Action risk",
    description: "No side effect · reversible · material · high-impact.",
  },
  {
    title: "Execution eligibility",
    description:
      "Ready only when context, authority, policy and dependencies are met.",
  },
];

export default function AgenticPlanActionGraphSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Main Grid: Left Plan & Action Graph Card, Right Header & Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          {/* Left Column: Plan & Action Graph Specimen Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-2xl border border-gray-200/60 p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <span className="text-xs font-bold text-[#0B132B]">
                Plan & action graph
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  SPECIMEN · SYNTHETIC DATA
                </span>
                <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Plan v2 · Proposed
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                GOAL · OWNER AP LEAD
              </div>
              <h3 className="text-sm font-extrabold text-[#0B132B]">
                Resolve invoice rate mismatch
              </h3>
            </div>

            <div className="space-y-4">
              {TASKS.map((task) => (
                <div
                  key={task.step}
                  className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-[#2b7a78] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {task.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#0B132B] mb-0.5">
                        {task.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-medium">
                        {task.tool}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        task.tag1Type === "green"
                          ? "bg-emerald-100 text-emerald-800"
                          : task.tag1Type === "amber"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {task.tag1}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        task.tag2Type === "green"
                          ? "bg-emerald-100 text-emerald-800"
                          : task.tag2Type === "amber"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {task.tag2}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500">
              Replanning stays within scope; any material change returns to
              policy and approval.
            </div>
          </div>

          {/* Right Column: Title, Features, Image Specimen (/age/12.png) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
              PLANS, TASKS & ACTION GRAPH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
              See the plan before anything moves
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-8">
              Every task shows its tool, its risk and whether it is eligible to
              run. Proposed is never shown as permitted.
            </p>

            {/* Feature Check List */}
            <div className="space-y-4 mb-8 w-full">
              {FEATURES.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#2b7a78]/10 text-[#2b7a78] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#0B132B]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Specimen (/age/12.png) */}
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-[#00191E] border border-gray-200/60 h-[200px] mb-6">
              <img
                src="/age/12.png"
                alt="Workspace preview supporting task evaluation"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
              >
                Review plan <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
