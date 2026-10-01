import React from "react";
import { ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const steps: StepItem[] = [
  {
    number: "1",
    title: "Wrap / coexist",
    description:
      "Legacy stays system of record; approved APIs and events around it.",
    highlighted: true,
  },
  {
    number: "2",
    title: "Integrate",
    description:
      "Several systems remain, coordinated through shared identity and events.",
  },
  {
    number: "3",
    title: "Modernize a domain",
    description:
      "Re-platform one bounded area with pilot, validation and fallback.",
  },
  {
    number: "4",
    title: "Migrate in waves",
    description:
      "Move scope gradually: wave criteria, sync, cutover, hypercare.",
  },
  {
    number: "5",
    title: "Consolidate",
    description: "Reduce duplicate platforms with clear retirement criteria.",
  },
  {
    number: "6",
    title: "Decommission",
    description:
      "Retire only once dependencies and evidence obligations close.",
  },
];

export default function EvolveStackSection() {
  return (
    <section className="bg-[#E9F9F8] text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image Card with Floating Callout Box */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[540px] h-[520px] rounded-3xl overflow-hidden shadow-xl">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/tele/10.png)` }}
            />

            {/* Gradient Overlay for bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Dark Callout Box Inside Image */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0c1b1f]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10">
              <p className="text-xs md:text-sm text-gray-200 font-medium">
                Choose a pattern per domain. Most estates use several at once.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Heading and Steps List */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Coexistence & Modernization
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-10 leading-[1.1]">
            Evolve the stack one domain at a time
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Step Number Badge */}
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.highlighted
                      ? "bg-[#247780] text-white"
                      : "bg-gray-200/80 text-gray-700"
                  }`}
                >
                  {step.number}
                </span>

                {/* Step Content */}
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0f3438] hover:bg-[#134248] transition-colors shadow-md group"
            >
              <span>Discuss your telecom architecture</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
