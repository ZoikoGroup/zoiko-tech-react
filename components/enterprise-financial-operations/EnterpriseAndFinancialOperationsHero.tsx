import { ArrowDown } from "lucide-react";
import React from "react";

export default function EnterpriseAndFinancialOperationsHero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Eyebrow, Main Heading, Subtitle & Action Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-teal-300 mb-4">
            Enterprise & Financial Operations
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Connect enterprise operations and financial workflows{" "}
            <span className="text-[#93CFD5]">
              {" "}
              without blurring who owns each authoritative state.
            </span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl">
            Zoiko Tech's enterprise and financial architecture spans business
            operating systems, workforce and payroll infrastructure, billing and
            revenue operations, operator, jurisdiction, approval and evidence
            boundaries explicit.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#explore-architecture"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-medium text-sm transition-colors shadow-lg"
            >
              Explore architecture <ArrowDown className="h-5 w-5" />
            </a>
            <a
              href="#discuss-enterprise-architecture"
              style={{
                backgroundColor: "#FFFFFF0F",
                borderColor: "#7FD0D959",
              }}
              className="inline-flex items-center py-3 px-6 rounded-xl border text-white hover:bg-white/[0.15] font-medium text-sm transition-colors backdrop-blur-md shadow-lg"
            >
              Discuss your enterprise architecture
            </a>
          </div>
        </div>

        {/* Right Column: Isometric Enterprise Graphic */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full overflow-hidden">
            <img
              src="/enterprise/1.png"
              alt="Enterprise operations and financial workflow architecture diagram"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
