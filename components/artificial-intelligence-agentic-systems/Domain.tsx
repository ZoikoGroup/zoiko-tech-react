import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  { photo: "technology-team-collaborating", title: "Operating context", text: "Approved domain, role, workspace and process scope." },
  { photo: "professionals-reviewing-documents", title: "Source hierarchy", text: "Authoritative systems, documents, policy and evidence." },
  { photo: "team-discussing-laptop", title: "Derived outputs", text: "Summaries, classification and recommendations clearly labeled." },
  { photo: "colleagues-reviewing-records", title: "Uncertainty", text: "Missing, stale, conflicting or restricted sources trigger review." },
  { photo: "team-working-together", title: "Human decision", text: "Professional, managerial or regulated authority remains with its responsible owner." },
];

export default function Domain() {
  return (
    <section id="domain" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Domain-Specific AI
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-[#587176]">Derived intelligence stays distinct from authoritative facts.</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[rgba(141,185,196,0.33)] bg-[#f1f8f9]"
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
