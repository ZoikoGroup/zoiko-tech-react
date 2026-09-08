"use client";

import { FormEvent } from "react";

export default function PlatformAccess() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-r
        from-[#0A1F29]/90
        via-[#0F2E38]/60
        to-[#143847]/35
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[746px]
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          gap-12
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:flex-row
          lg:items-center
          lg:gap-16
          lg:px-12
          lg:py-24
          xl:px-20
          xl:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex
            w-full
            flex-1
            flex-col
            items-start
            gap-7
            lg:max-w-[780px]
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-700/20
              px-3
              py-1.5
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                text-cyan-300
              "
            >
              WORK WITH ZOIKOTECH
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[700px]
              text-4xl
              font-extrabold
              leading-[1.1]
              text-white
              sm:text-5xl
              lg:text-[52px]
              lg:leading-[1.08]
            "
          >
            Build what comes next with Zoiko Tech
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[760px]
              text-base
              font-normal
              leading-7
              text-white/90
              sm:text-lg
            "
          >
            We work with enterprises, telecom operators, public institutions,
            nonprofits, technology partners and organizations that need
            sophisticated systems.
          </p>

          {/* Contact Details */}
          <div
            className="
              flex
              flex-col
              gap-2
              text-sm
              leading-6
              text-slate-300
            "
          >
            <p>
              zoikotech.com | info@zoikotech.com | +1 (800) 484-5574
            </p>

            <p>Sacramento, California</p>
          </div>

          {/* Buttons */}
          <div
            className="
              mt-2
              flex
              w-full
              flex-col
              gap-4
              sm:w-auto
              sm:flex-row
              sm:items-center
              sm:gap-6
            "
          >
            <a
              href="#"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-lg
                bg-white
                px-6
                py-3.5
                text-base
                font-semibold
                text-cyan-700
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-slate-100
              "
            >
              Talk to Zoiko Tech
            </a>

            <a
              href="#"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-lg
                border
                border-white/80
                bg-transparent
                px-6
                py-3.5
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/10
              "
            >
              Explore all platforms
            </a>
          </div>

          {/* Developer Platform */}
          <a
            href="#"
            className="
              group
              inline-flex
              items-center
              gap-1.5
              text-base
              font-semibold
              text-teal-400
            "
          >
            <span>Developer Platform</span>

            <span
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        </div>

        {/* RIGHT FORM */}
        <div
          className="
            w-full
            max-w-[480px]
            shrink-0
            rounded-2xl
            bg-white
            p-6
            shadow-[0_12px_30px_rgba(15,23,42,0.20)]
            sm:p-8
          "
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-6"
          >
            {/* Form Heading */}
            <h3
              className="
                text-3xl
                font-extrabold
                leading-tight
                text-slate-900
              "
            >
              Request platform access
            </h3>

            <div className="flex flex-col gap-4">
              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="work-email"
                  className="text-xs font-semibold text-gray-600"
                >
                  Work Email*
                </label>

                <input
                  id="work-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="
                    h-12
                    w-full
                    rounded-md
                    bg-slate-50
                    px-3
                    text-sm
                    text-slate-900
                    outline
                    outline-1
                    outline-slate-200
                    placeholder:text-slate-400
                    focus:outline-2
                    focus:outline-cyan-700
                  "
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
                    className="
                      h-12
                      w-full
                      rounded-md
                      bg-slate-50
                      px-3
                      text-sm
                      text-slate-900
                      outline
                      outline-1
                      outline-slate-200
                      placeholder:text-slate-400
                      focus:outline-2
                      focus:outline-cyan-700
                    "
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
                    defaultValue="United States"
                    className="
                      h-12
                      w-full
                      rounded-md
                      bg-slate-50
                      px-3
                      text-sm
                      text-slate-600
                      outline
                      outline-1
                      outline-slate-200
                      focus:outline-2
                      focus:outline-cyan-700
                    "
                  >
                    <option value="United States">
                      United States
                    </option>

                    <option value="United Kingdom">
                      United Kingdom
                    </option>

                    <option value="Canada">
                      Canada
                    </option>

                    <option value="India">
                      India
                    </option>

                    <option value="Singapore">
                      Singapore
                    </option>

                    <option value="Australia">
                      Australia
                    </option>

                    <option value="Other">
                      Other
                    </option>
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
                  className="
                    min-h-[104px]
                    w-full
                    resize-none
                    rounded-md
                    bg-slate-50
                    p-3
                    text-sm
                    text-slate-900
                    outline
                    outline-1
                    outline-slate-200
                    placeholder:text-slate-400
                    focus:outline-2
                    focus:outline-cyan-700
                  "
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full
                rounded-lg
                bg-cyan-700
                p-3.5
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-cyan-600
              "
            >
              Submit inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}