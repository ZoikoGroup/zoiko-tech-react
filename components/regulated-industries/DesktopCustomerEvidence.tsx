import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { img: "customer-identity", title: "Customer identity", lines: ["Only with explicit legal and", "customer approval."] },
  { img: "regulated-context", title: "Regulated context", lines: ["Approved sector, jurisdiction and", "workflow scope only. No", "confidential or supervisory", "detail."] },
  { img: "problem", title: "Problem", lines: ["A concrete operational problem", "without privileged or regulated", "confidential data."] },
  { img: "deployment", title: "Deployment", lines: ["Actual approved technology,", "operator, environment and", "integration scope."] },
  { img: "result", title: "Result", lines: ["Only measured, Evidence-", "Registry-backed outcomes."] },
  { img: "regulatory-wording", title: "Regulatory wording", lines: ["Legal and compliance review", "required. No implied certification", "or authorization beyond", "evidence."] },
  { img: "visuals", title: "Visuals", lines: ["Approved real interface,", "architecture or imagery, or", "clearly marked specimen."] },
];

export default function DesktopCustomerEvidence() {
  return (
    <section className="w-full bg-white px-[130px] py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Customer evidence contract
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          What any customer story must meet before it’s published.
        </p>
        <ul className="grid h-[622.46px] grid-cols-4 grid-rows-2 gap-[18px] pt-[1.9px]">
          {cards.map((c) => (
            <li
              key={c.img}
              className="flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white px-[20px] pb-[20px] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative -mx-[20px] h-[140px] shrink-0"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)" }}
              >
                <Image
                  src={`/regulated-industries/desktop-evidence-${c.img}.webp`}
                  alt=""
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <h3 className="mb-[5.9px] pt-[10px] font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                {c.title}
              </h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
