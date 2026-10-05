import React from "react";
import { User, FileText, Lock } from "lucide-react";

export default function IdentityAndQuotationPermission() {
  const cards = [
    {
      image: "/customer/11.png",
      icon: <User className="w-5 h-5 text-teal-700" />,
      title: "Customer identity",
      description:
        "Approved public name, accurate attribution and permitted usage context.",
    },
    {
      image: "/customer/12.png",
      icon: <FileText className="w-5 h-5 text-teal-700" />,
      title: "Quote wording & source",
      description:
        "Exact approved wording, speaker identity and title treatment, with the source version retained.",
    },
    {
      image: "/customer/13.png",
      icon: <Lock className="w-5 h-5 text-teal-700" />,
      title: "Anonymization & withdrawal",
      description:
        "Anonymized descriptors require separate approval. Withdrawn identities and quotations are suppressed.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Identity and quotation require explicit <br />
            permission.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            A quotation supports evidence; it does not replace measurement or
            deployment context.
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
