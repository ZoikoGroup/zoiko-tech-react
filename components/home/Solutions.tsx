"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    icon: "/home/deploy-ai.png",
    title: "Deploy Enterprise AI",
    description:
      "Build agentic, secure reasoning layers on top of governed corporate datastores without privacy leaks.",
  },
  {
    icon: "/home/global-operations.png",
    title: "Run Global Operations",
    description:
      "Consolidate business workflows, HR, and compliance across dozens of international jurisdictions seamlessly.",
  },
  {
    icon: "/home/telecom-business.png",
    title: "Build Telecom Businesses",
    description:
      "Launch MVNO networks, manage eSIM profiles, and run high-volume billing logic in days rather than months.",
  },
  {
    icon: "/home/financial-operations.png",
    title: "Modernize Financial Operations",
    description:
      "Incorporate fast payments, secure billing structures, automated taxes, and local payout remittance logic.",
  },
  {
    icon: "/home/digital-operations.png",
    title: "Secure Digital Operations",
    description:
      "Defend core cloud infrastructure with continuous zero-trust architectures and automated compliance auditing.",
  },
  {
    icon: "/home/customer-experiences.png",
    title: "Build Customer Experiences",
    description:
      "Deliver highly contextual, hyper-local digital marketplaces, mobile apps, and customer portals.",
  },
];

export default function Solutions() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-14">
        {/* Heading */}
        <Reveal>
          <div className="flex w-full flex-col gap-3.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              HOW WE HELP
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Solutions by Outcome
            </h2>

            <p className="max-w-3xl text-sm font-normal leading-6 text-zinc-500 sm:text-base">
              Empowering modern enterprises with modular blocks built to speed
              up innovation, enforce compliance, and solve operational
              bottlenecks.
            </p>
          </div>
        </Reveal>

        {/* Solutions Grid */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 100}>
              <div className="group flex min-h-[320px] w-full flex-col rounded-2xl bg-slate-50 p-6 outline outline-1 outline-offset-[-1px] outline-emerald-500 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0px_16px_35px_0px_rgba(16,185,129,0.12)] sm:p-8">
                {/* Icon */}
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-700/20 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-cyan-700/25">
                  <Image
                    src={solution.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="text-xl font-extrabold leading-7 text-zinc-900 transition-transform duration-300 group-hover:translate-x-0.5">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-6 text-zinc-500">
                    {solution.description}
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:gap-3 hover:opacity-70"
                  >
                    <span>Get the solution blueprint</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
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