import Image from "next/image";
import { Code, FileText, ShieldCheck } from "lucide-react";

export default function DeveloperTaskRouter() {
  const cards = [
  {
    "title": "Build / integrate",
    "desc": <><span className="whitespace-nowrap">Find the approved API, SDK, integration or</span><br /><span className="whitespace-nowrap">event contract for the task.</span></>,
    "image": "/images/developer-resources/1338-2900.png",
    "icon": Code
  },
  {
    "title": "Learn / authenticate",
    "desc": <><span className="whitespace-nowrap">Read prerequisites, current version and the</span><br /><span className="whitespace-nowrap">approved access model.</span></>,
    "image": "/images/developer-resources/1338-2912.png",
    "icon": FileText
  },
  {
    "title": "Validate / operate",
    "desc": <><span className="whitespace-nowrap">Use released tests, expected states,</span><br /><span className="whitespace-nowrap">observability and authoritative support.</span></>,
    "image": "/images/developer-resources/1338-2924.png",
    "icon": ShieldCheck
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Start with the build job.</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">You should not need to know the internal product organization to find the right contract.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col bg-white border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] rounded-[20px] overflow-hidden h-full">
                {card.image && (
                  <div className="w-full h-[200px] relative shrink-0">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col p-6 h-full">
                  <div 
                    className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg bg-[#F4F7F9] mb-4"
                  >
                    <Icon className="w-6 h-6 text-[#1c797d]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px] mb-2">{card.title}</h3>
                  <p className="text-[15px] text-[#587176] leading-[25.5px] flex-grow">{card.desc}</p>
                  <p className="text-[11px] text-[#587176] opacity-70 mt-6 font-medium">Illustrative stock photograph</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
