import React from "react";
import Image from "next/image";
import { FileText, Info, Search, Code, AlertCircle } from "lucide-react";

export default function ResultsLibrarySection() {
  return (
    <section
      id="library"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(134deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Research results library
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            Read state and source before opening an artifact.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[10px] bg-[rgba(131,183,191,0.33)] flex items-center justify-center flex-shrink-0 text-white">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg leading-tight text-white">
                    Public result contract
                  </h3>
                </div>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                  Eligible approved artifacts only; semantic list/grid with stable
                  identity and canonical route.
                </p>
              </div>

              <div className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[10px] bg-[rgba(131,183,191,0.33)] flex items-center justify-center flex-shrink-0 text-white">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg leading-tight text-white">
                    Empty versus unavailable
                  </h3>
                </div>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                  Empty means verified no published records. Unavailable means the
                  registry cannot be consulted. This prototype is unavailable,
                  not a claim that Zoiko has no research.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[10px] bg-[rgba(131,183,191,0.33)] flex items-center justify-center flex-shrink-0 text-white">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg leading-tight text-white">
                    Result count
                  </h3>
                </div>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                  Visible, polite live-region updates without moving focus.
                </p>
              </div>

              <div className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[10px] bg-[rgba(131,183,191,0.33)] flex items-center justify-center flex-shrink-0 text-white">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg leading-tight text-white">
                    No JavaScript
                  </h3>
                </div>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                  Real current listings and canonical links remain readable in
                  server-rendered HTML when a catalog is connected.
                </p>
              </div>
            </div>

            {/* Row 3 - Full width card */}
            <div className="rounded-[12px] border border-[rgba(131,183,191,0.33)] p-6 bg-[#0A2528] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-[rgba(131,183,191,0.33)] flex items-center justify-center flex-shrink-0 text-white">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-lg leading-tight text-white">
                  Current prototype
                </h3>
              </div>
              <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                No artifact cards or search results are rendered because approved
                inventory was not supplied.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full aspect-[567/378] max-w-[567px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/research/library-results-illustration.png"
                alt="Research Results Library"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
