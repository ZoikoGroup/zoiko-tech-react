import Image from "next/image";
import { Code, ShieldCheck } from "lucide-react";

export default function QuickstartsSamples() {
  const cards = [
  {
    "title": "Tested quickstarts",
    "desc": <><span className="whitespace-nowrap">Released interface, approved auth, current version, expected result</span><br /><span className="whitespace-nowrap">and</span><br /><span className="whitespace-nowrap">cleanup/recovery.</span></>,
    "image": "/images/developer-resources/1338-3152.png",
    "icon": Code
  },
  {
    "title": "Sandbox / sample apps",
    "desc": <><span className="whitespace-nowrap">External access actually live; maintained source, production</span><br /><span className="whitespace-nowrap">differences and</span><br /><span className="whitespace-nowrap">support scope documented.</span></>,
    "image": "/images/developer-resources/1338-3164.png",
    "icon": ShieldCheck
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Quickstarts, samples and sandbox</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Accelerators require an operable public release.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col bg-white border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] rounded-[20px] overflow-hidden h-full">
                {card.image && (
                  <div className="w-full h-[220px] relative shrink-0">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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
