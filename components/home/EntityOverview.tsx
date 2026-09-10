"use client";

import { useEffect, useRef, useState } from "react";

const overviewItems = [
  {
    question: "What is Zoiko Tech?",
    answer:
      "Zoiko Tech Inc. is a California-headquartered global technology innovator, delivering modular SaaS blocks, sovereign telecom networks, payment processing stack, and governed enterprise artificial intelligence.",
  },
  {
    question: "Where is Zoiko Tech headquartered?",
    answer:
      "Our global administrative and strategic headquarters are located at 1401 21st Street, Suite R, Sacramento, California.",
  },
  {
    question: "Where is the European headquarters?",
    answer:
      "European operations are centralized at 167-169 Great Portland Street, London, United Kingdom.",
  },
  {
    question: "What does Zoiko Tech build?",
    answer:
      "We design, deploy, and support unified platforms including ZoikoPay, ZoikoNex, ZoikoTime, and Zoiko SWS, serving clients globally across cloud infrastructure, finance, telco, and healthcare.",
  },
  {
    question: "Is Zoiko Tech part of Zoiko Group?",
    answer:
      "Yes, Zoiko Tech is the foundational core technology division of Zoiko Group, aligning with its global focus on regulated enterprise systems.",
  },
  {
    question: "Does Zoiko Tech support developers?",
    answer:
      "Yes, robust SDK pipelines, gRPC protocols, and open sandbox integration gateways are provided natively across all core platform nodes.",
  },
];

export default function EntityOverview() {
  const leftColumn = overviewItems.slice(0, 3);
  const rightColumn = overviewItems.slice(3, 6);

  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-slate-950 via-teal-700 to-cyan-900 px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-20">
        {/* Header */}
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              ENTITY OVERVIEW
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              Zoiko Tech at a glance
            </h2>
          </div>
        </Reveal>

        {/* Content */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {leftColumn.map((item, index) => (
              <Reveal key={item.question} delay={index * 120}>
                <OverviewItem item={item} />
              </Reveal>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {rightColumn.map((item, index) => (
              <Reveal key={item.question} delay={(index + 3) * 120}>
                <OverviewItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Overview Item */
function OverviewItem({
  item,
}: {
  item: {
    question: string;
    answer: string;
  };
}) {
  return (
    <div className="group flex w-full flex-col gap-2 border-l-2 border-white/20 pl-4 transition-all duration-300 hover:border-white/70 hover:translate-x-1">
      <h3 className="text-lg font-bold text-white transition-opacity duration-300 group-hover:opacity-90 sm:text-xl">
        {item.question}
      </h3>

      <p className="text-sm font-normal leading-6 text-slate-100 sm:text-base">
        {item.answer}
      </p>
    </div>
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