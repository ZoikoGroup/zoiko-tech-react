import Image from "next/image";

export default function MediaSectionVerifiedFacts() {
  const cards = [
  {
    "title": "Identity",
    "desc": <><span className="whitespace-nowrap">Exact approved</span><br /><span className="whitespace-nowrap">corporate/legal entity</span><br /><span className="whitespace-nowrap">wording.</span></>,
    "image": "/images/media-resources/1348-1012.png"
  },
  {
    "title": "Description",
    "desc": <><span className="whitespace-nowrap">Versioned boilerplate</span><br /><span className="whitespace-nowrap">with accountable</span><br /><span className="whitespace-nowrap">owner and review date.</span></>,
    "image": "/images/media-resources/1348-1013.png"
  },
  {
    "title": "Locations",
    "desc": <><span className="whitespace-nowrap">Authoritative scope; no</span><br /><span className="whitespace-nowrap">guessed headquarters</span><br /><span className="whitespace-nowrap">or footprint.</span></>,
    "image": "/images/media-resources/1348-1014.png"
  },
  {
    "title": "Counts",
    "desc": <><span className="whitespace-nowrap">Employee/customer/</span><br /><span className="whitespace-nowrap">market numbers</span><br /><span className="whitespace-nowrap">omitted unless</span><br /><span className="whitespace-nowrap">approved with date/</span><br /><span className="whitespace-nowrap">method.</span></>,
    "image": "/images/media-resources/1348-1015.png"
  },
  {
    "title": "Fact sheet",
    "desc": <><span className="whitespace-nowrap">Only generated from</span><br /><span className="whitespace-nowrap">current eligible facts.</span><br /><span className="whitespace-nowrap">No sample fact sheet</span><br /><span className="whitespace-nowrap">or fabricated statistic.</span></>,
    "image": "/images/media-resources/1348-1016.png"
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Verified company facts & boilerplate</h2>
          <p className="text-[16px] text-[#8FBCC6] leading-[25.6px] whitespace-pre-wrap">Corporate truth requires a reviewed source.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="flex flex-col items-center text-center bg-[rgba(255,255,255,0.027)] rounded-2xl overflow-hidden h-[359px] border border-[rgba(143,188,198,0.33)]">
              {card.image && (
                <div className="w-full h-[160px] relative">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover" />
                </div>
              )}
              <div className="flex flex-col flex-grow items-center px-2 py-4 w-full">
                <h3 className="text-[20px] font-bold text-white leading-[26px] mb-3 whitespace-pre-wrap">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
