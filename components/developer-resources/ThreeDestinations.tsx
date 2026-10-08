import Image from "next/image";
import { FileText, Code, Box } from "lucide-react";

export default function ThreeDestinations() {
  const items = [
  {
    "title": "Documentation",
    "desc": <><span className="whitespace-nowrap">Product concepts, workflows, tasks and</span><br /><span className="whitespace-nowrap">approved how-to guidance.</span></>,
    "icon": FileText
  },
  {
    "title": "Developer Resources",
    "desc": <><span className="whitespace-nowrap">Released API, SDK, integration and</span><br /><span className="whitespace-nowrap">developer- tool contracts.</span></>,
    "icon": Code
  },
  {
    "title": "Developer Platform",
    "desc": <><span className="whitespace-nowrap">Separate Technology destination,</span><br /><span className="whitespace-nowrap">exposed only when public-ready.</span></>,
    "icon": Box
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2">Three destinations.<br />Different authorities.</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Knowledge, technical contracts and platform identity stay distinct.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col items-start bg-[rgba(255,255,255,0.027)] rounded-[20px] p-8 border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] h-full">
                <div 
                  className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg mb-6 bg-[rgba(111,209,214,0.098)]"
                >
                  <Icon className="w-6 h-6 text-[#86d4d8]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px]">{card.desc}</p>
              </article>
            );
          })}
        </div>
        
        <div className="mt-12 relative w-full h-[400px] lg:h-[600px] rounded-[20px] overflow-hidden">
          <Image src="/images/media-resources/image 47 (1).png" alt="Developer desk setup" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
