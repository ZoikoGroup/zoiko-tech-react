import Image from "next/image";

export default function ExplicitStates() {
  const items = [
  {
    "title": <>No public records / registry<br />error</>,
    "desc": "Honest availability explanation, without fake resources or coming-soon endpoints.",
    "img": "/images/developer-resources/1338-2996.png"
  },
  {
    "title": "Deprecated / retired",
    "desc": "Current replacement or governed tombstone, with lifecycle scope.",
    "img": "/images/developer-resources/1338-3008.png"
  },
  {
    "title": "Search or route failure",
    "desc": "Keep governed browse available when possible; explain recovery and preserve focus.",
    "img": "/images/developer-resources/1338-3152.png"
  },
  {
    "title": "No JavaScript",
    "desc": "Core public resource content and canonical links remain readable when actual records exist.",
    "img": "/images/developer-resources/1338-3164.png"
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Unavailable is an explicit state</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Fail closed for private, stale and unsupported contracts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card, idx) => (
            <article key={idx} className="flex flex-col bg-[rgba(255,255,255,0.027)] rounded-[20px] p-6 border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)]">
              <div className="relative w-full h-[140px] mb-6 rounded-[12px] overflow-hidden">
                <Image src={card.img} alt={typeof card.title === 'string' ? card.title : "Card image"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <h3 className="text-[20px] font-bold text-white leading-[26px] mb-3">{card.title}</h3>
              <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
