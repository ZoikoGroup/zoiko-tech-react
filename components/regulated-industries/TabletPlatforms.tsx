import Image from "next/image";
import TabletLines from "./TabletLines";

type Card = {
  title: string;
  img: string;
  lines: string[];
  tag?: string;
  small?: string[];
};

const cards: Card[] = [
  { title: "Zoiko Assure", img: "/regulated-industries/tablet-evidence-customer-identity.webp", lines: ["Technology and assurance destination", "candidate."], tag: "Build · hidden until approved" },
  { title: "Zoiko iD", img: "/regulated-industries/tablet-ai-inventory.webp", lines: ["Digital identity and access technology", "candidate. No assurance levels or", "protocols without product evidence."], tag: "Build · hidden until approved" },
  { title: "Zoiko Access", img: "/regulated-industries/tablet-ai-authority-mode.webp", lines: ["Industry solution candidate, once sector", "and use-case scope is defined."], tag: "Build · hidden until approved" },
  { title: "ZoikoTax", img: "/regulated-industries/tablet-ai-human-oversight.webp", lines: ["Specialist tax and regulatory solution", "candidate. No tax advice, filing authority", "or jurisdiction coverage implied."], tag: "Build · hidden until approved" },
  { title: "Zoikorum", img: "/regulated-industries/tablet-ai-evaluation.webp", lines: ["Regulated and professional-services", "candidate. No licensed service or legal", "representation implied."], tag: "Build · hidden until approved" },
  { title: "CoreX", img: "/regulated-industries/tablet-ai-agent-permissions.webp", lines: ["Shared control, evidence and", "transaction infrastructure, when", "customer-facing."], tag: "Build · public only if approved" },
  { title: "Zoiko AI", img: "/regulated-industries/tablet-ai-evidence-audit.webp", lines: ["Governed agentic intelligence", "architecture. Approved AI governance", "and regulated-use patterns only."] },
  {
    title: "Live enterprise platforms",
    img: "/regulated-industries/tablet-ai-high-impact.webp",
    lines: ["ZoikoNex, Time, HR, Payroll, Billing,", "Local, Sema and others as workflow", "evidence within approved scope."],
    small: ["A live product doesn’t imply certification or", "jurisdictional suitability."],
  },
];

export default function TabletPlatforms() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85.44px] pt-[60.44px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.5px]">
        <h2 className="font-sora text-[25.6px] font-bold leading-[29.44px] text-[#0a1416]">
          Platform and technology evidence
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <TabletLines
            lines={[
              "Candidate platforms appear only when public destination, scope, maturity and claims are",
              "approved. Missing operator, maturity, regulated status or evidence means the card isn’t",
              "shown.",
            ]}
          />
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pb-[9.51px] pt-[7.5px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 640px) 335px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-4">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="mt-[5.9px] font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  <TabletLines lines={c.lines} />
                </p>
                {c.tag && (
                  <span className="mt-[11px] self-start rounded-full border border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                    {c.tag}
                  </span>
                )}
                {c.small && (
                  <small className="block pt-1 font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                    <TabletLines lines={c.small} />
                  </small>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-4 pb-3 pt-[11.045px]">
          <p className="font-inter text-[14.7px] font-normal leading-[23.55px] text-[#4d6468]">
            <b className="font-bold">Evidence-card contract.</b>{" "}
            <TabletLines
              lines={[
                "Canonical name, approved descriptor, maturity, legal or commercial",
                "operator, market or jurisdiction where material, regulated or certification status, evidence",
                "link, limitations and CTA.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
