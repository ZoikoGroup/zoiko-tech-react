import React from "react";
import { ArrowRight } from "lucide-react";

interface OwnerCard {
  title: string;
  description: string;
  imageSrc: string;
}

const OWNER_CARDS: OwnerCard[] = [
  {
    title: "Security / technology owner",
    description: "Scope, accuracy and safe terminology",
    imageSrc: "/cyber/14.png",
  },
  {
    title: "Product / platform owner",
    description: "Protected scope, maturity and routes",
    imageSrc: "/cyber/15.png",
  },
  {
    title: "Incident / status owner",
    description: "Public incident and maintenance state",
    imageSrc: "/cyber/16.png",
  },
  {
    title: "Privacy reviewer",
    description: "Data-handling statements and examples",
    imageSrc: "/cyber/17.png",
  },
  {
    title: "Trust / compliance reviewer",
    description: "Certification wording, no overclaim",
    imageSrc: "/cyber/18.png",
  },
  {
    title: "Legal / communications",
    description: "Incident, disclosure and claim language",
    imageSrc: "/cyber/19.png",
  },
  {
    title: "Web / SEO owner",
    description: "Publishes without changing security meaning",
    imageSrc: "/cyber/20.png",
  },
];

export default function HumanOwnershipSection() {
  return (
    <section className="relative w-full bg-[#00191E] py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#34D4CA] font-bold text-xs tracking-widest uppercase mb-4">
            HUMAN OWNERSHIP & ESCALATION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Seven accountable people behind every security claim
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Each role owns a specific part of what this page may say, and who
            answers when it matters.
          </p>
        </div>

        {/* Owner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
          {OWNER_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#00191EB8] border border-[#34D4CA73] rounded-2xl p-5 flex flex-col justify-between shadow-lg backdrop-blur-sm"
            >
              {/* Top Row with Avatar & Title */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#34D4CA73]">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-sm leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-[#34D4CA] hover:underline"
          >
            Review ownership <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
