import Image from "next/image";
import { FileText, User, Database, Network, ShieldCheck } from "lucide-react";

export default function MediaSectionImagery() {
  const cards = [
  {
    "title": "Corporate imagery",
    "desc": <><span className="whitespace-nowrap">Consent, accurate entity/location and usage</span><br /><span className="whitespace-nowrap">rights.</span></>,
    "image": "/images/media-resources/1338-4023.png",
    "icon": FileText
  },
  {
    "title": "Technology imagery",
    "desc": <><span className="whitespace-nowrap">Product-owner approval and current</span><br /><span className="whitespace-nowrap">released scope.</span></>,
    "image": "/images/media-resources/1338-4037.png",
    "icon": User
  },
  {
    "title": "Event imagery",
    "desc": <><span className="whitespace-nowrap">Actual approved event context and caption/</span><br /><span className="whitespace-nowrap">credit.</span></>,
    "image": "/images/media-resources/1338-4052.png",
    "icon": Database
  },
  {
    "title": "Customer / partner",
    "desc": <><span className="whitespace-nowrap">Separate rights; no implied endorsement.</span></>,
    "image": "/images/media-resources/1338-4067.png",
    "icon": Network
  },
  {
    "title": "Stock boundary",
    "desc": <><span className="whitespace-nowrap">Photos here illustrate publishing tasks; they</span><br /><span className="whitespace-nowrap">are not official Zoiko imagery.</span></>,
    "image": "/images/media-resources/1338-4084.png",
    "icon": ShieldCheck
  }
];
  return (
    <section className="w-full bg-[#F4F7F9] py-[80px] font-poppins">
      <div className="max-w-[1264px] mx-auto px-8">
        <div className="flex flex-col mb-12 items-center text-center">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Media & product imagery</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Rights and source context come before download.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 w-[384px] h-[333px] shrink-0">
                {card.image && (
                  <div className="w-full h-[180px] relative">
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
