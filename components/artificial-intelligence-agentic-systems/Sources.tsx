import Image from "next/image";
import { WRAP } from "./layout";

const P = "/artificial-intelligence-agentic-systems";

const CARDS = [
  { img: "governance-policy-team", title: "Authoritative source", text: "Responsible system, policy or document for the task." },
  { img: "governance-evaluation-professionals", title: "Derived context", text: "AI-extracted or inferred content is explicitly separate." },
  { img: "governance-oversight-laptop", title: "Freshness", text: "Version, effective time, stale and superseded state." },
  { img: "governance-change-control-records", title: "Citation / conflict", text: "Trace to source set; do not merge disagreement into certainty." },
  { img: "governance-assurance-team", title: "Missing evidence", text: "Abstain, request information or route to review; retention follows approved policy." },
];

export default function Sources() {
  return (
    <section id="sources" className="w-full bg-white py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            Knowledge, sources & evidence
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#587176]">
            Source lineage remains visible throughout the workflow.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col overflow-hidden rounded-xl border border-solid border-[rgba(141,185,196,0.33)] bg-[#f1f8f9]"
            >
              <div className="relative h-[185px] w-full overflow-hidden">
                <Image src={`${P}/${c.img}.webp`} alt="" fill sizes="(min-width:1024px) 384px, (min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-[26px]">
                <h3 className="pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{c.title}</h3>
                <p className="font-poppins text-[15px] leading-[25.5px] text-[#587176]">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
