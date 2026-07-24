"use client";

import React from "react";

export default function CultureOfAccountability() {
  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        {/* Top Split: Left Image + Right Heading & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Offset Background */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px]">
              {/* Subtle light offset layer behind image */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#eceef7] rounded-xl -z-10 hidden sm:block" />

              <div className="w-full rounded-xl overflow-hidden shadow-xl border border-[#e2e8f0]/80">
                <img
                  src="/leadership-and-governance/culture.png"
                  alt="Culture of Accountability & Excellence"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Body Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#0e1726] tracking-tight leading-tight mb-6">
              Culture of Accountability <br />
              &amp; Excellence
            </h2>

            <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed mb-6 font-normal">
              Our leadership culture is anchored in meritocracy, empowerment,
              and impact. We recruit global talent that reflects the diversity
              of the clients and communities we serve, and we cultivate leaders
              who prioritize execution without compromising ethics.
            </p>

            <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed font-normal">
              From strategic M&amp;A to international onboarding, every major
              decision undergoes structured oversight. We operate under a
              published Code of Ethics, a Whistleblower Policy, and a Supplier
              Code of Conduct that exceed industry benchmarks and reflect our
              commitment to long-term value creation.
            </p>
          </div>
        </div>

        {/* Bottom Closing Statement Banner */}
        <div className="pt-8 border-t border-slate-200/60">
          <p className="text-[#64748b] text-[14.5px] md:text-[15.5px] leading-relaxed font-normal text-left max-w-5xl">
            At ZoikoTech, governance is not compliance for compliance&apos;s
            sake &mdash; it is a strategic asset that powers trust, protects our
            stakeholders, and ensures that we lead the future of technology with
            integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
