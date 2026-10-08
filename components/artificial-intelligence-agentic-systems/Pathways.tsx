import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  { photo: "technology-team-collaborating", title: "Domain-Specific AI", text: "Specialized intelligence with real operating context and approved sources." },
  { photo: "professionals-reviewing-documents", title: "Governed execution", text: "Bounded actions with approvals and evidence." },
  { photo: "team-discussing-laptop", title: "Work orchestration", text: "Reviewable steps, dependencies and accountable handoffs." },
  { photo: "colleagues-reviewing-records", title: "Governance & assurance", text: "Policy, evaluation and controlled changes." },
  { photo: "team-working-together", title: "Developer architecture", text: "Public-ready interfaces, system boundaries and observability." },
];

export default function Pathways() {
  return (
    <section id="pathways" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Choose your architecture question
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-[#587176]">Route by domain, execution or control needs.</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[rgba(141,185,196,0.33)] bg-[#f1f8f9] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-[185px] w-full shrink-0 overflow-hidden">
                <Image
                  src={`/artificial-intelligence-agentic-systems/photo-${c.photo}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-[26px]">
                <h3 className="pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="font-poppins text-[15px] leading-[25.5px] text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
