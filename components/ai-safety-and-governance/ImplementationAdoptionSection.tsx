import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AdoptionStep {
  step: string;
  title: string;
  description: string;
}

const adoptionSteps: AdoptionStep[] = [
  {
    step: "01",
    title: "Inventory",
    description: "Bounded use cases, systems, owners, data and authority identified",
  },
  {
    step: "02",
    title: "Classify",
    description: "Risk model applied; high-impact, restricted and prohibited use identified",
  },
  {
    step: "03",
    title: "Govern",
    description: "Policy, access, review, agentic limits, evidence and incident paths defined",
  },
  {
    step: "04",
    title: "Evaluate",
    description: "Scope, method, results, limitations and acceptance recorded",
  },
  {
    step: "05",
    title: "Pilot",
    description: "Controlled users with monitoring and a disablement plan",
  },
  {
    step: "06",
    title: "Operate",
    description: "Signals, incidents, currentness and changes monitored",
  },
  {
    step: "07",
    title: "Expand",
    description: "Only after review for new users, data, domains or authority",
  },
];

interface SpecimenCard {
  title: string;
  subtitle: string;
  image: string;
}

const specimenCards: SpecimenCard[] = [
  {
    title: "Governed use case",
    subtitle: "Purpose, owner, scope, authority, risk, status",
    image: "/ai-safety-and-governance/adoption-step1-inventory.png",
  },
  {
    title: "Evaluation",
    subtitle: "System, method, rubric, limits, date",
    image: "/ai-safety-and-governance/adoption-step2-assess.png",
  },
  {
    title: "Oversight",
    subtitle: "Reviewer, trigger, decision, escalation",
    image: "/ai-safety-and-governance/adoption-step3-govern.png",
  },
  {
    title: "Incident",
    subtitle: "Class, status, owner, containment, next step",
    image: "/ai-safety-and-governance/adoption-step4-validate.png",
  },
  {
    title: "Change governance",
    subtitle: "Change type, impacted use cases, approval",
    image: "/ai-safety-and-governance/adoption-step5-pilot.png",
  },
  {
    title: "Customer proof",
    subtitle: "Exact scope and source, legally approved",
    image: "/ai-safety-and-governance/adoption-step6-expand.png",
  },
];

export const ImplementationAdoptionSection: React.FC = () => {
  return (
    <section id="implementation" className="w-full bg-[#E9F9F8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: 7 Steps */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Implementation & adoption
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0F172A] font-plus-jakarta leading-tight">
              Register, assess, govern,<br />validate, pilot, monitor,<br />expand
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-slate-200/70 border-b border-slate-200/70">
            {adoptionSteps.map((step) => (
              <div key={step.step} className="py-3.5 flex items-start gap-4">
                <span className="text-sm font-bold text-[#247780] font-mono shrink-0 w-6 pt-0.5">
                  {step.step}
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#0F172A] font-plus-jakarta">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#475569] font-poppins mt-0.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#247780] hover:text-[#195B62] transition-colors group"
            >
              <span>Discuss rollout</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Technology in Practice Specimen Grid */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-wider text-[#247780] font-poppins uppercase">
              Technology in practice
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-plus-jakarta">
              Evidence-first specimens
            </h3>
            <p className="text-xs md:text-sm text-[#475569] font-poppins leading-relaxed">
              Synthetic and clearly labeled until a real case is legally approved. No fake review
              history or invented metrics.
            </p>
          </div>

          {/* 6 Specimen Cards Grid (2 cols x 3 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specimenCards.map((card, idx) => (
              <article
                key={idx}
                className="relative h-48 rounded-2xl overflow-hidden shadow-md group"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 350px"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001315]/95 via-[#001315]/50 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#FEF3C7] text-[#92400E] shadow-xs">
                    SPECIMEN
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-0.5">
                  <h4 className="text-sm font-bold text-white font-plus-jakarta">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-[#E2E8F0] font-poppins line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
