import React from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

export default function SecurityControlsSection() {
  return (
    <section className="w-full bg-[#FFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            SECURITY CONTROLS & POLICY LAYER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] max-w-120 font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Controls with scope, owner, state and evidence
          </h2>
          <p className="text-[#4A5568] text-base max-w-xl leading-relaxed">
            Plain-language objectives such as restrict, monitor, recover, review
            or evidence. No invented framework mapping.
          </p>
        </div>

        {/* Content Grid: Left Image & Compliance Box, Right Security Control Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-10">
          {/* Left Column: Image and Compliance Boundary Notice */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Image Thumbnail */}
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
              <div className="relative w-full h-[320px]">
                <img
                  src="/cyber/13.png"
                  alt="Security controls snowy mountain landscape"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Compliance Boundary Notice Box */}
            <div className="max-w-[520px] bg-[#E6F4F1] border border-[#2b7a78]/20 rounded-2xl p-5 flex items-start space-x-3 text-xs text-[#0B132B]">
              <AlertTriangle className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">
                Compliance boundary. A control state never proves that an
                organization or workload is compliant. That determination
                belongs to Regulatory Technology and Trust evidence.
              </span>
            </div>
          </div>

          {/* Right Column: Security Control Specimen Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <h3 className="text-sm font-bold text-[#0B132B]">
                  Security control · CTL-114
                </h3>
                <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
                  SPECIMEN · SYNTHETIC DATA
                </span>
              </div>

              {/* Grid Fields */}
              <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-gray-100 text-xs">
                <div>
                  <span className="text-gray-400 font-medium block mb-1">
                    Objective
                  </span>
                  <span className="text-[#0B132B] font-bold block leading-snug">
                    Restrict administrative access
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium block mb-1">
                    Scope
                  </span>
                  <span className="text-[#0B132B] font-bold block leading-snug">
                    Billing service · production
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium block mb-1">
                    Owner
                  </span>
                  <span className="text-[#0B132B] font-bold block leading-snug">
                    Platform security lead
                  </span>
                </div>
              </div>

              {/* State Field */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-gray-400 font-medium text-xs block mb-2">
                  State
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4F1] text-[#2b7a78]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2b7a78] mr-1.5"></span>
                  Effective
                </span>
              </div>

              {/* Evidence Field */}
              <div className="mb-6 pb-6 border-b border-gray-100 text-xs">
                <span className="text-[#0B132B] font-medium">
                  <strong className="text-gray-900">Evidence:</strong>{" "}
                  configuration export, reviewed 02 Oct · fresh
                </span>
              </div>

              {/* Exception Field */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#0B132B] font-medium">
                  <strong className="text-gray-900">Exception:</strong> legacy
                  reporting job · expires 31 Dec
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-1.5"></span>
                  Exception
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Controls Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-[#2b7a78] hover:underline"
          >
            Review controls <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
