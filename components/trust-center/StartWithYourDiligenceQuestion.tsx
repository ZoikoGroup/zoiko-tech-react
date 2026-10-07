import React from "react";
import {
  ShieldCheck,
  User,
  FileText,
  Sparkles,
  Accessibility,
  Globe,
} from "lucide-react";

export default function StartWithYourDiligenceQuestion() {
  const cards = [
    {
      type: "image",
      image: "/trust/2.png",
      bg:"bg-white",
      icon: ShieldCheck,
      title: "Security & resilience",
      description:
        "Inspect approved posture, control scope and operational evidence.",
    },
    {
      type: "image",
      image: "/trust/3.png",
      bg:"bg-white",
      icon: User,
      title: "Privacy & data handling",
      description:
        "Purpose, minimization, access, retention and authoritative policy.",
    },
    {
      type: "image",
      image: "/trust/4.png",
      bg:"bg-white",
      icon: FileText,
      title: "Compliance & assurance",
      description:
        "Distinguish control architecture, alignment and independent assurance.",
    },
    {
      type: "standard",
      icon: Sparkles,
      title: "Responsible AI",
      bg:"bg-[#F2F8F9]",
      description:
        "Human authority, evaluation, provenance and change governance.",
    },
    {
      type: "standard",
      icon: Accessibility,
      bg:"bg-[#F2F8F9]",
      title: "Accessibility",
      description:
        "Current commitment, conformance scope, limitations and feedback.",
    },
    {
      type: "standard",
      icon: Globe,
      bg:"bg-[#F2F8F9]",
      title: "Operational questions",
      description:
        "System Status for live health; Responsible Disclosure for vulnerability reporting.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Start with your diligence question.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Browse the trust area before searching for evidence.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                {item.type === "image" && item.image ? (
                  /* Image Container for the first three cards */
                  <div className="w-full h-48 bg-gray-100 overflow-hidden border-b border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}

                {/* Content Container */}
                <div className={`p-6 flex flex-col ${item.bg} flex-grow justify-between`}>
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-teal-700 mb-4">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
