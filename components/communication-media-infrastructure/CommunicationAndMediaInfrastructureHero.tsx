import React from "react";
import { ArrowDown } from "lucide-react";

export default function CommunicationAndMediaInfrastructureHero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center z-10">
          <p className="text-xs uppercase tracking-widest text-[#7FD0D9] font-semibold mb-4">
            Communication & Media Infrastructure
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Connect telecom, communication and media delivery{" "}
            <span className="text-[#93CFD5]">
              {" "}
              without hiding who owns each state.
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
            Zoiko Tech's architecture spans OSS/BSS and monetization operations,
            messaging, calling, meetings and local communications, plus
            live-event, replay and media services — connected through shared
            identity, security, integration, observability and evidence.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#architecture"
              className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm group"
            >
              <span>Explore architecture</span>
              <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#discuss"
              className="inline-flex items-center justify-center hover:bg-white/[0.15] border border-[#7FD0D959] text-white font-semibold py-3.5 px-6 rounded-xl transition-all backdrop-blur-md text-sm"
            >
              Discuss your communications stack
            </a>
          </div>
        </div>

        {/* Right Column: Isometric Infrastructure Graphic */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full overflow-hidden">
            <img
              src="/comm/1.png"
              alt="Communication and media infrastructure architecture diagram showing interconnected nodes, secure modules, and data streaming lanes"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
