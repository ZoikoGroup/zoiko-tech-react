import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Customer & institution", img: "/financial-services/desktop-evidence-customer-institution.webp", body: ["Approved identity or an approved, non-", "misleading anonymized description."] },
  { title: "Deployment & scope", img: "/financial-services/desktop-evidence-deployment-scope.webp", body: ["Actual platform, integration, market and", "operator", "context."] },
  { title: "Result & supporting evidence", img: "/financial-services/desktop-evidence-result-evidence.webp", body: ["Measured and approved outcomes with", "limitations made clear."] },
];

export default function DesktopCustomerEvidence() {
  return (
    <section id="customer-evidence" className="w-full bg-white px-10 pb-[94px] pt-[93px] xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[35.99px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">15 / CUSTOMER EVIDENCE</p>
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Every published result", "needs a traceable foundation."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Customer identity, deployment scope, legal wording and measured results require explicit approval.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {cards.map((c) => (
            <li key={c.title} className="flex h-[400px] min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8]">
              <div className="relative h-[200px] w-full shrink-0">
                <Image src={c.img} alt="" fill sizes="400px" className="object-cover" />
              </div>
              <div className="p-[28px]">
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-poppins text-[15px] leading-[24px] text-[#587176]">
                  <DesktopLines lines={c.body} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
