import React from "react";
import { ArrowRight, Clock } from "lucide-react";

interface MigrationStep {
  number: string;
  title: string;
  evidence: string;
}

interface CaseStudyCard {
  title: string;
  imageSrc: string;
}

const migrationSteps: MigrationStep[] = [
  {
    number: "1",
    title: "Define operator scope",
    evidence: "Scope approved",
  },
  {
    number: "2",
    title: "Map current architecture",
    evidence: "Current state approved",
  },
  {
    number: "3",
    title: "Identify seams",
    evidence: "Priority seams agreed",
  },
  {
    number: "4",
    title: "Choose pattern",
    evidence: "Target pattern approved",
  },
  {
    number: "5",
    title: "Validate",
    evidence: "Acceptance criteria met",
  },
  {
    number: "6",
    title: "Roll out in waves",
    evidence: "Readiness confirmed",
  },
  {
    number: "7",
    title: "Operate & improve",
    evidence: "Periodic review completed",
  },
];

const caseStudies: CaseStudyCard[] = [
  {
    title: "Telecom architecture",
    imageSrc: "/tele/9.png",
  },
  {
    title: "OSS/BSS coexistence",
    imageSrc: "/tele/10.png",
  },
  {
    title: "Subscriber platform",
    imageSrc: "/tele/3.png",
  },
  {
    title: "Communications infrastructure",
    imageSrc: "/tele/7.png",
  },
  {
    title: "Developer integration",
    imageSrc: "/tele/6.png",
  },
];

export default function MigrationWavesSection() {
  return (
    <section className="bg-[#E9F9F8] text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Timeline Section */}
        <div className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Implementation & Adoption
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-12 leading-[1.1]">
            From architecture discovery to migration waves
          </h1>

          {/* Timeline Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 relative mb-10">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex flex-col space-y-3 relative">
                {/* Step Number Badge */}
                <div className="w-9 h-9 rounded-full bg-[#247780] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    <span className="font-mono mr-1 text-gray-400">P</span>
                    {step.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Discuss Rollout Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-emerald-700 transition-colors group"
            >
              <span>Discuss rollout</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Technology in Practice */}
        <div className="pt-10 border-t border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Technology in Practice
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Evidence first, and only approved evidence
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xs text-gray-600 leading-relaxed">
                Case studies are in review. No operator logos, subscriber
                counts, throughput, uptime or migration-speed metrics until
                approved. See the ZoikoNex MVNO launch on its product page.
              </p>
            </div>
          </div>

          {/* Case Studies Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {caseStudies.map((card, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl h-[320px] flex flex-col justify-between p-5 border border-gray-200/85 shadow-sm transition-all duration-300"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.imageSrc})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Top Badge */}
                <div className="relative z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-amber-100/90 text-amber-900 backdrop-blur-md">
                    <Clock className="w-3 h-3 mr-1 text-amber-700" />
                    Evidence pending
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 flex flex-col justify-end space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    Case study · In review
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
