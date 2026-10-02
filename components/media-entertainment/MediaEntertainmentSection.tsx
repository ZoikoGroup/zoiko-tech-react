import React from "react";
import {
  Tv,
  ShieldCheck,
  Share2,
  MonitorPlay,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function MediaEntertainmentSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-between">
      {/* Top Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          {/* Subtitle */}
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-teal-300 mb-6">
            MEDIA & ENTERTAINMENT
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Run live and digital <br />
            media experiences <br />
            with clearer <br />
            operational control <br />
            <span className="text-[#8EDBDB]">
              from launch to <br />
              replay.
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Zoiko Tech supports media organizations with technology for
            live-event broadcasting, streaming infrastructure, digital media
            experiences, communications and audience / community ecosystems —
            with product-state, operator, delivery and evidence boundaries kept
            explicit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore media pathways
              <ExternalLink className="w-4 h-4 text-black" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-teal-500/50 text-white font-medium text-sm hover:bg-teal-950/30 transition-colors"
            >
              Discuss your media architecture
            </a>
          </div>

          {/* Inline Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-teal-300 hover:text-teal-200 transition-colors tracking-wide"
          >
            Explore Media & Streaming &rarr;
          </a>
        </div>

        {/* Right Column: Isometric Graphic Illustration */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative z-10 mt-8 lg:mt-0">
          {/* Architecture Concept Label */}

          {/* Image Container */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            <img
              src="/media/1.png"
              alt="Media Operations Architecture Concept Isometric Illustration"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className="w-full flex justify-end mb-4 pr-4">
            <span className="text-[10px] sm:text-xs tracking-widest text-teal-400/80 uppercase font-mono">
              MEDIA OPERATIONS / ARCHITECTURE CONCEPT
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Process Flow Bar */}
      <div className="max-w-7xl mx-auto w-full mt-20 pt-12 border-t border-teal-800/40 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4 text-teal-300 group-hover:border-teal-400 transition-colors shadow-inner">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">Source</h3>
            <p className="text-gray-400 text-xs">Event / content</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4 text-teal-300 group-hover:border-teal-400 transition-colors shadow-inner">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">Prepare</h3>
            <p className="text-gray-400 text-xs">Readiness / authority</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4 text-teal-300 group-hover:border-teal-400 transition-colors shadow-inner">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">Publish</h3>
            <p className="text-gray-400 text-xs">Authorized control</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4 text-teal-300 group-hover:border-teal-400 transition-colors shadow-inner">
              <MonitorPlay className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">Deliver</h3>
            <p className="text-gray-400 text-xs">Audience experience</p>
          </div>

          {/* Step 5 */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-700/40 flex items-center justify-center mb-4 text-teal-300 group-hover:border-teal-400 transition-colors shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">
              Post-event
            </h3>
            <p className="text-gray-400 text-xs">Replay / evidence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
