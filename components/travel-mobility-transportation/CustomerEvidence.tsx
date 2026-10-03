import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { img: "evidence-operator-phone", alt: "Customer service operator on a phone call at her desk", title: "Customer / operator", body: "Explicit legal, customer and partner permission." },
  { img: "evidence-journey-deployment", alt: "Team reviewing a journey map on an interactive table", title: "Journey & deployment", body: "Actual platform, integration and provider scope without confidential detail." },
  { img: "evidence-approved-outcomes", alt: "Professional reviewing results on a laptop dashboard", title: "Approved outcomes", body: "Evidence-backed results with exact safety and regulated wording." },
];

export default function CustomerEvidence() {
  return (
    <section id="customer-evidence" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Specific provider context.", "Permission and traceable results."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            Customer and operator identity, deployment scope and measured outcomes require approval.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-6 rounded-[10px] border border-solid border-[#dae8e8] bg-[#f3f8f8] p-7 lg:h-[520px]"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[10px] lg:h-[260px]">
                <Image
                  src={`/travel-mobility-transportation/${c.img}.webp`}
                  alt={c.alt}
                  fill
                  sizes="(min-width:1024px) 360px, (min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              <p className="pb-[24.5px] font-inter text-[15px] leading-6 text-[#587176]">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
