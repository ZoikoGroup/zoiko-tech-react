"use client"
import Link from "next/link";

export default function ModernizeEstateSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#1C5C62] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Modernize the estate without losing control of the transition.
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Talk with Zoiko Tech about the systems that must remain, the
            workflows that need to change, the interfaces and data that connect
            them, and the right phased path to modernize with less operational
            disruption.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Row 1: Work email, Company, Role, Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Work email
              </label>
              <input
                type="email"
                className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-teal-400 backdrop-blur-md"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-teal-400 backdrop-blur-md"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Role / function (optional)
              </label>
              <input
                type="text"
                className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-teal-400 backdrop-blur-md"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Country / region
              </label>
              <input
                type="text"
                className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-teal-400 backdrop-blur-md"
                placeholder=""
              />
            </div>
          </div>

          {/* Row 2: Select/Dropdown fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Primary modernization goal
              </label>
              <div className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm backdrop-blur-md flex items-center justify-between">
                <span>Connect legacy</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Estate type
              </label>
              <div className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm backdrop-blur-md flex items-center justify-between">
                <span>Mixed</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Evaluation stage
              </label>
              <div className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm backdrop-blur-md flex items-center justify-between">
                <span>Exploring</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Systems involved (optional)
              </label>
              <div className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-[#757575] text-sm backdrop-blur-md flex items-center justify-between">
                <span>High-level only</span>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Message (optional)
            </label>
            <textarea
              rows={4}
              className="w-full bg-[#8FB5AC] border border-[#7FD0D959] rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-teal-400 backdrop-blur-md resize-none"
              placeholder=""
            />
          </div>

          {/* Disclaimer text */}
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Please don't submit secrets, credentials, regulated personal data or
            confidential architecture details.
          </p>

          {/* Checkboxes */}
          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#7FD0D959] bg-[#FFFFFF0F] text-teal-600 focus:ring-0"
              />
              <span className="text-xs text-slate-300">
                I acknowledge the Privacy Notice.
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#7FD0D959] bg-[#FFFFFF0F] text-teal-600 focus:ring-0"
              />
              <span className="text-xs text-slate-300">
                Send me optional Zoiko Tech updates.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-[14px] bg-[#8FB5AC] text-black hover:bg-slate-100 transition-colors text-sm font-medium shadow-lg"
            >
              Contact Sales
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-[14px] bg-transparent border border-[#7FD0D9] text-white hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-md"
            >
              Explore Developer Platform
            </button>
            <Link
              href="#"
              className="text-sm font-medium text-[#7FD0D9] hover:underline flex items-center gap-1"
            >
              View Technology Architecture &rarr;
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
