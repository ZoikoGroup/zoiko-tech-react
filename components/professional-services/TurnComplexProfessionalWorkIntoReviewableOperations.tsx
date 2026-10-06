import React from "react";

export default function TurnComplexProfessionalWorkIntoReviewableOperations() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Layout: Left Text & CTAs vs Right Architecture Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subtext & CTAs (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Category Subtitle */}
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-4">
              Professional Services
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
              Turn complex <br />
              professional work into <br />
              reviewable operations <br />
              <span className="text-[#8EDBDB]">
                without losing <br />
                professional judgment.
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Zoiko Tech supports accounting, legal, tax, advisory and
              specialist-service organizations with technology across knowledge,
              finance, compliance, workforce, communications and governed AI
              &mdash; designed to preserve source, confidentiality, reviewer and
              professional-authority boundaries.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-lg">
                Explore professional-service
              </button>
              <button className="bg-transparent hover:bg-teal-950/40 text-white border border-teal-700/60 font-medium text-sm px-6 py-3 rounded-xl transition-colors backdrop-blur-md">
                Discuss your operating architecture
              </button>
            </div>

            {/* Bottom Link */}
            <div>
              <a
                href="#business-operations"
                className="text-xs font-semibold text-[#9ADDDF] hover:text-teal-300 transition-colors inline-flex items-center gap-1 group"
              >
                Explore Business Operations
                <span className="transform transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Architecture Image Container (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden backdrop-blur-md p-4">
              <img
                src="/prof/30.png"
                alt="Professional services operations architecture graph showing source engagement, professional review, professional work, evidence and trust, and delivery and operations"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
