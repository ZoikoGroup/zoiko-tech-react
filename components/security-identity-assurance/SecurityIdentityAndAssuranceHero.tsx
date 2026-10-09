import React from "react";
import { ArrowDown } from "lucide-react";

export default function SecurityIdentityAndAssuranceHero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8ADCE0] mb-4">
            Security, identity and assurance
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 text-white">
            Connect protection, identity and evidence{" "}
            <span className="text-[#93CFD5]">
              {" "}
              without blurring who controls what.
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
            Zoiko Tech connects cybersecurity, digital identity and access, and
            assurance/regulatory evidence through shared policy, governance,
            integration and proof boundaries — preserving the authoritative
            state, owner and maturity of each system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#architecture"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg cursor-pointer"
            >
              Explore architecture
              <ArrowDown className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#discuss"
              style={{
                borderColor: "#7FD0D959",
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border text-white font-semibold text-sm backdrop-blur-md hover:bg-white/[0.15] transition-all shadow-lg cursor-pointer"
            >
              Discuss your security architecture
            </a>
          </div>
        </div>

        {/* Right Column: 3D Visualization Graphic */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full overflow-hidden">
            <img
              src="/security/1.png"
              alt="Security, identity and assurance architecture visualization"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
