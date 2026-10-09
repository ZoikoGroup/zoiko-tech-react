import { Search, CheckCircle, Shield, Code, Check, Eye, Activity, RefreshCw } from "lucide-react";

export default function JourneyStages() {
  const stages = [
  {
    "title": "Discover",
    "desc": <><span className="whitespace-nowrap">Find an approved public</span><br /><span className="whitespace-nowrap">contract.</span></>,
    "icon": Search
  },
  {
    "title": "Qualify",
    "desc": <><span className="whitespace-nowrap">Verify version, fit, availability</span><br /><span className="whitespace-nowrap">and prerequisites.</span></>,
    "icon": CheckCircle
  },
  {
    "title": "Authenticate",
    "desc": <><span className="whitespace-nowrap">Use the actual supported</span><br /><span className="whitespace-nowrap">identity path.</span></>,
    "icon": Shield
  },
  {
    "title": "Build / integrate",
    "desc": <><span className="whitespace-nowrap">Implement against the</span><br /><span className="whitespace-nowrap">authoritative contract.</span></>,
    "icon": Code
  },
  {
    "title": "Validate",
    "desc": <><span className="whitespace-nowrap">Test results, errors, states and</span><br /><span className="whitespace-nowrap">ownership.</span></>,
    "icon": Check
  },
  {
    "title": "Observe",
    "desc": <><span className="whitespace-nowrap">Use approved public signals</span><br /><span className="whitespace-nowrap">and Status.</span></>,
    "icon": Eye
  },
  {
    "title": "Operate",
    "desc": <><span className="whitespace-nowrap">Handle failures through</span><br /><span className="whitespace-nowrap">defined owners.</span></>,
    "icon": Activity
  },
  {
    "title": "Update",
    "desc": <><span className="whitespace-nowrap">Review changes and test</span><br /><span className="whitespace-nowrap">migration.</span></>,
    "icon": RefreshCw
  }
];
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2">From discovery to dependable<br/>operation.</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">Eight stages keep contract, version and operational context connected.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <article key={idx} className="flex flex-col bg-[rgba(255,255,255,0.027)] rounded-[20px] p-8 h-full border border-[rgba(143,188,198,0.33)] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] items-center text-center">
                <div className="w-[48px] h-[48px] flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1} />
                </div>
                <h3 className="text-[20px] font-bold text-white leading-[26px] mb-2 whitespace-pre-wrap">{stage.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[22px]">{stage.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
