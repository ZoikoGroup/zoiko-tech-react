"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-white/10 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28"
    >
      {/* =====================================================
          SECTION BACKGROUND
          public/about-us/bg7.png
      ===================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us/bg7.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Very subtle overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/5" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}
        <div
          className={`flex min-w-0 flex-1 flex-col items-start gap-8 transition-all duration-1000 ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-3 py-1.5 transition-all duration-300 hover:border-teal-400/50">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Work With ZoikoTech
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight text-white transition-transform duration-300 hover:translate-x-1 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Build what comes next with Zoiko Tech
          </h2>

          {/* Description */}
          <p className="w-full text-base font-normal leading-7 text-white sm:text-lg">
            We work with enterprises, telecom operators, public institutions,
            nonprofits, technology partners and organizations that need
            sophisticated systems.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-sm font-normal text-white/80 transition-colors duration-300 hover:text-white">
              zoikotech.com | info@zoikotech.com | +1 (800) 484-5574
            </p>

            <p className="text-sm font-normal text-white/80 transition-colors duration-300 hover:text-white">
              Sacramento, California
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-stretch gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
            <button
              type="button"
              className="rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-cyan-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-lg"
            >
              Talk to Zoiko Tech
            </button>

            <button
              type="button"
              className="rounded-lg border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Explore all platforms
            </button>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE - WHITE CARD
        ================================================= */}
        <div
          className={`w-full shrink-0 rounded-2xl border border-white/80 bg-white p-6 shadow-[0px_12px_24px_0px_rgba(15,23,42,0.15)] transition-all duration-1000 delay-200 ease-out hover:-translate-y-2 hover:shadow-[0px_20px_40px_0px_rgba(15,23,42,0.25)] sm:p-8 lg:w-[480px] ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        >
          {/* Card Heading */}
          <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Request platform access
          </h3>

          {/* Form */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Work Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">
                Work Email*
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10"
              />
            </div>

            {/* Company + Country */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Company */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Company*
                </label>

                <input
                  type="text"
                  placeholder="Enterprise Inc."
                  className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10"
                />
              </div>

              {/* Country */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Country*
                </label>

                <input
                  type="text"
                  placeholder="United States"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">
                Message
              </label>

              <textarea
                placeholder="Tell us about your technical requirements..."
                className="h-24 w-full resize-none rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/10"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="mt-6 w-full rounded-lg bg-cyan-700 p-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-800 hover:shadow-lg"
          >
            Submit inquiry
          </button>
        </div>
      </div>
    </section>
  );
}