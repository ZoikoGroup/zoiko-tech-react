import React from "react";
import Image from "next/image";

export default function AuditClarityBriefing() {
  const questions = [
    "Does this replace internal or external audit?",
    "Is this a live product screenshot?",
    "Can management close its own finding?",
    "Does the page offer board voting or formal minutes?",
    "Can it integrate with our systems?",
    "How is restricted evidence handled?",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557] py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title and Questions List */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-10">
            Clarity before a briefing.
          </h2>

          {/* Questions List */}
          <div className="flex flex-col w-full">
            {questions.map((question, index) => (
              <div
                key={index}
                className="relative flex items-center py-5 border-b border-white/10"
              >
                {/* Dot indicator */}
                <div className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-white opacity-80" />

                {/* Question Text */}
                <span className="text-white font-semibold text-base md:text-lg tracking-wide">
                  {question}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/audit/7.png"
              alt="Clarity before a briefing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
