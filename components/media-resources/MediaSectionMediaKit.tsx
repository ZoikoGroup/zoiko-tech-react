import Image from "next/image";
import { FileText, User, Database, Network } from "lucide-react";

export default function MediaSectionMediaKit() {
  const cards = [
  {
    "title": "Eligibility",
    "desc": <><span className="whitespace-nowrap">Actual maintained kit with</span><br /><span className="whitespace-nowrap">current permitted assets.</span></>,
    "icon": FileText
  },
  {
    "title": "Manifest",
    "desc": <><span className="whitespace-nowrap">Files, source IDs, versions, rights</span><br /><span className="whitespace-nowrap">and credits.</span></>,
    "icon": User
  },
  {
    "title": "Validation",
    "desc": <><span className="whitespace-nowrap">Healthy approved download,</span><br /><span className="whitespace-nowrap">matching metadata and</span><br /><span className="whitespace-nowrap">accessible contents.</span></>,
    "icon": Database
  },
  {
    "title": "Rebuild",
    "desc": <><span className="whitespace-nowrap">Regenerate or suppress when a</span><br /><span className="whitespace-nowrap">required file changes or</span><br /><span className="whitespace-nowrap">expires.</span></>,
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
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Media kit bundle</h2>
          <p className="text-[16px] text-[#8FBCC6] leading-[25.6px] whitespace-pre-wrap">A bundle is only as current as its components.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col items-center text-center bg-[rgba(255,255,255,0.027)] rounded-[20px] overflow-hidden p-6 border border-[rgba(143,188,198,0.33)] h-[230px]">
                <div 
                  className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: "rgba(111, 209, 214, 0.098)" }}
                >
                  <Icon className="w-6 h-6 text-[#86d4d8]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </article>
            );
          })}
        </div>
        
        <div className="w-full relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
           <Image src="/images/media-resources/1357-1011.png" alt="Media kit layout" fill sizes="100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
