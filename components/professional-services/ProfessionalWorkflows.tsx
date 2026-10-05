import React from "react";
import {
  FileText,
  Scale,
  ShieldCheck,
  GitBranch,
  Users,
  Sparkles,
} from "lucide-react";

export default function ProfessionalWorkflows() {
  const cards = [
    {
      image: "/prof/31.png",
      icon: <FileText className="w-5 h-5 text-teal-700" />,
      title: "Accounting & finance services",
      description: "Coordinate recurring work, review, billing and evidence.",
    },
    {
      image: "/prof/32.png",
      icon: <Scale className="w-5 h-5 text-teal-700" />,
      title: "Legal operations",
      description:
        "Source-aware knowledge, communication and confidential workflows.",
    },
    {
      image: "/prof/33.png",
      icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
      title: "Tax & regulatory services",
      description:
        "Connect sources, obligations, work packages and authorized review.",
    },
    {
      image: "/prof/34.png",
      icon: <GitBranch className="w-5 h-5 text-teal-700" />,
      title: "Advisory & consulting",
      description:
        "Client engagements, deliverables, approvals and specialist intelligence.",
    },
    {
      image: "/prof/35.png",
      icon: <Users className="w-5 h-5 text-teal-700" />,
      title: "Workforce & firm operations",
      description:
        "HR, payroll, workforce context, billing and communications.",
    },
    {
      image: "/prof/36.png",
      icon: <Sparkles className="w-5 h-5 text-teal-700" />,
      title: "Knowledge & specialist AI",
      description: "Source-aware assistance with visible human judgment.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Which professional workflow needs to <br />
            connect?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            Six service needs frame a focused architecture conversation. Stock
            photography is illustrative, not customer evidence.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-gray-50 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
