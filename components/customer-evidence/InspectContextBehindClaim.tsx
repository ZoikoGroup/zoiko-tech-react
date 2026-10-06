"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function InspectContextBehindClaim() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordions = [
    {
      title: "Claim, scope and method",
      content:
        "Approved wording; deployment population, period and location where permitted; public-safe methodology and source summary.",
    },
    {
      title: "Technology and limitations",
      content:
        "Technical architecture facts, integration boundaries, deployment scale constraints, and material limitations governing the claim.",
    },
    {
      title: "Review and canonical source",
      content:
        "Verification status, approval timestamps, authorized reviewer identity, and reference paths to the canonical source record.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-28 py-16 lg:py-24">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Inspect the context behind a claim.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            A public evidence detail should preserve the exact claim and
            material limitations. No customer claim is shown here.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-gray-200">
          {accordions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </span>
                  <div className="text-gray-500 group-hover:text-teal-800 transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
