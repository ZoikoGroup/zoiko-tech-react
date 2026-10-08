import React from "react";
import { User, FileText, Lock, ShieldCheck } from "lucide-react";

export default function AScopedReviewNeedsMinimalSafeContext() {
  const cards = [
    {
      image: "/trust/13.png",
      icon: User,
      title: "Reviewer and purpose",
      description:
        "Work email, organization, role and routing region only when necessary.",
    },
    {
      image: "/trust/14.png",
      icon: FileText,
      title: "Review type and scope",
      description:
        "Security, privacy, compliance, AI, accessibility or procurement; relevant product/deployment and deadline.",
    },
    {
      image: "/trust/15.png",
      icon: Lock,
      title: "Evidence categories",
      description:
        "Only supported requests; no implied audit pack, NDA process or artifact availability.",
    },
    {
      image: "/trust/16.png",
      icon: ShieldCheck,
      title: "Safe submission",
      description:
        "Never include credentials, customer data, regulated records, exploits or confidential architecture.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            A scoped review needs minimal safe context.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Public trust basics remain ungated. Controlled evidence access
            requires an approved operational workflow.
          </p>
        </div>

        {/* 3-Column Grid Layout matching the visual asymmetric card distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F2F8F9] border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                {/* Image Container */}
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full p-6 rounded-2xl object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#DEEFEF] flex items-center justify-center text-[#247780] mb-4">
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
