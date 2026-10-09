import Image from "next/image";

export default function VersionChangeDeprecation() {
  const items = [
  {
    "title": "Current / supported",
    "desc": "Technical authority distinguishes current, recommended and supported versions."
  },
  {
    "title": "Breaking change / retirement",
    "desc": "Approved timing, affected contract and migration/replacement or governed tombstone."
  },
  {
    "title": <><span className="whitespace-nowrap">Package / schema</span><br /><span className="whitespace-nowrap">compatibility</span></>,
    "desc": "Version relationships must be explicit; release changes invalidate stale snippets."
  },
  {
    "title": "Security changes",
    "desc": "Public disclosure requires applicable Trust/Security approval."
  }
];
  
  return (
    <section className="w-full bg-white py-[80px] font-poppins overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-16">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Version, change and deprecation</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">No invented version scheme or release cadence.</p>
        </div>
        
        <div className="flex flex-col w-full">
          {items.map((item, idx) => (
            <article 
              key={idx} 
              className="flex flex-col md:flex-row items-start py-8 border-b border-[#e5e7eb] last:border-b-0"
            >
              <h3 className="w-full md:w-[35%] text-[18px] font-bold text-[#102d2f] leading-[24px] shrink-0 pr-8 mb-4 md:mb-0">
                {item.title}
              </h3>
              <p className="w-full md:w-[65%] text-[15px] text-[#587176] leading-[25.5px]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
