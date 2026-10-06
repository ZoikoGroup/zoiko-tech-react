import React from "react";
import { ArrowRight } from "lucide-react";

interface RouterCard {
  folderNumber: string;
  title: string;
  question: string;
  imageSrc: string;
}

const ROUTER_CARDS: RouterCard[] = [
  {
    folderNumber: "§01",
    title: "Track regulatory change",
    question: "“What changed, from which source, when does it take effect?”",
    imageSrc: "/reg/3.png",
  },
  {
    folderNumber: "§02",
    title: "Resolve applicability",
    question:
      "“Which jurisdiction, entity, product, activity or period is in scope?”",
    imageSrc: "/reg/4.png",
  },
  {
    folderNumber: "§03",
    title: "Manage obligations",
    question: "“What duty exists, who owns it and when is it due?”",
    imageSrc: "/reg/5.png",
  },
  {
    folderNumber: "§04",
    title: "Operationalize controls",
    question: "“How do obligations become tasks, approvals and evidence?”",
    imageSrc: "/reg/6.png",
  },
  {
    folderNumber: "§05",
    title: "Prepare, submit & reconcile",
    question:
      "“How do we tell prepared, submitted, accepted and reconciled apart?”",
    imageSrc: "/reg/7.png",
  },
  {
    folderNumber: "§06",
    title: "Prove, audit & replay",
    question: "“Can a reviewer reproduce what applied at the time?”",
    imageSrc: "/reg/8.png",
  },
  {
    folderNumber: "§07",
    title: "Integrate",
    question: "“How do changes, obligations and evidence reach our systems?”",
    imageSrc: "/reg/9.png",
  },
  {
    folderNumber: "§08",
    title: "Evaluate platform evidence",
    question: "“Which Zoiko technologies are public-ready for our scope?”",
    imageSrc: "/reg/10.png",
  },
];

export default function RegulatoryIntentRouterSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            REGULATORY INTENT ROUTER
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-4">
            Open the file that matches your question
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed">
            Eight folders, one per buyer need. Each opens the section that
            answers it.
          </p>
        </div>

        {/* Router Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {ROUTER_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col justify-between hover:shadow-2xl transition-shadow"
            >
              <div>
                {/* Top Row: Folder Number & Thumbnail */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold font-mono text-[#2b7a78] tracking-wider block mb-1">
                      {card.folderNumber}
                    </span>
                    <h3 className="text-sm font-bold text-[#0B132B] leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Question Quote */}
                <p className="text-xs text-gray-500 italic leading-relaxed mb-6">
                  {card.question}
                </p>
              </div>

              {/* Choose Pathway Link */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#2b7a78] hover:underline"
                >
                  Choose pathway <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
