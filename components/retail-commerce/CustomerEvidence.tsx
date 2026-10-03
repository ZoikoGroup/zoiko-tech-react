import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const TABLET_BR = "hidden md:block lg:hidden";

const CARDS = [
  {
    title: "Customer & operating model",
    photo: "/retail-commerce/desktop-evidence-retail-context.webp",
    icon: "/retail-commerce/tablet-evidence-icon-institution.svg",
    body: (
      <>
        Actual, approved retail context without<br className={TABLET_BR} /> confidential detail.
      </>
    ),
  },
  {
    title: "Deployment & scope",
    photo: "/retail-commerce/desktop-evidence-server-room.webp",
    icon: "/retail-commerce/desktop-locations-icon-network.svg",
    body: (
      <>
        Supported platform, integration and<br className={TABLET_BR} /> operator boundaries.
      </>
    ),
  },
  {
    title: "Measured outcome",
    photo: "/retail-commerce/desktop-evidence-measured-outcome.webp",
    icon: "/retail-commerce/desktop-icon-document-pathway.svg",
    body: (
      <>
        Evidence-register-backed results with<br className={TABLET_BR} /> approved wording.
      </>
    ),
  },
];

export default function CustomerEvidence() {
  return (
    <section
      id="customer-evidence"
      className="w-full bg-white py-14 font-poppins md:pb-[94px] md:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-8 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.2px] lg:gap-[14.8px]">
          <span className="text-xs font-bold uppercase leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            15 / CUSTOMER EVIDENCE
          </span>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[1.15] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Specific context.", "Traceable results. Permission to", "publish."]}
              tablet={["Specific context.", "Traceable results. Permission to publish."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-base leading-[25.6px] text-[#587176]">
            Customer identity, deployment and commercial outcomes require explicit approval.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li key={c.title} className="flex">
              <a
                href="#"
                className="flex w-full flex-col overflow-hidden rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7 lg:min-h-[320px] lg:p-0"
              >
                <span className="relative hidden h-[160px] w-full shrink-0 lg:block">
                  <Image
                    src={c.photo}
                    alt=""
                    fill
                    sizes="(min-width:1280px) 380px, 33vw"
                    className="object-cover"
                  />
                </span>
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef] lg:hidden">
                  <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <span className="flex flex-1 flex-col gap-3 lg:p-7">
                  <h3 className="text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                  <p className="text-[15px] leading-6 text-[#587176]">{c.body}</p>
                  <span className="mt-auto flex min-h-[36px] items-center justify-between pt-[10px] text-[13px] leading-[20.8px] text-[#247780] lg:hidden">
                    <b className="font-bold">Explore pathway</b>
                    <span aria-hidden="true">↗</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
