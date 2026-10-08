import Image from "next/image";

export default function SecurityPrivacy() {
  const items = [
  {
    "title": "Public data",
    "desc": "Synthetic, non-sensitive examples only. No real account identifiers, screenshots or private topology."
  },
  {
    "title": "Telemetry",
    "desc": "Exclude code, payloads, raw errors, tokens and credentials from public analytics."
  },
  {
    "title": "Disclosure",
    "desc": "Security findings use approved Responsible Disclosure routes; no public support-comment substitute."
  },
  {
    "title": "AI assistance",
    "desc": "Ground answers in current public contract versions; do not encourage secret ingestion."
  }
];
  
  return (
    <section className="w-full bg-white py-[80px] font-poppins overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex flex-col mb-12">
              <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2">Security, privacy and public example<br/>safety</h2>
              <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Developer convenience cannot expose credentials or customer information.</p>
            </div>
          
            <div className="flex flex-col">
              {items.map((item, idx) => (
                <article key={idx} className="flex flex-col border-t border-[#e5e7eb] py-6 last:pb-0">
                  <h3 className="text-[16px] font-bold text-[#102d2f] leading-[22px] mb-2">{item.title}</h3>
                  <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
          
          <div className="relative w-full h-[400px] lg:h-[700px]">
             <Image src="/images/media-resources/image 161.png" alt="Security illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain lg:object-right" priority />
          </div>
          
        </div>
      </div>
    </section>
  );
}
