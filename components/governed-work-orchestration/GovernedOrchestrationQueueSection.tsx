import React from "react";
import { ArrowRight } from "lucide-react";

interface QueueColumn {
  title: string;
  count: number;
  items: {
    id: string;
    title: string;
    subtitle: string;
    status: {
      text: string;
      color: string;
      dotColor: string;
    };
  }[];
}

const QUEUE_COLUMNS: QueueColumn[] = [
  {
    title: "READY",
    count: 1,
    items: [
      {
        id: "WK-4480",
        title: "Supplier review",
        subtitle: "Procurement",
        status: {
          text: "Ready",
          color: "bg-blue-50 text-blue-700",
          dotColor: "bg-blue-600",
        },
      },
    ],
  },
  {
    title: "ACTIVE",
    count: 2,
    items: [
      {
        id: "WK-4476",
        title: "Policy renewal",
        subtitle: "Compliance",
        status: {
          text: "Active",
          color: "bg-blue-50 text-blue-700",
          dotColor: "bg-blue-600",
        },
      },
      {
        id: "WK-4479",
        title: "Device return",
        subtitle: "Service Ops",
        status: {
          text: "Active",
          color: "bg-blue-50 text-blue-700",
          dotColor: "bg-blue-600",
        },
      },
    ],
  },
  {
    title: "WAITING",
    count: 1,
    items: [
      {
        id: "WK-4471",
        title: "Customer onboarding",
        subtitle: "Waiting: sanctions result",
        status: {
          text: "Waiting external",
          color: "bg-purple-50 text-purple-700",
          dotColor: "bg-purple-600",
        },
      },
    ],
  },
  {
    title: "BLOCKED",
    count: 1,
    items: [
      {
        id: "WK-4468",
        title: "Contract change",
        subtitle: "Missing signed amendment",
        status: {
          text: "Blocked",
          color: "bg-red-50 text-red-700",
          dotColor: "bg-red-600",
        },
      },
    ],
  },
  {
    title: "REVIEW",
    count: 1,
    items: [
      {
        id: "WK-4471",
        title: "Credit sign-off",
        subtitle: "Risk Analyst",
        status: {
          text: "Review required",
          color: "bg-amber-50 text-amber-800",
          dotColor: "bg-amber-600",
        },
      },
    ],
  },
  {
    title: "DONE",
    count: 0,
    items: [
      {
        id: "WK-4460",
        title: "Account cl...",
        subtitle: "ERP confirm...",
        status: {
          text: "Authorit...",
          color: "bg-emerald-50 text-emerald-800",
          dotColor: "bg-emerald-600",
        },
      },
    ],
  },
];

interface FeatureCard {
  title: string;
  description: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Lifecycle stage",
    description: "Business progression, not runtime success.",
  },
  {
    title: "Operational state",
    description: "Text and icon, never color alone.",
  },
  {
    title: "Owner vs assignee",
    description: "Accountability can differ from who does the step.",
  },
  {
    title: "Next action",
    description: 'A concrete wait or step, never vague "processing".',
  },
  {
    title: "Blocked reason",
    description: "Missing data, denied access, dependency, approval, conflict.",
  },
  {
    title: "Freshness",
    description: "Stale state never renders as current completion.",
  },
];

export default function GovernedOrchestrationQueueSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block */}
        <div className="mb-12">
          <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            05
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            STAGE, STATE, QUEUE & OWNERSHIP
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-4 max-w-3xl text-[#0B132B]">
            Always answer: where is it, who has it, what is next?
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Queues group work by state and owner. Counts are operational, never
            KPI claims.
          </p>
        </div>

        {/* Work Queue Component Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 mb-12">
          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-gray-200 gap-2">
            <span className="text-xs font-extrabold font-mono text-[#0B132B]">
              Work queue · Onboarding & operations
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md self-start md:self-auto">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          {/* Kanban / Queue Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start overflow-x-auto pb-4">
            {QUEUE_COLUMNS.map((col, cIdx) => (
              <div
                key={cIdx}
                className="bg-gray-50/70 rounded-2xl p-3 border border-gray-200/60 flex flex-col min-h-[300px]"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/60 text-[10px] font-mono font-bold tracking-wider text-gray-500">
                  <span>{col.title}</span>
                  <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full">
                    {col.count}
                  </span>
                </div>

                {/* Column Items */}
                <div className="space-y-3 flex-1">
                  {col.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="bg-white rounded-xl p-3 shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
                        <span>{item.id}</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#0B132B] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mb-3 truncate">
                        {item.subtitle}
                      </p>
                      <div>
                        <span
                          className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.status.color}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${item.status.dotColor}`}
                          ></span>
                          <span>{item.status.text}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid (Bottom Info Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {FEATURE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-extrabold text-[#0B132B] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
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
            Inspect work state <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
