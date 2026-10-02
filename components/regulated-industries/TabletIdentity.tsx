import Image from "next/image";
import TabletLines from "./TabletLines";

const items = [
  { img: "/regulated-industries/tablet-ai-human-oversight.webp", title: "Person identity", lines: ["Authentication or verification only at", "product-supported scope. No inferred", "assurance level or certification."] },
  { img: "/regulated-industries/tablet-ai-evaluation.webp", title: "Workforce / regulated role", lines: ["Role, organization, environment and", "function as approved. Professional or", "licensed status only if authoritative."] },
  { img: "/regulated-industries/tablet-ai-agent-permissions.webp", title: "External / vendor identity", lines: ["Explicit organization, contract and scope", "boundary."] },
  { img: "/regulated-industries/tablet-ai-evidence-audit.webp", title: "Delegated authority", lines: ["Representative, approver, agent or", "service-provider authority, explicit and", "revocable where supported."] },
  { img: "/regulated-industries/tablet-ai-high-impact.webp", title: "System / service identity", lines: ["Machine identity and authorization", "where supported."] },
  { img: "/regulated-industries/tablet-evidence-customer-identity.webp", title: "Audit", lines: ["Material access, delegation and approval", "events where the product supports", "them."] },
];

export default function TabletIdentity() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61px] pt-[60px]">
      <div className="mx-auto w-full max-w-[960px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[1.15] text-[#0a1416]">
          Identity and delegated authority
        </h2>
        <p className="mt-[14.2px] max-w-[706.56px] font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <TabletLines
            lines={[
              "Regulated actions need clear authority. Identity is described only at the scope products",
              "support.",
            ]}
          />
        </p>

        <ul className="mt-[14.2px] grid grid-cols-1 gap-[18px] pt-[7.8px] sm:grid-cols-2">
          {items.map((it) => (
            <li
              key={it.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] shrink-0 overflow-hidden"
                style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #247780 100%)" }}
              >
                <Image src={it.img} alt="" fill sizes="(min-width: 640px) 340px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-[6px] px-[20px] pb-[20px] pt-[16px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">{it.title}</h3>
                <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  <TabletLines lines={it.lines} />
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-[14.2px] w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-[16px] pb-[12px] pt-[20.6px] font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
          <b className="font-bold">Identity readiness boundary.</b>{" "}
          <TabletLines
            lines={[
              "Zoiko iD and Zoiko Access are in Build and are mentioned only",
              "when ready. No MFA, SSO, SCIM, passwordless, identity proofing, entitlement, regulated",
              "assurance level or government or industry identity compliance is claimed without dedicated",
              "product evidence.",
            ]}
          />
        </div>

        <div className="mt-[14.2px] flex flex-wrap items-start pb-[12px] pt-[9.8px]">
          <a
            href="/solution-zoiko-identity-access"
            className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#247780] bg-[#247780] px-[24px] text-center font-inter text-[16px] font-semibold text-white sm:w-auto"
          >
            Explore Identity &amp; Access
          </a>
        </div>
      </div>
    </section>
  );
}
