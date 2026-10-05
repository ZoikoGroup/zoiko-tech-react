import React from "react";

export default function CustomerEvidenceHero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA buttons */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Subtitle / Eyebrow */}
          <span className="text-[11px] font-bold tracking-widest text-teal-400 uppercase mb-3">
            Customer evidence
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            See the deployment, <br />
            result and evidence <br />
            <span className="text-[#8EDBDB]">behind the claim.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Explore approved customer evidence across industries. Every
            published story, metric, quote and customer identity is governed by
            permission, source, scope and review state.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button className="bg-white hover:bg-teal-50 text-gray-900 font-bold py-3 px-6 rounded-xl text-xs md:text-sm transition-colors shadow-lg">
              Explore customer evidence
            </button>
            <button className="bg-[#0A2528]/80 hover:bg-[#0A2528] border border-teal-800/60 text-white font-semibold py-3 px-6 rounded-xl text-xs md:text-sm transition-colors backdrop-blur-sm">
              Explore all industries
            </button>
          </div>

          {/* Footer note */}
          <div className="text-[11px] text-gray-400 font-medium">
            Approved identities. Traceable metrics. Current review state. No
            placeholder proof.
          </div>
        </div>

        {/* Right Column: Isometric Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center relative z-10">
          <div className="w-full max-w-lg aspect-square flex items-center justify-center">
            <img
              src="/customer/1.png"
              alt="Customer Evidence Deployment and Results Illustration"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
