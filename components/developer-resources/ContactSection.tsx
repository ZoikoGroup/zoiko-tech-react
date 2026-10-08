import React from "react";
import Link from "next/link";

export default function ContactSection() {
  const data = {
    title: "Choose the next authoritative step",
    subtitle: "Continue based on resource state and your developer intent.",
    context: "Useful context without private\ndata.",
    disclaimer: "No resource identifier or technical contract is passed because an approved public inventory was not supplied. This local inquiry is not a support ticket."
  };
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="flex flex-col">
            <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-4 whitespace-pre-wrap">{data.title}</h2>
            <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] mb-8">{data.subtitle}</p>
            
            <h3 className="text-[20px] font-bold text-white mb-2">Useful context without private<br/>data.</h3>
            <p className="text-[14px] text-[#c4d7d9] leading-[22.4px] mb-8">{data.disclaimer}</p>
            
            <Link
              href="#"
              className="text-[#86d4d8] font-bold text-[16px] hover:opacity-80 transition-opacity"
            >
              Documentation preview →
            </Link>
          </div>
          
          <div className="flex flex-col bg-[rgba(255,255,255,0.027)] rounded-[20px] p-8 border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)]">
            <h3 className="text-[20px] font-bold text-white mb-6">Discuss a developer requirement</h3>
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#c4d7d9] mb-2">Work email</label>
                  <input type="email" className="w-full bg-white rounded-[8px] h-10 px-3 outline-none" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#c4d7d9] mb-2">Organization</label>
                  <input type="text" className="w-full bg-white rounded-[8px] h-10 px-3 outline-none" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[14px] text-[#c4d7d9] mb-2">Intent</label>
                <select className="w-full bg-white rounded-[8px] h-10 px-3 outline-none appearance-none">
                  <option>Choose one</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[14px] text-[#c4d7d9] mb-2">High-level requirement</label>
                <textarea className="w-full bg-white rounded-[8px] h-24 p-3 outline-none resize-none"></textarea>
              </div>
            </div>
            
            <p className="text-[12px] text-[#c4d7d9] leading-[18px] mb-4">
              Do not submit tokens, passwords, source code, production payloads, private hostnames or customer information.
            </p>
            
            <label className="flex items-start gap-2 mb-6 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-[12px] text-[#c4d7d9] leading-[18px]">
                I acknowledge this preview does not send or store information.
              </span>
            </label>
            
            <button className="w-full bg-[#1c797d] hover:bg-[#145a5d] text-white font-bold py-3 rounded-[8px] transition-colors">
              Review inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
