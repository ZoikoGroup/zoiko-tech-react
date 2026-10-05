import React from "react";
import { User, FileText, ShieldCheck } from "lucide-react";

export default function CustomerEvidence() {
  const cards = [
    {
      icon: <User className="w-5 h-5 text-teal-600" />,
      title: "Firm identity",
      description: "Explicit customer and legal approval.",
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      title: "Problem & deployment",
      description:
        "Concrete operating scope; omit sensitive client or matter detail.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
      title: "Result & review",
      description:
        "Evidence-backed outcome with professional and regulated wording reviewed.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Customer evidence must be <br />
            approved and attributable.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Publish actual deployment scope and measured results without
            exposing confidential engagement detail.
          </p>
        </div>

        {/* 3 Columns Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F8F8] border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DEEFEF] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Full-Width Image Container */}
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
          <img
            src="/prof/66.png"
            alt="Customer evidence professional review"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
