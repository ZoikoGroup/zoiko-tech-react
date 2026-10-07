import React from "react";
import { FileText, AlignLeft, Paperclip, History } from "lucide-react";

export default function AFormalStatementStaysIntact() {
  const steps = [
    {
      number: "01",
      icon: <FileText className="w-5 h-5" style={{ color: "#6FD0F6" }} />,
      title: "At the top",
      description:
        "Breadcrumb, exact headline/type, currentness/correction state, approved subheadline and publication/entity metadata.",
    },
    {
      number: "02",
      icon: <AlignLeft className="w-5 h-5" style={{ color: "#6FD0F6" }} />,
      title: "Formal body",
      description:
        "Approved lead and body paragraph order. Facts, dates, figures and product scope come from source records.",
    },
    {
      number: "03",
      icon: <Paperclip className="w-5 h-5" style={{ color: "#6FD0F6" }} />,
      title: "Supporting material",
      description:
        "Approved quotations, source links and current corporate boilerplate; no free-form marketing embellishment.",
    },
    {
      number: "04",
      icon: <History className="w-5 h-5" style={{ color: "#6FD0F6" }} />,
      title: "History and utilities",
      description:
        "Visible material corrections, related approved releases, print/citation and canonical link. Supplementary PDF only if approved and consistent.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subtitle, and Steps */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Header Section */}
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
                A formal statement stays intact
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Canonical semantic HTML is the primary source.
              </p>
            </div>

            {/* Vertical Steps List with Connecting Timeline Line */}
            <div className="relative w-full space-y-4">
              {/* Connecting vertical line */}
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-[#7FD0D940] hidden sm:block" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#FFFFFF0F",
                    borderColor: "#7FD0D959",
                  }}
                  className="relative border rounded-2xl p-5 backdrop-blur-md shadow-xl flex items-start justify-between gap-4 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="w-10 h-10 rounded-xl bg-black/40 border border-[#7FD0D959] flex items-center justify-center flex-shrink-0 z-10">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-sm font-bold text-[#6FD0F6] opacity-80 flex-shrink-0">
                    {step.number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Isometric 3D Illustration Graphic (/press/11.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full">
              <img
                src="/press/11.png"
                alt="A formal statement stays intact 3D illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
