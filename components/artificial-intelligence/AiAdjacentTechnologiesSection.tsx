import React from "react";
import { ArrowRight } from "lucide-react";

interface AdjacentCard {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  linkText: string;
}

const ADJACENT_CARDS: AdjacentCard[] = [
  {
    imageSrc: "/ai/21.png",
    title: "Agentic Systems",
    description:
      "Controlled execution is a different capability and risk surface. Tool permissions, execution requests and confirmations live here.",
    tags: [
      "Tool permission",
      "Execution request",
      "Human confirmation",
      "Action result",
    ],
    linkText: "Explore Agentic Systems →",
  },
  {
    imageSrc: "/ai/22.png",
    title: "Governed Work Orchestration",
    description:
      "When work spans steps, systems, approvals and roles. Named surface shown once public naming is approved.",
    tags: ["Pending", "Review", "Approved", "Recovered", "Complete"],
    linkText: "Explore orchestration →",
  },
  {
    imageSrc: "/ai/23.png",
    title: "AI Safety & Governance",
    description:
      'Risk classification, evaluation, oversight, inventory and incidents. No absolute "safe" or "bias-free" claims.',
    tags: ["Risk", "Evaluation", "Oversight", "Inventory", "Incidents"],
    linkText: "Review AI governance →",
  },
];

interface OwnershipRow {
  object: string;
  meaning: string;
  owner: string;
  ownerBadgeColor: string;
}

const OWNERSHIP_ROWS: OwnershipRow[] = [
  {
    object: "AI output",
    meaning: "Derived analysis, plan or draft",
    owner: "Artificial Intelligence",
    ownerBadgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  },
  {
    object: "Tool permission",
    meaning: "Approved action and data boundary",
    owner: "Agentic Systems",
    ownerBadgeColor: "bg-sky-500/10 text-sky-700 border-sky-500/30",
  },
  {
    object: "Execution request",
    meaning: "Explicit task and authority to act",
    owner: "Agentic Systems",
    ownerBadgeColor: "bg-sky-500/10 text-sky-700 border-sky-500/30",
  },
  {
    object: "Human confirmation",
    meaning: "Approval based on risk and policy",
    owner: "Agentic Systems / workflow",
    ownerBadgeColor: "bg-blue-500/10 text-blue-700 border-blue-500/30",
  },
  {
    object: "Action result",
    meaning: "State returned by the responsible system",
    owner: "Authoritative system",
    ownerBadgeColor: "bg-slate-500/10 text-slate-700 border-slate-500/30",
  },
  {
    object: "Evidence",
    meaning: "Request, policy, approver, result, exceptions",
    owner: "Shared evidence architecture",
    ownerBadgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/30",
  },
];

export default function AiAdjacentTechnologiesSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full mb-16 gap-6">
          <div>
            <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
              WHERE THIS PAGE HANDS OFF
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1]">
              Three adjacent technologies, each with its own page
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs text-gray-600 leading-relaxed">
              Intelligence produces analysis and recommendations. Acting,
              orchestrating and governing are separate surfaces with separate
              controls.
            </p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {ADJACENT_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[180px] bg-gray-100">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Adjacent Technology
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-[#0B132B] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-medium px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership Table Container */}
        <div className="w-full bg-white rounded-3xl shadow-xl border border-gray-200/60 p-6 md:p-8">
          <h3 className="text-sm font-extrabold text-[#0B132B] mb-6">
            Who owns what in an AI-to-action handoff
          </h3>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] font-mono tracking-wider text-gray-400">
                  <th className="pb-3 uppercase font-bold">Object</th>
                  <th className="pb-3 uppercase font-bold">Meaning</th>
                  <th className="pb-3 uppercase font-bold text-right">
                    Owner
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {OWNERSHIP_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 font-extrabold text-[#0B132B]">
                      {row.object}
                    </td>
                    <td className="py-4 text-gray-600">
                      {row.meaning}
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${row.ownerBadgeColor}`}
                      >
                        {row.owner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
