import Image from "next/image";
import { FileText, User, Database, ShieldCheck } from "lucide-react";

export default function MediaSectionDownloads() {
  const cards = [
  {
    "title": "Identity",
    "desc": <><span className="whitespace-nowrap">Exact title, category and</span><br /><span className="whitespace-nowrap">source owner.</span></>,
    "icon": FileText
  },
  {
    "title": "Preview",
    "desc": <><span className="whitespace-nowrap">Approved safe thumbnail and</span><br /><span className="whitespace-nowrap">accessible description.</span></>,
    "icon": User
  },
  {
    "title": "File",
    "desc": <><span className="whitespace-nowrap">Actual format, dimensions and</span><br /><span className="whitespace-nowrap">version; no guessed size.</span></>,
    "icon": Database
  },
  {
    "title": "Health",
    "desc": <><span className="whitespace-nowrap">Real approved healthy asset;</span><br /><span className="whitespace-nowrap">no placeholder links or</span><br /><span className="whitespace-nowrap">automatic downloads.</span></>,
    "icon": ShieldCheck
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Asset detail & download</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Unknown rights or file health removes the download action.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.027)] rounded-[20px] overflow-hidden p-6 border border-[rgba(143,188,198,0.33)] h-[193px]">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(111, 209, 214, 0.098)" }}
                  >
                    <Icon className="w-6 h-6 text-[#86d4d8]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-white leading-[26px]">{card.title}</h3>
                </div>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </article>
            );
          })}
        </div>
        
        <div className="w-full relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
           <Image src="/images/media-resources/1365-1017.png" alt="Asset detail layout" fill sizes="100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
