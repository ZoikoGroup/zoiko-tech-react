import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ModernizationSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] flex items-center overflow-hidden px-6 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Content Area */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#7FD0D9] mb-6">
            <span className="text-[#7FD0D9] text-xs font-medium tracking-wide uppercase">
              Modernization & Integration
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Modernize without forcing the whole estate to move at once.
          </h1>

          {/* Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Zoiko Tech helps organizations connect legacy systems, APIs,
            workflows and digital services through shared integration and
            control patterns — so modernization can happen in deliberate stages
            with clearer ownership, observability, validation and operational
            continuity.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link
              href="#"
              className="px-6 py-3.5 rounded-[10px] bg-white text-black font-medium text-sm sm:text-base hover:bg-slate-100 transition-colors shadow-lg"
            >
              Discuss your modernization path
            </Link>

            <Link
              href="#"
              className="px-6 py-3.5 rounded-[10px] bg-transparent border border-[#7FD0D9] text-white font-medium text-sm sm:text-base hover:bg-teal-950/30 transition-colors backdrop-blur-sm"
            >
              Explore Developer Platform
            </Link>
          </div>

          {/* Sub Link */}
          <div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[#7FD0D9] hover:text-teal-300 text-sm sm:text-base font-medium transition-colors group"
            >
              View Technology Architecture
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Graphic/Illustration Area */}
        <div className="lg:col-span-6 relative flex items-center justify-center w-full h-[350px] sm:h-[450px] lg:h-[600px]">
          <div className="relative w-full h-full">
            <Image
              src="/modern/1.png"
              alt="Modernization and Integration Architecture"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
