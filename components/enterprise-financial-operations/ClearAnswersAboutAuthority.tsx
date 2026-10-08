import React from "react";

export default function ClearAnswersAboutAuthority() {
  const items = [
    {
      question: "Does this replace ERP or banking systems?",
      answer:
        "No. The source defines an operating architecture, not a universal ERP, banking, ledger or treasury suite.",
    },
    {
      question: "Does payroll completion prove funds settled?",
      answer:
        "No. Payroll, payment and settlement states belong to their responsible systems.",
    },
    {
      question: "Does issued mean paid?",
      answer:
        "No. Invoice issue, payment receipt and reconciliation remain separate.",
    },
    {
      question: "Can Professional Intelligence issue advice?",
      answer:
        "No autonomous legal, tax, audit or accounting authority is inferred. Human professionals retain judgment.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Clear answers about authority.
          </h2>
        </div>

        {/* Stacked List of Cards */}
        <div className="flex flex-col gap-4 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#F1F8F9" }}
              className="border border-gray-200/80 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all hover:shadow-md"
            >
              <div className="w-full md:w-5/12 text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  {item.question}
                </h3>
              </div>
              <div className="w-full md:w-7/12 text-left">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
