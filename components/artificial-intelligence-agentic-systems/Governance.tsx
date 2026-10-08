import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { title: "Policy", text: "Approved use cases, prohibited actions and approval gates.", photo: "governance-policy-team", icon: "adoption-map-icon", alt: "Technology team collaborating — illustrative stock photograph" },
  { title: "Evaluation", text: "Relevant tasks, conditions, limitations and reviewed evidence.", photo: "governance-evaluation-professionals", icon: "adoption-govern-icon", alt: "Professionals reviewing documents — illustrative stock photograph" },
  { title: "Human oversight", text: "Named decision owner, approver and operator.", photo: "governance-oversight-laptop", icon: "adoption-pilot-icon", alt: "Team discussing laptop information — illustrative stock photograph" },
  { title: "Change control", text: "Re-review material model, source, policy or tool changes.", photo: "governance-change-control-records", icon: "adoption-evaluate-icon", alt: "Colleagues reviewing records — illustrative stock photograph" },
  { title: "Assurance", text: "Scoped evidence; no invented scores, bias-free or compliant-AI claim.", photo: "governance-assurance-team", icon: "adoption-expand-icon", alt: "Team working together — illustrative stock photograph" },
];

export default function Governance() {
  return (
    <section id="governance" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            AI governance &amp; evaluation
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#587176]">
            Evaluation is evidence, not universal safety certification.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="flex flex-col overflow-hidden rounded-xl border border-[rgba(141,185,196,0.33)] bg-[#f1f8f9]">
              <div className="relative h-[185px] w-full shrink-0 overflow-hidden">
                <Image src={`/artificial-intelligence-agentic-systems/${c.photo}.webp`} alt={c.alt} fill sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-[26px]">
                <div className="flex items-center gap-[10px]">
                  <span className="flex w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                    <Image src={`/artificial-intelligence-agentic-systems/${c.icon}.svg`} alt="" width={25} height={25} />
                  </span>
                  <h3 className="min-w-px flex-1 pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{c.title}</h3>
                </div>
                <p className="font-poppins text-[15px] leading-[25.5px] text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
