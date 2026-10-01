import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards: {
  title: string;
  text: string[];
  img: string;
  pt: string;
  pb: string;
  gap: string;
}[] = [
  {
    title: "Person identity",
    text: [
      "Authentication or verification",
      "only at product-supported",
      "scope. No inferred assurance",
      "level or certification.",
    ],
    img: "desktop-evidence-deployment.webp",
    pt: "pt-[10.3px]",
    pb: "pb-[19.99px]",
    gap: "gap-[5.7px]",
  },
  {
    title: "Workforce / regulated role",
    text: [
      "Role, organization, environment",
      "and function as approved.",
      "Professional or licensed status",
      "only if authoritative.",
    ],
    img: "desktop-evidence-result.webp",
    pt: "pt-[10.3px]",
    pb: "pb-[19.99px]",
    gap: "gap-[5.7px]",
  },
  {
    title: "External / vendor identity",
    text: ["Explicit organization, contract", "and scope boundary."],
    img: "desktop-evidence-regulatory-wording.webp",
    pt: "pt-[10.1px]",
    pb: "pb-[68.61px]",
    gap: "gap-[5.9px]",
  },
  {
    title: "Delegated authority",
    text: [
      "Representative, approver, agent",
      "or service-provider authority,",
      "explicit and revocable where",
      "supported.",
    ],
    img: "desktop-evidence-visuals.webp",
    pt: "pt-[10.3px]",
    pb: "pb-[19.99px]",
    gap: "gap-[5.7px]",
  },
  {
    title: "System / service identity",
    text: ["Machine identity and", "authorization where supported."],
    img: "desktop-architecture-l4-dashboard.webp",
    pt: "pt-[10.1px]",
    pb: "pb-[44.31px]",
    gap: "gap-[5.9px]",
  },
  {
    title: "Audit",
    text: [
      "Material access, delegation and",
      "approval events where the",
      "product supports them.",
    ],
    img: "desktop-evidence-customer-identity.webp",
    pt: "pt-[10px]",
    pb: "pb-[20px]",
    gap: "gap-[6px]",
  },
];

export default function DesktopIdentity() {
  return (
    <section className="w-full bg-white px-[130px] py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[19.9px]">
        <h2 className="whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Identity and delegated authority
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <DesktopLines
            lines={[
              "Regulated actions need clear authority. Identity is described only at the scope products",
              "support.",
            ]}
          />
        </p>
        <ul className="flex h-[352px] w-full items-center gap-[45px] overflow-y-clip overflow-x-auto rounded-[20px] border-x-2 border-solid border-[#247780] pt-[2.09px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex w-[281.5px] shrink-0 flex-col items-center overflow-hidden rounded-[14px] border border-solid border-[#d5e3e5] bg-white px-[20px] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)] ${c.pb} ${c.gap}`}
            >
              <div
                className="relative h-[140px] w-[279.5px] shrink-0"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                }}
              >
                <Image
                  src={`/regulated-industries/${c.img}`}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <h3
                className={`w-full ${c.pt} font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]`}
              >
                {c.title}
              </h3>
              <p className="w-full font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                <DesktopLines lines={c.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
