import Image from "next/image";
import { FileText, User, Database, Network } from "lucide-react";

export default function MediaSectionScreenshots() {
  const cards = [
  {
    "title": "Data",
    "desc": <><span className="whitespace-nowrap">Synthetic/redacted content</span><br /><span className="whitespace-nowrap">only; no real customer records.</span></>,
    "image": "/images/media-resources/1338-4180.png",
    "icon": FileText
  },
  {
    "title": "UI version",
    "desc": <><span className="whitespace-nowrap">Product-approved interface</span><br /><span className="whitespace-nowrap">and release applicability.</span></>,
    "image": "/images/media-resources/1338-4194.png",
    "icon": User
  },
  {
    "title": "Architecture",
    "desc": <><span className="whitespace-nowrap">Safe public abstraction, no</span><br /><span className="whitespace-nowrap">confidential topology.</span></>,
    "image": "/images/media-resources/1338-4209.png",
    "icon": Database
  },
  {
    "title": "Security",
    "desc": <><span className="whitespace-nowrap">No tokens, identifiers, private</span><br /><span className="whitespace-nowrap">hosts or sensitive internals.</span></>,
    "image": "/images/media-resources/1338-4224.png",
    "icon": Network
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2">Product screenshots & architecture<br />visuals</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Current, public-safe and scope-aware.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-[rgba(143,188,198,0.33)] h-[333px]">
                {card.image && (
                  <div className="w-full h-[180px] relative">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F4F7F9] shrink-0">
                      <Icon className="w-6 h-6 text-[#1c797d]" strokeWidth={2} />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px]">{card.title}</h3>
                  </div>
                  <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
