import Image from "next/image";
import Link from "next/link";

export default function TelecomHeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Content Grid: Left Text, Right Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Area (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#7FD0D9] backdrop-blur-md mb-6">
              <span className="text-xs font-medium text-[#7FD0D9] tracking-wide">
                Telecom Operations & Monetization
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-[46px] lg:text-[54px] font-bold text-white tracking-tight mb-6 leading-tight">
              Operate communications services with clearer control across the operator stack.
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Zoiko Tech brings OSS/BSS, subscriber operations, communications infrastructure, monetization and integration into a governed operating architecture for telecom and MVNO environments — with explicit service state, ownership, observability and evidence.
            </p>

            {/* Action Buttons & Link */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-6 py-3.5 rounded-full bg-white text-black hover:bg-slate-100 transition-colors text-sm md:text-base font-medium shadow-lg"
              >
                Discuss your operator stack
              </button>
              <button
                type="button"
                className="px-6 py-3.5 rounded-full bg-transparent border border-[#7FD0D9] text-white hover:bg-white/10 transition-colors text-sm md:text-base font-medium backdrop-blur-md"
              >
                Explore Telecom Platforms
              </button>
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="text-sm font-medium text-[#7FD0D9] hover:underline inline-flex items-center gap-1"
              >
                Explore ZoikoNex &rarr;
              </Link>
            </div>

          </div>

          {/* Right Illustration Area (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full h-[350px] sm:h-[450px] lg:h-[500px]">
            <div className="relative w-full h-full">
              <Image
                src="/tel/1.png"
                alt="Telecom operations, network infrastructure, and subscriber stack architecture"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}