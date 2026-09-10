"use client";

import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    image: "/about-us/nex.png",
    title: "ZoikoNex",
    description:
      "Telecom-grade OSS/BSS, billing, monetization and operator infrastructure",
  },
  {
    image: "/about-us/vertex.png",
    title: "ZoikoVertex",
    description:
      "Governed agentic execution for marketing, scheduling and digital workflows",
  },
  {
    image: "/about-us/time.png",
    title: "ZoikoTime",
    description:
      "Governed workforce-time and productivity intelligence",
  },
  {
    image: "/about-us/hr.png",
    title: "Zoiko HR",
    description:
      "Human-capital and workforce management",
  },
  {
    image: "/about-us/payroll.png",
    title: "Zoiko Payroll",
    description:
      "Payroll operations, controls, reporting and multinational payroll workflows",
  },
  {
    image: "/about-us/billing.png",
    title: "Zoiko Billing",
    description:
      "Billing, invoicing, collections and revenue operations",
  },
  {
    image: "/about-us/local.png",
    title: "Zoiko Local",
    description:
      "Communications and local-number infrastructure",
  },
  {
    image: "/about-us/sema.png",
    title: "Zoiko Sema",
    description:
      "Meetings, messaging and calling",
  },
  {
    image: "/about-us/stream.png",
    title: "ZoikoStream Live",
    description:
      "Commercial live-event broadcasting and digital event delivery",
  },
  {
    image: "/about-us/meds.png",
    title: "ZoikoMeds",
    description:
      "Medication search and pharmacy-availability intelligence",
  },
  {
    image: "/about-us/social.png",
    title: "ZoikoSocial",
    description:
      "Values-based consumer social platform",
  },
  {
    image: "/about-us/rooms.png",
    title: "Zoiko Rooms",
    description:
      "Technology-enabled property and room marketplace",
  },
];

export default function Estate() {
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
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-14 lg:px-28 lg:py-24">

        {/* Header */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="group inline-flex items-center gap-2 rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-700/50 hover:bg-cyan-700/15">
            <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-700">
              A Platform Estate Already in Market
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Commercial Platforms & Active Development
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1050px] text-base font-normal leading-7 text-slate-500 sm:text-lg">
            ZoikoTech&apos;s current technology estate includes commercially
            launched platforms as well as major systems under active
            development.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {platforms.map((platform, index) => (
            <article
              key={platform.title}
              className={`group flex flex-col rounded-xl border border-neutral-200 bg-slate-50 p-5 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-cyan-700/30 hover:bg-white hover:shadow-[0_16px_35px_rgba(15,23,42,0.10)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${100 + index * 70}ms`,
              }}
            >
              {/* Image */}
              <div className="h-28 w-full overflow-hidden rounded-md">
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                {platform.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-xs font-normal leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                {platform.description}
              </p>
            </article>
          ))}
        </div>

        {/* Active Development */}
        <div
          className={`flex w-full flex-col items-start gap-2 rounded-xl bg-slate-100 p-6 transition-all duration-1000 ease-out hover:bg-slate-200 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: "1000ms",
          }}
        >
          <p className="text-xs font-bold tracking-wide text-cyan-700">
            ACTIVE DEVELOPMENT PIPELINE
          </p>

          <p className="w-full text-sm font-normal leading-5 text-slate-500">
            ZoikoSuite, Zoiko Mail, Zoiko Cloud, the wider ZoikoStream
            platform, Zoiko Rides, ZoikoShield, Zoiko Loop, and remaining
            Zoiko AI domain stacks.
          </p>
        </div>
      </div>
    </section>
  );
}