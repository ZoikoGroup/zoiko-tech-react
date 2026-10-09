import Link from "next/link";
import { Lock, FileText, User, AlertTriangle, AlertCircle, Database, Share2, ShieldCheck, Package } from "lucide-react";

export default function DeveloperResourceRegistry() {
  const bottomCards = [
    {
      "title": "Release gate",
      "desc": "Contract, canonical route, public state, security review and link health must pass.",
      "icon": Lock
    },
    {
      "title": "Resource metadata",
      "desc": "Family, actual name, product scope, version/currentness, approved compatibility and owner.",
      "icon": FileText
    },
    {
      "title": "Eligibility",
      "desc": "Unknown or private resources remain hidden; no empty placeholder cards imply breadth.",
      "icon": User
    }
  ];

  const listItems = [
    { label: "API contract", icon: Database },
    { label: "Integration contract", icon: Share2 },
    { label: "Authentication contract", icon: ShieldCheck },
    { label: "Sandbox / package", icon: Package }
  ];

  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">Current contracts are the <span className="text-[#86d4d8]">source of<br />truth.</span></h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">A navigation label is not evidence of a released capability.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Left Card */}
          <article className="lg:col-span-2 flex flex-col justify-between bg-[rgba(255,255,255,0.027)] border border-[rgba(143,188,198,0.33)] rounded-[20px] p-8 relative overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col lg:max-w-[80%] relative z-10">
              <div className="inline-flex items-center gap-2 border border-[#f59e0b] rounded-[8px] px-3 py-1 mb-6 self-start">
                <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-[#f59e0b] text-[13px] font-medium">Registry unavailable</span>
              </div>
              <h3 className="text-[24px] font-bold text-white leading-[32px] mb-4">Developer resource registry unavailable.</h3>
              <p className="text-[14px] text-[#c4d7d9] leading-[22px] mb-4">
                No approved API, package, integration, authentication or sandbox inventory was supplied for this prototype. No released resource entries or guessed production routes are displayed.
              </p>
              <p className="text-[14px] text-[#c4d7d9] leading-[22px] mb-8">
                This does not establish that Zoiko has no developer resources. It means current public eligibility cannot be verified here.
              </p>
              <Link href="#" className="inline-flex items-center justify-center border border-[#86d4d8] text-[#86d4d8] rounded px-6 py-2 self-start text-[14px] font-bold hover:bg-[rgba(134,212,216,0.1)] transition-colors">
                Explore the Documentation preview &rarr;
              </Link>
            </div>
            {/* Absolute icon on the right */}
            <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 w-[120px] h-[120px] border border-[rgba(134,212,216,0.3)] rounded-[24px] bg-[rgba(255,255,255,0.02)] items-center justify-center">
               <AlertCircle className="w-12 h-12 text-[#86d4d8]" />
            </div>
          </article>

          {/* Top Right Card */}
          <article className="flex flex-col bg-[rgba(255,255,255,0.027)] border border-[rgba(143,188,198,0.33)] rounded-[20px] p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] h-full justify-between">
            <div className="flex items-start gap-4 mb-6">
               <FileText className="w-6 h-6 text-[#86d4d8] shrink-0 mt-1" />
               <div className="flex flex-col">
                 <h3 className="text-[18px] font-bold text-white leading-[24px]">Current contracts</h3>
                 <p className="text-[13px] text-[#c4d7d9] leading-[18px] mt-1">No approved contract inventory supplied for this prototype.</p>
               </div>
            </div>
            
            <ul className="flex flex-col gap-3">
              {listItems.map((item, idx) => (
                 <li key={idx} className="flex items-center justify-between p-3 border border-[rgba(143,188,198,0.15)] rounded-[8px]">
                   <div className="flex items-center gap-3">
                     <div className="w-[32px] h-[32px] flex items-center justify-center rounded bg-[rgba(111,209,214,0.098)]">
                       <item.icon className="w-4 h-4 text-[#86d4d8]" />
                     </div>
                     <span className="text-[13px] text-[#c4d7d9] font-medium">{item.label}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <span className="text-[11px] text-red-500 font-medium uppercase tracking-wider">Unavailable</span>
                   </div>
                 </li>
              ))}
            </ul>
          </article>

          {/* Bottom Cards */}
          {bottomCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article key={idx} className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.027)] border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] rounded-[20px] p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(111, 209, 214, 0.098)" }}>
                    <Icon className="w-6 h-6 text-[#86d4d8]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-white leading-[26px]">{item.title}</h3>
                </div>
                <p className="text-[14px] text-[#c4d7d9] leading-[24px]">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
