import Image from "next/image";
import { FileText, User, Database, Network, ShieldCheck } from "lucide-react";

export default function MediaSectionQuestions() {
  const cards = [
  {
    "title": <><span className="whitespace-nowrap">Are these official</span><br /><span className="whitespace-nowrap">assets?</span></>,
    "desc": <><span className="whitespace-nowrap">No. This prototype</span><br /><span className="whitespace-nowrap">shows explanatory</span><br /><span className="whitespace-nowrap">requirements; stock</span><br /><span className="whitespace-nowrap">photos and illustration</span><br /><span className="whitespace-nowrap">are design visuals.</span></>,
    "icon": FileText
  },
  {
    "title": <><span className="whitespace-nowrap">Can I download</span><br /><span className="whitespace-nowrap">logos or a media</span><br /><span className="whitespace-nowrap">kit?</span></>,
    "desc": <><span className="whitespace-nowrap">Only when actual</span><br /><span className="whitespace-nowrap">approved current files</span><br /><span className="whitespace-nowrap">and usage rights are</span><br /><span className="whitespace-nowrap">connected.</span></>,
    "icon": User
  },
  {
    "title": <><span className="whitespace-nowrap">Are company</span><br /><span className="whitespace-nowrap">facts evergreen?</span></>,
    "desc": <><span className="whitespace-nowrap">No. Changing facts</span><br /><span className="whitespace-nowrap">need source, owner,</span><br /><span className="whitespace-nowrap">observation/review</span><br /><span className="whitespace-nowrap">dates and stale</span><br /><span className="whitespace-nowrap">suppression.</span></>,
    "icon": Database
  },
  {
    "title": <><span className="whitespace-nowrap">Can I use assets</span><br /><span className="whitespace-nowrap">for co marketing?</span></>,
    "desc": <><span className="whitespace-nowrap">Only when explicit</span><br /><span className="whitespace-nowrap">rights allow it or an</span><br /><span className="whitespace-nowrap">approved permission</span><br /><span className="whitespace-nowrap">process grants it.</span></>,
    "icon": Network
  },
  {
    "title": <><span className="whitespace-nowrap">What if an asset</span><br /><span className="whitespace-nowrap">is replaced?</span></>,
    "desc": <><span className="whitespace-nowrap">Use the approved</span><br /><span className="whitespace-nowrap">current equivalent;</span><br /><span className="whitespace-nowrap">historical or expired</span><br /><span className="whitespace-nowrap">materials do not</span><br /><span className="whitespace-nowrap">remain current.</span></>,
    "icon": ShieldCheck
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Questions before using an asset</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Five answers about source, rights and currentness.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.027)] rounded-[20px] overflow-hidden p-6 border border-[rgba(143,188,198,0.33)] h-[307px]">
                <div 
                  className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: "rgba(111, 209, 214, 0.098)" }}
                >
                  <Icon className="w-6 h-6 text-[#86d4d8]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px]">{card.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
