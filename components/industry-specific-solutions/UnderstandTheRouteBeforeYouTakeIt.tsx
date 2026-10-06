import React from "react";

export default function UnderstandTheRouteBeforeYouTakeIt() {
  const questions = [
    "Are all associations official product mappings?",
    "Which sectors have direct specialist directions?",
    "What if no dedicated sector solution exists?",
    "Why are products absent from the crosswalk?",
    "Does a direction imply availability?",
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Layout: Left Question List vs Right Flush Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Question Items (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-10 text-white">
              Understand the route <br />
              before you take it.
            </h2>

            {/* Question List */}
            <div className="flex flex-col border-t border-teal-800/40">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="border-b border-teal-800/40 transition-colors"
                >
                  <div className="w-full py-5 flex items-center justify-between text-left group">
                    <span className="text-base sm:text-lg font-medium text-gray-200 group-hover:text-teal-300 transition-colors pr-4">
                      {question}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Flush Image (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden border border-teal-800/40 shadow-2xl bg-[#051517]/80 backdrop-blur-md">
              <img
                src="/industry/29.png"
                alt="Professional reviewing route mapping and evaluation documents"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
