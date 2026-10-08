import React from "react";

export default function ClearAnswersAboutScope() {
  const faqs = [
    {
      question: "Does this imply carrier or CDN ownership?",
      answer:
        "No. The source defines operating architecture, not universal network, spectrum, CDN or edge ownership.",
    },
    {
      question: "Does accepted mean delivered?",
      answer:
        "No. Definitive delivery/session state comes from the responsible system.",
    },
    {
      question: "Does streaming include content rights or DRM?",
      answer:
        "No. Rights, licensing and exact DRM capability require separate evidence.",
    },
    {
      question: "How do we start?",
      answer:
        "Choose one workflow, identify provider and state owners, map controls and validate a bounded integration.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section (Left-aligned) */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Clear answers about scope.
          </h2>
        </div>

        {/* FAQ List Containers */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#F1F8F9" }}
              className="border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-all hover:shadow-md"
            >
              <div className="md:w-1/2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  {item.question}
                </h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
