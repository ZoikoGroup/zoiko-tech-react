import Image from "next/image";
import DesktopLines from "./DesktopLines";

const photoBg = { backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" };

const cards: {
  title: string;
  img: string;
  lines: string[];
  tag?: string;
  note?: string[];
  h: string;
}[] = [
  { title: "Zoiko Assure", img: "/regulated-industries/desktop-evidence-customer-identity.webp", lines: ["Technology and assurance", "destination candidate."], tag: "Build · hidden until approved", h: "h-[337.75px]" },
  { title: "Zoiko iD", img: "/regulated-industries/desktop-evidence-regulated-context.webp", lines: ["Digital identity and access", "technology candidate. No", "assurance levels or protocols", "without product evidence."], tag: "Build · hidden until approved", h: "h-[337.75px]" },
  { title: "Zoiko Access", img: "/regulated-industries/desktop-evidence-problem.webp", lines: ["Industry solution candidate, once", "sector and use-case scope is", "defined."], tag: "Build · hidden until approved", h: "h-[337.75px]" },
  { title: "ZoikoTax", img: "/regulated-industries/desktop-evidence-deployment.webp", lines: ["Specialist tax and regulatory", "solution candidate. No tax", "advice, filing authority or", "jurisdiction coverage implied."], tag: "Build · hidden until approved", h: "h-[337.75px]" },
  { title: "Zoikorum", img: "/regulated-industries/desktop-evidence-result.webp", lines: ["Regulated and professional-", "services candidate. No licensed", "service or legal representation", "implied."], tag: "Build · hidden until approved", h: "h-[374.28px]" },
  { title: "CoreX", img: "/regulated-industries/desktop-evidence-regulatory-wording.webp", lines: ["Shared control, evidence and", "transaction infrastructure, when", "customer-facing."], tag: "Build · public only if approved", h: "h-[374.28px]" },
  { title: "Zoiko AI", img: "/regulated-industries/desktop-evidence-visuals.webp", lines: ["Governed agentic intelligence", "architecture. Approved AI", "governance and regulated-use", "patterns only."], h: "h-[374.28px]" },
  { title: "Live enterprise platforms", img: "/regulated-industries/desktop-architecture-l4-dashboard.webp", lines: ["ZoikoNex, Time, HR, Payroll,", "Billing, Local, Sema and others", "as workflow evidence within", "approved scope."], note: ["A live product doesn’t imply", "certification or jurisdictional", "suitability."], h: "h-[374.28px]" },
];

export default function DesktopPlatforms() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.2px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Platform and technology evidence
        </h2>
        <p className="pb-[0.685px] font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          <DesktopLines
            lines={[
              "Candidate platforms appear only when public destination, scope, maturity and claims are",
              "approved. Missing operator, maturity, regulated status or evidence means the card isn’t",
              "shown.",
            ]}
          />
        </p>
        <ul className="grid grid-cols-4 gap-[18px] pt-[1.81px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`${c.h} flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]`}
            >
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden" style={photoBg}>
                <Image src={c.img} alt="" fill sizes="280px" className="object-cover" />
              </div>
              <div className="flex flex-col px-[20px] pt-[15px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="mt-[5.9px] font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  <DesktopLines lines={c.lines} />
                </p>
                {c.tag && (
                  <span className="mt-[10.5px] inline-flex w-fit whitespace-nowrap rounded-full border border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                    {c.tag}
                  </span>
                )}
                {c.note && (
                  <small className="mt-[4.3px] block font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                    <DesktopLines lines={c.note} />
                  </small>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
