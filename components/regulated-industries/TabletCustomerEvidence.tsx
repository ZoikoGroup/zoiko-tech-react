import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  { title: "Customer identity", img: "/regulated-industries/tablet-evidence-customer-identity.webp", lines: ["Only with explicit legal and customer", "approval."] },
  { title: "Regulated context", img: "/regulated-industries/tablet-ai-inventory.webp", lines: ["Approved sector, jurisdiction and", "workflow scope only. No confidential or", "supervisory detail."] },
  { title: "Problem", img: "/regulated-industries/tablet-ai-authority-mode.webp", lines: ["A concrete operational problem without", "privileged or regulated confidential data."] },
  { title: "Deployment", img: "/regulated-industries/tablet-ai-human-oversight.webp", lines: ["Actual approved technology, operator,", "environment and integration scope."] },
  { title: "Result", img: "/regulated-industries/tablet-ai-evaluation.webp", lines: ["Only measured, Evidence-Registry-", "backed outcomes."] },
  { title: "Regulatory wording", img: "/regulated-industries/tablet-ai-agent-permissions.webp", lines: ["Legal and compliance review required.", "No implied certification or authorization", "beyond evidence."] },
  { title: "Visuals", img: "/regulated-industries/tablet-ai-evidence-audit.webp", lines: ["Approved real interface, architecture or", "imagery, or clearly marked specimen."] },
];

export default function TabletCustomerEvidence() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.43px] pt-[60.44px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(21px,3.33vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Customer evidence contract
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          What any customer story must meet before it’s published.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pb-[20px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white pb-[20px] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)" }}
              >
                <Image src={c.img} alt="" fill sizes="(min-width: 640px) 480px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-[6px] px-[20px] pt-[10px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{c.title}</h3>
                <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  <TabletLines lines={c.lines} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
