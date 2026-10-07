import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

interface WorkAttribute {
  label: string;
  value: string;
  isBadge?: boolean;
}

const WORK_ATTRIBUTES: WorkAttribute[] = [
  { label: 'Work ID', value: 'WK-4471' },
  { label: 'Work type', value: 'Onboarding' },
  { label: 'Objective', value: 'Open a business customer account' },
  { label: 'Owner', value: 'Onboarding Ops · Team lead' },
  { label: 'Participants', value: 'Risk Analyst · onboarding agent · CRM · ERP' },
  { label: 'Scope', value: 'US entity · commercial accounts' },
  { label: 'Priority', value: 'Standard (configured class)' },
  { label: 'Stage', value: 'Review' },
  { label: 'Operational state', value: 'Review required', isBadge: true },
  { label: 'Authoritative refs', value: 'CRM case C-2201 · ERP account (pending)' },
  { label: 'Created / updated', value: '01 Oct 09:10 · 03 Oct 14:22 · v6' },
];

export default function GovernedOrchestrationWorkObjectSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#0B132B]">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        
        {/* Top Header Block */}
        <div className="mb-16">
          <div className="text-[#2b7a78] font-extrabold text-5xl md:text-6xl tracking-tight mb-2 font-mono">
            04
          </div>
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4 font-mono">
            WORK OBJECT / CASE CONTRACT
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-[#0B132B]">
            One durable record that every participant shares
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
            Stable identity, owner, scope, stage and state, with references to wherever the authoritative facts actually live.
          </p>
        </div>

        {/* Main Grid: Left Images, Right Work Object Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center mb-12">
          
          {/* Left Column: Overlapping Images (/gov/9.png and /gov/10.png) */}
          <div className="lg:col-span-5 relative w-full h-[380px] md:h-[450px]">
            {/* Background Image /gov/9.png */}
            <div className="absolute top-0 left-0 w-3/4 h-[380px] rounded-2xl overflow-hidden">
              <img
                src="/gov/10.png"
                alt="Workspace development monitor display"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
            {/* Foreground Overlapping Image /gov/10.png */}
            <div className="absolute bottom-4 right-0 w-3/4 h-[320px] rounded-2xl overflow-hidden z-10">
              <img
                src="/gov/11.png"
                alt="Architectural structure view"
                className="w-full h-full object-cover block m-0 p-0"
              />
            </div>
          </div>

          {/* Right Column: Work Object Card */}
          <div className="lg:col-span-7 bg-white text-[#0B132B] rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200/80 w-full">
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
              <span className="text-xs font-extrabold font-mono text-[#0B132B]">
                Work object · WK-4471
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                SPECIMEN · SYNTHETIC DATA
              </span>
            </div>

            {/* Table Attributes List */}
            <div className="space-y-3.5 mb-6">
              {WORK_ATTRIBUTES.map((attr, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs py-1.5 border-b border-gray-100 items-center">
                  <div className="md:col-span-4 text-gray-500 font-semibold">
                    {attr.label}
                  </div>
                  <div className="md:col-span-8 text-gray-900 font-medium">
                    {attr.isBadge ? (
                      <span className="inline-flex items-center space-x-1.5 bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-semibold text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                        <span>{attr.value}</span>
                      </span>
                    ) : (
                      attr.value
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Notice Footer inside Card */}
            <div className="flex items-start space-x-2 text-[11px] text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200/80">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span>The orchestration record coordinates work. It is not automatically the system of record for every fact.</span>
            </div>

          </div>

        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
          >
            Review work contract <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>

      </div>
    </section>
  );
}