"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const architectureLayers = [
  {
    image: "/home/application-layer.png",
    title: "APPLICATION LAYER",
    description:
      "Industry Applications, Telecom, Enterprise SaaS Solutions",
  },
  {
    image: "/home/platform-integration.png",
    title: "PLATFORM INTEGRATION SERVICES",
    description:
      "Zoiko Remit, Zoiko Payroll, Local Commerce Engine",
  },
  {
    image: "/home/developer-layer.png",
    title: "DEVELOPER LAYER & ROBUST APIS",
    description:
      "Zoiko Arc APIs, Serverless Orchestration, SDK Pipelines",
  },
  {
    image: "/home/identity-compliance.png",
    title: "IDENTITY, COMPLIANCE & FINANCIAL STACK",
    description:
      "Zoiko Pay, ZoikoAssure, Decentralized Identity Ledger",
  },
  {
    image: "/home/core-infrastructure.png",
    title: "CORE INFRASTRUCTURE & FOUNDATIONAL AI",
    description:
      "Zoiko AI Reasoning Layer, Governed Datastores, Global Edge Cloud",
  },
];

export default function Architecture() {
  return (
    <section className="relative w-full overflow-hidden bg-emerald-500/5 px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 opacity-10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto flex w-full max-w-[1182px] flex-col items-center gap-12 lg:gap-20">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto flex w-full max-w-[920px] flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              UNIFIED ARCHITECTURE
            </p>

            <h2 className="w-full text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Platforms should work together, not become another collection of
              silos.
            </h2>

            <p className="w-full text-center text-base font-normal leading-7 text-slate-600 sm:text-lg">
              We run our entire product matrix on a single, standardized tech
              stack built for governed enterprise execution, security
              compliance, and planetary-scale data workloads.
            </p>
          </div>
        </Reveal>

        {/* Architecture Cards */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-6 lg:gap-10">
          {/* Card 1 */}
          <Reveal className="lg:col-span-2" delay={100}>
            <ArchitectureCard {...architectureLayers[0]} />
          </Reveal>

          {/* Card 2 */}
          <Reveal className="lg:col-span-2" delay={200}>
            <ArchitectureCard {...architectureLayers[1]} />
          </Reveal>

          {/* Card 3 */}
          <Reveal className="lg:col-span-2" delay={300}>
            <ArchitectureCard {...architectureLayers[2]} />
          </Reveal>

          {/* Card 4 */}
          <Reveal className="lg:col-span-3" delay={400}>
            <ArchitectureCard {...architectureLayers[3]} />
          </Reveal>

          {/* Card 5 */}
          <Reveal className="lg:col-span-3" delay={500}>
            <ArchitectureCard {...architectureLayers[4]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ArchitectureCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex min-h-[288px] w-full flex-col items-center justify-between overflow-hidden rounded-3xl border-[8px] border-white bg-cyan-700/5 p-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg sm:p-6">
      {/* Image */}
      <div className="flex h-36 w-full items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={180}
          height={150}
          className="h-32 w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 sm:h-36"
        />
      </div>

      {/* Content */}
      <div className="flex w-full flex-col gap-1">
        <h3 className="text-base font-bold tracking-wide text-cyan-700">
          {title}
        </h3>

        <p className="text-sm font-normal leading-6 text-slate-900 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

/* Scroll Reveal */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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
        threshold: 0.12,
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
      className={`mx-auto w-full transform transition-all duration-700 ease-out ${className} ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}