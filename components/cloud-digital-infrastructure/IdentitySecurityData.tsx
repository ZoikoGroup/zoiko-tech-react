import React from "react";
import Image from "next/image";

interface PolicyCard {
  title: string;
  description: string;
}

const policyCards: PolicyCard[] = [
  {
    title: "Identity",
    description:
      "Authentication, identity, entitlement and delegated authority at approved architecture level.",
  },
  {
    title: "Security",
    description:
      "Secure engineering, least privilege, threat prevention and resilience, and responsible-disclosure routes.",
  },
  {
    title: "Data",
    description:
      "Purpose-aware data context, source and authority, and minimization. No universal data- lake or warehouse claim.",
  },
  {
    title: "Governance",
    description:
      "Policy, evidence, approval and accountable operation. Exact product support stays source- gated.",
  },
  {
    title: "Privacy",
    description:
      "Purpose limitation, data minimization and privacy- conscious architecture.",
  },
  {
    title: "AI governance",
    description:
      "Where AI or model interfaces are involved, human oversight, evaluation and accountable deployment are preserved.",
  },
];

export default function IdentitySecurityData() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Identity, security, data and governance
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 bg-[#FFFFFF0F] border border-[#7FD0D98C] border-t-[3px] flex flex-col gap-4 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-[15px] text-[#DCECEE] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Wave Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-7xl h-64 sm:h-80 relative">
            <Image
              src="/cloud/18.png"
              alt="Identity Security Data Waves"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
