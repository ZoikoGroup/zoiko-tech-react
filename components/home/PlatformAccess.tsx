"use client";

import { useEffect, useRef, useState } from "react";

export default function PlatformAccess() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-slate-950
        px-4 py-16
        sm:px-6
        md:px-10
        lg:px-20 lg:py-28
      "
    >
      {/* Dark blue/teal background */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_75%_45%,rgba(13,148,136,0.28)_0%,rgba(15,67,78,0.25)_28%,rgba(15,23,42,0.9)_75%)]
        "
      />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(90deg,#172235_0%,#26394a_28%,#49636d_52%,#315c65_75%,#173c48_100%)]
          opacity-90
        "
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Left Content */}
        <Reveal>
          <div className="flex flex-1 flex-col items-start gap-8">
            <div className="max-w-[650px]">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[32px]">
                Build what comes next with Zoiko Tech
              </h2>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-white/80 sm:text-lg">
                Explore our platforms, build with our technology, or speak with
                our team about enterprise deployment.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  bg-white
                  px-6 py-4
                  text-sm font-semibold
                  text-cyan-800
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-slate-100
                  hover:shadow-lg
                "
              >
                Talk to Zoiko Tech
              </a>

              <a
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  border border-white/70
                  px-6 py-4
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                  hover:border-white
                "
              >
                Explore all platforms
              </a>
            </div>

            <a
              href="#"
              className="
                text-sm font-semibold
                text-cyan-400
                transition-all duration-300
                hover:translate-x-1
                hover:text-cyan-300
              "
            >
              Developer Platform →
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={180}>
          <div
            className="
              group
              w-full
              rounded-2xl
              bg-white
              p-6
              shadow-2xl
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0px_25px_55px_rgba(0,0,0,0.25)]
              sm:p-8
              lg:w-[480px]
              lg:shrink-0
            "
          >
            <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Request platform access
            </h3>

            <form className="mt-7 space-y-5">
              {/* Work Email */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Work Email*
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="
                    w-full rounded-md
                    border border-slate-200
                    bg-slate-50
                    px-3 py-3
                    text-sm text-slate-900
                    outline-none
                    placeholder:text-slate-400
                    transition-all duration-300
                    focus:border-cyan-600
                    focus:bg-white
                    focus:ring-2
                    focus:ring-cyan-600/10
                  "
                />
              </div>

              {/* Company + Country */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Company*
                  </label>

                  <input
                    type="text"
                    placeholder="Enterprise Inc."
                    className="
                      w-full rounded-md
                      border border-slate-200
                      bg-slate-50
                      px-3 py-3
                      text-sm text-slate-900
                      outline-none
                      placeholder:text-slate-400
                      transition-all duration-300
                      focus:border-cyan-600
                      focus:bg-white
                      focus:ring-2
                      focus:ring-cyan-600/10
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Country*
                  </label>

                  <input
                    type="text"
                    placeholder="United States"
                    className="
                      w-full rounded-md
                      border border-slate-200
                      bg-slate-50
                      px-3 py-3
                      text-sm text-slate-900
                      outline-none
                      placeholder:text-slate-400
                      transition-all duration-300
                      focus:border-cyan-600
                      focus:bg-white
                      focus:ring-2
                      focus:ring-cyan-600/10
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your technical requirements..."
                  className="
                    w-full resize-none rounded-md
                    border border-slate-200
                    bg-slate-50
                    px-3 py-3
                    text-sm text-slate-900
                    outline-none
                    placeholder:text-slate-400
                    transition-all duration-300
                    focus:border-cyan-600
                    focus:bg-white
                    focus:ring-2
                    focus:ring-cyan-600/10
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full rounded-md
                  bg-cyan-700
                  px-6 py-4
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-cyan-800
                  hover:shadow-lg
                  active:translate-y-0
                "
              >
                Submit inquiry
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Scroll Reveal */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full transform transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}