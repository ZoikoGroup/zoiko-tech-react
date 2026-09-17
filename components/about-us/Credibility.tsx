"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const proofPoints = [
  {
    metric: "30 Days",
    title: "MVNO Onboarding",
    description:
      "A fast-growing mobile virtual network operator was fully onboarded onto ZoikoNex, bypassing legacy telco complexity to activate real-time billing and native partner routing in record time.",
  },
  {
    metric: "6 Weeks",
    title: "Accessible Multilingual Platform",
    description:
      "An international NGO deployed a WCAG-aligned multilingual portal powered by Zoiko Tech, complete with integrated e-signatures, private document vaults, and auditable data dashboards.",
  },
];

export default function Credibility() {
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
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-gray-800"
    >
      {/* Main section background */}
      <Image
        src="/about-us/bg4.png"
        alt=""
        fill
        priority={false}
        className="object-cover"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:gap-16 lg:px-28 lg:py-28">
        {/* Header */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40">
            <span className="text-[10px] font-bold uppercase tracking-wide text-teal-400">
              Execution, Not Adjectives
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-white transition-transform duration-500 hover:translate-x-1 sm:text-4xl lg:text-4xl lg:leading-[1.35]">
            Technology credibility is earned in production
          </h2>
        </div>

        {/* Proof Cards */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {proofPoints.map((point, index) => (
            <article
              key={point.title}
              className={`group relative flex min-h-[280px] flex-col gap-5 overflow-hidden rounded-2xl border border-white/15 p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:p-8 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 150}ms`,
              }}
            >
              {/* Card background */}
              <Image
                src="/about-us/bg4.png"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Card overlay */}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/20" />

              {/* Card content */}
              <div className="relative z-10 flex flex-col gap-5">
                {/* Metric */}
                <div className="text-2xl font-extrabold text-teal-400 transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                  {point.metric}
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-teal-300 sm:text-xl">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="max-w-[95%] text-sm font-normal leading-5 text-slate-200 transition-colors duration-300 group-hover:text-white">
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Engineering Scale */}
        <div
          className={`group relative flex w-full flex-col items-start gap-4 overflow-hidden rounded-xl border border-white/15 p-6 transition-all duration-1000 ease-out hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] sm:flex-row sm:items-center sm:gap-5 sm:p-7 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "500ms",
          }}
        >
          {/* Engineering Scale background */}
          <Image
            src="/about-us/bg4.png"
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/15" />

          {/* CPU Icon */}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/about-us/cpu.png"
              alt="Engineering scale"
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Text */}
          <p className="relative z-10 flex-1 text-sm font-normal leading-6 text-slate-50 sm:text-base">
            <strong className="font-bold text-white">
              Engineering Scale:
            </strong>{" "}
            Backed by a high-velocity development framework of over 100+
            specialized core software engineers in India, working alongside
            international product, design, legal, compliance and operations
            leadership.
          </p>
        </div>
      </div>
    </section>
  );
}