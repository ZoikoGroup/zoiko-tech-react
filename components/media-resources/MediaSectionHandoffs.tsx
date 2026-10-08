import Image from "next/image";
import { FileText, User, Database, Network } from "lucide-react";

export default function MediaSectionHandoffs() {
  const cards = [
  {
    "title": "Press Releases",
    "desc": <><span className="whitespace-nowrap">Canonical official release</span><br /><span className="whitespace-nowrap">authority.</span></>,
    "icon": FileText
  },
  {
    "title": "Newspaper",
    "desc": <><span className="whitespace-nowrap">Broader editorial/news</span><br /><span className="whitespace-nowrap">discovery.</span></>,
    "icon": User
  },
  {
    "title": "Company Newsroom",
    "desc": <><span className="whitespace-nowrap">Separate approval-gated</span><br /><span className="whitespace-nowrap">umbrella destination.</span></>,
    "icon": Database
  },
  {
    "title": "Research / documentation",
    "desc": <><span className="whitespace-nowrap">Technical evidence and</span><br /><span className="whitespace-nowrap">product guidance retain</span><br /><span className="whitespace-nowrap">their owners.</span></>,
    "icon": Network
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-9">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Publication destinations remain distinct</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Media assets do not become formal company statements.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article key={idx} className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.027)] rounded-[20px] overflow-hidden p-6 border border-[rgba(143,188,198,0.33)] h-full">
                  <div 
                    className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg mb-4 bg-[#F4F7F9]"
                  >
                    <Icon className="w-6 h-6 text-[#1c797d]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2 whitespace-pre-wrap">{card.title}</h3>
                  <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
                </article>
              );
            })}
          </div>
          
          <div className="relative w-full h-[400px] lg:h-[500px] flex">
             <Image src="/images/media-resources/1352-1027.png" alt="News publishing illustration" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
