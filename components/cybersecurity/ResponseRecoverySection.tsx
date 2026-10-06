import React from "react";
import { ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "1",
    title: "Contain / restrict",
    description: "A state or action category, only where supported.",
  },
  {
    number: "2",
    title: "Mitigate / workaround",
    description: "Temporary is never shown as resolved.",
  },
  {
    number: "3",
    title: "Restore / recover",
    description: "Tied to authoritative service state and owner.",
  },
  {
    number: "4",
    title: "Rollback / compensate",
    description: "Only where the product supports it.",
  },
  {
    number: "5",
    title: "Escalate",
    description: "Security, platform, provider, privacy, legal or support.",
  },
  {
    number: "6",
    title: "Customer / provider handoff",
    description: "Responsibility and expected next action.",
  },
  {
    number: "7",
    title: "Post-incident review",
    description: "Only where a governance process exists.",
  },
  {
    number: "8",
    title: "Continuity evidence",
    description: "Dependency, state, owner, limitation. No RTO/RPO claims.",
  },
];

export default function ResponseRecoverySection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Header & Steps List */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Section Header */}
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            RESPONSE, RECOVERY & CONTINUITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-10">
            From disruption back to calm, with an owner at every step
          </h2>

          {/* Steps List */}
          <div className="divide-y divide-gray-200/60 mb-8">
            {STEPS.map((step, index) => (
              <div key={index} className="py-4 flex items-center space-x-4">
                <div className="w-7 h-7 rounded-full border border-[#2b7a78] text-[#2b7a78] flex items-center justify-center text-xs font-bold shrink-0">
                  {step.number}
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                  <span className="text-[#0B132B] font-bold text-sm md:w-1/3">
                    {step.title}
                  </span>
                  <span className="text-gray-500 text-xs md:w-2/3 md:text-right mt-0.5 md:mt-0">
                    {step.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Review Recovery Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
            >
              Review recovery <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Images & Timeline Card */}
        <div className="lg:col-span-5 flex flex-col gap-6 sticky top-8">
          {/* Two Images Side-by-Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white h-[180px]">
              <img
                src="/cyber/10.png"
                alt="Disruption and choppy seas"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white h-[180px]">
              <img
                src="/cyber/11.png"
                alt="Calm reflective mountain landscape"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Timeline / Status Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6 text-xs font-semibold">
              <span className="flex items-center text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-1.5"></span>
                Disrupted
              </span>
              <span className="flex items-center text-[#2b7a78] bg-[#E6F4F1] px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b7a78] mr-1.5"></span>
                Recovering
              </span>
              <span className="flex items-center text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5"></span>
                Operational
              </span>
            </div>

            {/* Progress Track Line */}
            <div className="relative w-full h-1 bg-gradient-to-r from-red-500 via-[#2b7a78] to-gray-300 rounded-full mb-4"></div>

            <p className="text-[11px] text-gray-400 text-center leading-relaxed">
              Recovery is confirmed by the authoritative service state, never by
              this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
