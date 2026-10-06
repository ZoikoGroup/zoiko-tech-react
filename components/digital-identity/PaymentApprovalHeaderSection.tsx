import React from "react";

export default function PaymentApprovalHeaderSection() {
  return (
    <section className="w-full bg-[#E9F9F8] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
          FOLLOW ONE REQUEST
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Watch a single payment approval travel the chain
        </h2>
        <p className="text-[#4A5568] text-base md:text-lg leading-relaxed max-w-2xl">
          S-0991 tries to approve payment PAY-5521. Each step below shows what
          the responsible system knows, and where the request stops.
        </p>
      </div>
    </section>
  );
}
