import Image from "next/image";
import DesktopLines from "./DesktopLines";

type Layer = {
  tag: string;
  title: string[];
  text: string[];
  question: string[];
  img: string;
  pTop: string;
  smallTop: string;
};

const layers: Layer[] = [
  {
    tag: "L1",
    title: ["Sector, entity and activity"],
    text: [
      "The actual economic sector,",
      "legal or commercial operator and",
      "regulated activity at approved",
      "scope.",
    ],
    question: ["Who or what is in scope?"],
    img: "desktop-evidence-result.webp",
    pTop: "top-[227.47px]",
    smallTop: "top-[335.75px]",
  },
  {
    tag: "L2",
    title: ["Jurisdiction and source"],
    text: [
      "Authoritative law, regulation,",
      "policy, standard, contract or",
      "internal source where supported.",
    ],
    question: ["What requirement is authoritative?"],
    img: "desktop-evidence-regulatory-wording.webp",
    pTop: "top-[227.82px]",
    smallTop: "top-[311.44px]",
  },
  {
    tag: "L3",
    title: ["Obligation / requirement"],
    text: [
      "Structured requirement or",
      "responsibility at approved",
      "product and legal scope.",
    ],
    question: ["What must be done or demonstrated?"],
    img: "desktop-evidence-visuals.webp",
    pTop: "top-[227.82px]",
    smallTop: "top-[311.44px]",
  },
  {
    tag: "L4",
    title: ["Control / workflow"],
    text: [
      "Technical, procedural or",
      "operational control with an",
      "owner and system or process.",
    ],
    question: ["How is the requirement", "operationalized?"],
    img: "desktop-architecture-l4-dashboard.webp",
    pTop: "top-[227.82px]",
    smallTop: "top-[311.44px]",
  },
  {
    tag: "L5",
    title: ["Identity, approval,", "exception"],
    text: [
      "Who may act, review, approve or",
      "override, plus exception and",
      "remediation state.",
    ],
    question: ["Who owns the decision?"],
    img: "desktop-evidence-customer-identity.webp",
    pTop: "top-[247.13px]",
    smallTop: "top-[330.75px]",
  },
  {
    tag: "L6",
    title: ["Evidence / assurance"],
    text: [
      "Evidence object, source,",
      "freshness, scope, reviewer and",
      "any claim or certification",
      "relationship.",
    ],
    question: ["What proves the control operates?"],
    img: "desktop-evidence-regulated-context.webp",
    pTop: "top-[227.47px]",
    smallTop: "top-[335.75px]",
  },
  {
    tag: "L7",
    title: ["Monitoring, change, audit"],
    text: [
      "Changes, expiry, incidents,",
      "control failures, audit history and",
      "re-review.",
    ],
    question: ["Can it stay current and reviewable?"],
    img: "desktop-evidence-problem.webp",
    pTop: "top-[227.82px]",
    smallTop: "top-[311.44px]",
  },
];

export default function DesktopArchitecture() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[20.1px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          <DesktopLines
            lines={["Obligation, control and evidence", "architecture"]}
          />
        </h2>
        <p className="whitespace-nowrap pb-[0.59px] font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          Seven layers from who is in scope to whether the control stays current and reviewable.
        </p>
        <ul className="grid h-[777.4px] w-full grid-cols-4 grid-rows-[378.75px_378.75px] gap-[18px] pt-[1.9px]">
          {layers.map((l) => (
            <li
              key={l.tag}
              className="relative h-[378.75px] overflow-hidden rounded-[14px] border border-solid border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[140px]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                }}
              >
                <Image
                  src={`/regulated-industries/${l.img}`}
                  alt=""
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <span className="absolute left-[20px] top-[166px] flex items-start whitespace-nowrap rounded-[99px] border border-solid border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                {l.tag}
              </span>
              <h3 className="absolute left-[20px] right-[20px] top-[202.47px] font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                <DesktopLines lines={l.title} />
              </h3>
              <p
                className={`absolute left-[20px] right-[20px] ${l.pTop} font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]`}
              >
                <DesktopLines lines={l.text} />
              </p>
              <p
                className={`absolute left-[20px] right-[20px] ${l.smallTop} font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]`}
              >
                <DesktopLines lines={l.question} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
