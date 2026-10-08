import Image from "next/image";
import { FileText, User, Database, Network, ShieldCheck } from "lucide-react";

export default function MediaSectionHighlights() {
  const cards = [
  {
    "title": "Eligibility",
    "desc": <>Approved public<br />record, source, usage<br />and reviewed status.</>,
    "icon": FileText
  },
  {
    "title": "Selection",
    "desc": <>One governed highlight<br />group, not an auto-<br />rotating carousel.</>,
    "icon": User
  },
  {
    "title": "Source",
    "desc": <>Actual file and preview<br />must match the<br />record.</>,
    "icon": Database
  },
  {
    "title": "Expiry",
    "desc": <>Stale, expired or<br />withdrawn assets leave<br />current highlights.</>,
    "icon": Network
  },
  {
    "title": "Prototype state",
    "desc": <>No approved highlight<br />inventory supplied;<br />none is fabricated.</>,
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
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Current resource highlights</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Only current, rights-cleared resources qualify.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article key={idx} className="flex flex-col items-center justify-center text-center bg-[#052528] rounded-xl p-4 h-[230px] border border-[rgba(143,188,198,0.33)]">
                <div 
                  className="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: "rgba(111, 209, 214, 0.098)" }}
                >
                  <Icon className="w-6 h-6 text-[#8FBCC6]" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2 whitespace-pre-wrap">{card.title}</h3>
                  <p className="text-[14px] text-[#c4d7d9] leading-[24px] whitespace-pre-wrap">{card.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
