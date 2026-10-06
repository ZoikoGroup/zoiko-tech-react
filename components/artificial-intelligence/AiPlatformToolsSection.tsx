import React from "react";
import {
  Cpu,
  FileText,
  Key,
  Code,
  BookOpen,
  Wrench,
  Activity,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

interface ConcernCard {
  icon: React.ElementType;
  title: string;
  description: string;
  accentBg: string;
  accentColor: string;
}

const CONCERNS: ConcernCard[] = [
  {
    icon: Cpu,
    title: "Model & intelligence access",
    description:
      "Model-neutral services. Providers named only when public-approved.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: FileText,
    title: "Prompt & instruction layer",
    description:
      "Versioned task and policy instructions. Private prompts never disclosed.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Knowledge & retrieval",
    description:
      "Documented source and retrieval architecture only. No universal RAG claims.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: Wrench,
    title: "Tool & function access",
    description:
      "Approved tools and scopes. Execution belongs to Agentic Systems.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: Key,
    title: "Identity & authorization",
    description:
      "User, service and delegated authority on approved identity architecture.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: Activity,
    title: "Evaluation & observability",
    description:
      "Quality, safety and operational signals with defined meaning.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: Code,
    title: "Developer interfaces",
    description: "APIs, SDKs and events only where public docs establish them.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
  {
    icon: RefreshCw,
    title: "Lifecycle",
    description:
      "Version, deployment, deprecation and rollback at architecture level.",
    accentBg: "bg-emerald-500/10",
    accentColor: "text-emerald-600",
  },
];

export default function AiPlatformToolsSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-3">
            AI PLATFORM & TOOLS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            A model-neutral platform layer with clear responsibilities
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Eight concerns every AI system has to answer, described only at the
            level current documentation supports.
          </p>
        </div>

        {/* Main Content Grid: Left Image, Right 8 Concern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mb-12 items-start">
          {/* Left Column: Image Specimen (/ai/16.png) with overlay caption */}
          <div className="lg:col-span-5 w-full rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 relative h-[640px]">
            <img
              src="/ai/16.png"
              alt="AI Platform & Tools collaborative workspace visual"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-sm font-medium leading-relaxed">
                Many small, well-defined parts. Each with a clear owner.
              </p>
            </div>
          </div>

          {/* Right Column: 8 Concern Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONCERNS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/60 flex flex-col justify-between transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl ${item.accentBg} ${item.accentColor} flex items-center justify-center shrink-0`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-extrabold text-[#0B132B]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review platform layer <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            
          </a>
        </div>
      </div>
    </section>
  );
}
