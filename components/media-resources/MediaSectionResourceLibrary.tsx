import Image from "next/image";
import { FileText, User, Database, Network, ShieldCheck } from "lucide-react";

export default function MediaSectionResourceLibrary() {
  const cards = [
  {
    "title": "Search",
    "desc": "Approved public titles, descriptions, categories and fact labels only.",
    "image": "/images/media-resources/1338-3707.png",
    "icon": FileText
  },
  {
    "title": "Categories",
    "desc": "Logos, facts, imagery and other types only when publishable records exist.",
    "image": "/images/media-resources/1338-3722.png",
    "icon": User
  },
  {
    "title": "Use cases",
    "desc": "Editorial, event, digital, social, partner or print only under approved metadata.",
    "image": "/images/media-resources/1338-3737.png",
    "icon": Database
  },
  {
    "title": "Formats",
    "desc": "Actual public files only; no guessed SVG, PNG, PDF or ZIP.",
    "image": "/images/media-resources/1338-3752.png",
    "icon": Network
  },
  {
    "title": "Current prototype",
    "desc": "Registry unavailable. No fake search results, counts or official asset entries.",
    "image": "/images/media-resources/1338-3769.png",
    "icon": ShieldCheck
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Quick resource finder</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Find the right resource without guessing permission.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isTopRow = idx < 3;
            return (
              <article key={idx} className={`flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 ${isTopRow ? 'md:col-span-2 h-[396px]' : 'md:col-span-3'}`}>
                {card.image && (
                  <div className={`w-full relative ${isTopRow ? 'h-[180px]' : 'h-[220px]'}`}>
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col p-6 flex-grow">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F4F7F9] mb-6">
                    <Icon className="w-6 h-6 text-[#1c797d]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px] mb-3">{card.title}</h3>
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
