import Image from "next/image";
import { FileText, User, Database, Network, ShieldCheck } from "lucide-react";

export default function MediaSectionUsage() {
  const cards = [
  {
    "title": "Self-serve",
    "desc": <><span className="whitespace-nowrap">Only uses explicitly authorized in asset</span><br /><span className="whitespace-nowrap">metadata.</span></>,
    "image": "/images/media-resources/1338-4337.png",
    "icon": FileText
  },
  {
    "title": "Credit",
    "desc": <><span className="whitespace-nowrap">Exact approved attribution and caption</span><br /><span className="whitespace-nowrap">where required.</span></>,
    "image": "/images/media-resources/1338-4351.png",
    "icon": User
  },
  {
    "title": "Restrictions",
    "desc": <><span className="whitespace-nowrap">No alteration, endorsement or co-brand</span><br /><span className="whitespace-nowrap">permission assumed.</span></>,
    "image": "/images/media-resources/1338-4366.png",
    "icon": Database
  },
  {
    "title": "Permission",
    "desc": <><span className="whitespace-nowrap">Approved operational request route only</span><br /><span className="whitespace-nowrap">when it exists.</span></>,
    "image": "/images/media-resources/1338-4381.png",
    "icon": Network
  },
  {
    "title": "Authority",
    "desc": <><span className="whitespace-nowrap">Legal/trademark terms remain authoritative;</span><br /><span className="whitespace-nowrap">this page cannot expand them.</span></>,
    "image": "/images/media-resources/1338-4398.png",
    "icon": ShieldCheck
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1264px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Usage, credit & permission</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Make limits visible before any file is obtained.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-[rgba(143,188,198,0.33)] w-[381px] h-[333px] shrink-0">
                {card.image && (
                  <div className="w-full h-[180px] relative shrink-0">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-lg bg-[#F4F7F9]">
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
