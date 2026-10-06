import Image from "next/image";
import type { ReactNode } from "react";
import DesktopLines from "./DesktopLines";

const cards: { icon: string; title: ReactNode; body: ReactNode }[] = [
  { icon: "desktop-contact-users-icon.svg", title: "People & workforce", body: (<>Identity, organization and<br />assignment at supported scope.</>) },
  { icon: "desktop-icon-lock.svg", title: (<>Representative<br />authority</>), body: "Explicit scope, effective period and revocation where supported." },
  { icon: "desktop-identity-icon-landmark.svg", title: "Vendor boundaries", body: (<>External organization and<br />contract scope remain clear.</>) },
  { icon: "desktop-icon-code.svg", title: "Service identities", body: "Machine-to-machine identity where supported." },
];

export default function DesktopIdentity() {
  return (
    <section id="identity" className="w-full bg-white pb-[94px] pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            Make the right to act explicit.
          </h2>
          <p className="max-w-[760px] pt-[4.295px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "A person, official, representative or integration should carry only the authority supported by the service and",
                "product.",
              ]}
            />
          </p>
        </div>
        <div className="flex items-center justify-center gap-11 pt-[10px]">
          <ul className="grid min-w-0 flex-1 grid-cols-2 gap-5">
            {cards.map((c, i) => (
              <li key={i} className="min-w-0">
                <a
                  href="#"
                  className="flex h-full flex-col items-center rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7 text-center"
                >
                  <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={`/public-sector-government/${c.icon}`} alt="" width={25} height={25} />
                  </span>
                  <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                  <p className="pb-[22px] font-poppins text-[15px] leading-6 text-[#587176]">{c.body}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="relative aspect-square w-[45.8%] max-w-[550px] shrink-0">
            <Image
              src="/public-sector-government/desktop-identity-authority-illustration.webp"
              alt="Isometric illustration of people, organization and service identities connected through a secure access gateway"
              fill
              sizes="550px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
