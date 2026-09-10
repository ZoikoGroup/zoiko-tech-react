"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const researchItems = [
  {
    image: "/home/formal-verification.png",
    category: "ZOIKO RESEARCH",
    title:
      "Formal Verification of Multi-Agent AI Workflows in Regulated Operations",
    description:
      "A mathematically rigorous analysis of transaction integrity, verification safety boundaries, and compliance automation.",
  },
  {
    image: "/home/serverless-telecom.png",
    category: "FRONTIER LABS",
    title:
      "The Future of Serverless Telecom Routing Over Distributed eSIM Fabrics",
    description:
      "Exploratory system architecture proposals for dynamic telco provisioning using micro-second cold-starts.",
  },
  {
    image: "/home/zero-trust-saas.png",
    category: "INSIGHTS & AUDITS",
    title:
      "Building Zero-Trust Enterprise Saas Without Performance Penalty",
    description:
      "Engineering team insights into cryptographic hardware acceleration and low-latency API proxy strategies.",
  },
];

export default function KnowledgeFrontier() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-14">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              KNOWLEDGE FRONTIER
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Bespoke research &amp; frontier insights
            </h2>

            <p className="max-w-[800px] text-sm font-normal leading-6 text-slate-500 sm:text-base lg:text-lg lg:leading-7">
              Advancing the mathematical models, regulatory schemas, and
              physical computing parameters powering tomorrow&apos;s system
              orchestration.
            </p>
          </div>
        </Reveal>

        {/* Research Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="group flex h-full w-full flex-col justify-between rounded-xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0px_14px_32px_0px_rgba(15,23,42,0.10)] sm:p-6">
                <div className="flex flex-col gap-4">
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Category */}
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                    {item.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-6 text-slate-900 transition-transform duration-300 group-hover:translate-x-0.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="line-clamp-3 text-sm font-normal leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="flex items-center gap-1.5 pt-5 text-xs font-semibold text-cyan-700 transition-all duration-300 hover:gap-2.5 hover:opacity-70"
                >
                  <span>Read technical paper</span>

                  <span
                    aria-hidden="true"
                    className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
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