import Image from "next/image";

export default function EscalateSupport() {
  const items = [
  {
    "title": "Support context",
    "desc": "Resource, product/platform, version and public-safe error/task context; no private payloads."
  },
  {
    "title": "Enterprise evaluation",
    "desc": "Capability, availability and contract questions after useful resource context."
  },
  {
    "title": "No invented promise",
    "desc": "Channels, response time, SLA and self-service provisioning require approved source records."
  }
];
  
  return (
    <section className="w-full bg-white py-[80px] font-poppins overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-16">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Escalate according to intent</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Self-service first; support for unresolved technical needs; sales for commercial evaluation.</p>
        </div>
        
        <div className="flex flex-col w-full">
          {items.map((item, idx) => (
            <article 
              key={idx} 
              className="flex flex-col md:flex-row items-start py-8 border-t border-[#e5e7eb]"
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
