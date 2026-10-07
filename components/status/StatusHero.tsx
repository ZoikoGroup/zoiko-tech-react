import React from "react";

export default function StatusHero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Badge, Title, Description, CTA Buttons, and Support Link */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF0F] border border-[#7FD0D959] text-teal-300 mb-6 backdrop-blur-md">
              STATUS
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
              Current service state, from the source that{" "}
              <span className="text-[#6FD0F6]"> owns it. </span>
            </h1>

            {/* Description Body */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Check current Zoiko Tech service availability and incident
              communications. Every live state shows when it was last confirmed.
              If current status can't be verified, this page says so instead of
              assuming normal operation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button className="px-6 py-3.5 rounded-xl bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-all shadow-lg">
                Review service status
              </button>
              <button
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="px-6 py-3.5 rounded-xl border text-white font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-md shadow-lg"
              >
                View planned maintenance
              </button>
            </div>

            {/* Help & Support Footer Link */}
            <div className="text-xs text-gray-400">
              Need help with your account or workflow?{" "}
              <a
                href="#support"
                className="text-teal-300 underline hover:text-white transition-colors"
              >
                Open Help & Support
              </a>
            </div>
          </div>

          {/* Right Column: 3D System Graphic Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src="/status/1.png"
                alt="Current service state system architecture and verification nodes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
