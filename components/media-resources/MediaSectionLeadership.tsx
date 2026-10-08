import Image from "next/image";
import { FileText, User, Database, Network } from "lucide-react";

export default function MediaSectionLeadership() {
  const cards = [
  {
    "title": "Identity",
    "desc": <><span className="whitespace-nowrap">Current approved name</span><br /><span className="whitespace-nowrap">and title.</span></>,
    "icon": FileText
  },
  {
    "title": "Biography",
    "desc": <><span className="whitespace-nowrap">Public-safe source-</span><br /><span className="whitespace-nowrap">approved wording.</span></>,
    "icon": User
  },
  {
    "title": "Portrait",
    "desc": <><span className="whitespace-nowrap">Actual approved image</span><br /><span className="whitespace-nowrap">and subject/media rights.</span></>,
    "icon": Database
  },
  {
    "title": "Currentness",
    "desc": <><span className="whitespace-nowrap">Version, review and</span><br /><span className="whitespace-nowrap">replacement when role or</span><br /><span className="whitespace-nowrap">image changes.</span></>,
    "icon": Network
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Leadership / spokesperson media</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">An approved portrait does not imply interview availability.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article key={idx} className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.027)] rounded-2xl overflow-hidden p-6 border border-[rgba(143,188,198,0.33)] h-full">
                  <div 
                    className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg mb-4"
                    style={{ backgroundColor: "rgba(111, 209, 214, 0.098)" }}
                  >
                    <Icon className="w-6 h-6 text-[#8FBCC6]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2 whitespace-pre-wrap">{card.title}</h3>
                  <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
                </article>
              );
            })}
          </div>
          
          <div className="relative w-full h-[300px] lg:h-[500px]">
             <Image src="/images/media-resources/1352-1021.png" alt="section image" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain lg:object-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
