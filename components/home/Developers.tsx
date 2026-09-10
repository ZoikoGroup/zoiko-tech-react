"use client";

import Image from "next/image";

const developerSections = [
  {
    number: "01",
    title: "Build",
    items: [
      "REST & gRPC APIs",
      "Python, Go & Node.js SDKs",
      "Zoiko AI Model APIs",
      "Real-time Event Webhooks",
    ],
  },
  {
    number: "02",
    title: "Test",
    items: [
      "Isolated Sandbox Mode",
      "Interactive API Playground",
      "Language-specific Quickstarts",
      "Production-grade Blueprints",
    ],
  },
  {
    number: "03",
    title: "Operate",
    items: [
      "Token-based Authentication",
      "Granular Access Controls",
      "Usage Metering Pipelines",
      "Distributed Observability",
    ],
  },
  {
    number: "04",
    title: "Ecosystem",
    items: [
      "SaaS Connectors",
      "Certified Technology Partners",
      "Zoiko Marketplace Listings",
      "Governance Frameworks",
    ],
  },
];

export default function Developers() {
  return (
    <section className="w-full bg-teal-50 px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            ZOIKO FOR DEVELOPERS
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Build on Zoiko technology
          </h2>

          <p className="mt-5 max-w-[900px] text-sm leading-7 text-slate-500 sm:text-base">
            APIs, SDKs, model interfaces, webhooks, sandbox environments,
            identity, observability, usage controls, documentation and
            integrations form the common developer layer across the Zoiko
            ecosystem.
          </p>
        </div>

        {/* Developer Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {developerSections.map((section) => (
            <div
              key={section.number}
              className="
                flex min-h-[360px] flex-col
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
              "
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                  {section.title}
                </h3>

                <span className="text-xs font-semibold text-cyan-600">
                  {section.number}
                </span>
              </div>

              {/* Divider */}
              <div className="mt-5 h-px w-full bg-cyan-700/20" />

              {/* Items */}
              <div className="mt-6 flex flex-col gap-4">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src="/home/developer-icon.png"
                      alt=""
                      width={18}
                      height={18}
                      className="mt-1 h-[18px] w-[18px] shrink-0 object-contain"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="
              inline-flex w-full items-center justify-center
              rounded-lg
              bg-cyan-700
              px-6 py-4
              text-sm font-semibold
              text-white
              transition
              hover:bg-cyan-800
              sm:w-auto
            "
          >
            Explore Developer Platform
          </a>

          <a
            href="#"
            className="
              inline-flex w-full items-center justify-center
              rounded-lg
              border border-cyan-700
              bg-transparent
              px-6 py-4
              text-sm font-semibold
              text-cyan-700
              transition
              hover:bg-cyan-700/5
              sm:w-auto
            "
          >
            Read documentation
          </a>
        </div>
      </div>
    </section>
  );
}