"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    icon: "/home/telecommunications.png",
    title: "Telecommunications",
    description: "Sovereign telecom OSS/BSS & eSIM rails.",
  },
  {
    icon: "/home/fintech-banking.png",
    title: "Fintech & Banking",
    description: "Compliant remittance, payments, and risk ledgers.",
  },
  {
    icon: "/home/healthcare-life-sciences.png",
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant, highly secure datastores.",
  },
  {
    icon: "/home/retail-commerce.png",
    title: "Retail & Commerce",
    description: "Omnichannel inventory orchestration & payout tools.",
  },
  {
    icon: "/home/professional-services.png",
    title: "Professional Services",
    description: "Marketplace intelligence & client invoicing networks.",
  },
  {
    icon: "/home/government.png",
    title: "Government",
    description: "Sovereign clouds, public registries & zero-trust compliance.",
  },
  {
    icon: "/home/media-entertainment.png",
    title: "Media & Entertainment",
    description: "Global streaming CDNs, secure DRM & digital rights.",
  },
  {
    icon: "/home/real-estate-property.png",
    title: "Real Estate & Property",
    description: "Tokenized deeds, secure lease compliance & escrows.",
  },
  {
    icon: "/home/mobility-travel.png",
    title: "Mobility & Travel",
    description: "Autonomous vehicle mapping & fleet routing rails.",
  },
  {
    icon: "/home/technology-companies.png",
    title: "Technology Companies",
    description: "Developer tools, SDK frameworks & high-velocity APIs.",
  },
];

export default function DeepSpecialization() {
  return (
    <section className="w-full bg-teal-50 px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-20">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              DEEP SPECIALIZATION
            </p>

            <h2 className="max-w-5xl text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Technology built around how industries actually operate
            </h2>

            <p className="max-w-4xl text-sm font-normal leading-6 text-slate-500 sm:text-base lg:text-lg lg:leading-7">
              Generic tech doesn&apos;t solve regulated problems. We build
              bespoke platform modules explicitly customized for different
              market verticals.
            </p>
          </div>
        </Reveal>

        {/* Industry Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 80}>
              <div
                className="group flex min-h-[128px] w-full flex-col gap-3 rounded-xl bg-gradient-to-br from-white to-emerald-200/0 p-5 outline outline-1 outline-offset-[-1px] outline-emerald-400 backdrop-blur-[48px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0px_12px_30px_0px_rgba(16,185,129,0.12)]"
              >
                {/* Icon + Title */}
                <div className="flex w-full items-center gap-3">
                  <div className="flex size-5 shrink-0 items-center justify-center">
                    <Image
                      src={industry.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  <h3 className="flex-1 text-sm font-bold leading-5 text-gray-800 transition-colors duration-300 sm:text-base">
                    {industry.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs font-normal leading-4 text-slate-500">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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