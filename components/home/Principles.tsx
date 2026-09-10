"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const principles = [
  {
    title: "Governed AI",
    description:
      "Enterprise-grade safety, privacy, and compliance first.",
    image: "/home/governed-ai.png",
  },
  {
    title: "Enterprise Infrastructure",
    description:
      "Designed for mission-critical scale and global uptime.",
    image: "/home/enterprise-infrastructure.png",
  },
  {
    title: "Global Operations",
    description:
      "Seamless compliance across borders and jurisdictions.",
    image: "/home/global-operations.png",
  },
  {
    title: "Human-Centered Systems",
    description:
      "Designed to simplify the most complex user journeys.",
    image: "/home/human-centered.png",
  },
];

export default function Principles() {
  return (
    <section className="w-full bg-teal-400/5 px-5 py-12 sm:px-8 md:px-12 lg:px-20 lg:py-14">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {principles.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <div className="group flex w-full flex-col items-center justify-center gap-4 text-center transition-all duration-500 ease-out hover:-translate-y-2">
              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-cyan-700/20 shadow-[0px_1px_6.5px_0px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0px_6px_18px_0px_rgba(13,148,136,0.18)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col items-center justify-center gap-1">
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="max-w-[288px] text-xs font-normal leading-4 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
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
        rootMargin: "0px 0px -40px 0px",
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
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}