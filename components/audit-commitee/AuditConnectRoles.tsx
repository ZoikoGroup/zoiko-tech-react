import React from "react";
import Image from "next/image";

export default function AuditConnectRoles() {
  const roles = [
    {
      number: "01",
      title: "Controller",
      description:
        "Financial management response and\nfinance-\nowned context.",
    },
    {
      number: "02",
      title: "Compliance Ladder",
      description: "Obligation/control ownership and risk\ncontext.",
    },
    {
      number: "03",
      title: "Tax Ladder",
      description: "Tax-specific responsibilities where\nrelevant.",
    },
    {
      number: "04",
      title: "Defining Properties",
      description:
        "Shared governed-business principles;\nexact\nproperties require product sign-off.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#241C59] tracking-tight mb-12">
          Connect roles without duplicating authority.
        </h2>

        {/* Content Layout: Left Image, Right 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <Image
                src="/audit/8.png"
                alt="Connect roles without duplicating authority"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-[#FAF9FD] border border-[#B9B3D1] rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                {/* Number */}
                <span className="text-[#F0596B] font-mono text-xs font-semibold tracking-widest mb-3">
                  {role.number}
                </span>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-[#241C59] mb-2 leading-snug">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
