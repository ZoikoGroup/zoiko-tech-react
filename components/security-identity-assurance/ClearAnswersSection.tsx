import React from "react";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  return (
    <div className="bg-[#F1F8F9] border border-[#247780] border-t-3 border-t-[#247780] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#112223] tracking-tight mb-4">
          {question}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function ClearAnswersSection() {
  const cards = [
    {
      question: "Does this establish a security product suite?",
      answer:
        "No. Cybersecurity scope is protection, resilience and security operations; exact tools require evidence.",
    },
    {
      question: "Are SSO, MFA or verification methods available?",
      answer:
        "No specific methods are established in this source. Current approved exact tools require evidence.",
    },
    {
      question: "Are these platforms generally available?",
      answer:
        "Shield is Finish; iD, Access, Assure and Tax are Build. Public exposure remains readiness-gated.",
    },
    {
      question: "Does evidence prove compliance?",
      answer:
        "Only exact approved scope, authority and current evidence support a specific claim; no blanket guarantee.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#112223] tracking-tight">
            Clear answers about control and proof.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <FAQCard
              key={index}
              question={card.question}
              answer={card.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
