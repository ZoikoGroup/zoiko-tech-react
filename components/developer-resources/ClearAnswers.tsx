import Image from "next/image";
import { Plus } from "lucide-react";

export default function ClearAnswers() {
  const faqs = [
  "What are Developer Resources?",
  "Does a listed resource family mean it is released?",
  "Can I use a sandbox or console?",
  "Which SDK languages are supported?",
  "Where is service health?",
  "Is this Documentation or Developer Platform?",
  "Can I paste production tokens or payloads?"
];
  
  return (
    <section className="w-full bg-white py-[80px] font-poppins overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Clear answers before building</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">Release, compatibility and contract ownership come first.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-[#e5e7eb] pb-4">
                  <span className="text-[16px] font-bold text-[#102d2f]">{faq}</span>
                  <Plus className="w-5 h-5 text-[#102d2f] shrink-0" strokeWidth={2} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-[20px] overflow-hidden">
             <Image src="/images/media-resources/stock-image-container (1).png" alt="Developer at desk" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover lg:object-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
