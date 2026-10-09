import Image from "next/image";

export default function MediaSectionLifecycle() {
  const cards = [
  {
    "title": "Current",
    "desc": <><span className="whitespace-nowrap">All source and rights</span><br /><span className="whitespace-nowrap">requirements remain valid.</span></>,
    "image": "/images/media-resources/1365-1012.png"
  },
  {
    "title": "Deprecated",
    "desc": <><span className="whitespace-nowrap">Remove from current</span><br /><span className="whitespace-nowrap">browse and explain</span><br /><span className="whitespace-nowrap">permitted history.</span></>,
    "image": "/images/media-resources/1365-1013.png"
  },
  {
    "title": "Superseded",
    "desc": <><span className="whitespace-nowrap">Equivalent approved</span><br /><span className="whitespace-nowrap">replacement when available.</span></>,
    "image": "/images/media-resources/1365-1014.png"
  },
  {
    "title": "Expired /withdrawn",
    "desc": <><span className="whitespace-nowrap">Suppress downloads,</span><br /><span className="whitespace-nowrap">discovery, metadata and</span><br /><span className="whitespace-nowrap">cached claims.</span></>,
    "image": "/images/media-resources/1365-1015.png"
  }
];
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Version, expiry & replacement</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Currentness is a governed state.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="flex flex-col items-center text-center bg-white rounded-[20px] overflow-hidden border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] h-[385px]">
              {card.image && (
                <div className="w-full h-[200px] relative shrink-0">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" />
                </div>
              )}
              <div className="flex flex-col p-6 w-full items-center">
                <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
