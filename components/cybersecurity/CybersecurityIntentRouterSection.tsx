import React from "react";

interface QuestionCard {
  number: string;
  title: string;
  question: string;
  imageSrc: string;
}

const QUESTIONS: QuestionCard[] = [
  {
    number: "01",
    title: "Understand protection",
    question: '"What is in scope, and how is protection state represented?"',
    imageSrc: "/cyber/2.png",
  },
  {
    number: "02",
    title: "Evaluate security operations",
    question: '"How are signals triaged, owned and resolved?"',
    imageSrc: "/cyber/3.png",
  },
  {
    number: "03",
    title: "Plan incident readiness",
    question: '"Who owns response, recovery and status communication?"',
    imageSrc: "/cyber/4.png",
  },
  {
    number: "04",
    title: "Integrate security data",
    question: '"How do approved systems, events and evidence connect?"',
    imageSrc: "/cyber/5.png",
  },
  {
    number: "05",
    title: "Review privacy & identity",
    question:
      '"How are security, privacy and access responsibilities separated?"',
    imageSrc: "/cyber/6.png",
  },
];

export default function CybersecurityIntentRouterSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            CYBERSECURITY INTENT ROUTER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Eight questions buyers bring to a security conversation
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed">
            Scroll the strip and pick the one closest to yours.
          </p>
        </div>

        {/* Question Cards Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full items-stretch">
          {QUESTIONS.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between h-[420px] group"
            >
              {/* Background Image with Dark Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00191EE8] via-[#00191E88] to-[#00191E44]"></div>
              </div>

              {/* Card Top: Number */}
              <div className="relative z-10 p-6">
                <span className="text-white/70 font-bold text-xl tracking-wider">
                  {card.number}
                </span>
              </div>

              {/* Card Bottom: Title & Question */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
                  {card.question}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
