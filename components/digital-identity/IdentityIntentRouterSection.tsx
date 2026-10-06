import React from "react";
import { ArrowRight } from "lucide-react";

interface QuestionItem {
  number: string;
  title: string;
  category: string;
  imageSrc: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    number: "01",
    title:
      "Which system is authoritative for this person, service or external actor?",
    category: "Identity subject & source",
    imageSrc: "/digital/6.png",
  },
  {
    number: "02",
    title:
      "What does the responsible system currently say about authentication?",
    category: "Authentication state",
    imageSrc: "/digital/7.png",
  },
  {
    number: "03",
    title: "What role, permission or resource entitlement applies?",
    category: "Entitlement & scope",
    imageSrc: "/digital/8.png",
  },
  {
    number: "04",
    title: "How can bounded authority be granted and revoked?",
    category: "Delegated authority",
    imageSrc: "/digital/9.png",
  },
  {
    number: "05",
    title: "Why is access allowed, denied, review-required or step-up?",
    category: "Policy & access decision",
    imageSrc: "/digital/10.png",
  },
  {
    number: "06",
    title: "What changes when authority expires, is revoked or goes stale?",
    category: "Lifecycle",
    imageSrc: "/digital/11.png",
  },
  {
    number: "07",
    title: "Who is an agent acting for, and with what authority?",
    category: "Agentic Systems",
    imageSrc: "/digital/12.png",
  },
  {
    number: "08",
    title: "How do apps consume approved identity and access state?",
    category: "Developer Platform",
    imageSrc: "/digital/13.png",
  },
];

export default function IdentityIntentRouterSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Sticky Title & Description */}
        <div className="lg:col-span-4 lg:sticky lg:top-20 flex flex-col justify-start">
          <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            IDENTITY INTENT ROUTER
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Start with your question
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed max-w-sm">
            Every identity problem is really one of these eight questions. Pick
            yours and jump straight to the answer.
          </p>
        </div>

        {/* Right Column: List of 8 Questions */}
        <div className="lg:col-span-8 flex flex-col divide-y divide-gray-100">
          {QUESTIONS.map((item) => (
            <a
              key={item.number}
              href="#"
              className="group flex items-center justify-between py-6 first:pt-0 last:pb-0 hover:bg-gray-50/60 transition-colors px-4 rounded-xl"
            >
              <div className="flex items-center space-x-6">
                {/* Number */}
                <span className="text-2xl font-bold text-[#2b7a78] w-8">
                  {item.number}
                </span>

                {/* Thumbnail Image */}
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title & Category Badge */}
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-semibold text-[#0B132B] group-hover:text-[#2b7a78] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E6F4F1] text-[#2b7a78]">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="text-gray-400 group-hover:text-[#2b7a78] group-hover:translate-x-1 transition-all shrink-0 pl-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
