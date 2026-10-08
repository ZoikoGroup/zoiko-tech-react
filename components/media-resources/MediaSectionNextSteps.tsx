import Image from "next/image";
import { FileText, User, Database, Network } from "lucide-react";

export default function MediaSectionNextSteps() {
  const cards = [
  {
    "title": "Company",
    "desc": <><span className="whitespace-nowrap">Approved identity and public</span><br /><span className="whitespace-nowrap">facts, without inferred group</span><br /><span className="whitespace-nowrap">relationships.</span></>,
    "image": "/images/media-resources/1338-4808.png",
    "icon": FileText
  },
  {
    "title": "Trust",
    "desc": <><span className="whitespace-nowrap">Current scoped evidence,</span><br /><span className="whitespace-nowrap">not decorative certification</span><br /><span className="whitespace-nowrap">marks.</span></>,
    "image": "/images/media-resources/1338-4822.png",
    "icon": User
  },
  {
    "title": "Products",
    "desc": <><span className="whitespace-nowrap">Authoritative capability/</span><br /><span className="whitespace-nowrap">availability source.</span></>,
    "image": "/images/media-resources/1338-4837.png",
    "icon": Database
  },
  {
    "title": "Partners",
    "desc": <><span className="whitespace-nowrap">Approved relationship and</span><br /><span className="whitespace-nowrap">co-brand permission only.</span></>,
    "image": "/images/media-resources/1338-4852.png",
    "icon": Network
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Contextual company, trust & partner routes</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Task completion first; no sales gate over public media resources.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col items-start text-left bg-white rounded-[20px] overflow-hidden border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] h-[358px]">
                {card.image && (
                  <div className="w-full h-[180px] relative shrink-0">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col p-6 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg bg-[#F4F7F9]">
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
