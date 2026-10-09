import Image from "next/image";
import { Code, Network } from "lucide-react";

export default function SdkPackageLayer() {
  const items = [
  {
    "title": "Package & compatibility",
    "desc": <><span className="whitespace-nowrap">Actual language/runtime, official package source, version and</span><br /><span className="whitespace-nowrap">supported API/product scope.</span></>,
    "icon": Code
  },
  {
    "title": "Install & migrate",
    "desc": <><span className="whitespace-nowrap">Tested official commands, approved auth, migration/</span><br /><span className="whitespace-nowrap">deprecation and real support boundaries.</span></>,
    "icon": Network
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          
          {/* Left Column: Text & Cards */}
          <div className="flex flex-col">
            <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">SDK / package layer</h2>
            <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap mb-10">Supported package facts come from technical authority.</p>
            
            <div className="flex flex-col gap-6">
              {items.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <article key={idx} className="flex flex-col bg-[rgba(255,255,255,0.027)] rounded-[20px] p-8 border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)]">
                    <div className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg bg-[rgba(111,209,214,0.098)] mb-6">
                      <Icon className="w-6 h-6 text-[#86d4d8]" strokeWidth={2} />
                    </div>
                    <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2">{card.title}</h3>
                    <p className="text-[15px] text-[#c4d7d9] leading-[25.5px]">{card.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Illustration */}
          <div className="relative w-full h-[400px] lg:h-[600px]">
             <Image 
               src="/images/developer-resources/1352-1066.png" 
               alt="SDK package globe illustration" 
               fill 
               sizes="(max-width: 768px) 100vw, 50vw" 
               className="object-contain lg:object-right" 
               priority
             />
          </div>
          
        </div>
      </div>
    </section>
  );
}
