"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-gradient-to-r from-[#0A1F29E0] via-[#0F2E3899] to-[#14384759]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:gap-20 lg:px-20 lg:py-28">

        {/* Left Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-8">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Work With ZoikoTech
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.1]">
            Build what comes next with Zoiko Tech
          </h2>

          {/* Description */}
          <p className="w-full max-w-[700px] text-base font-normal leading-7 text-slate-50 sm:text-lg">
            We work with enterprises, telecom operators, public institutions,
            nonprofits, technology partners and organizations that need
            sophisticated systems.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-sm font-normal text-slate-400">
              zoikotech.com | info@zoikotech.com | +1 (800) 484-5574
            </p>

            <p className="text-sm font-normal text-slate-400">
              Sacramento, California
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-6">

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-cyan-700 transition-colors duration-300 hover:bg-slate-100"
            >
              Talk to Zoiko Tech
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore all platforms
            </Link>

          </div>
        </div>

        {/* Request Access Form */}
        <div className="w-full rounded-2xl bg-white p-6 shadow-[0px_12px_24px_0px_rgba(15,23,42,0.15)] sm:p-8 lg:w-[480px] lg:flex-shrink-0">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            {/* Form Heading */}
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Request platform access
            </h3>

            <div className="flex flex-col gap-4">

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-600"
                >
                  Work Email*
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700"
                />
              </div>

              {/* Company + Country */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="text-xs font-semibold text-gray-600"
                  >
                    Company*
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Enterprise Inc."
                    className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700"
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="country"
                    className="text-xs font-semibold text-gray-600"
                  >
                    Country*
                  </label>

                  <select
                    id="country"
                    name="country"
                    required
                    defaultValue=""
                    className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500 outline-none focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700"
                  >
                    <option value="" disabled>
                      United States
                    </option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                    <option value="UK">United Kingdom</option>
                    <option value="SG">Singapore</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                    <option value="DE">Germany</option>
                    <option value="AE">United Arab Emirates</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-gray-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your technical requirements..."
                  className="w-full resize-none rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700"
                />
              </div>

            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-700 p-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-cyan-800"
              >
                Submit inquiry
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <p className="text-center text-sm font-medium text-cyan-700">
                Thank you. Your inquiry has been submitted.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}