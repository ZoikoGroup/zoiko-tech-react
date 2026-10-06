import React from "react";
import { Check } from "lucide-react";

interface FragmentItem {
  crossedOutTitle: string;
  solutionText: string;
}

const fragments: FragmentItem[] = [
  {
    crossedOutTitle: "Subscriber and service records diverge",
    solutionText: "Authoritative systems with visible reconciliation",
  },
  {
    crossedOutTitle: "OSS/BSS integrations go point-to-point",
    solutionText: "An API and event fabric with owned, versioned interfaces",
  },
  {
    crossedOutTitle: "Identity is duplicated by application",
    solutionText: "Shared identity and authority foundations",
  },
  {
    crossedOutTitle: "Cloud decisions sit apart from operator systems",
    solutionText: "Runtime dependencies made visible",
  },
  {
    crossedOutTitle: "Communications sit outside operations",
    solutionText: "Communications as a service-delivery layer",
  },
  {
    crossedOutTitle: "Modernization becomes all-or-nothing",
    solutionText: "Coexistence and migration-wave patterns",
  },
  {
    crossedOutTitle: "Operational status is fragmented",
    solutionText: "Connected observability, change and incident ownership",
  },
];

export default function OperatorStacksSection() {
  return (
    <section className="bg-[#E9F9F8] text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading and List of Fragments */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#247780] mb-3">
            Why Telecom Infrastructure Fragments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Operator stacks grow by addition, rarely by design
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Seven patterns that make telecom estates hard to change, and what a
            clearer architecture does instead.
          </p>

          <div className="space-y-6">
            {fragments.map((item, index) => (
              <div key={index} className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-400 line-through">
                  {item.crossedOutTitle}
                </span>
                <div className="flex items-center space-x-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f0f6f8] flex items-center justify-center">
                    <Check
                      className="w-4 h-4 stroke-[2.5]"
                      style={{ color: "#247780" }}
                    />
                  </span>
                  <span className="text-base font-semibold text-gray-900">
                    {item.solutionText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image Card with Floating Callout Box */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] h-[560px] rounded-3xl overflow-hidden shadow-xl">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/tele/8.png)` }}
            />

            {/* Gradient Overlay for the card bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating White Callout Box Inside Image */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100/20">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Legacy is not the enemy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Most operators keep some systems of record for years. The goal
                is clear ownership and clean seams, not a big-bang replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
