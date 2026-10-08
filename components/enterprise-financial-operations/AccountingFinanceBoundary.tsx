import React from "react";
import { Network, User, FileText, Database } from "lucide-react";

export default function AccountingFinanceBoundary() {
  const cards = [
    {
      icon: Network,
      title: "System of record",
      description: "Actual external/internal accounting owner.",
    },
    {
      icon: User,
      title: "Reconciliation",
      description:
        "Supported workflow differences and evidence, not invented general ledger.",
    },
    {
      icon: FileText,
      title: "Exceptions",
      description: "Adjustment, mismatch, owner and next action.",
    },
    {
      icon: Database,
      title: "No suite claim",
      description:
        "No GL/AP/AR/close/consolidation/\
        treasury/audit/ERP replacement inferred.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Accounting / finance system boundary
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Existing authoritative finance systems retain their role.
          </p>
        </div>

        {/* 4-Column Grid Layout with Left Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col transition-all hover:bg-white/[0.15]"
              >
                <div className="w-full flex flex-col">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-4 shadow-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
