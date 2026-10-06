import React from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function DelegationSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Step Info, Header & Photo */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Step Indicator */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase">
              STEP 4 OF 7 · DELEGATION
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-6 h-2 rounded-full bg-[#2b7a78]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Borrowed authority, with an owner and an end date
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            Who delegated, to whom or what, for which scope, under which policy,
            for how long, and how it is revoked.
          </p>

          {/* Delegation Image Thumbnail Card */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div className="relative w-full h-[220px]">
              <img
                src="/digital/18.png"
                alt="Delegated authority shell"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Delegated Authority Card & Rule Footer */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#0B132B]">
                Delegated authority · DLG-208
              </h3>
              <span className="text-[10px] tracking-wider uppercase font-medium text-gray-400">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Delegator & Delegate Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
              {/* Delegator Box */}
              <div className="md:col-span-5 bg-white border border-gray-200 rounded-xl p-3.5 flex flex-col">
                <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mb-1">
                  DELEGATOR
                </span>
                <span className="text-xs md:text-sm font-semibold text-[#0B132B]">
                  AP Lead · S-0870
                </span>
              </div>

              {/* Arrow Indicator */}
              <div className="md:col-span-2 flex justify-center text-gray-400">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Delegate Box */}
              <div className="md:col-span-5 bg-[#E6F4F1] border border-[#B2DFDB] rounded-xl p-3.5 flex flex-col">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#2b7a78] mb-1">
                  DELEGATE
                </span>
                <span className="text-xs md:text-sm font-semibold text-[#0B132B]">
                  Agent · INV-EXC-01
                </span>
              </div>
            </div>

            {/* Sub-attributes Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 mb-6 border-t border-b border-gray-100 text-xs">
              <div>
                <span className="block text-gray-400 font-medium mb-1">
                  Authority scope
                </span>
                <span className="font-semibold text-[#0B132B]">
                  Draft & send supplier queries
                </span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-1">
                  Policy basis
                </span>
                <span className="font-semibold text-[#0B132B]">
                  AP delegation policy v2
                </span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-1">
                  Sub-delegation
                </span>
                <span className="font-semibold text-[#0B132B]">
                  Not permitted
                </span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-1">
                  Reviewer
                </span>
                <span className="font-semibold text-[#0B132B]">
                  Finance controls
                </span>
              </div>
            </div>

            {/* Validity Progress Section */}
            <div className="flex flex-col mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
                <span>VALIDITY</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-3">
                <div className="bg-[#2b7a78] h-full w-[70%] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Valid from 01 Oct</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#E6F4F1] text-[#2b7a78]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2b7a78] mr-1.5"></span>
                  Active
                </span>
                <span className="text-gray-500">Expires 31 Oct</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <button className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-[#0B132B] hover:bg-gray-50 transition-colors">
                Review
              </button>
              <button className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-[#0B132B] hover:bg-gray-50 transition-colors">
                Revoke now
              </button>
            </div>
          </div>

          {/* Rule Footer Info Box */}
          <div className="bg-[#E6F4F1] border border-[#B2DFDB] rounded-xl p-4 flex items-start space-x-3 text-xs text-[#2b7a78]">
            <AlertTriangle className="w-4 h-4 text-[#2b7a78] shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">
              Delegated authority rule. Delegation is not identity ownership,
              permanent role assignment, power of attorney or legal agency.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
