import React from "react";
import { FileText, ShieldCheck, Building2 } from "lucide-react";

export default function DifferentClaimsHaveDifferentAuthorities() {
  const cards = [
    {
      image: "/customer/16.png",
      icon: <FileText className="w-5 h-5 text-teal-700" />,
      title: "Customer results",
      description:
        "Approved Evidence Registry records govern story, metric, quotation and identity.",
    },
    {
      image: "/customer/17.png",
      icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
      title: "Trust & assurance",
      description:
        "Certification, security and privacy facts follow their authoritative registries and exact scope.",
    },
    {
      image: "/customer/18.png",
      icon: <Building2 className="w-5 h-5 text-teal-700" />,
      title: "Platform context",
      description:
        "Maturity, operator, market and availability follow approved platform and service sources.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Different claims have different <br />
            authorities.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Customer results do not establish certification, compliance or
            general product availability.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="border border-teal-900/10 rounded-2xl flex flex-col justify-between shadow-sm overflow-hidden"
            >
              <div>
                {/* Image (Flush edges, no padding) */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-white border border-teal-900/10 flex items-center justify-center mb-5 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
